import { useDispatch } from "react-redux";
import { SHOW_POPUP } from "../../../store/popupSlice";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3"
    >
      <div
        className="cursor-pointer transition-opacity hover:opacity-60"
        onClick={handleOpenPopup}
      >
        <img src={item.img1} alt={item.name} className="w-full" />
      </div>

      <h3 className="text-center font-medium">{item.name}</h3>
      <p className="text-gray-400">{price} VND</p>
    </motion.div>
  );
}
export default Product;
