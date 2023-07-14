import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",

  initialState: {
    filteredProducts:
      JSON.parse(localStorage.getItem("filteredData")) || storeData,

    singleProduct:
      JSON.parse(localStorage.getItem("singleProduct")) || storeData,

    error: false,
  },

  reducers: {
    filterProducts(state, action) {
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

    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        const oneGenderType = gender.length > 0; // eger  1 gender secildise
        if (oneGenderType) { // tybda hemin genderin olub olmamagin check edir
          state.error = false;
          const saveState = JSON.stringify(gender);
          localStorage.setItem("filteredData", saveState); // eger secdiyin gender product typnda varsa true olacaq 
        } else {                                          // meselen dresses-de man yoxdur filteredProducts-da type secmisik artiq
          state.error = true;                 
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    sortByPrice(state) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {  // en az 2 element varsa islesin
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            localStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },

    sortByPriceDown(state) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ?  1 : -1
        );
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {  // en az 2 element varsa islesin
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            localStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },


    filterByColor(state, action) {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload) // gonderdiyim reng color arrainda movcuddursa
        );
        state.error = false;
        state.filteredProducts = color;
        if (color.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = color;
          const saveState = JSON.stringify(color);
          localStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
    filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = size;
        if (size.length <= 0) { // size-in sayi  productlar icinde 0-dan azdirsa
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          localStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
  },
});
export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  sortByPriceDown,
  filterByColor,
  filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
