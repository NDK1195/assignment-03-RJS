import { useDispatch } from "react-redux";
import { setSearchText } from "../../../store/SearchAndSortSlice";
function SearchInput() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="h-7 w-[200px] border border-gray-300 py-5 pl-3 outline-gray-300 placeholder:text-sm placeholder:text-gray-300"
      placeholder="Enter search here..."
      onChange={(e) => dispatch(setSearchText(e.target.value))}
    />
  );
}
export default SearchInput;
