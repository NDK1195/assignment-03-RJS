import Button from "../../../components/Button";
function Description({ longDesc }) {
  return (
    <div className="mb-20">
      <Button className="mb-4 px-7 py-4">DESCRIPTION</Button>
      <h3 className="mb-6 text-xl tracking-wide">PRODUCT DESCRIPTION</h3>
      <p className="max-w-[640px] whitespace-pre-wrap text-sm tracking-wide text-gray-400">
        {longDesc}
      </p>
    </div>
  );
}
export default Description;
