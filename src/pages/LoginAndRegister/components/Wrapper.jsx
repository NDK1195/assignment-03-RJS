function Wrapper({ children }) {
  return (
    <div className="relative min-h-dvh bg-banner bg-contain bg-repeat-y">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] rounded-md bg-white px-14 py-16 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Wrapper;
