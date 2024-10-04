function Banner({ name }) {
  return (
    <div className="mb-12 flex items-center justify-between bg-background px-10 py-14">
      <h3 className="text-2xl font-medium uppercase tracking-wide">{name}</h3>
      <h4 className="text-lg uppercase tracking-wide text-gray-400">{name}</h4>
    </div>
  );
}
export default Banner;
