import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import myNotes1 from "../assets/1.jpg";
import myNotes2 from "../assets/2.jpg";
import myNotes3 from "../assets/3.jpg";
const ImgSlider = () => {
  return (
    <>
    <div className="container flex mx-auto bg-white lg:my-28 h-96">
  <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
    <div className="lg:text-left">
      <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
        Welcome to <span className="text-indigo-600"> My Notes</span>
      </h2>
      <p className="mt-2 text-sm text-gray-500 md:text-base lg:text-left">
      Full Stack Development ka ek brand new course leke a rha hu, full course simple aur hindi bhasa mein. Backend front-end <span className="text-indigo-600">React JS Node JS Tailwind for Style </span> agar acha lga ho toh comment krna, kosis karunga ki jaldi se full course ka tutorial <span className="text-red-600">codingKiPatsala</span> la saku.
      </p>
      
    </div>
  </div>
  <div
    className="hidden lg:block lg:w-1/2"
    style={{clipPath:"polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}
  >
    
      
<div className="object-cover h-full ">
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    showArrows={false}
  >
    <div>
      <img src={myNotes1} alt=" myNotes "  className="h-96" />
    </div>
    <div>
      <img src={myNotes2} alt=" ground"  className="h-96" />
    </div>
    <div>
      <img src={myNotes3} alt=" students" className="h-96" />
    </div>
  </Carousel>
  <div className="h-full bg-black opacity-25"></div>
  </div>
      <div className="h-full bg-black opacity-25"></div>
    </div>
  </div>
    </>
  );
};

export default ImgSlider;
