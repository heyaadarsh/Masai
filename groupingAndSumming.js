function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function sortedCategoriesByCount(categories) {
  return Object.entries(countCategories(categories))
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
console.log(sortedCategoriesByCount(input));
