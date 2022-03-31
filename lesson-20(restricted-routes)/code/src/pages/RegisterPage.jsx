import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const cbOnSubmit = (userData) => dispatch(registerUser(userData));

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm cbOnSubmit={cbOnSubmit} />
    </>
  );
};

export default RegisterPage;
