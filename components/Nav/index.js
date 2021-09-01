import styled from "styled-components";
import Link from 'next/link';

const NavStyles = styled.div`
  color: #fff;
  width: 100%;
  background: #000;
  opacity: 0.5;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: 85vh;
  left: 0;
  font-family: var(--text-font);
  font-weight: 300;
  
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 0 1em;
    a {
        text-decoration: none;
        color: #fff;
        transition: border 0.5s, padding 0.5s;
        :hover {
            color: ${props => props.theme.colors.accent};
            font-style: normal;
            border-bottom: 4px solid ${props => props.theme.colors.accent};
            padding-bottom: 5px;
        }
    }
  }
`;

function Nav() {
  return (
    <NavStyles>
      <ul>
        <li><Link href="/projects">projects</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
    </NavStyles>
  );
}

export default Nav;
