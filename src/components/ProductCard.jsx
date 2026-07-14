import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductPath } from "../utils/productUrl";

const COLORS = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

function ProductCard({ product }) {
  const navigate = useNavigate();
  const categories = useSelector((s) => s.product.categories);
  const { id, name, description, price, images = [] } = product;
  const image = images[0]?.url;

  return (
    <div
      onClick={() => navigate(getProductPath(product, categories))}
      className="flex cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
    >
      <div className="aspect-[2/3] w-full overflow-hidden bg-[#E5E5E5]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col items-center gap-2.5 py-6">
        <h3 className="text-base font-bold text-[#252B42]">{name}</h3>
        <span className="line-clamp-1 text-sm font-bold text-[#737373]">{description}</span>
        <span className="text-base font-bold text-[#23856D]">${price.toFixed(2)}</span>

        <div className="flex items-center gap-1.5">
          {COLORS.map((color) => (
            <span key={color} className="h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;