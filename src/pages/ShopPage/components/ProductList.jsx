import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setSearchText, setSortValue } from "../../../store/productListSlice";

function ProductList() {
  const data = useSelector((state) => state.productList.productList);
  const category = useSelector((state) => state.productList.category);
  const searchText = useSelector((state) => state.productList.searchText);
  const sortValue = useSelector((state) => state.productList.sortValue);
  const dispatch = useDispatch();

  let products = [];
  if (category === "all") {
    products = [...data];
  } else {
    products = data.filter((item) => item.category === category);
  }

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  let sortedProducts = [];

  if (sortValue === "ascending") {
    sortedProducts = filteredProducts.sort(
      (a, b) => Number(a.price) - Number(b.price),
    );
  } else if (sortValue === "descending") {
    sortedProducts = filteredProducts.sort(
      (a, b) => Number(b.price) - Number(a.price),
    );
  } else {
    sortedProducts = [...filteredProducts];
  }

  let productList;
  if (filteredProducts.length === 0) {
    productList = <h3 className="text-2xl">No product found</h3>;
  } else {
    productList = sortedProducts.map((item) => (
      <Product key={item["_id"]["$oid"]} item={item} />
    ));
  }

  return (
    <section className="lg:col-span-3">
      <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-center lg:gap-0">
        <input
          type="text"
          className="h-7 w-[200px] border border-gray-300 py-5 pl-3 outline-gray-300 placeholder:text-sm placeholder:text-gray-300"
          placeholder="Enter search here..."
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
        <select
          name="sort"
          id="sort"
          className="w-fit border border-gray-300 outline-gray-300"
          onChange={(e) => dispatch(setSortValue(e.target.value))}
        >
          <option value="default">Default sorting</option>
          <option value="ascending">Price: Ascending</option>
          <option value="descending">Price: Descending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productList}
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-end">
          <span className="flex size-10 cursor-pointer items-center justify-center border border-r-0 p-3">
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <span className="flex size-10 items-center justify-center bg-black p-3 text-white">
            1
          </span>
          <span className="flex size-10 cursor-pointer items-center justify-center border border-l-0 p-3">
            <i className="fa-solid fa-angles-right"></i>
          </span>
        </div>

        <p className="text-right text-sm text-gray-400">
          Showing{" "}
          {filteredProducts.length > 1
            ? `1 - ${filteredProducts.length}`
            : filteredProducts.length}{" "}
          of {filteredProducts.length} results
        </p>
      </div>
    </section>
  );
}
export default ProductList;
