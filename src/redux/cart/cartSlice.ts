import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces'
import { addProduct, removeProductFromCart  } from '../../utils/functions';

interface CartState {
    cartItems: IProduct[];
}

const initialState: CartState = {
  cartItems: [],
};



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddProduct: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addProduct(state.cartItems, action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.cartItems = removeProductFromCart(state.cartItems, action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
})
export const selectTotalPrice = (state: { cart: { cartItems: IProduct[] } }) => {
  return state.cart.cartItems.reduce((total, item) => {
    const itemQty = item.qty ?? 0; 
    return total + item.price * itemQty;
  }, 0);
};

// Action creators are generated for each case reducer function
export const {AddProduct, clearCart, removeProduct , deleteProduct} = cartSlice.actions

export default cartSlice.reducer