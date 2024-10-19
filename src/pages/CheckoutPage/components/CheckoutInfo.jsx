import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { RESET_CART } from "../../../store/cartSlice";
import { setIsCheckout } from "../../../store/checkoutSlice";
import YourOrder from "./YourOrder";

function CheckoutInfo({ productList, totalPrice }) {
  const checkoutInfo = useSelector((state) => state.checkout.checkoutInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // when user done checkout, reset cart and redirect to home page
  function handleClick() {
    dispatch(RESET_CART());
    dispatch(setIsCheckout(false));
    navigate("/");
  }

  return (
    <div className="bg-background p-10">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="">Full name:</h3>
        <p className="">{checkoutInfo.fullName}</p>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="">Email:</h3>
        <p className="">{checkoutInfo.email}</p>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="">Phone number:</h3>
        <p className="">{checkoutInfo.fullName}</p>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="">Address:</h3>
        <p className="">{checkoutInfo.address}</p>
      </div>

      <hr className="mb-5 h-[1px] w-full" />

      <YourOrder productList={productList} totalPrice={totalPrice} />

      <Button className="mt-5 px-4 py-2" onClick={handleClick}>
        Continue shopping
      </Button>
    </div>
  );
}
export default CheckoutInfo;
