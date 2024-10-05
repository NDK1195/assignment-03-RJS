function Pagination({ sortedProducts }) {
  return (
    <>
      <div className="mb-2 flex items-center justify-end">
        <span className="flex size-10 cursor-pointer items-center justify-center border border-r-0 p-3">
          <i className="fa-solid fa-angles-left"></i>
        </span>
        <span className="flex size-10 items-center justify-center bg-black p-3 text-white">
          1
        </span>
        <span className="flex size-10 cursor-pointer items-center justify-center border border-l-0 p-3">
          <i className="fa-solid fa-angles-right"></i>
        </span>
      </div>

      <p className="text-right text-sm text-gray-400">
        Showing{" "}
        {sortedProducts.length > 1
          ? `1 - ${sortedProducts.length}`
          : sortedProducts.length}{" "}
        of {sortedProducts.length} results
      </p>
    </>
  );
}
export default Pagination;
