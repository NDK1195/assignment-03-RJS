import { useSelector } from "react-redux";
import Product from "../../../components/Product";
import SortSelect from "./SortSelect";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";

function ProductList() {
  const productList = useSelector((state) => state.productList.productList);
  const selectedCategory = useSelector((state) => state.productList.category);
  const searchText = useSelector((state) => state.productList.searchText);
  const sortValue = useSelector((state) => state.productList.sortValue);

  const productsToShow = productList.filter(
    (product) =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const sortedProducts = [...productsToShow].sort((a, b) => {
    if (sortValue === "ascending") {
      return Number(a.price) - Number(b.price);
    } else if (sortValue === "descending") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });

  const productsToDisplay = (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <Product
          key={product["_id"]["$oid"]}
          product={product}
          isHavePopup={false}
        />
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
