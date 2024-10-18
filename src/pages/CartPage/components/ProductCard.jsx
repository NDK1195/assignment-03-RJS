import { useDispatch } from "react-redux";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../../../store/cartSlice";

function ProductCard({ product, userEmail }) {
  const dispatch = useDispatch();

  const totalPrice = Number(product.price) * product.quantity;

  function handleDecreaseQuantity() {
    dispatch(
      DECREASE_QUANTITY({ userEmail, productId: product["_id"]["$oid"] }),
    );
  }
  function handleIncreaseQuantity() {
    dispatch(
      INCREASE_QUANTITY({ userEmail, productId: product["_id"]["$oid"] }),
    );
  }

  function handleRemoveProduct() {
    dispatch(REMOVE_ITEM({ userEmail, productId: product["_id"]["$oid"] }));
  }

  return (
    <>
      <div className="w-20">
        <img src={product.img1} alt={product.name} />
      </div>

      <div className="text-center">{product.name}</div>

      <div className="text-center text-sm text-gray-400">
        {new Intl.NumberFormat("vi-VN").format(product.price)} VND
      </div>

      {/* Quantity */}
      <div className="relative flex w-[350px] items-center">
        <div className="absolute left-36">
          <div className="flex items-center gap-3">
            <span className="cursor-pointer" onClick={handleDecreaseQuantity}>
              <i className="fa-solid fa-caret-left"></i>
            </span>
            <span className="w-5 text-center text-sm not-italic text-black">
              {product.quantity}
            </span>
            <span className="cursor-pointer" onClick={handleIncreaseQuantity}>
              <i className="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>
      </div>
      {/* Quantity */}

      <div className="text-center text-sm text-gray-400">
        {new Intl.NumberFormat("vi-VN").format(totalPrice)} VND
      </div>

      <div
        className="cursor-pointer text-gray-400"
        onClick={handleRemoveProduct}
      >
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </>
  );
}
export default ProductCard;
