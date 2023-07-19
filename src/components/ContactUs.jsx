// import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto pb-[100px]">
        <h2 className="text-4xl font-normal font-Oswald mb-8 text-start py-3 sm:py-0">
          <span className="text-white tracking-[10px]">CONTACT </span>{" "}
          <span className="text-secondary tracking-[10px]">US</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-3 sm:col-span-1 animate__animated animate__fadeInUp  text-[16px] font-Didact">
            <p className="text-secondary font-normal mb-4">
              Bauen Architecture Firm
            </p>
            <p className="text-textColor mb-5" style={{ lineHeight: "1.7em" }}>
              Our firm nisl sodales sit amet sapien idea placerat <br /> sodales
              orcite. Vivamus ne miss rhoncus felis bauen architecture.
            </p>
            <p className="font-normal">
              <span className="text-secondary">VAT : </span>{" "}
              <span className="text-textColor"> USA002323065B06</span>
            </p>
          </div>
          <div className="col-span-3 sm:col-span-1 animate__animated animate__fadeInUp  text-[16px] font-Didact">
            <p className="text-secondary font-normal mb-4">Contact Details</p>
            <p className="font-normal">
              <span className="text-secondary">Phone : </span>{" "}
              <span className="text-textColor"> +1-203-123-0606</span>
            </p>
            <p className="font-normal my-5">
              <span className="text-secondary">Mail : </span>{" "}
              <span className="text-textColor"> architecture@bauen.com</span>
            </p>
            <p className="font-normal mb-5">
              <span className="text-secondary">Address : </span>{" "}
              <span className="text-textColor">
                {" "}
                24 King St, Charleston, 29401 USA
              </span>
            </p>
          </div>
          <div className="col-span-3 sm:col-span-1 animate__animated animate__fadeInUp delay  text-[16px] font-Didact">
            <p className="text-secondary font-normal mb-4">Contact Form</p>
            <form className="text-[16px] ">
              <input
                type="text"
                className="w-full text-textColor  py-[10px]   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="w-full text-textColor  py-[10px] my-[10px]   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent"
                placeholder="Your Email"
              />
              <textarea
                placeholder="Your Message"
                className="w-full text-textColor  py-[10px] mb-3   focus-visible:outline-none focus-visible:border-secondary  border-b-[1px] border-textColor bg-transparent h-[100px]"
                cols="40"
                rows="10"
              ></textarea>
              <button className="mt-6  ">
                <span className=" font-Oswald  font-light tracking-[3px] uppercase  btn-animation ">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
