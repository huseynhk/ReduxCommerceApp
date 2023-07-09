import React from "react";
import { Button, button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];


  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out"
              >
                {button}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="bg-black p-2 w-[60%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>

      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[75%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default NavigateButtons;