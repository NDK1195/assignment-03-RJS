import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Product({ product, isHavePopup = true }) {
  const navigate = useNavigate();
  // format price
  const price = new Intl.NumberFormat("vi-VN").format(product.price);

  let navigateTo = "";
  if (!isHavePopup) {
    navigateTo = `/detail/${product["_id"]["$oid"]}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="products-center flex flex-col gap-3 text-center"
      onClick={() => navigate(navigateTo)}
    >
      <div className="cursor-pointer transition-opacity hover:opacity-60">
        <img src={product.img1} alt={product.name} className="w-full" />
      </div>

      <h3 className="font-medium">{product.name}</h3>
      <p className="text-gray-400">{price} VND</p>
    </motion.div>
  );
}
export default Product;
