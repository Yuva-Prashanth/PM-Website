import React from "react";
import { useState, useEffect } from "react";
import "../../../pages/style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Modal from "./ProductModal";

const data = [
  {
    src: require("../../../Assets/Portfolio-Images/Posters/1.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/2.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/3.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/4.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/5.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/6.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/7.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/8.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/9.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/10.jpg"),
  },
  {
    src: require("../../../Assets/Portfolio-Images/Posters/11.jpg"),
  },
];

const alt = "Someting Error Happened!! Please Try Again";

function Product() {
  const [slide, setSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [portfolio, setPortfolio] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const openPortfolio = (idx) => {
    console.log("Model Click");
    setOpenModal((openModal) => {
      return !openModal;
    });
    setPortfolio(idx);
  };

  useEffect(() => {
    let intervalId;

    if (!openModal) {
      intervalId = setInterval(() => {
        setSlide((prevSlide) =>
          prevSlide === data.length - 1 ? 0 : prevSlide + 1
        );
      }, 4000);
    }

    return () => clearInterval(intervalId);
  }, [openModal]);
  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        portfolio={portfolio}
      />
      <div className="contactbackground">
        <h2 className="Workhead">
          Case Studies</h2>
        <div className="carousel">
          <BsArrowLeftCircleFill
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {data.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
                onClick={() => openPortfolio(idx)}
              />
            );
          })}
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          />
          <span className="indicators">
            {data.map((_, idx) => {
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
    </div>
  );
}

export default Product;
