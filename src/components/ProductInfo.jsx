import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

const COLORS = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

function ProductInfo({ product }) {
  const { name, rating, price, stock, description } = product;

  return (
    <div className="flex flex-col px-8 gap-3">
      {/* Başlık */}
      <h1 className="text-xl font-bold text-[#252B42]">{name}</h1>

      {/* Yıldızlar + reviews */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={20}
              className={
                s <= rating
                  ? "fill-[#F3CD03] text-[#F3CD03]"
                  : "fill-transparent text-[#F3CD03]"
              }
            />
          ))}
        </div>
        <span className="text-sm font-bold text-[#737373]">{rating?.toFixed(1)}</span>
      </div>

      {/* Fiyat */}
      <span className="text-2xl font-bold mt-2 text-[#252B42]">${price}</span>

      {/* Stok durumu */}
      <div className="flex items-center gap-2 text-sm font-bold">
        <span className="text-[#737373]">Availability :</span>
        <span className="text-[#23A6F0]">{stock > 0 ? "In Stock" : "Out of Stock"}</span>
      </div>

      {/* Açıklama */}
      <p className="text-sm leading-relaxed mt-5 text-[#858585]">{description}</p>

      {/* Ayraç */}
      <div className="border-t my-2 md:my-4 border-[#BDBDBD]" />

      {/* Renk seçenekleri */}
      <div className="flex items-center gap-2">
        {COLORS.map((color) => (
          <span
            key={color}
            className="h-8 w-8 cursor-pointer rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Aksiyon butonları */}
      <div className="flex items-center mt-8 md:mt-14 gap-2.5 mb-8">
        <button className="rounded bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1a8fd1]">
          Select Options
        </button>

        {[Heart, ShoppingCart, Eye].map((Icon, i) => (
          <button
            key={i}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] text-[#252B42] transition hover:bg-gray-50"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductInfo;