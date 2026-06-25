function ProductCard({ product }) {
  const { image, title, department, oldPrice, newPrice, colors = [] } = product;

  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="h-[430px] w-full object-cover md:h-auto object-contain"
      />

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