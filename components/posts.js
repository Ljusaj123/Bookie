import Link from "next/link";
import Image from "next/image";

const posts = ({ post }) => {
  return (
    <div className="post-container">
      {/* eslint-disable-next-line */}
      <img src={post.frontmatter.cover_image} alt="" />
      <div className="text-container">
        <h2>{post.frontmatter.date}</h2>
        <h1>{post.frontmatter.title}</h1>
        <div className="text-container__contents">
          <p>{post.frontmatter.excerpt}</p>
          <a
            href={post.frontmatter.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            See original
          </a>
          <p className="hashtag">#{post.frontmatter.category}</p>
        </div>
        {/* eslint-disable-next-line */}
        <Link href={`/blog/${post.slug}`}>
          <button className="read-more-btn">read more</button>
        </Link>
      </div>
    </div>
  );
};

export default posts;
