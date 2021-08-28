import styled from 'styled-components';
import MenuOptions from "./MenuOptions";


const NavStyles = styled.div`
    color: ${props => props.theme.colors.accent};
    
`;

const LogoStyles = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 1em 1em 1em 3em;
    font-size: 2em;
    font-family: ${props => props.theme.fonts.headings};
    color: ${props => props.theme.colors.accent};
    /* background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 100%); */
    writing-mode: vertical-rl;
`;
function Nav(){
    return <NavStyles>
        <MenuOptions></MenuOptions>
        {/* <LogoStyles>Vikram Pareddy</LogoStyles> */}
    </NavStyles>
}

export default Nav;