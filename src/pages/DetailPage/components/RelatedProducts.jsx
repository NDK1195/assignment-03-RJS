import Product from "../../../components/Product";

function RelatedProducts({ relatedProducts }) {
  return (
    <>
      <h3 className="mb-3 text-xl tracking-wide">RELATED PRODUCTS</h3>
      <div className="flex gap-3">
        {relatedProducts.map((product) => (
          <div className="max-w-[254px]" key={product["_id"]["$oid"]}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
export default RelatedProducts;
