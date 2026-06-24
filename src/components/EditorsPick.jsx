const categories = [
  { id: 1, label: "MEN", img: "/editor-men.jpg", span: "md:col-span-2 md:row-span-2", h: "h-128" },
  { id: 2, label: "WOMEN", img: "/editor-women.jpg", span: "md:col-span-1 md:row-span-2", h: "h-128" },
  { id: 3, label: "ACCESSORIES", img: "/editor-accessories.jpg", span: "md:col-span-1 md:row-span-1", h: "h-72" },
  { id: 4, label: "KIDS", img: "/editor-kids.jpg", span: "md:col-span-1 md:row-span-1", h: "h-72" },
];

function EditorsPick() {
  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-16 md:px-[195px] md:py-24">
      {/* Başlık */}
      <div className="mb-15 flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-bold text-[#252B42]">EDITOR'S PICK</h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Kart grid'i */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2 md:[grid-auto-flow:dense]">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`relative ${cat.h} overflow-hidden md:h-auto ${cat.span}`}
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="h-full w-full object-cover"
            />
            {/* Beyaz buton */}
            <span className="absolute bottom-5 left-5 bg-white px-10 py-2 text-sm font-bold text-[#252B42] whitespace-nowrap">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EditorsPick;