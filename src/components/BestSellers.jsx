import Products from "./Products";

const bestSellerProducts = [
  { id: 1, image: "/product-1.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 2, image: "/product-2.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 3, image: "/product-3.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 4, image: "/product-4.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 5, image: "/product-5.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 6, image: "/product-6.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 7, image: "/product-7.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { id: 8, image: "/product-8.jpg", title: "Product Photo", department: "English Department", oldPrice: "16.48", newPrice: "6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
];

function BestSellers() {
  return (
    <section className="w-full px-6 py-12 md:px-[195px] md:py-24">
      <div className="mb-12 mx-auto max-w-[250px] flex flex-col items-center gap-2.5 text-center md:max-w-none">
        <span className="text-sm font-bold text-[#737373]">Featured Products</span>
        <h2 className="text-2xl font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <Products products={bestSellerProducts} />
    </section>
  );
}

export default BestSellers;