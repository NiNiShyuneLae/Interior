import "../style/ImageOverlay.css";
import { AiOutlineClose } from "react-icons/ai"
import {BsArrowLeftCircleFill} from "react-icons/bs"
import {BsArrowRightCircleFill} from "react-icons/bs"

const ImageOverlay = ({src,onClose,handlePreviousImage,handleNextImage,selectedImage}) => {
  return (
   <div className="overlay">
      <div className="overlay-content w-[90%] relative  md:w-[720px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1500px] md:flex md:items-center md:justify-between md:gap-3  ">
        <button
              className="image-overlay-previous hover:text-secondary cursor-pointer md:flex md:items-center gap-2"
              onClick={handlePreviousImage}
        >
          <BsArrowLeftCircleFill className='text-xl'/>
             <h1 className='hidden md:block'>Previous</h1> 
        </button>
        <div className='relative'>
          <img src={src} alt={`Image ${selectedImage + 1}`} className='h-[320px] lg:h-[400px] mb-2' />
        <AiOutlineClose className="close-button hover:text-white" onClick={onClose} />
        <div className="image-overlay-index float-right ">
          Image {selectedImage + 1} of 4
        </div>
        </div>

        <button
              className="image-overlay-next hover:text-secondary cursor-pointer  flex items-center gap-2"
              onClick={handleNextImage}
            >
           <h1 className='hidden sm:block'>Next</h1>
          <BsArrowRightCircleFill className='text-xl'/>
        </button>

      </div>
    </div>
  )
}

export default ImageOverlay