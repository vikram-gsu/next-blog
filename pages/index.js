import styled from "styled-components";
import { getConfig, getAllPosts } from "@api";
import DefaultLayout from "@layouts/default";
import Card from "@common/Card";

const Li = styled.li`
  list-style: none;
  cursor: pointer;
`;
export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <ul>
        {props.posts.map((post) => (
          <Li key={post.title}>
            <Card {...post} />
          </Li>
        ))}
      </ul>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
