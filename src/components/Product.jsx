import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Product({ product, isHavePopup = false }) {
  const navigate = useNavigate();
  const pathname = useLocation();

  // format price
  const price = new Intl.NumberFormat("vi-VN").format(product.price);

  // if product is not from homepage, can click to navigate to detail page
  let navigateTo = "";
  if (!isHavePopup) {
    navigateTo = `/detail/${product["_id"]["$oid"]}`;
  }

  // scroll to top when change route if don't have popup
  useEffect(() => {
    if (!isHavePopup) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return;
  }, [pathname]);

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
