import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-3 text-3xl">Something went wrong !!!</h2>
      <Link to={"/"} className="text-active">
        Back to Home
      </Link>
    </div>
  );
}
export default Error;
