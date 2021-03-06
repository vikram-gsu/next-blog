import styled from "styled-components";
import Image from "next/image";
import Nav from "../components/Nav";
import Logo from '../components/SplashLogo';

const BackgroundStyles = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const HomeStyles = styled.div`
    position: relative;
    height: 100vh;
  width: 100vw;
`;
function Home() {
  return (
    <HomeStyles>
      <BackgroundStyles>
      
        <Image
          alt="Splash page"
          src="/images/skater.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        
      </BackgroundStyles>
      <Logo />
      <Nav />
    </HomeStyles>
  );
}

export default Home;
