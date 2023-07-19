import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner.jpg";
import "../style/ServiceDetail.css";
import lackHouse from "../assets/images/lakeHouse.jpg";
import urbanHouse from "../assets/images/urbanHouse.jpg";
import lightHouse from "../assets/images/lightHouse.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ServiceArchitect = () => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="service__architecture  text-headColor">
        <div className="banner__head"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-4xl font-light text-secondary tracking-[3px] font-Oswald mb-6">
                ARCHITECTURE
              </h1>
              <p className="text-textColor leading-relaxed mb-4">
                Architecture non lorem ac erat suscipit bibendum. Nulla facilisi
                sedeuter nunc volutpat molli sapien veconseyer turpeutionyer
                masin libero sempe. Fusceler mollis augue sit amet hendrerit
                vestibulum. Duisteyerionyer venenatis lacus.
              </p>
              <p className="text-textColor leading-relaxed mb-5">
                Villa gravida eros ut turpis interdum ornare. Interdum et malesu
                they adamale fames ac anteipsun pimsinefaucibus urabitur arcu
                site feugiat in volutpat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
                <div className="img-hover-zoom">
                  <img src={urbanHouse} className=" hover:opacity-60" alt="" />
                </div>
                <div className="">
                  <div className="img-hover-zoom">
                    <img src={lackHouse} className="opacity-60" alt="" />
                  </div>
                </div>
                <div className="col-span-2 img-hover-zoom">
                  {" "}
                  <img
                    src={lightHouse}
                    className=" hover:opacity-60 "
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" bg-[rgb(49,49,49)] px-5 py-7">
                <h1 className="uppercase tracking-[3px] text-[20px] font-Oswald font-light text-headColor mb-3">
                  all services
                </h1>
                <div className="line2"></div>
                <ul className=" font-Didact text-[16px]">
                  <li
                    className={`flex text-textColor items-center justify-between  ${
                      activeItem === 0 ? "service-active" : ""
                    } hover:bg-secondary  px-4 py-3 mb-2 transition-all duration-500 hover:text-white `}
                    onClick={() => setActiveItem(0)}
                  >
                    <a href="" className=" ">
                      Architecture
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className={`flex items-center justify-between ${
                      activeItem === 1 ? "service-active" : ""
                    } hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor`}
                    onClick={() => setActiveItem(1)}
                  >
                    <a href="" className=" ">
                      Interior Design
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className={`flex items-center justify-between ${
                      activeItem === 2 ? "service-active" : ""
                    } hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor`}
                    onClick={() => setActiveItem(2)}
                  >
                    <a href="" className=" ">
                      Urban Design
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className={`flex items-center justify-between ${
                      activeItem === 3 ? "service-active" : ""
                    } hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor`}
                    onClick={() => setActiveItem(3)}
                  >
                    <a href="" className=" ">
                      Planning
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className={`flex items-center justify-between ${
                      activeItem === 4 ? "service-active" : ""
                    } hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor`}
                    onClick={() => setActiveItem(4)}
                  >
                    <a href="" className=" ">
                      3D Modeling
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className={`flex items-center justify-between ${
                      activeItem === 5 ? "service-active" : ""
                    } hover:bg-secondary px-4 py-3 mb-2 transition-all duration-500 hover:text-white text-textColor`}
                    onClick={() => setActiveItem(5)}
                  >
                    <a href="" className=" ">
                      Decor Plan
                    </a>
                    <MdKeyboardArrowRight />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ServiceArchitect;
