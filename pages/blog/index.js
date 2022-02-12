import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Posts from "../../components/posts";
import Footer from "../../modules/footer/Footer";

const Blog = ({ posts }) => {
  const [searchString, setSearchString] = useState("");
  const [blogsToRender, setBlogsToRender] = useState([]);
  const [catString, setCatString] = useState("");

  const postToFind = (howSearch) => {
    switch (howSearch) {
      case "searchbar":
        const postsToRenderTwo = posts.filter((title) => {
          return (
            title.frontmatter.title
              .toLowerCase()
              .includes(searchString.toLowerCase()) === true
          );
        });

        if (postsToRenderTwo === undefined || postsToRenderTwo.length === 0) {
          setBlogsToRender(posts);
          // console.log("ubit cu se");
        } else {
          setBlogsToRender(postsToRenderTwo);
        }
        break;
      case "tag-btn":
        const postToRenderCat = posts.filter((item) => {
          return item.frontmatter.category === catString;
        });
        setBlogsToRender(postToRenderCat);
        break;
    }
  };

  useEffect(() => {
    if (catString !== "") {
      postToFind("tag-btn");
    } else {
      setBlogsToRender(posts);
    }

    //eslint-disable-next-line
  }, [catString]);

  useEffect(() => {
    postToFind("searchbar");
    //eslint-disable-next-line
  }, [searchString]);

  const Buttons = () => {
    const cats = posts.map((cat) => cat.frontmatter.category);
    const uniq = Array.from(new Set([...cats]));

    return (
      <div className="btn-container">
        {uniq.map((cat) => {
          return (
            <button
              onClick={() => {
                setCatString(cat);
              }}
              key={cat}
            >
              {cat}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <section className="blog">
      <Navbar />

      <div className="blog-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchString(e.target.value);
              // postToFind("searchbar");
              if (e.target.value === "") {
                setBlogsToRender(posts);
              }
            }}
            value={searchString}
          />
          <button className="search-icon"></button>
        </div>
        <div className="filter-container">
          <h2>Filter by tag</h2>
          <Buttons />
        </div>
        <div className="posts-container">
          {/* {posts.map((post, index) => (
            <Posts key={index} post={post} />
          ))} */}

          {blogsToRender !== undefined && blogsToRender.length > 0 ? (
            blogsToRender.map((blog, index) => {
              return <Posts post={blog} key={index} />;
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blog;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
