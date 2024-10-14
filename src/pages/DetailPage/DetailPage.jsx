import { useParams } from "react-router-dom";

import Description from "./components/Description";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import RelatedProducts from "./components/RelatedProducts";
import { useSelector } from "react-redux";

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
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </div>

      <Description longDesc={product["long_desc"]} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
}
export default DetailPage;
