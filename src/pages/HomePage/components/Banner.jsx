import { Link } from "react-router-dom";
import banner from "../../../assets/banner1.jpg";

function Banner() {
  return (
    <section className="relative -z-10">
      <img src={banner} alt="banner" className="min-h-[150px]" />

      <div className="absolute left-16 top-1/2 max-w-[320px] -translate-y-1/2">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-wider text-gray-300">
            NEW INSPIRATION 2020
          </p>
          <h2 className="text-3xl tracking-wider lg:text-4xl">
            20% OFF ON NEW SEASON
          </h2>
          <Link to={"/shop"} className="button w-fit px-6 py-2">
            Browse collections
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Banner;
