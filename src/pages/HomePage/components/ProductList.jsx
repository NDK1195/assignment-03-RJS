import { useDispatch } from "react-redux";
import Product from "../../../components/Product";
import { SHOW_POPUP } from "../../../store/popupSlice";

function ProductList() {
  const productList = JSON.parse(localStorage.getItem("productList"));
  const dispatch = useDispatch();

  // get first 8 product from array data
  const displayData = productList.slice(0, 8);

  function handleOpenPopup(product) {
    dispatch(
      SHOW_POPUP({
        id: product["_id"]["$oid"],
        imageUrl: product.img1,
        name: product.name,
        price: product.price,
        description: product["short_desc"],
      }),
    );
  }

  return (
    <section className="mt-14">
      <div className="mb-5">
        <h3 className="text-sm tracking-wider text-gray-300">
          MADE THE HARD WAY
        </h3>
        <h2 className="text-xl tracking-widest">TOP TRENDING PRODUCTS</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {displayData.map((product) => (
          <div
            key={product["_id"]["$oid"]}
            onClick={() => handleOpenPopup(product)}
          >
            <Product product={product} isHavePopup={true} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProductList;
