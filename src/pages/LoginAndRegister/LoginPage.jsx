import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Input from "./components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ON_LOGIN } from "../../store/authenticationSlice";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function LoginPage() {
  const userArr = JSON.parse(localStorage.getItem("userArr"));
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  function handleValidation(event) {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        if (value === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Please enter your email",
          }));
        } else if (!emailRegex.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Please enter a valid email",
          }));
        } else {
          setCurrentUser((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

      case "password":
        if (value === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "Please enter your password",
          }));
        } else {
          setCurrentUser((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
    }
  }

  // reset error state when focus on input
  function handleFocus(event) {
    const { name } = event.target;

    switch (name) {
      case "email":
        setFormErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
        break;

      case "password":
        setFormErrors((prevState) => ({
          ...prevState,
          password: "",
        }));
        break;
    }
  }

  function handleSignIn(e) {
    e.preventDefault();

    const foundUser = userArr.find(
      (user) =>
        user.email === currentUser.email &&
        user.password === currentUser.password,
    );

    // check if user exist, set current user and redirect to home
    if (foundUser) {
      localStorage.setItem("currentLoginUser", JSON.stringify(foundUser));
      dispatch(ON_LOGIN());
      navigate("/");
    } else {
      alert("Invalid email or password");
      setCurrentUser({
        email: "",
        password: "",
      });
    }
  }

  return (
    <Wrapper>
      <h3 className="mb-20 text-center text-2xl text-black">Sign In</h3>

      <form onSubmit={handleSignIn}>
        <Input
          name="email"
          placeholder="Email"
          error={formErrors.email}
          onBlur={handleValidation}
          onFocus={handleFocus}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          error={formErrors.password}
          onBlur={handleValidation}
          onFocus={handleFocus}
        />

        <Button className="mb-11 mt-5 w-full py-5" type="submit">
          SIGN IN
        </Button>
      </form>

      <div className="text-center text-sm text-gray-400">
        Create an account?{" "}
        <Link to="/register" className="text-blue-300">
          Sign up
        </Link>
      </div>
    </Wrapper>
  );
}
export default LoginPage;
