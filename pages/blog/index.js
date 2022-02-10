import Navbar from '../../components/Navbar'

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'
import Posts from '../../components/posts'


const Blog = ({ posts }) => {
    return (
        <section className="blog">
            <Navbar />

            <div className="blog-container">
                <h1>Blog</h1>
                <div className="search-container">
                    <input type="search" placeholder="search here..." />
                </div>

                <div className="filter-container">

                    <h2>Filter by tag</h2>
                    <div className="btn-container">
                        <button>Fantasy</button>
                        <button>Fantasy</button>
                        <button>Fantasy</button>
                        <button>Fantasy</button>
                    </div>

                </div>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <Posts key={index} post={post} />

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog;



export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts
        },
    }
}