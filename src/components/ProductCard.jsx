import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const { image, title, department, oldPrice, newPrice, colors = [] } = product;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="flex flex-col cursor-pointer items-center text-center transition-transform duration-300 hover:shadow-xl">
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2.5 py-6">
        <h3 className="text-base font-bold text-[#252B42]">{title}</h3>
        <span className="text-sm font-bold text-[#737373]">{department}</span>

        <div className="flex items-center gap-2 text-base font-bold">
          <span className="text-[#BDBDBD] line-through">${oldPrice}</span>
          <span className="text-[#23856D]">${newPrice}</span>
        </div>

        {/* Renk noktaları */}
        <div className="flex items-center gap-1.5">
          {colors.map((color) => (
            <span
              key={color}
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;