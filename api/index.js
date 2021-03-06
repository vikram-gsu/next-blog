import matter from 'gray-matter';
import marked from 'marked';
import yaml from 'js-yaml';

export async function getAllPosts(){
    const context = require.context('../_posts', false, /\.md$/);
    const posts = []
    for(const key of context.keys()) {
        let post = key.slice(2);
        let content = await import(`../_posts/${post}`);
        let meta = matter(content.default);
        posts.push({
            slug: post.replace('.md', ''),
            title: meta.data.title,
            tldr: meta.data.tldr || '',
            tag: meta.data.tag,
            date: meta.data.date,
        })
    }
    return posts;
}

export async function getPostBySlug(slug){
    const content = await import(`../_posts/${slug}.md`);
    const meta = matter(content.default);
    const blogContent = marked(meta.content);
    return {
        title: meta.data.title,
        date: meta.data.date,
        content: blogContent
    }
}

export async function getConfig(){
    const config = await import('../config.yml');
    return yaml.load(config.default);
}