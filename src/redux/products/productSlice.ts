import { IProduct, IPageInfo } from './../../interfaces/index';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../data';

interface ProductState {
    products: IProduct[];
    pageInfo: IPageInfo;
}

const initialState: ProductState = {
    products: products,
    pageInfo: { 
        title: '',
        subtitle: '',
        image: '',
        icon: null,
      },
};



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload
      },
    setPageInfo: (state, action: PayloadAction<IPageInfo>) => {
        state.pageInfo = action.payload
      },
  
  },
})


// Action creators are generated for each case reducer function
export const {setProduct, setPageInfo } = productSlice.actions

export default productSlice.reducer