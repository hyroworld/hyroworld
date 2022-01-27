import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { Container, Header, Footer, Main, Code } from "../styles/tags";

const Tag = styled.span`
  font-size: 2rem;
  font-weight: 800;
  background-color: #000000;
  color: #ffffff;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Tag>klldcll</Tag>
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer>
        <Code>footer</Code>
      </Footer>
    </Container>
  );
}

export default MyApp;
