import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../store/SearchAndSortSlice";

function MenuItem({ children, category }) {
  const currentCategory = useSelector((state) => state.SearchAndSort.category);
  const dispatch = useDispatch();

  return (
    <li
      className={`w-fit cursor-pointer px-5 transition-colors hover:text-active ${currentCategory === category ? "text-active" : "text-gray-300"}`}
      onClick={() => dispatch(setCategory(category))}
    >
      {children}
    </li>
  );
}
export default MenuItem;
