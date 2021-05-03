import styled from "styled-components";
const HeaderStyles = styled.header`
  grid-area: header;
`;
export default function Header() {
  return (
    <HeaderStyles>
      <p>Blog | Powered by Next JS</p>
    </HeaderStyles>
  );
}
