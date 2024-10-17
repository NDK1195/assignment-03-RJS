import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { ADD_CART } from "../../../store/cartSlice";

function AddToCart({ product, quantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));

  function handleAddToCart() {
    if (!currentLoginUser) {
      navigate("/login");
      return;
    }

    const productToAdd = {
      product,
      quantity,
      userEmail: currentLoginUser.email,
    };

    dispatch(ADD_CART(productToAdd));
  }

  return (
    <Button
      className="min-w-[125px] px-6 py-2 text-sm italic"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
}
export default AddToCart;
