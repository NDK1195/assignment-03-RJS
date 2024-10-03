import { useSelector } from "react-redux";
import Product from "./Product";

function ProductList() {
  const data = useSelector((state) => state.productList.productList);

  // get first 8 item from array data
  const displayData = data.slice(0, 8);

  return (
    <section className="mt-14">
      <div className="mb-5">
        <h3 className="text-sm tracking-wider text-gray-300">
          MADE THE HARD WAY
        </h3>
        <h2 className="text-xl tracking-widest">TOP TRENDING PRODUCTS</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {displayData.map((item) => (
          <Product key={item["_id"]["$oid"]} item={item} />
        ))}
      </div>
    </section>
  );
}
export default ProductList;
