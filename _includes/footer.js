import styled from 'styled-components';
const FooterStyles = styled.footer`
    grid-area: footer;
`;
export default function Footer(){
    return <FooterStyles>
        <p>
            ©2021 | Footer
        </p>
    </FooterStyles>;
}