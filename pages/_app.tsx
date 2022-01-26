import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { Code } from ".";

const Container = styled.div`
  width: 100%;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  max-height: 60px;
`;
const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.footer`
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

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
