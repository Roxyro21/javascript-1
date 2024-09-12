function transformObjectToString(obj) {
    return obj.name + " (цена: $" + obj.price + ", количество: " + obj.quantity + ")";
}
function transformArrayToString(products) {
    return products.map(transformObjectToString).join(", ");
}
const products = [
  { name: "Laptop", price: 999.99, quantity: 3 },
  { name: "Phone", price: 499.99, quantity: 10 },
  { name: "Tablet", price: 299.99, quantity: 5 },
];

console.log(transformArrayToString(products));