import { Link } from "react-router-dom";
import StartPage from "../StartPage";
import LoginForm from "./LoginForm";
import pages from "../../../assets/page.png";

const LoginPage = () => {
  const spanStyledLogin = "Welcome back,";
  const paragraphLogin = "We missed you.";
  const actionLogin = "Sign in!";
  const formLogin = <LoginForm />;
  // const formGoogleLogin = (
  //   <LoginForm>
  //     <button type="submit" className="google" value="Sign in with Google">
  //       Sign in with Google
  //     </button>
  //   </LoginForm>
  // );
  const optionLogin = (
    <>
      <span>Don't have an account? </span>
      <Link to="/signup">
        <a href="/">Sign up!</a>
      </Link>
    </>
  );
  const img = <img className="pages" src={pages} width="200" alt="logo img" />;
  return (
    <StartPage
      spanStyled={spanStyledLogin}
      paragraph={paragraphLogin}
      action={actionLogin}
      form={formLogin}
      formGoogle=""
      option={optionLogin}
      img={img}
    />
  );
};

export default LoginPage;
