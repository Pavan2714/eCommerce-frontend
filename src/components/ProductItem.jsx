import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, description, material }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-visible p-2 bg-transparent">
        <img
          className="w-full h-40 object-cover hover:scale-105 transition ease-in-out duration-300 shadow-xl "
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm font-semibold">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
      {description && (
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
      )}
      {material && (
        <p className="text-xs text-gray-400 mt-1">Material: {material}</p>
      )}
    </Link>
  );
};

export default ProductItem;
