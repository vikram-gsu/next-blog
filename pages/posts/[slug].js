import { getPostBySlug, getAllPosts } from "@api";
import PostLayout from "@layouts/post";

export default function Post(props) {
  return (
    <PostLayout title={props.title} date={props.date} content={props.content} />
  );
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((path) => ({
    params: { slug: path.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
