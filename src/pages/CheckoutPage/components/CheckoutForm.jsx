import { useRef } from "react";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { setCheckoutInfo, setIsCheckout } from "../../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePlaceOrder(e) {
    e.preventDefault();
    dispatch(
      setCheckoutInfo({
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
      }),
    );
    dispatch(setIsCheckout(true));
  }

  return (
    <form onSubmit={handlePlaceOrder}>
      <div className="mb-5">
        <label className="mb-2 block tracking-wider text-gray-500">
          FULL NAME:
        </label>
        <input
          type="text"
          className="w-full border p-3 text-sm outline-none"
          placeholder="Enter your full name here!"
          required
          ref={fullNameRef}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2 block tracking-wider text-gray-500">
          EMAIL:
        </label>
        <input
          type="email"
          className="w-full border p-3 text-sm outline-none"
          placeholder="Enter your email here!"
          required
          ref={emailRef}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2 block tracking-wider text-gray-500">
          PHONE NUMBER:
        </label>
        <input
          type="text"
          className="w-full border p-3 text-sm outline-none"
          placeholder="Enter your phone number here!"
          required
          ref={phoneRef}
        />
      </div>
      <div className="mb-5">
        <label className="mb-2 block tracking-wider text-gray-500">
          ADDRESS:
        </label>
        <input
          type="text"
          className="w-full border p-3 text-sm outline-none"
          placeholder="Enter your address here!"
          required
          ref={addressRef}
        />
      </div>

      <Button type="submit" className="px-5 py-2 italic tracking-wider">
        Place order
      </Button>
    </form>
  );
}
export default CheckoutForm;
