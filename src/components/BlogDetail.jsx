import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BlogDetail.css";
import person from "../assets/images/Rober Misse.jpeg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlogDetail = () => {
  let { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="">
      <Navbar/>
      <div className="h-screen">
        <div className="detail-bg"></div>
        <div className="flex flex-col justify-center items-center pb-10 container mx-auto">
          <div className="p-3 flex flex-col justify-center items-center ">
            <div className="pb-8">
              <img
                src={state}
                className="lg:h-[650px] object-cover lg:w-[1100px] md:w-[680px] md:h-[400px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-start items-start lg:w-[90%] w-full">
              <h2 className="font-Oswald tracking-[3px] mb-8 text-secondary text-[35px] font-light uppercase text-start md:text-center">
                Modern Architecture Buildings
              </h2>
              <p className="text-textColor font-Didact font-normal text-[16px] mb-5 leading-7">
                Quisque pretium fermentum quam, sit amet cursus ante
                sollicitudin vel. Morbi consequat risus consequat, porttitor
                orci sit amet, iaculis nisl. Integer quis sapien nec elit
                ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis
                eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu
                nulla ac nisi cursus tincidunt. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Integer tristique sem eget leo
                faucibus porttitor. Suspendisse sagittis, magna sed varius
                iaculis tellus tortor non neque.
              </p>
              <p className="text-textColor font-Didact text-[16px] leading-7 mb-5">
                Nulla vitae metus tincidunt, varius nunc quis, porta nulla.
                Pellentesque vel dui nec libero auctor pretium id sed arcu. Nunc
                consequat diam id nisl blandit dignissim. Etiam commodo diam
                dolor, at scelerisque sem finibus sit amet. Curabitur id lectus
                eget purus finibus laoreet. Nam eget lectus ac sem luctus
                hendrerit sed nec magna. Maecenas vulputate magna sed nunc
                pellentesque, in consectetur nisi condimentum.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[60px] lg:w-[90%] w-full">
            <div className="md:col-span-7 lg:col-span-6 grid-cols-1 text-white flex items-start gap-6">
              <img src={person} className="w-[100px] h-[100px] rounded-full" />
              <div>
                <div className="mb-3">
                  <h2 className="text-secondary font-Didact text-[16px]">
                    Robert Misse
                  </h2>
                  <p className="text-textColor leading-[35px] text-[13px]">
                    October 2, 2021
                  </p>
                </div>
                <p className="text-textColor mb-5 font-Didact font-normal text-[16px] leading-7">
                  Photography ultricies nibh non dolor maximus sceleue inte
                  molliser faubs neque nec tincidunte aliquam erat volutpat.
                  Praeser tempor malade yap.
                </p>
                <p className="text-secondary flex items-center gap-0 cursor-pointer">
                  Reply
                  <i className="ti-back-left"></i>
                </p>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-2 hidden"></div>
            <div className="md:col-span-4 sm:col-span-1 text-white">
              <h2 className="text-secondary font-Didact font-normal text-[26px] mb-3">
                Leave a Reply
              </h2>
              <p className="text-[14px] text-textColor font-Didact font-normal leading-7">
                Your email address will not be published.
              </p>
              <p className="text-[14px] text-textColor font-Didact font-normal leading-7">
                Required fields are marked *
              </p>
              <form className="text-[16px] ">
                <input
                  type="text"
                  className="w-full text-boxColor  py-[10px]   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent"
                  placeholder="Your Name*"
                />
                <input
                  type="text"
                  className="w-full text-boxColor  py-[10px] my-[10px]   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent"
                  placeholder="Your Email*"
                />
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-2">
                  <input type="checkbox" className="check" />
                  <p className="text-textColor">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
                <textarea
                  placeholder="Your Comment*"
                  className="w-full text-boxColor  py-[10px] mb-3   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent h-[100px]"
                  cols="40"
                  rows="10"
                ></textarea>
                <button className="mt-6 overflow-hidden btn-animation ">
                  <span className=" font-Oswald   text-white font-light tracking-[3px] uppercase  ">
                    Post Comment
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;
