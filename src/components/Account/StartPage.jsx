import styled, { css } from "styled-components/macro";
import { ThemeProvider } from "styled-components";

const StartPage = ({
  spanStyled,
  paragraph,
  action,
  form,
  formGoogle,
  option,
  theme,
  img,
}) => {
  return (
    <>
      <MainStyled>
        <ThemeProvider theme={theme}>
          <LoginContainer>
            <BookmarkWrap>
              <Bookmark>
                <SpanLogo>booksilla</SpanLogo>
              </Bookmark>
            </BookmarkWrap>
            <SpanStyledWrap>
              <SpanStyled>{spanStyled}</SpanStyled>
            </SpanStyledWrap>
            <Container>
              <Paragraph>{paragraph}</Paragraph>
              <h1>
                Let's <SpanStyledLight>{action}</SpanStyledLight>
              </h1>
              {form}
              {img}
              <div>{option}</div>
              {formGoogle}
            </Container>
          </LoginContainer>
        </ThemeProvider>
      </MainStyled>
    </>
  );
};

const fontSize = css`
  font-size: 2.2rem;
`;

const SpanLogo = styled.div`
  font-size: 1.2rem;
  padding-top: 1.6rem;
  margin: 0 auto;
  width: 100%;
  display: inline-block;
  text-align: center;
`;

const BookmarkWrap = styled.div`
  filter: drop-shadow(2px 4px 3px rgba(50, 50, 0, 0.5));
`;

const Bookmark = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 65%, 0 100%);
  background-image: var(--yellow-gradient);
  width: 94px;
  height: 124px;
  color: var(--brown);
  position: absolute;
  right: 10%;
`;

const MainStyled = styled.main`
  padding: 0.1rem;
  background-image: var(--brown-gradient);
`;

const LoginContainer = styled.div`
  background-color: var(--white-gray);
  margin: 1rem;
  border: 2px solid var(--black);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.main};
  overflow: hidden;
`;
// LoginContainer.defaultProps = {
//   theme: {
//     main: "calc(100vh - 2.4rem)",
//   },
// };
const SpanStyledWrap = styled.div`
  padding: 7rem 2rem 1rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
    width: 60%;
    margin: 0 auto;
  }
`;

const SpanStyled = styled.span`
  ${fontSize};
  color: var(--brown);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SpanStyledLight = styled.span`
  ${fontSize};
  color: var(--main-color);
  @media screen and (min-width: 768px) {
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

    @media screen and (min-width: 992px) {
      bottom: 18px;
    }
  }

  h1 {
    color: var(--main-light);
    margin: 0.2rem;
  }

  a {
    font-size: 0.8rem;
    color: var(--brown);
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  width: 80%;
  text-align: left;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    margin: 0;
    width: 100%;
    font-size: 1.4rem;
  }
`;

export default StartPage;
