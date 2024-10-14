import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProductList } from "../store/productListSlice";

function Root() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductList(data));
  }, []);

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <NavBar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
