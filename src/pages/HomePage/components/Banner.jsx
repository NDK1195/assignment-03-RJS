import banner from "../../../assets/banner1.jpg";
import Button from "../../../components/Button";

function Banner() {
  return (
    <section className="relative">
      <img src={banner} alt="banner" className="min-h-[150px]" />

      <div className="absolute left-16 top-1/2 max-w-[320px] -translate-y-1/2">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-wider text-gray-300">
            NEW INSPIRATION 2020
          </p>
          <h2 className="text-3xl tracking-wider lg:text-4xl">
            20% OFF ON NEW SEASON
          </h2>
          <Button
            className="w-fit px-6 py-2"
            navigateTo={"/shop"}
            type="button"
          >
            Browse collections
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Banner;
