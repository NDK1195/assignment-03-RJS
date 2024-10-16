import { useNavigate } from "react-router-dom";

function Button({ children, className, navigateTo, type = "button", onClick }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    }
    navigate(navigateTo);
  }
  return (
    <button
      type={type}
      className={`bg-button tracking-wide text-gray-300 transition-colors hover:bg-[#535353] ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
export default Button;
