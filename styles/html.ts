import styled from "@emotion/styled";
import { BLACK, WHITE } from "./colors";

//  Layout
export const PADDING = {
  SM: "0.8rem",
  MD: "1.2rem",
  LG: "2rem",
};

// Typo
export const FONT_SIZE = {
  H1: "2rem",
  H2: "1.5rem",
  H3: "1.2rem",
  H4: "1rem",
  H5: "0.875rem",
  H6: "0.625rem",
  P: "0.875rem",
};

export const FONT_WEIGHT = {
  LIGHT: 200,
  MEDIUM: 400,
  BOLD: 600,
  EXTRA_BOLD: 800,
};

// Tag
export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  max-height: 60px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${PADDING.SM} ${PADDING.SM};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${PADDING.MD};
  border-top: 1px solid ${WHITE};
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${WHITE};
`;

export const ALink = styled.a`
  font-size: ${FONT_SIZE.H5};
  font-weight: ${FONT_WEIGHT.BOLD};
  padding: 0.5rem 0.8rem;
  color: ${BLACK};
  background-color: ${WHITE};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${BLACK};
    color: ${WHITE};
  }
`;

// Typo
export const Code = styled.code`
  background: ${WHITE};
  border-radius: 5px;
  padding: 0.2rem;
  font-size: 0.5rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const P = styled.p`
  font-size: ${FONT_SIZE.H5};
`;

export const Small = styled.small`
  font-size: ${FONT_SIZE.H6};
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
