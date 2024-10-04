import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Product({ item }) {
  // format price
  const price = new Intl.NumberFormat("vi-VN").format(item.price);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3"
    >
      <Link
        to={"/detail/" + item["_id"]["$oid"]}
        className="cursor-pointer transition-opacity hover:opacity-60"
      >
        <img src={item.img1} alt={item.name} className="w-full" />
      </Link>

      <h3 className="text-center font-medium">{item.name}</h3>
      <p className="text-gray-400">{price} VND</p>
    </motion.div>
  );
}
export default Product;
