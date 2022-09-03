import StartPage from "../StartPage";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const paragraphMessage = "We missed you.";
  const actionLogin = "Sign in!";
  const formLogin = <LoginForm />;

  return (
    <StartPage
      paragraph={paragraphMessage}
      action={actionLogin}
      form={formLogin}
    />
  );
};

export default LoginPage;
