// import React from 'react';
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import 'swiper/components/pagination/pagination.min.css';
import "swiper/css/navigation";
import bg1 from "../assets/images/bg-1.jpg";
import bg2 from "../assets/images/bg-2.jpg";
import Navbar from "../components/Navbar";
import "./Home.css";

SwiperCore.use([Autoplay]);

const Home = ({data}) => {
  return (
    <div className=" pb-[125px] data-section" id="home">
      <Navbar data={data}/>
      <div className="grid grid-cols-12">
        <div className="col-span-0 md:col-span-1 hidden md:block relative">
          <ul className=" icons absolute">
            <li className="icon">
              <a href="#">
                <i className="ti-facebook"></i>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <i className=" ti-twitter"></i>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <i className=" ti-linkedin"></i>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <i className=" ti-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-11 relative">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // navigation={{
            //   nextEl: ".next",
            //   prevEl: ".prev",
            //   clickable: true,
            // }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-content">
                <img
                  src={bg1}
                  className="h-screen slide-img contrast-125"
                  alt=""
                />
                <div className="slide-text text-end">
                  <p className="text-[30px] md:text-3xl mb-5 tracking-[10px] md:tracking-widest uppercase  font-Oswald animate__animated animate__fadeInUp">
                    Innovate design in <br /> Toronto{" "}
                  </p>
                  <p className=" small animate__animated animate__fadeInUp font-Didact">
                    Architecture viverra tellus nec massa dictum the euismoe.{" "}
                    <br />
                    Curabitur viverra the posuere aukue velit.
                  </p>
                  <a href="" className="">
                    <button className="animate__animated animate__fadeInUp animated-button font-Oswald font-light text-white">
                      BUY NOW
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <img
                  src={bg2}
                  className="h-screen slide-img contrast-125"
                  alt=""
                />
                <div className="slide-text text-end">
                  <p className="text-[30px] md:text-3xl mb-5 tracking-[10px] md:tracking-widest uppercase  font-Oswald animate__animated animate__fadeInUp">
                    Innovate design in <br /> Canada{" "}
                  </p>
                  <p className=" small animate__animated animate__fadeInUp font-Didact">
                    Architecture viverra tellus nec massa dictum the euismoe.{" "}
                    <br />
                    Curabitur viverra the posuere aukue velit.
                  </p>
                  <a href="#" className="">
                    <button className="animate__animated animate__fadeInUp animated-button font-Oswald font-light text-white">
                      BUY NOW
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-nav absolute">
            <button className="prev bg-transparent">
              <i className=" ti-angle-left"></i>
            </button>
            <button className="next bg-transparent">
              <i className=" ti-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <Portfolio /> */}
    </div>
  );
};

export default Home;
