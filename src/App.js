import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import { useSelector } from "react-redux";


function App() {
  const card = useSelector((state) => state.card.card);
  const totalAmouth = useSelector((state) => state.card.totalAmount);
  const totalPrice = useSelector((state) => state.card.totalPrice);

  console.log( "card", card)
  console.log( "totalAmouth",totalAmouth)
  console.log( "totalPrice",totalPrice)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>

          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
