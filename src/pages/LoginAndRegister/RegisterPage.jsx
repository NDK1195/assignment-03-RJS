import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function RegisterPage() {
  const userArr = JSON.parse(localStorage.getItem("userArr"));

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  /**
   * Handles the validation of the form input values. If the value is empty, an
   * error message is set for the corresponding field. If the value is valid, the
   * error message is cleared and the field is updated in the user object.
   */
  function handleValidation(event) {
    const { name, value } = event.target;

    switch (name) {
      case "fullName":
        if (value === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            fullName: "Please enter your full name",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            fullName: "",
          }));
          setUser((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

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
        } else if (userArr.some((user) => user.email === value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Email already exists",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "",
          }));
          setUser((prevState) => ({
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
        } else if (value.length < 9) {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "Password must be at least 9 characters",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "",
          }));
          setUser((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

      case "phone":
        if (value === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "Please enter your phone number",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "",
          }));
          setUser((prevState) => ({
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
      case "fullName":
        setFormErrors((prevState) => ({
          ...prevState,
          fullName: "",
        }));
        break;

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

      case "phone":
        setFormErrors((prevState) => ({
          ...prevState,
          phone: "",
        }));
        break;
    }
  }

  function handleSignUp(event) {
    event.preventDefault();

    // If all the form errors are empty, it means the form is valid
    if (Object.values(formErrors).every((value) => value === "")) {
      const userArr = JSON.parse(localStorage.getItem("userArr"));

      // Add the new user to the existing array of users
      localStorage.setItem("userArr", JSON.stringify([...userArr, user]));
      navigate("/login");
    }
  }

  return (
    <Wrapper>
      <h3 className="mb-20 text-center text-2xl text-black">Sign Up</h3>

      <form onSubmit={handleSignUp}>
        <Input
          name="fullName"
          placeholder="Full Name"
          error={formErrors.fullName}
          onBlur={handleValidation}
          onFocus={handleFocus}
        />
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
        <Input
          name="phone"
          placeholder="Phone"
          error={formErrors.phone}
          onBlur={handleValidation}
          onFocus={handleFocus}
        />

        <Button className="mb-11 mt-5 w-full py-5" type="submit">
          SIGN UP
        </Button>
      </form>

      <div className="text-center text-sm text-gray-400">
        Login?{" "}
        <Link to="/login" className="text-blue-300">
          Click
        </Link>
      </div>
    </Wrapper>
  );
}
export default RegisterPage;
