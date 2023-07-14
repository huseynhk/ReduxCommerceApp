import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cardSlice";

const Card = ({ openModal, setOpen }) => {
  const card = useSelector((state) => state.card.card);
  const totalPrice = useSelector((state) => state.card.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {card.length > 0 ? (
        <Fragment>
          <Dialog open={openModal} handler={() => setOpen(false)} className="border-0 outline-0">
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {card.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        ></img>
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected size:
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected color:
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Single Item Price:
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Total Item Prices:
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Total Price of All Products:
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog open={openModal} handler={() => setOpen(false)} className="border-0 outline-0">
          <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
            <div>
                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your bag is empty
                </h1>
                <p className="text-black text-base font-inter tracking-normal leading-none ">
                  Add some products
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => setOpen(false)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Card;
