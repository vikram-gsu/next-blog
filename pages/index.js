import styled from 'styled-components';
import Image from 'next/image';

const BackgroundStyles = styled.div`

`;
function Home(){
    return <div>
        <Image
        alt="Splash page"
        src="/splash.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      Home
      </div>
}

export default Home;