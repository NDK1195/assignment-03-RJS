function Input({ name, error, placeholder, onBlur, onFocus, type = "text" }) {
  return (
    <>
      <input
        type={type}
        className="w-full border-[0.5px] px-4 py-5 text-sm outline-none"
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        required
      />
      <p
        className={`my-1 ml-4 text-sm text-red-400 ${error ? "block" : "hidden"}`}
      >
        {error}
      </p>
    </>
  );
}
export default Input;
