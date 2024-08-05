import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/pic1.jpg";
import profilePic2 from "../../img/pic2.jpg";
import profilePic3 from "../../img/pic3.jpg";
import profilePic4 from "../../img/pic4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Highly recommend for their professionalism and exceptional quality of work. They delivered on time and with outstanding results." ,
    },
    {
      img: profilePic2,
      review:
        "A fantastic experience from start to finish. The design solutions were both innovative and practical." ,
    },
    {
      img: profilePic3,
      review:
        "Exceptional service and creative solutions that elevated our project to the next level. Highly impressed!" ,
    },
    {
      img: profilePic4,
      review:
        "Outstanding work and seamless communication. The project was delivered on time and far surpassed our expectations." ,
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
