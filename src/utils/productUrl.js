const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
    .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getProductPath = (product, categories = []) => {
  const category = categories.find((c) => c.id === product.category_id);
  const gender = category?.gender === "k" ? "kadin" : category?.gender === "e" ? "erkek" : "unisex";
  const categoryName = category ? category.code.split(":")[1] : "product";
  return `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(product.name)}/${product.id}`;
};