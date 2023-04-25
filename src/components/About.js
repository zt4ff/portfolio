import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

const TitleRow = () => {
  const titles = [
    "Web Develelopment 🌐",
    "Technical Writing 🖊️",
    "Developer Advocacy 🗣️",
    "Mentoring 🪧",
    "Documentation 📝",
    "Open Source 📖",
    "Quality Assurance 💯",
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
    <Swiper className="w-100" style={{ height: "50vh" }} {...options}>
      {titles.map((title) => (
        <SwiperSlide className="text-center" key={title}>
          {({ isActive, isNext, isPrev }) => {
            return (
              <p
                style={{
                  opacity: isActive ? 1 : 0.5,
                }}
                className={`large-font`}
              >
                {title}
              </p>
            );
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Summary = () => {
  return (
    <div className="text-center">
      <h1>
        Hi, My name is{" "}
        <span className="text-primary"> Kayode Oluwasegun Timothy </span>👋
      </h1>
      <p>
        I like to create solid and scalable frontend products with great user
        experiences.
      </p>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <div className="row">
        <div
          style={{ margin: "100px 0" }}
          className="col-lg-6 h-90 d-flex justify-content-center align-items-center"
        >
          <Summary />
        </div>
        <div
          style={{ margin: "100px 0" }}
          className="col-lg-6 h-90 d-flex justify-content-center align-items-center"
        >
          <TitleRow />
        </div>
      </div>
    </div>
  );
};
