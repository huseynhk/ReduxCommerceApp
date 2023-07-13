import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState: {
      card: [],
      amount: 0,
      totalAmount: 0,
      totalPrice: 0,
    },
    reducers: {
        addToCard(state, action) {
            const productId = action.payload;
            try {
              const exist = state.card.find(
                (product) =>
                  product.id === productId.id &&
                  product.size === productId.size &&
                  product.color === productId.color
              );
              if (exist) {
                exist.amount++; // exist olan product sayini artir
                exist.totalPrice += productId.price; // exist olan product sayinin price-ni topla
                state.totalAmount++; // state-deki totalAmount-u artir yani opsi ayri ayri product-u bir yere topla
                state.totalPrice += productId.price; // opsi exist olan mallarin hamisini topla
              }
              // Product movcuddursa artiq if isleyecek eks halda else isleyecek ve productu Create edecek
              
              else {
                state.card.push({
                  id: productId.id,
                  price: productId.price,
                  size: productId.size,
                  amount: 1,
                  img: productId.img,
                  totalPrice: productId.price,
                  name: productId.name,
                  text: productId.text,
                  color: productId.color,
                });
                state.totalAmount++;
                state.totalPrice += productId.price;
              }
            } catch (err) {
              return err;
            }
          },
    }
})



export const { addToCard } = cardSlice.actions;
export default cardSlice.reducer;