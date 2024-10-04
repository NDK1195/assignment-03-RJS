import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  setSortedProducts,
  setSortValue,
} from "../../../store/productListSlice";
import { useEffect } from "react";
function SortAndSearch({ products }) {
  const searchText = useSelector((state) => state.productList.searchText);
  const sortValue = useSelector((state) => state.productList.sortValue);
  const dispatch = useDispatch();

  useEffect(() => {
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
    dispatch(setSortedProducts(sortedProducts));
  }, [dispatch, products, searchText, sortValue]);

  return (
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
  );
}
export default SortAndSearch;
