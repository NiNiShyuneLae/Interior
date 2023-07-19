import React, { useEffect, useRef, useState } from "react";
import "../pages/Contact.css";
import icon1 from "../assets/images/1.png";
import icon2 from "../assets/images/2.png";
import icon3 from "../assets/images/3.png";
import icon4 from "../assets/images/4.png";
import icon5 from "../assets/images/5.png";
import icon6 from "../assets/images/6.png";
import control from "../assets/icons/control-play.svg";
import person1 from "../assets/images/JasonBrown.jpg";
import person2 from "../assets/images/EmilyWhite.jpg";
import person3 from "../assets/images/JesicaSmith.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PromoVideo.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const PromoVideo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const breakpoints = {

    768: {
      slidesPerView: 3,
      spaceBetween : 0
    },
    1024: {
      slidesPerView: 4,
      spaceBetween : 30
    }
  };

  return (
    <div className="py-3">
      <div className="bg ">
        <div className="content md:h-[700px] lg:h-[550px] relative  pt-[90px]    bg-boxColor  bg-opacity-40">
          <div className="flex md:flex-row gap-8 lg:gap-4 md:gap-0 flex-col items-center min-h-screen lg:justify-center md:justify-between p-4 lg:p-0 md:items-start relative">
            <div className="flex flex-col  gap-3  md:w-1/3 w-full">
              <div>
                <button
                  onClick={handleOpenModal}
                  className="w-[85px]  border-white h-[85px] bg-secondary rounded-full transition duration-200"
                >
                  <img
                    src={control}
                    className="h-[45px] m-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </button>
                {showModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <span
                        className="close text-end"
                        onClick={handleCloseModal}
                      >
                        &times;
                      </span>
                      <iframe
                        src="https://www.youtube.com/embed/RziCmLzpFNY?autoplay=1"
                        frameBorder="0"
                        className=" md:w-[680px] md:h-[480px] w-[350px] h-[250px]"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              <p className="uppercase  font-Oswald font-light text-white tracking-[5px] text-xl">
                View Promo Video
              </p>
            </div>
            <div className=" bg-primary py-[35px] px-[20px] lg:py-[60px]  lg:px-[45px]  lg:z-10 animate__animated animate__fadeInUp">
              <p className=" text-white uppercase font-light mb-5 font-Oswald text-[20px] tracking-[5px] border-b border-boxColor pb-4">
                What Clients Say?
              </p>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper select-none lg:w-[365px] md:w-[250px] w-[300px]"
              >
                <SwiperSlide>
                  <div className="mb-8">
                    <p className="text-textColor mb-5 font-normal text-base leading-[1.75em]">
                      Architect dapibus augue metus the nec feugiat erat
                      hendrerit nec. Duis ve ante the lemon sanleo nec
                      feugiat erat hendrerit necuis ve ante.
                    </p>
                    <div className="flex flex-row items-center gap-3 mt-8 mb-10">
                      <img
                        src={person1}
                        className="w-[55px] h-[55px] rounded-full"
                      />
                      <div className="">
                        <p className="font-Didact font-normal text-secondary text-base pt-2">
                          Jason Brown
                        </p>
                        <p className="font-Didact font-normal text-textColor text-base">
                          Crowne Plaza Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-8">
                    <p className="text-textColor mb-5 font-normal text-base leading-[1.75em]">
                      Interior dapibus augue metus the nec feugiat erat
                      hendrerit nec. Duis ve ante the lemon sanleo nec feugiat
                      erat hendrerit necuis ve ante.
                    </p>
                    <div className="flex flex-row items-center gap-3 mt-8 mb-10">
                      <img
                        src={person2}
                        className="w-[55px] h-[55px] rounded-full"
                      />
                      <div className="">
                        <p className="font-Didact font-normal text-secondary text-base pt-2">
                          Emily White
                        </p>
                        <p className="font-Didact font-normal text-textColor text-base">
                          Armada Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-8">
                    <p className="text-textColor mb-5 font-normal text-base leading-[1.75em] ">
                      Urban dapibus augue metus the nec feugiat erat hendrerit
                      nec. Duis ve ante the lemon sanleo nec feugiat erat
                      hendrerit necuis ve ante.
                    </p>
                    <div className="flex flex-row items-center gap-3 mt-8 mb-10">
                      <img
                        src={person3}
                        className="w-[55px] h-[55px] rounded-full"
                      />
                      <div className="">
                        <p className="font-Didact font-normal text-secondary text-base pt-2">
                          Jesica Smith
                        </p>
                        <p className="font-Didact font-normal text-textColor text-base">
                          Alsa Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0   md:p-[20px]  bg-boxColor right-0">
            <div className="md:me-[500px] me-0">
              <Swiper
              breakpoints={breakpoints}
              slidesPerView={3}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper  lg:w-[500px] md:w-[400px] w-full overflow-hidden md:me-auto"
              >
                <SwiperSlide>
                  <div className="">
                    <img src={icon1} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src={icon2} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src={icon3} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src={icon4} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src={icon5} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src={icon6} className="h-[85px] lg:h-[85px] md:h-[100px]" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
