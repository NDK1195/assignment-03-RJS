function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex flex-col justify-between gap-6 px-6 py-[72px] tracking-wider sm:flex-row sm:items-center sm:gap-0 sm:px-0">
        {/* one column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white">CUSTOMER SERVICES</h3>

          <ul className="flex flex-col gap-1 text-sm text-gray-400 opacity-80">
            <li>
              <a href="">Help & Contact Us</a>
            </li>
            <li>
              <a href="">Returns & Refunds</a>
            </li>
            <li>
              <a href="">Online Stores</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        {/* one column */}

        {/* one column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white">COMPANY</h3>

          <ul className="flex flex-col gap-1 text-sm text-gray-400 opacity-80">
            <li>
              <a href="">What We Do</a>
            </li>
            <li>
              <a href="">Available Services</a>
            </li>
            <li>
              <a href="">Latest Posts</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
        {/* one column */}

        {/* one column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white">SOCIAL MEDIA</h3>

          <ul className="flex flex-col gap-1 text-sm text-gray-400 opacity-80">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Pinterest</a>
            </li>
          </ul>
        </div>
        {/* one column */}
      </div>
    </footer>
  );
}
export default Footer;
