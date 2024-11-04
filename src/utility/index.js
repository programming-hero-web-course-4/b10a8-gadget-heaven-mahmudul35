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
  } else {
    cartList.push(product);
    localStorage.setItem("cart", JSON.stringify(cartList));
  }
  //   console.log(product);
};

//delete product
const deleteProduct = (id) => {
  const cartList = getProduct();
  const updatedCart = cartList.filter((item) => item.product_id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  if (wishlist) {
    return JSON.parse(wishlist);
  } else {
    return [];
  }
};

const addWishlist = (product) => {
  const wishlist = getWishlist();
  const isExist = wishlist.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) {
    alert("Product already added to wishlist");
  } else {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

const deleteWishlist = (id) => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter((item) => item.product_id !== id);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
};

export {
  addProduct,
  getProduct,
  deleteProduct,
  addWishlist,
  getWishlist,
  deleteWishlist,
};
