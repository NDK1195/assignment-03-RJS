function Wrapper({ children }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
      {children}
    </div>
  );
}
export default Wrapper;
