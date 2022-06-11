import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NoFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems, }, dispatch] = useStateValue();

  const addToCart = (item) => {
    setItems([...cartItems, item]);

    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, item],
    });

    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data !== null && data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-12 shadow-md backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
            >
              <div className="w-full flex items-center gap-3 justify-between">
                <motion.div
                  className="w-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                  onClick={() => addToCart(item)}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500"> $</span>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NoFound} alt="" className="h-340" />
          <p className="text-xl text-headingColor font-semibold">
            Item not avaliable
          </p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;
