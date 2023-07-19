import React, { useEffect, useState } from "react";
import bg1 from "../assets/images/bg-1.jpg";
import bg2 from "../assets/images/bg-2.jpg";
import stonya from "../assets/images/stonyaVilla.jpg";
import prime from "../assets/images/primeHotel.jpg";
import "../style/PorfolioDetail.css";
import ImageOverlay from "../components/ImageOverlay";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PorfolioDetail = () => {
  //image overlay
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //image array
  const images = [bg1, bg2, stonya, prime];

  //next overlay image
  const handleNextImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  //previous overlay image
  const handlePreviousImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  //image overlay closing
  const handleClose = () => {
    setSelectedImage(null);
  };

  //next and pre page rendering
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === 4 ? 1 : prevPage + 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 4 : prevPage - 1));
  };

  const getPageContent = (page) => {
    switch (page) {
      case 1:
        return <span>ARMADA CENTER</span>;
      case 2:
        return <span>STONYA VILLA</span>;
      case 3:
        return <span>PRIME HOTEL</span>;
      case 4:
        return <span>LAKE HOUSE</span>;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Navbar/>
      <section className="porfolio">
        <div className="banner__head w-[100%] md:w-[94%] "></div>
        <div className="container mb-20  mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 mb-10">
            <div className="md:col-span-2">
              <h1 className="tracking-[3px] mb-7 font-light text-4xl uppercase font-Oswald text-secondary">
                {getPageContent(currentPage)}
              </h1>
              <p className="font-Didact  mb-5 text-textColor leading-relaxed">
                Architecture non lorem ac erat suscipit bibendum. Nulla
                facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer
                turpeutionyer masin libero sempe. Fusceler mollis augue sit amet
                hendrerit vestibulum. Duisteyerionyer venenatis lacus.
              </p>
              <p className="font-Didact text-textColor leading-relaxed">
                Villa gravida eros ut turpis interdum ornare. Interdum et malesu
                they adamale fames ac anteipsu pimsine faucibus. Curabitur arcu
                site feugiat in tortor in, volutpat sollicitudin libero.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="mb-5">
                <p className="text-secondary text-medium font-Didact">
                  Year : <span className="text-textColor">2022</span>
                </p>
              </div>
              <div className="mb-5">
                <p className="text-secondary text-medium font-Didact">
                  Company :{" "}
                  <span className="text-textColor">Prime International</span>
                </p>
              </div>
              <div className="mb-5">
                <p className="text-secondary text-medium font-Didact">
                  Project Name :{" "}
                  <span className="text-textColor">
                    {getPageContent(currentPage)}
                  </span>
                </p>
              </div>
              <div className="mb-5">
                <p className="text-secondary text-medium font-Didact">
                  Location :{" "}
                  <span className="text-textColor">Prime oronto, Canada</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-0 md:gap-7 md:grid-cols-2 text-textColor">
            {images?.map((image, index) => (
              <div
                key={index}
                className="img-hover-zoom mb-4 md:mb-0"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  className="cursor-pointer hover:opacity-60"
                  alt={`Image ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}

            {/* <div className='img-hover-zoom mb-4 md:mb-0' >
                      <img src={bg2} className='cursor-pointer hover:opacity-60' alt=""  onClick={()=>setSelectedImage(bg2)}   />
                  </div>
                  <div className='img-hover-zoom mb-4 md:mb-0'>
                      <img src={stonya} className='cursor-pointer hover:opacity-60' alt="" onClick={()=>setSelectedImage(stonya)}  />
                  </div>
                  <div className='img-hover-zoom mb-4 md:mb-0'>
                      <img src={prime} className='cursor-pointer hover:opacity-60' alt=""  onClick={()=>setSelectedImage(prime)}  />
                  </div> */}
            {selectedImage !== null && (
              <ImageOverlay
                src={images[selectedImage]}
                selectedImage={selectedImage}
                handlePreviousImage={handlePreviousImage}
                handleNextImage={handleNextImage}
                onClose={handleClose}
              />
            )}
          </div>
        </div>
        <div className="container mb-10 text-textColor flex items-center justify-between">
          <div
            onClick={handlePreviousPage}
            className="flex items-center hover:text-secondary cursor-pointer  gap-1"
          >
            <BsArrowLeft />
            <h1>Previous Project</h1>
          </div>
          <div>
            <TfiLayoutGrid3Alt className="text-xl hover:text-secondary cursor-pointer" />
          </div>
          <div
            onClick={handleNextPage}
            className="flex items-center hover:text-secondary cursor-pointer  gap-1"
          >
            <h1>Next Project</h1>
            <BsArrowRight />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default PorfolioDetail;
