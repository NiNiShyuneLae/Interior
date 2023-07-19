import React from "react";
import "./BlogCard.css";
import home1 from "../assets/images/bg-1.jpg";
import home2 from "../assets/images/bg-2.jpg";
import home3 from "../assets/images/stonyaVilla.jpg";
import home4 from "../assets/images/primeHotel.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const breakpoints = {

    640: {
      slidesPerView: 1,
      slidesPerGroup:1
    },
    768:{
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween : 30
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup:2
    }
  };
  return (
    <div className="select-none container mx-auto pb-[100px]">
      <h2 className="font-Oswald text-center font-normal text-[40px] uppercase tracking-[10px] mb-8">
        <span className="text-white">Current</span>{" "}
        <span className="text-secondary">News</span>
      </h2>
      <div className="">
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
          modules={[Pagination]}
          
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/blogdetail"} state={home1}>
              <div className="blogCard cursor-pointer">
                <img src={home1} className="h-[280px] w-[550px] md:h-[220px] lg:h-[320px]" alt="" />
                <div className="bg-boxColor p-4 pb-6 mx-auto bar">
                  <p className="cursor-pointer text-[12px] font-normal text-textColor font-Didact tracking-[1px]">
                    <span className="transition duration-200 hover:text-secondary ">
                      Architecture&ensp;
                    </span>
                    <span>-&ensp;September 30, 2021</span>
                  </p>
                  <h2 className="text-secondary font-Oswald text-[25px] font-light tracking-[1px]">
                    Modern Architectural Structures
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/blogdetail"} state={home2}>
              <div className="blogCard cursor-pointer">
                <img src={home2} className="md:h-[220px] lg:h-[320px] h-[280px] w-[550px]" alt="" />
                <div className="bg-boxColor p-4 pb-6 mx-auto bar">
                  <p className="cursor-pointer text-[12px] font-normal text-textColor font-Didact tracking-[1px]">
                    <span className="transition duration-200 hover:text-secondary ">
                      Interior&ensp;
                    </span>
                    <span>-&ensp;September 26, 2021</span>
                  </p>
                  <h2 className="text-secondary font-Oswald text-[25px] font-light tracking-[1px]">
                  Modernism in Architecture
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/blogdetail"} state={home3}>
              <div className="blogCard cursor-pointer">
                <img src={home3} className="md:h-[220px] lg:h-[320px] h-[280px] w-[550px]" alt="" />
                <div className="bg-boxColor p-4 pb-6 mx-auto bar">
                  <p className="cursor-pointer text-[12px] font-normal text-textColor font-Didact tracking-[1px]">
                    <span className="transition duration-200 hover:text-secondary ">
                      Urban&ensp;
                    </span>
                    <span>-&ensp;September 19, 2021</span>
                  </p>
                  <h2 className="text-secondary font-Oswald text-[25px] font-light tracking-[1px]">
                  Postmodern Architecture
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/blogdetail"} state={home4}>
              <div className="blogCard cursor-pointer">
                <img src={home4} className="md:h-[220px] lg:h-[320px] h-[280px] w-[550px]" alt="" />
                <div className="bg-boxColor p-4 pb-6 mx-auto bar">
                  <p className="cursor-pointer text-[12px] font-normal text-textColor font-Didact tracking-[1px]">
                    <span className="transition duration-200 hover:text-secondary ">
                      Planning&ensp;
                    </span>
                    <span>-&ensp;September 12, 2021</span>
                  </p>
                  <h2 className="text-secondary font-Oswald text-[25px] font-light tracking-[1px]">
                  Modern Architecture Buildings
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogCard;
