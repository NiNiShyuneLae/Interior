// import React from 'react'
import canada from "../assets/images/canadaOffice.jpg";

const About = () => {
  return (
    <section
      className="about pb-[90px] container ps-0 pe-0  data-section"
      id="about"
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-[10px]">
          <div>
            <div>
              <h1 className="font-Oswald text-headColor text-[40px] tracking-[10px] uppercase leading-5 mb-[50px]">
                About{" "}
                <span className="text-secondary tracking-[10px]"> bauen</span>
              </h1>
            </div>
            <div className=" leading-7 text-[16px]">
              <p className=" mb-5 text-textColor">
                Architecture viverra tristique justo duis vitae diam neque
                nivamus aestan ateuene artines aringianu atelit finibus viverra
                nec lacus. Nedana theme erodino setlie suscipe no curabit
                tristique.
              </p>
              <p className=" mb-5 text-textColor ">
                Design inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen.
              </p>
              <p className=" mb-5 text-textColor ">
                Planner inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen.
              </p>
            </div>
          </div>
          <div className=" mb-20">
            <div className="relative">
              <img
                src={canada}
                className="hover:scale-95 transition-all duration-500"
                alt=""
              />
              <div className="absolute text-center leading-6 md:-bottom-10 -bottom-7 right-6 lg:-bottom-10 w-[40%] text-[13px] lg:right-8 uppercase px-7 py-4 lg:px-[20px] lg:py-[15px] font-Oswald font-light tracking-[5px] bg-boxColor text-white">
                canada office
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
