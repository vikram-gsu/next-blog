import Head from "next/head";
import Link from "next/link";
import styled from 'styled-components';
import DefaultLayout from "@layouts/default";

const PostLayoutStyles = styled.article`
  p:nth-of-type(1) {
    &::first-letter {
      font-size:3em;
      font-family: var(--display-font);
    }
    padding-top: 1em;
    text-indent: 2em;
  }

  img {
    width: 100%;
    padding: 2em 0 1em 0;
  }
  p {
    text-align: left;
    line-height: 1.5em;
    
  }
`;
export default function PostLayout({title, date, content}) {
  return (
    <DefaultLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <PostLayoutStyles>
        <h1>{title}</h1>
        <span>{date}</span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </PostLayoutStyles>
    </DefaultLayout>
  );
}
