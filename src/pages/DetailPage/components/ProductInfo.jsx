import { useState } from "react";
import AddToCart from "./AddToCart";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecreaseQuantity() {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }
  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleChangeQuantity(e) {
    const value = e.target.value;
    if (value >= 0) {
      setQuantity(value);
    }
  }

  return (
    <div className="basis-1/2">
      <h2 className="mb-5 text-3xl">{product.name}</h2>
      <p className="mb-5 text-lg text-gray-400">
        {new Intl.NumberFormat("vi-VN").format(product.price)} VND
      </p>
      <p className="mb-5 tracking-wide text-gray-400">
        {product["short_desc"]}
      </p>

      <p className="mb-3 tracking-wide">
        CATEGORY:
        <span className="text-sm text-gray-400"> {product.category}</span>
      </p>

      <div className="relative flex w-[350px] items-center">
        <input
          type="text"
          disabled
          placeholder="QUANTITY"
          className="h-9 w-full border border-gray-300 pl-4 text-sm italic tracking-wider outline-none"
        />
        <div className="absolute left-36">
          <div className="flex items-center gap-3">
            <span className="cursor-pointer" onClick={handleDecreaseQuantity}>
              <i className="fa-solid fa-caret-left"></i>
            </span>
            <input
              type="number"
              className="w-5 text-center text-sm not-italic text-black outline-none placeholder:text-black"
              value={quantity}
              onChange={handleChangeQuantity}
              placeholder="1"
            />
            <span className="cursor-pointer" onClick={handleIncreaseQuantity}>
              <i className="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>
        <AddToCart product={product} quantity={quantity} />
      </div>
    </div>
  );
}
export default ProductInfo;
