import ProductCard from "./ProductCard";

function Products({ products = [], view = "grid" }) {
  if (products.length === 0) return null;

  const layout =
    view === "list"
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid px-2 gap-8 ${layout}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;