import styled from "styled-components";
import Link from "next/link";

const HeaderStyles = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  

  h1:hover,h3:hover {
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
  }
  h1 {
      padding-left: 1em;
      flex: 2;
  }
  
`;
const MenuItems = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`;
export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/"><h1>Vikram Pareddy</h1></Link>
      <MenuItems>

        <div>projects</div>
        <div>blog</div>
        <div>about</div>
        <div>contact</div>
      </MenuItems>
    </HeaderStyles>
  );
}
