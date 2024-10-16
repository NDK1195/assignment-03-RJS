import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import { ADD_CART } from "../../../store/cartSlice";
import { useNavigate } from "react-router-dom";

function AddToCart({ product, quantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const totcalCartPrice = useSelector((state) => state.cart.totalCartPrice);

  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));

  function handleAddToCart() {
    if (!currentLoginUser) {
      navigate("/login");
      return;
    }

    const productToAdd = {
      ...product,
      quantity,
      totalPrice: Number(product.price) * quantity,
    };
    dispatch(ADD_CART(productToAdd));

    //     JSON.stringify(
    //       localStorage.setItem(
    //         "currentLoginUser",
    //         JSON.stringify({ ...currentLoginUser, cart: [...cart, productToAdd] }),
    //       ),
    //     );
  }

  console.log(cart);
  console.log(totcalCartPrice);

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
