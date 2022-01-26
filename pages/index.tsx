import styled from "@emotion/styled";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 0.4rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

function IndexPage() {
  return (
    <Article>
      <Code>index</Code>
    </Article>
  );
}
export default IndexPage;
