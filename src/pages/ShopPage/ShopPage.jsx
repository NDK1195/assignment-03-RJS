import Banner from "../../components/Banner";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";

function ShopPage() {
  return (
    <>
      <Banner name="shop" />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <SideBar />
        <ProductList />
      </div>
    </>
  );
}
export default ShopPage;
