import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";


export const productsSlice = createSlice({
    name: "products",

    initialState : {
    filteredProducts:
    JSON.parse(localStorage.getItem("filteredData")) || storeData,

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
    }
  
})

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;