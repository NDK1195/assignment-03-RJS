import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function RegisterPage() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleValidation = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "fullName":
        if (value === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            fullName: "Please enter your full name",
          }));
          setIsFormValid(false);
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            fullName: "",
          }));
          setIsFormValid(true);
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
          setIsFormValid(false);
        } else if (!emailRegex.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Please enter a valid email",
          }));
          setIsFormValid(false);
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "",
          }));
          setIsFormValid(true);
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
          setIsFormValid(false);
        } else if (value.length < 9) {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "Password must be at least 9 characters",
          }));
          setIsFormValid(false);
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "",
          }));
          setIsFormValid(true);
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
          setIsFormValid(false);
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "",
          }));
          setIsFormValid(true);
          setUser((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    if (isFormValid) {
      const userArr = JSON.parse(localStorage.getItem("userArr"));

      localStorage.setItem("userArr", JSON.stringify([...userArr, user]));
      navigate("/login");
    }
  };

  return (
    <div className="bg-banner relative min-h-dvh bg-contain bg-repeat-y">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <form
          className="min-w-[500px] rounded-md bg-white px-14 py-16 shadow-md"
          onSubmit={handleSignUp}
        >
          <h3 className="mb-20 text-center text-2xl text-black">Sign Up</h3>

          <input
            type="text"
            className="w-full border-[0.5px] px-4 py-5 text-sm outline-none"
            name="fullName"
            placeholder="Full Name"
            onBlur={handleValidation}
          />
          <p
            className={`my-1 ml-4 text-sm text-red-400 ${formErrors.fullName ? "block" : "hidden"}`}
          >
            {formErrors.fullName}
          </p>
          <input
            type="text"
            className="w-full border-[0.5px] px-4 py-5 text-sm outline-none"
            name="email"
            placeholder="Email"
            onBlur={handleValidation}
          />
          <p
            className={`my-1 ml-4 text-sm text-red-500 ${formErrors.email ? "block" : "hidden"}`}
          >
            {formErrors.email}
          </p>
          <input
            type="password"
            className="w-full border-[0.5px] px-4 py-5 text-sm outline-none"
            name="password"
            placeholder="Password"
            onBlur={handleValidation}
          />
          <p
            className={`my-1 ml-4 text-sm text-red-500 ${formErrors.password ? "block" : "hidden"}`}
          >
            {formErrors.password}
          </p>
          <input
            type="text"
            className="w-full border-[0.5px] px-4 py-5 text-sm outline-none"
            name="phone"
            placeholder="Phone"
            onBlur={handleValidation}
          />
          <p
            className={`my-1 ml-4 text-sm text-red-500 ${formErrors.phone ? "block" : "hidden"}`}
          >
            {formErrors.phone}
          </p>

          <Button className="mb-11 mt-5 w-full py-5" type="submit">
            SIGN UP
          </Button>

          <div className="text-center text-sm text-gray-400">
            Login?{" "}
            <Link to="/login" className="text-blue-300">
              Click
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
