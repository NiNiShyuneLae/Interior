// import React from 'react'
import "../style/Services.css";
import iconOne from "../assets/images/icon-1.png";
import iconTwo from "../assets/images/icon-2.png";
import iconThree from "../assets/images/icon-3.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services data-section" id="services">
      <div className="lg:container px-5 pb-[100px]">
        <div className="grid grid-cols-1 ">
          <div className="service__head mb-20">
            <h1 className="font-Oswald  text-headColor text-4xl">
              OUR <span className="text-secondary ">SERVICES</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items gap-3">
          <Link to={"/serviceDetail"}>
            <div className="item px-7 py-14 md:py-12  cursor-pointer  transition-all duration-100 relative">
              <div>
                <img src={iconOne} className="w-16 mb-4" alt="" />
              </div>
              <h1 className="uppercase font-Oswald tracking-[5px] text-[16px] font-light text-headColor mb-5">
                architecture
              </h1>
              <div className="line"></div>
              <p className="leading-7 text-[16px] text-textColor">
                Architecture bibendum eros eget lacus the vulputate sit amut
                vehicuta nibhen ulicera in the vitae miss.
              </p>
              <div className="num">01</div>
            </div>
          </Link>
          <Link to={"/serviceDetail"}>
            <div className="item px-7 py-14 md:py-12  cursor-pointer  transition-all duration-100 relative">
              <div>
                <img src={iconTwo} className="w-16 mb-4" alt="" />
              </div>
              <h1 className="uppercase font-Oswald tracking-[5px] text-[16px] font-light text-headColor mb-5">
                interior
              </h1>
              <div className="line"></div>
              <p className="leading-7 text-[16px] text-textColor ">
                Interior bibendum eros eget lacus the vulputate sit amut
                vehicuta nibhen ulicera in the vitae miss.
              </p>
              <div className="num">02</div>
            </div>
          </Link>
          <Link to={"/serviceDetail"}>
            <div className="item px-7 py-14 md:py-12  cursor-pointer  transition-all duration-100 relative">
              <div>
                <img src={iconThree} className="w-16 mb-4" alt="" />
              </div>
              <h1 className="uppercase font-Oswald tracking-[5px] text-[16px] font-light text-headColor mb-5">
                urban
              </h1>
              <div className="line"></div>
              <p className="leading-7 text-[16px] text-textColor ">
                Urban bibendum eros eget lacus the vulputate sit amut
                vehicuta nibhen ulicera in the vitae miss.
              </p>
              <div className="num">03</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
