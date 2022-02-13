import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image, category },
  slug,
  content,
}) {
  return (
    <div className="posters">
      <div className="card">
        <div className="card__items">
          {/* eslint-disable-next-line */}
          <img src={cover_image} alt="" />
          <div className="card__info">
            <p className="post-date">Posted on {date}</p>
            <h1 className="post-title">{title}</h1>
          </div>
        </div>

        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        {/* eslint-disable-next-line */}
        <Link href="/blog">
          <button className="btn btn2">Go back</button>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
