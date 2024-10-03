import { useDispatch } from "react-redux";
import { SHOW_POPUP } from "../../../store/PopupSlice";

function Product({ item }) {
  const dispatch = useDispatch();
  // format price
  const price = new Intl.NumberFormat("vi-VN").format(item.price);

  function handleOpenPopup() {
    dispatch(
      SHOW_POPUP({
        image: item.img1,
        name: item.name,
        price: price,
        description: item["short_desc"],
      }),
    );
  }
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        to={"/product/" + item.id}
        className="cursor-pointer transition-opacity hover:opacity-60"
        onClick={handleOpenPopup}
      >
        <img src={item.img1} alt={item.name} className="w-full" />
      </div>

      <h3 className="text-center font-medium">{item.name}</h3>
      <p className="text-gray-400">{price} VND</p>
    </div>
  );
}
export default Product;
