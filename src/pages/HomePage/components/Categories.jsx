import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import product1 from "../../../assets/product_1.png";
import product2 from "../../../assets/product_2.png";
import product3 from "../../../assets/product_3.png";
import product4 from "../../../assets/product_4.png";
import product5 from "../../../assets/product_5.png";

function Categories() {
  return (
    <section className="mt-14">
      <div className="mb-5 text-center">
        <h3 className="text-sm tracking-wider text-gray-300">
          CAREFULLY CREATED COLLECTIONS
        </h3>
        <h2 className="text-xl tracking-widest">BROWSE OUR CATEGORIES</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-6"
      >
        <Link
          to={"/shop"}
          className="transition-opacity hover:opacity-70 lg:col-span-3"
        >
          <img src={product1} alt="product 1" className="w-full" />
        </Link>
        <Link
          to={"/shop"}
          className="transition-opacity hover:opacity-70 lg:col-span-3"
        >
          <img src={product2} alt="product 1" className="w-full" />
        </Link>
        <Link
          to={"/shop"}
          className="transition-opacity hover:opacity-70 lg:col-span-2"
        >
          <img src={product3} alt="product 1" className="w-full" />
        </Link>
        <Link
          to={"/shop"}
          className="transition-opacity hover:opacity-70 lg:col-span-2"
        >
          <img src={product4} alt="product 1" className="w-full" />
        </Link>
        <Link
          to={"/shop"}
          className="transition-opacity hover:opacity-70 lg:col-span-2"
        >
          <img src={product5} alt="product 1" className="w-full" />
        </Link>
      </motion.div>
    </section>
  );
}
export default Categories;
