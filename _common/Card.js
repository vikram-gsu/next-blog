import Link from 'next/link';
import styled from 'styled-components';

const CardStyles = styled.div`
    width: 80%;
    height: 10em;

`;
export default function Card({title, tldr, slug}){
    return (
        <CardStyles>
            <Link href={`/posts/${slug}`}><h2>{title}</h2></Link>
            <p>{tldr}</p>
        </CardStyles>
    )
}