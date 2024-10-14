import { useDispatch } from "react-redux";
import { setSortValue } from "../../../store/searchAndSortSlice";
function SortSelect() {
  const dispatch = useDispatch();
  return (
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
  );
}
export default SortSelect;
