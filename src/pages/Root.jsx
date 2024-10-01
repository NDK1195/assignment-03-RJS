import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Root() {
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
