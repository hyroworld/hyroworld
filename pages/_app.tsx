import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { Container, Header, Footer, Main, ALink, Small } from "../styles/html";

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
        <Tag>HYESECH</Tag>
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer>
        <Small>LINK</Small>
        <ALink href="https://github.com/hyesech">github</ALink>
        <ALink href="https://hyesech.postype.com">postype</ALink>
        <ALink href="https:/>/twitter.com/hyesech">twitter</ALink>
      </Footer>
    </Container>
  );
}

export default MyApp;
