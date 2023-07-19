
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({data}) => {
  const nav = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [close, setClose] = useState(false);
  const [active,setActive] = useState(null)
  useEffect(() => {
    setActive(data)
  },[data])

  const closeHandler = (e) => {
    setClose(!close);
    setActive(e)
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavbarFixed(window.innerWidth <= 768 || scrollPosition > 100);
  }, [windowWidth, scrollPosition]);

  return (
    <nav
      className={`navbar ${
        navbarFixed
          ? "fixed drop-shadow-lg animate__animated animate__fadeInDown"
          : ""
      }`}
    >
      <div className=" w-full  flex flex-wrap items-center justify-between mx-auto ps-0">
        <a
          href="#home"
          className={`logo font-Oswald items-center ${
            navbarFixed ? "logoForFixed" : ""
          }`}
        >
          <img src={logo} className=" h-14 mx-auto" alt="Bauen logo" />
          <div
            className={`name flex-col items-center justify-center font-normal ${
              navbarFixed ? "fixed" : ""
            }`}
          >
            <p className=" text-2xl text-center tracking-wider text-secondary">
              BAUEN
            </p>
            <span className=" text-sm text-textColor tracking-wide logo-text">
              INNOVATE DESIGN
            </span>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 me-4 lg:me-0 ml-3 text-sm text-secondary bg-primary rounded-lg lg:hidden  focus:outline-none "
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            close ? "hidden" : ""
          }  hidden w-full transition-all duration-500 lg:block lg:w-auto bg-primary lg:bg-transparent`}
          id="navbar-default"
        >
          <ul className="lg:text-white text-textColor  w-full uppercase text-xl tracking-wide font-Oswald font-light flex flex-col lg:flex-row p-4">
            <li onClick={() => closeHandler('home')}>
              <a
                href="#home"
                className={`${active === 'home' || !navbarFixed ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
                aria-current="page"
                onClick={() => nav("/")}
              >
                Home
              </a>
            </li>
            <li onClick={() => closeHandler('about')}>
              <a
                href="#about"
                onClick={() => nav("/")}
                className={`${active === 'about' ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
              >
                About
              </a>
            </li>
            <li onClick={() => closeHandler('portfolio')}>
              <a
                href="#portfolio"
                className={`${active === 'portfolio' ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
                onClick={() => nav("/")}
              >
                Portfolio
              </a>
            </li>
            <li onClick={() => closeHandler('services')}>
              <a
                href="#services"
                className={`${active === 'services' ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
                onClick={() => nav("/")}
              >
                Services
              </a>
            </li>
            <li onClick={() => closeHandler('blog')}>
              <a
                href="#blog"
                className={`${active === 'blog' ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
                onClick={() => nav("/")}
              >
                Blog
              </a>
            </li>
            <li onClick={() => closeHandler('contact')}>
              <a
                href="#contact"
                className={`${active === 'contact' ? 'active' : ''} block py-2 pl-3 pr-4  hover:text-secondary transition-all duration-300`}
                onClick={() => nav("/")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
