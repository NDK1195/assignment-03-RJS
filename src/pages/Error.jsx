import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2 className="">Something went wrong !!!</h2>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
}
export default Error;
