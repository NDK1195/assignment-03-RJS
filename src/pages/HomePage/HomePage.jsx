import Banner from "./components/Banner";
import Categories from "./components/Categories";
import MoreInfo from "./components/MoreInfo";
import ProductList from "./components/ProductList";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Banner />
      <Categories />
      <ProductList />
      <MoreInfo />
    </div>
  );
}
export default HomePage;
