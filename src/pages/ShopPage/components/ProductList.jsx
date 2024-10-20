import { useSelector } from "react-redux";
import Product from "../../../components/Product";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

function ProductList() {
  const productList = JSON.parse(localStorage.getItem("productList"));
  const selectedCategory = useSelector((state) => state.searchAndSort.category);
  const searchText = useSelector((state) => state.searchAndSort.searchText);
  const sortValue = useSelector((state) => state.searchAndSort.sortValue);

  // filter products based on category and search input
  const filteredProducts = productList.filter(
    (product) =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // sort products based on sort value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortValue === "ascending") {
      return Number(a.price) - Number(b.price);
    } else if (sortValue === "descending") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });

  // display products based on sorted products
  const productsToDisplay = (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <Product key={product["_id"]["$oid"]} product={product} />
      ))}
    </div>
  );

  return (
    <section className="lg:col-span-3">
      <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-center lg:gap-0">
        <SearchInput />
        <SortSelect />
      </div>

      {sortedProducts.length === 0 ? (
        <h3 className="text-2xl">No product found</h3>
      ) : (
        productsToDisplay
      )}

      <div className="mt-4">
        <Pagination sortedProducts={sortedProducts} />
      </div>
    </section>
  );
}
export default ProductList;
