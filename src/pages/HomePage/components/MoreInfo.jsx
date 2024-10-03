import Button from "../../../components/Button";

function MoreInfo() {
  return (
    <section className="mb-16 mt-14">
      {/* service */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 bg-background px-28 py-14 sm:flex-row">
        <div>
          <h3 className="text-lg tracking-widest">FREE SHIPPING</h3>
          <p className="text-sm tracking-wide text-gray-400">
            Free Shipping Worldwide
          </p>
        </div>
        <div>
          <h3 className="text-lg tracking-widest">24 X 7 SERVICE</h3>
          <p className="text-sm tracking-wide text-gray-400">
            Free Shipping Worldwide
          </p>
        </div>
        <div>
          <h3 className="text-lg tracking-widest">FESTIVAL OFFER</h3>
          <p className="text-sm tracking-wide text-gray-400">
            Free Shipping Worldwide
          </p>
        </div>
      </div>
      {/* service */}

      {/* contact */}
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div>
          <h2 className="text-xl tracking-widest">LET&apos;S BE FRIENDS!</h2>
          <h3 className="text-sm tracking-wider text-gray-300">
            Nisi Nisi tempor consequat laboris nisi.
          </h3>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="h-16 w-[420px] border border-gray-300 py-5 pl-4 outline-gray-300 placeholder:text-gray-300"
            placeholder="Enter your email address"
          />
          <Button className="h-16 px-6" navigateTo="/" type="button">
            Subscribe
          </Button>
        </div>
      </div>
      {/* contact */}
    </section>
  );
}
export default MoreInfo;
