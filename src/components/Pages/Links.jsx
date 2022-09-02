import styled from "styled-components/macro";
import { TiHeartOutline } from "react-icons/ti";

const Links = () => {
  return (
    <LinksContainer>
      {/* <a className="start" href="/">
        Start reading now!
      </a> */}
      <button>
        Add to Fav
        <TiHeartOutline />
      </button>
      {/* <a href="/" className="zip">
        Download zip
      </a> */}
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 2rem;
  /* 
  @media screen and (min-width: 560px) {
    flex-direction: row;
  } */
  button {
    padding: 0.2rem 2rem;
    background-color: #9840e3;
    color: var(--white);
    border: 1px solid #9840e3;
    border-radius: 50px;
    font-size: 1.2rem;
    font-family: "Pacifico", cursive;
    box-shadow: var(--shadow);
    min-width: 120px;
    text-align: center;
    text-decoration: none;
    transition: all 0.5s ease;
    cursor: pointer;

    @media screen and (min-width: 992px) {
      margin: 0.5rem 0.5rem 1.5rem 0.5rem;
    }

    &:hover {
      background-color: var(--purple);
      color: var(--white);
      border: 1px solid var(--purple);
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
