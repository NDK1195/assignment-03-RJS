import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
