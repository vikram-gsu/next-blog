import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import styled from "styled-components";

const MainStyles = styled.main`
  display: grid;
  grid: [row1-start] "header header  header" 5em [row1-end]
        [row1-start] "title  ......  ......" 5em [row1-end]
        [row2-start] "...... content ....."  100vh [row2-end]
        [row3-start] "footer footer  footer" 10em [row3-end]/
        50% 30% 20%;
`;

const ContentStyles = styled.div`
  grid-area: content;
`;

export default function DefaultLayout({title, description, children}) {
  return (
    <MainStyles>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <ContentStyles>
        {children}
      </ContentStyles>
      <Footer />
    </MainStyles>
  );
}
