import styled from "styled-components";
const HeaderStyles = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f67;
  color: white;
  h1:hover,h3:hover {
      color: black;
      cursor: pointer;
  }
  h1 {
      padding-left: 1em;
  }
  
`;
const MenuItems = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2em;
    h3 {
        padding:0 .2em;
    }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <h1>Vikram Pareddy</h1>
      <MenuItems>
        <h3> {"<<"} Back to Portfolio</h3>
        <h3>Sports</h3>
        <h3>Programming</h3>
        <h3>Art</h3>
      </MenuItems>
    </HeaderStyles>
  );
}
