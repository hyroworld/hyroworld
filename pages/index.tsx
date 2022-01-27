import { Article, DD, DL, DT, P } from "../styles/html";

function IndexPage() {
  return (
    <Article>
      <P>Cryptids of Cornwall:</P>
      <DL>
        <DT>Beast of Bodmin</DT>
        <DD>A large feline inhabiting Bodmin Moor.</DD>

        <DT>Morgawr</DT>
        <DD>A sea serpent.</DD>

        <DT>Owlman</DT>
        <DD>A giant owl-like creature.</DD>
      </DL>
    </Article>
  );
}
export default IndexPage;
