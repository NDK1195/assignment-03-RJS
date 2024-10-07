import { useNavigate } from "react-router-dom";

function Button({ children, className, navigateTo, type = "button" }) {
  const navigate = useNavigate();
  return (
    <button
      type={type}
      className={`bg-button tracking-wide text-gray-300 transition-colors hover:bg-[#535353] ${className}`}
      onClick={() => navigate(navigateTo)}
    >
      {children}
    </button>
  );
}
export default Button;
