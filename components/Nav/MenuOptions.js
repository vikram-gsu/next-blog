import styled from "styled-components";

const MenuOptionsStyles = styled.div`
  
  margin: 1em 0 1em 4em;
  position: fixed;
  bottom: 0;
  left: 0;
  svg {
      fill: ${(props) => props.theme.colors.accent};
  }

`;
function MenuOptions() {
  return (
    <MenuOptionsStyles>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 512 640"
        width="100px"
        height="100px"
      >
        <path d="M349 241h-78v-78a15 15 0 00-30 0v78h-78a15 15 0 000 30h78v78a15 15 0 0030 0v-78h78a15 15 0 000-30z" />
        <path d="M256 66.79C151.67 66.79 66.79 151.67 66.79 256S151.67 445.21 256 445.21 445.21 360.33 445.21 256 360.33 66.79 256 66.79zm0 348.42c-87.79 0-159.21-71.42-159.21-159.21S168.2 96.79 256 96.79 415.21 168.2 415.21 256 343.8 415.21 256 415.21z" />
        <text
          y="527"
          fontSize="1"
          fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
          Created by Astonish
        </text>
        <text
          y="532"
          font-size="1"
          font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
          from the Noun Project
        </text>
      </svg>
    </MenuOptionsStyles>
  );
}

export default MenuOptions;
