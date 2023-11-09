import React, { useEffect } from "react";
import "./Modal.css";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const data = [
  [
    //1
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-1/11.jpg"),
    },
  ],
  [
    //2
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/12.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/13.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-2/14.jpg"),
    },
  ],
  [
    //3
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-3/12.jpg"),
    },
  ],
  [
    //4
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-4/11.jpg"),
    },
  ],
  [
    //5
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-5/12.jpg"),
    },
  ],
  [
    //6
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/12.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/13.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-6/14.jpg"),
    },
  ],
  [
    //7
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-7/11.jpg"),
    },
  ],
  [
    //8
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-8/12.jpg"),
    },
  ],
  [
    //9
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/12.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-9/13.jpg"),
    },
  ],
  [
    //10
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/12.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-10/13.jpg"),
    },
  ],
  [
    //11
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/2.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/3.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/4.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/5.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/6.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/7.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/8.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/9.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/10.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/11.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/12.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/13.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/14.jpg"),
    },
    {
      src: require("../../../Assets/Portfolio-Images/Portfolio-11/15.jpg"),
    },
  ],
];

const alt = "Something Error Happened!!! Please Try Again...";

const Modal = ({ open, onClose, portfolio }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data[portfolio].length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data[portfolio].length - 1 : prevSlide - 1
    );
  };

  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="model-carousel"
      >
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data[portfolio].map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data[portfolio].map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Modal;
