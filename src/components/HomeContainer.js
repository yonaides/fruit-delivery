import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full overflow-x-hidden"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="Delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headinColor">
          The fastest delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="HeroBg"
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-40 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  alt="img"
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                />
                <p className="text-base lg:text-xl font-semibold text-textcolor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semobold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$ </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="p-2 flex-1"></div>
    </section>
  );
}

export default HomeContainer;
