import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import MoreInfo from "./components/MoreInfo";
import ProductList from "./components/ProductList";
import Popup from "./components/Popup";

function HomePage() {
  const isShow = useSelector((state) => state.popup.isShow);

  return (
    <div className="container mx-auto">
      <Popup />
      <Banner />
      <Categories />
      <ProductList />
      <MoreInfo />
    </div>
  );
}
export default HomePage;
