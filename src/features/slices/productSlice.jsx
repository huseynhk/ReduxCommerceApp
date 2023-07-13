import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";


export const productsSlice = createSlice({
    name: "products",

    initialState : {
    filteredProducts:
    JSON.parse(localStorage.getItem("filteredData")) || storeData,

    singleProduct:
    JSON.parse(localStorage.getItem("singleProduct")) || storeData,
    error: false,
    },


    reducers:{
        filterProducts(state, action){
            try {
                const filter = storeData.filter(
                  (product) => product.type === action.payload
                );
                state.filteredProducts = filter;
                // console.log(filter)
                state.error = false;
                const savedState = JSON.stringify(filter);
                localStorage.setItem("filteredData", savedState);
              } catch (err) {
                return err;
              }
        },

        singleProduct(state, action) {
          try {
            const oneProduct = state.filteredProducts.filter(
              (product) => product.id === action.payload
            );
            state.singleProduct = oneProduct;
            const savedState = JSON.stringify(oneProduct);
            localStorage.setItem("singleProduct", savedState);
            // console.log(oneProduct)
          } catch (err) {
            return err;
          }
        },
    }
  
})
export const { filterProducts , singleProduct } = productsSlice.actions;
export default productsSlice.reducer;