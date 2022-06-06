import styled from "styled-components/macro";

const LoginForm = () => {
  return (
    <LoginFormStyled>
      <label>Username:</label>
      <input type="text" name="name" />
      <label>Password:</label>
      <input type="password" name="password" />
      <button type="submit" value="Sign in">
        Sign in
      </button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
    cursor: pointer;
    font-family: "Pacifico", cursive;

    &.google {
      border: none;
      background-color: var(--white-gray);
      margin-top: 1.2rem;
    }
  }
`;

export default LoginForm;
