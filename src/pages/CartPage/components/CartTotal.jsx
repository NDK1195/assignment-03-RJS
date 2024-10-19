import { useRef, useState } from "react";
import Button from "../../../components/Button";

function CartTotal({ subTotalPrice }) {
  const [discountValue, setDiscountValue] = useState(0);
  const inputRef = useRef();

  function handleApplyCoupon() {
    const coupon = inputRef.current.value;
    if (coupon === "1") {
      setDiscountValue(subTotalPrice * 0.1);
    } else if (coupon === "2") {
      setDiscountValue(subTotalPrice * 0.2);
    } else if (coupon === "3") {
      setDiscountValue(subTotalPrice * 0.3);
    } else {
      setDiscountValue(0);
    }
  }

  return (
    <>
      <h3 className="mb-7 text-xl tracking-widest">CART TOTAL</h3>

      <div className="mb-2 flex items-center justify-between">
        <h4 className="tracking-wide">SUBTOTAL</h4>
        <p className="text-sm text-gray-400">
          {subTotalPrice
            ? new Intl.NumberFormat("vi-VN").format(subTotalPrice)
            : 0}{" "}
          VND
        </p>
      </div>
      <hr className="h-[1px] w-full" />
      <div className="my-2 flex items-center justify-between">
        <h4 className="text-sm tracking-wide">Discount</h4>
        <p className="text-sm text-gray-400">
          {new Intl.NumberFormat("vi-VN").format(discountValue)} VND
        </p>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h4 className="tracking-wide">TOTAL</h4>
        <p className="text-sm text-gray-400">
          {subTotalPrice
            ? new Intl.NumberFormat("vi-VN").format(
                subTotalPrice - discountValue,
              )
            : 0}{" "}
          VND
        </p>
      </div>
      <div>
        <input
          type="text"
          className="h-10 w-full border border-gray-300 p-3 text-sm outline-none"
          placeholder="Enter your coupon"
          ref={inputRef}
        />
        <Button
          className="flex h-10 w-full items-center justify-center gap-2 text-sm"
          onClick={handleApplyCoupon}
        >
          <span>
            <i className="fa-solid fa-gift"></i>
          </span>
          Apply coupon
        </Button>
      </div>
    </>
  );
}
export default CartTotal;
