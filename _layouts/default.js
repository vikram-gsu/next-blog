import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import styled from "styled-components";

const MainStyles = styled.main`
  display: grid;
  background-color: #FEFBF7;
  grid: [row1-start] "header header header" 5em [row1-end]
        [row2-start] ". content ."  100vh [row2-end]
        [row3-start] "footer footer footer" 10em [row3-end]/
        10% 80% 10%;
`;

const ContentStyles = styled.div`
  grid-area: content;
  background-color: #FDF9F4;
`;

export default function DefaultLayout(props) {
  return (
    <MainStyles>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      <ContentStyles>
        {props.children}
      </ContentStyles>
      <Footer />
    </MainStyles>
  );
}
