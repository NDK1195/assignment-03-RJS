import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import CartTotal from "./components/CartTotal";
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));

  const subTotalPrice =
    cart[currentLoginUser.email] &&
    cart[currentLoginUser.email].reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  return (
    <>
      <Banner name="cart" />

      <h2 className="mb-8 text-xl tracking-widest">SHOPPING CART</h2>

      <Wrapper>
        <div className="col-span-2 row-span-2 tracking-wide">
          <Header />

          <div className="grid grid-cols-6 place-items-center gap-x-3 py-5">
            {cart[currentLoginUser.email] &&
              cart[currentLoginUser.email].map((product) => (
                <ProductCard
                  key={product["_id"]["$oid"]}
                  product={product}
                  userEmail={currentLoginUser.email}
                />
              ))}
          </div>

          <Navigation canCheckout={cart[currentLoginUser.email]} />
        </div>

        <div className="row-span-1 bg-background px-10 py-11">
          <CartTotal subTotalPrice={subTotalPrice} />
        </div>
      </Wrapper>
    </>
  );
}
export default CartPage;
