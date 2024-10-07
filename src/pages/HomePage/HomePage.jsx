import Banner from "./components/Banner";
import Categories from "./components/Categories";
import MoreInfo from "./components/MoreInfo";
import Popup from "./components/Popup";
import ProductList from "./components/ProductList";

function HomePage() {
  return (
    <>
      <Popup />
      <Banner />
      <Categories />
      <ProductList />
      <MoreInfo />
    </>
  );
}
export default HomePage;
