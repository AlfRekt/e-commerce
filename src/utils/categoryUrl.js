export const getCategoryPath = (category) => {
  const gender = category.gender === "k" ? "kadin" : "erkek";
  const name = category.code.split(":")[1];
  return `/shop/${gender}/${name}/${category.id}`;
};