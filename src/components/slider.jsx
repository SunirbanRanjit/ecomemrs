import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import {ApiSlides} from '../componentApi/SliderApi';
const Slider = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  //console.log(slides);
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    console.log(activeSlide);
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
 
 
  return (
    <div className="slider h-[500px] mobile:h-full my-2  bg-white flex items-center justify-between ">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "40px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-full h-full mobile:h-[200px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` } key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center my-5 items-center aspect-w-16 aspect-h-9">
                <img
                  
                  src={slide.src}
                  alt="man"
                />
                </div>
                
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "40px" }} />
      </div>
    </div>
  );
};

export default Slider;
