import ProductInfo from "./ProductInfo";

function YourOrder({ productList, totalPrice }) {
  return (
    <>
      <h3 className="mb-7 text-xl tracking-widest">YOUR ORDER</h3>

      {productList &&
        productList.map((product) => (
          <ProductInfo key={product["_id"]["$oid"]} product={product} />
        ))}

      <div className="mt-5 flex items-center justify-between">
        <h4 className="tracking-wide">TOTAL</h4>
        <p className="text-sm text-gray-400">
          {new Intl.NumberFormat("vi-VN").format(totalPrice)} VND
        </p>
      </div>
    </>
  );
}
export default YourOrder;
