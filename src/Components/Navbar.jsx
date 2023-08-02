import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo (1).png";
// import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <header className="flex justify-between px-[2rem] my-8 items-center relative ">
      <div className="flex items-baseline gap-1 ">
        <img className="h-[34px] w-[34px]" src={logo} alt="" />
        <h1 className="text-2xl font-semibold">Interno</h1>
      </div>

      <nav
        className={`${show ? "show-sidebar sidebar" : "sidebar sm:contents"}`}>
        <ul
          className={`${
            show
              ? "list-sidebar sidebar show-sidebar h-[50%] items-center text-lg capitalize"
              : "hidden sm:flex gap-6 capitalize items-center"
          }`}>
          {/* {show && (
                    <img className="h-[34px] w-[34px]" src={logo} alt="" />

          )} */}
          <li className="hover:text-[#0000FF] duration-300 ease-in-out py-4 ml-4">
            <Link
              onClick={() => setShow(false)}
              to="/"
              className={`${show ? "mt-[5rem] py-4 ml-4" : ""}`}>
              Home
            </Link>
          </li>

          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/project"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              Project
            </Link>
          </li>

          <li className="hover:text-[#0000FF] py-4 ml-4 duration-300 ease-in-out">
            <Link
              to="/professional"
              onClick={() => setShow(false)}
              className={`${show ? "py-4 ml-4" : ""}`}>
              professional
            </Link>
          </li>
        </ul>
      </nav>
      {!show ? (
        <div
          className={`${
            show
              ? " right-[2rem] z-[100]  flex items-center sm:hidden cursor-pointer "
              : "relative sm:hidden cursor-pointer"
          }`}
          onClick={handleClick}>
          <FaBars className="text-2xl " />
        </div>
      ) : (
        <div
          className={`${
            show
              ? " right-[2rem] z-[100]  flex items-center sm:hidden cursor-pointer "
              : "relative sm:hidden cursor-pointer"
          }`}
          onClick={handleClick}>
          <FaTimes className="text-2xl " />{" "}
        </div>
      )}
    </header>
  );
};

export default Navbar;
