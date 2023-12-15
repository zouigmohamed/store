import { IProduct } from "../interfaces";

export const addProduct = (cartItems: IProduct[], product: IProduct) => {
  //* If the product already exists, increase its quantity
  const existingProduct = cartItems.find((item) => item.id === product.id);

  if (existingProduct) {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: (item.qty || 0) + 1 } : item
    );
    return updatedCart;
  }

  //* If the product does not exist, add it to the cart with quantity 1
  return [...cartItems, { ...product, qty: 1 }];
};


//* Utility function to remove a product from the cart
export const removeProductFromCart = (cartItems: IProduct[], productId: string): IProduct[] => {
  const existingProduct = cartItems.find((item) => item.id === productId);

  if (existingProduct) {
    const newQty = existingProduct.qty !== undefined ? existingProduct.qty - 1 : undefined;

    if (newQty && newQty > 0) {
      return cartItems.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      );
    } else {
      // Remove the item if its quantity is 1 or undefined
      return cartItems.filter((item) => item.id !== productId);
    }
  }

  // If the product is not found, return the original array
  return cartItems;
};




