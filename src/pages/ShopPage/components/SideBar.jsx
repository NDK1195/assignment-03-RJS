import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";

function SideBar() {
  return (
    <aside className="">
      <h3 className="mb-4 text-xl font-medium tracking-wider text-black">
        CATEGORIES
      </h3>

      <ul className="flex flex-col gap-3">
        {/* All */}
        <li className="bg-black px-5 py-2 font-medium text-gray-300">APPLE</li>
        <MenuItem category="all">All</MenuItem>
        {/* All */}

        {/* Iphone & Mac */}
        <li className="bg-background px-5 py-2 font-medium text-button">
          IPHONE & MAC
        </li>
        <MenuItem category="iphone">IPhone</MenuItem>
        <MenuItem category="ipad">Ipad</MenuItem>
        <MenuItem category="macbook">Macbook</MenuItem>
        {/* Iphone & Mac */}

        {/* Wireless */}
        <li className="bg-background px-5 py-2 font-medium text-button">
          IPHONE & MAC
        </li>
        <MenuItem category="airpod">Airpod</MenuItem>
        <MenuItem category="watch">Watch</MenuItem>
        {/* Wireless */}

        {/* Other */}
        <li className="bg-background px-5 py-2 font-medium text-button">
          IPHONE & MAC
        </li>
        <MenuItem category="mouse">Mouse</MenuItem>
        <MenuItem category="keyboard">Keyboard</MenuItem>
        <MenuItem category="other">Other</MenuItem>
        {/* Other */}
      </ul>
    </aside>
  );
}
export default SideBar;
