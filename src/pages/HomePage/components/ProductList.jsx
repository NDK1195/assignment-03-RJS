import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductList() {
  const data = useSelector((state) => state.productList.productList);

  // get first 8 item from array data
  const displayData = data.slice(0, 8);
  console.log(displayData);

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
          <div
            key={item["_id"]["$oid"]}
            className="flex flex-col items-center gap-3"
          >
            <Link
              to={"/product/" + item.id}
              className="transition-opacity hover:opacity-60"
            >
              <img src={item.img1} alt={item.name} className="w-full" />
            </Link>

            <h3 className="text-center font-medium">{item.name}</h3>
            <p className="text-gray-400">
              {new Intl.NumberFormat("vi-VN").format(item.price)} VND
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProductList;
