import matter from 'gray-matter';
import marked from 'marked';

export async function getAllPosts(){
    const context = require.context('../_posts', false, /\.md$/);
    const posts = []
    for(const key of context.keys()) {
        let post = key.slice(2);
        console.log(key, post)
        let content = await import(`../_posts/${post}`);
        let meta = matter(content.default);
        posts.push({
            slug: post.replace('.md', ''),
            title: meta.data.title
        })
    }
    return posts;
}

export async function getPostBySlug(slug){
    const content = await import(`../_posts/${slug}`);
    const meta = matter(content.default);
    const blogContent = marked(meta.content);
    return {
        title: meta.data.title,
        content: blogContent
    }
}