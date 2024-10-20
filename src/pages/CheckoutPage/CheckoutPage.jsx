import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Wrapper from "../CartPage/components/Wrapper";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutInfo from "./components/CheckoutInfo";
import YourOrder from "./components/YourOrder";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cart);
  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));
  const isCheckout = useSelector((state) => state.checkout.isCheckout);

  const totalPrice =
    cart[currentLoginUser.email] &&
    cart[currentLoginUser.email].reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );

  return (
    <>
      <Banner name="checkout" />

      <h2 className="mb-8 text-xl tracking-widest">BILLING DETAILS</h2>

      {isCheckout && (
        <CheckoutInfo
          totalPrice={totalPrice}
          productList={cart[currentLoginUser.email]}
        />
      )}

      {!isCheckout && (
        <Wrapper>
          <div className="col-span-2 row-span-2 tracking-wide">
            <CheckoutForm />
          </div>

          <div className="row-span-1 bg-background px-10 py-11">
            <YourOrder
              productList={cart[currentLoginUser.email]}
              totalPrice={totalPrice}
            />
          </div>
        </Wrapper>
      )}
    </>
  );
}
export default CheckoutPage;
