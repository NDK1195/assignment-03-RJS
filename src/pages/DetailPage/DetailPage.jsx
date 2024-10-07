import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

import Description from "./components/Description";
import RelatedProducts from "./components/RelatedProducts";

function DetailPage() {
  const { productId } = useParams();
  const productList = useSelector((state) => state.productList.productList);

  const product = productList.find(
    (product) => product["_id"]["$oid"] === productId,
  );

  const relatedProducts = productList.filter(
    (item) =>
      item.category === product.category && item["_id"]["$oid"] !== productId,
  );

  return (
    <div className="mt-10">
      <div className="mb-28 flex flex-col gap-6 md:flex-row">
        <div className="flex basis-1/2 gap-4">
          <div className="flex max-w-20 flex-col gap-3">
            <img src={product.img1} alt="product image" />
            <img src={product.img2} alt="product image" />
            <img src={product.img3} alt="product image" />
            <img src={product.img4} alt="product image" />
          </div>
          <div className="">
            <img src={product.img1} alt="product image" className="w-full" />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="mb-5 text-3xl">{product.name}</h2>
          <p className="mb-5 text-lg text-gray-400">
            {new Intl.NumberFormat("vi-VN").format(product.price)} VND
          </p>
          <p className="mb-5 tracking-wide text-gray-400">
            {product["short_desc"]}
          </p>

          <p className="mb-3 tracking-wide">
            CATEGORY:
            <span className="text-sm text-gray-400"> {product.category}</span>
          </p>

          <div className="relative flex w-[350px] items-center">
            <input
              type="number"
              min={0}
              max={100}
              placeholder="QUANTITY"
              className="h-9 w-full border border-gray-300 pl-4 text-sm italic tracking-wider outline-none"
            />
            <div className="absolute left-36">
              <div className="flex items-center gap-4">
                <span className="cursor-pointer">
                  <i className="fa-solid fa-caret-left"></i>
                </span>
                <span className="not-italic">1</span>
                <span className="cursor-pointer">
                  <i className="fa-solid fa-caret-right"></i>
                </span>
              </div>
            </div>
            <Button className="min-w-[125px] px-6 py-2 text-sm italic">
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <Description longDesc={product["long_desc"]} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
}
export default DetailPage;
