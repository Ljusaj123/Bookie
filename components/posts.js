import Link from "next/link";
const posts = ({ post }) => {
    return (
        <div className="post-container">
            <img src={post.frontmatter.cover_image} alt="" />
            <div className="text-container">
                <h2>{post.frontmatter.date}</h2>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                    <button className="btn">Read More</button>
                </Link>
            </div>
        </div>
    )

}

export default posts;