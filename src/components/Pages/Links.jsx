import styled from "styled-components/macro";
import { TiHeartOutline } from "react-icons/ti";

const Links = () => {
  return (
    <LinksContainer>
      {/* <a className="start" href="/">
        Start reading now!
      </a> */}
      <a href="/">
        Add to fav
        <TiHeartOutline />
      </a>
      {/* <a href="/" className="zip">
        Download zip
      </a> */}
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 560px) {
    flex-direction: row;
  }
  a {
    padding: 0.6rem;

    background-color: var(--purple);
    color: var(--white);
    border-color: var(--purple);
    border-radius: 50px;
    margin: 0.5rem;
    font-size: 1rem;
    font-family: "Pacifico", cursive;
    box-shadow: var(--shadow);
    width: 180px;
    text-align: center;

    cursor: pointer;

    @media screen and (min-width: 992px) {
      margin: 0.5rem 0.5rem 1.5rem 0.5rem;
    }
    /* 
    &.start {
      background-color: var(--main-color);
      color: var(--brown);
      border-color: var(--main-color);
    }

    &.zip {
      background-color: var(--brown);
      color: var(--white);
      border-color: var(--brown);
    } */
  }
`;

export default Links;
