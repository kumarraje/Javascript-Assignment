let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' to the beginning if it's not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' to the end if it's not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if allergic
let allergicToHoney = true;
if (allergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
