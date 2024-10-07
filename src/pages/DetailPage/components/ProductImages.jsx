import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductImages({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathname = useLocation();

  const imageList = [product.img1, product.img2, product.img3, product.img4];

  // reset current idex when change route
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [pathname]);

  return (
    <div className="flex basis-1/2 gap-4">
      <div className="flex max-w-20 flex-col gap-3">
        {imageList.map((image, index) => (
          <img
            src={image}
            alt="product image"
            className={`${index === currentImageIndex ? "border-2" : ""} cursor-pointer`}
            key={index}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      <div>
        <img
          src={imageList[currentImageIndex]}
          alt="product image"
          className="w-full"
        />
      </div>
    </div>
  );
}
export default ProductImages;
