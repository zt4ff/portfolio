import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

const TitleRow = () => {
  const titles = [
    "Web Develelopment",
    "Technical Writing",
    "Developer Advocacy",
    "Mentoring",
    "Documentation",
    "Open Source",
    "Quality Assurance",
  ];

  const options = {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    direction: "vertical",
    centeredSlides: true,
  };

  SwiperCore.use([Autoplay, EffectFade]);

  return (
    <Swiper className="test w-100" style={{ height: "50vh" }} {...options}>
      {titles.map((title) => (
        <SwiperSlide key={title}>
          {({ isActive, isNext, isPrev }) => {
            if (isActive) console.log(title)
            return <p style={{
                marginLeft: isActive ? 25 : 0,
                opacity: isActive ? 1 : 0.5 
            }} className={`large-font ${isActive ? 'mr-1' : ''}`}>{title}</p>;
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Summary = () => {
  return (
    <div>
      <h1>Hi, My name is Kayode Oluwasegun</h1>
      <p>I like creating things</p>
    </div>
  );
};

export const About = () => {
  return (
    <div style={{ color: "red" }} className="height-100">
      <div className="row h-100">
        <div className="col-lg-6 h-100 p-lg-5 d-flex justify-content-center align-items-center">
          <Summary />
        </div>
        <div className="col-lg-6 h-100 p-lg-5 d-flex justify-content-center align-items-center">
          <TitleRow />
        </div>
      </div>
    </div>
  );
};
