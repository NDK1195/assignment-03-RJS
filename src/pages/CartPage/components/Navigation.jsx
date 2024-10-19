import { Link } from "react-router-dom";

function Navigation({ canCheckout }) {
  return (
    <div className="flex items-center justify-between bg-background p-5 font-light text-gray-800">
      <Link to={"/shop"} className="flex items-center gap-2 text-sm">
        <span>
          <i className="fa-solid fa-arrow-left-long"></i>
        </span>
        Continue shopping
      </Link>
      <Link
        to={`${canCheckout ? "/checkout" : ""}`}
        className="flex items-center gap-2 border border-black p-3 text-sm"
      >
        Proceed to checkout
        <span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
      </Link>
    </div>
  );
}
export default Navigation;
