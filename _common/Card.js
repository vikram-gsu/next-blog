import Link from "next/link";
import styled from "styled-components";

const CardStyles = styled.div`
  max-height: 10em;
  padding: 1em;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 10px gray;
    color: ${props => props.theme.colors.primary};
  }
  transition: 0.1s ease-in;
`;

export default function Card({ title, tldr, slug, date }) {
  return (
    <CardStyles>
      <Link href={`/posts/${slug}`}>
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{tldr}</p>
        </div>
      </Link>
    </CardStyles>
  );
}
