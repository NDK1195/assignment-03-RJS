function ProductInfo({ product }) {
  return (
    <>
      <div className="my-2 flex items-center justify-between gap-3">
        <h4 className="text-sm tracking-wide">{product.name}</h4>
        <p className="text-right text-xs text-gray-400">
          {new Intl.NumberFormat("vi-VN").format(product.price)} VND x
          {product.quantity}
        </p>
      </div>
      <hr className="h-[1px] w-full" />
    </>
  );
}
export default ProductInfo;
