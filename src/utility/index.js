//get product
const getProduct = () => {
  const cartList = localStorage.getItem("cart");
  if (cartList) {
    return JSON.parse(cartList);
  } else {
    return [];
  }
};

// add product
const addProduct = (product) => {
  const cartList = getProduct();
  const isExist = cartList.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) {
    alert("Product already added to cart");
  }

  cartList.push(product);
  localStorage.setItem("cart", JSON.stringify(cartList));
  //   console.log(product);
};

export { addProduct };
