import styled from "styled-components/macro";

const MEDIUM_UP = " @media screen and (min-width: 992px)";
const SMALL_UP = " @media screen and (min-width: 768px)";

const StartPage = ({ paragraph, action, form }) => {
  return (
    <>
      <LoginContainer>
        <SpanLogo>-booksilla-</SpanLogo>
        <Container>
          <Paragraph>{paragraph}</Paragraph>
          <h1>
            Let's <SpanStyledLight>{action}</SpanStyledLight>
          </h1>
          {form}
        </Container>
      </LoginContainer>
    </>
  );
};

const SpanLogo = styled.div`
  font-size: 1.2rem;
  padding-top: 1.6rem;
  margin: 0 auto;
  width: 100%;
  display: inline-block;
  text-align: center;
  font-family: "Pacifico", cursive;
`;

const LoginContainer = styled.div`
  background-color: var(--white-gray);
  border-radius: 50px 50px 0 0;
  color: var(--brown);

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SpanStyledLight = styled.span`
  font-size: 2.2rem;
  color: var(--main-color);
  ${SMALL_UP} {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;

  .pages {
    position: absolute;
    bottom: 22px;
    right: 21px;

    ${MEDIUM_UP} {
      bottom: 18px;
    }
  }

  h1 {
    color: var(--main-light);
    margin: 0.2rem;
    font-family: "Noto Sans", sans-serif;
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.8rem;
    color: var(--brown);
  }

  ${SMALL_UP} {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  width: 80%;
  text-align: left;
  margin: 0 auto;

  ${MEDIUM_UP} {
    margin: 0;
    width: 100%;
    font-size: 1.4rem;
  }
`;

export default StartPage;
