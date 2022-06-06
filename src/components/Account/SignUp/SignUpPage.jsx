import styled, { css } from "styled-components/macro";
import StartPage from "../StartPage";
import pages from "../../../assets/page.png";

const SignUpPage = () => {
  const spanStyledLogin = "Hello,";
  const paragraphLogin = "join us to start your reading adventure.";
  const actionLogin = "Sign up!";
  const formLogin = (
    <LoginForm>
      <label>Username:</label>
      <input type="text" name="name" />
      <label>Password:</label>
      <input type="password" name="password" />
      <button type="submit" value="Sign up">
        Sign in
      </button>
    </LoginForm>
  );
  const formGoogleLogin = (
    <LoginForm>
      <button type="submit" className="google" value="Sign in with Google">
        Sign in with Google
      </button>
    </LoginForm>
  );
  const theme = {
    main: "calc(100vh - 2.4rem)",
  };
  const img = <img className="pages" src={pages} width="200" alt="logo img" />;
  return (
    <StartPage
      spanStyled={spanStyledLogin}
      paragraph={paragraphLogin}
      action={actionLogin}
      form={formLogin}
      formGoogle={formGoogleLogin}
      theme={theme}
      img={img}
    />
  );
};

const fontFamily = css`
  font-family: "Pacifico", cursive;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  max-width: 300px;

  label {
    text-align: left;
    width: 200px;
  }
  input {
    padding: 0.6rem;
    border-radius: 50px;
    border: 2px solid var(--brown);
  }
  button[type="submit"] {
    width: 100%;
    padding: 0.6rem;
    border-radius: 50px;
    background-color: var(--main-color);
    border-color: var(--main-color);
    margin-top: 1rem;
    color: var(--brown);
    font-size: 1.2rem;
    ${fontFamily};
    cursor: pointer;

    &.google {
      border: none;
      background-color: var(--white-gray);
      margin-top: 1.2rem;
    }
  }
`;

export default SignUpPage;
