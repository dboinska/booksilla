import styled from "styled-components/macro";
import { TiHeartOutline } from "react-icons/ti";

import { MEDIUM_UP } from "../../constants";

const Links = () => {
  return (
    <LinksContainer>
      <button>
        Add to Fav
        <TiHeartOutline />
      </button>
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

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

    ${MEDIUM_UP} {
      margin: 0.5rem 0.5rem 1.5rem 0.5rem;
    }

    &:hover {
      background-color: var(--purple);
      color: var(--white);
      border: 1px solid var(--purple);
    }
  }
`;

export default Links;
