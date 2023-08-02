import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logohome from "../assets/images/Logo (1).png";
import { links } from "../data";

const Footer = () => {
  return (
    <footer>
      <div className="text-center md:text-start w-[90%] grid md:grid-cols-2 mx-auto items-center gap-1 my-8 capitalize">
        <div>
          <img
            className="mx-auto md:mx-0 h-[34px] w-[34px] "
            src={logohome}
            alt=""
          />
          <h1 className="text-2xl font-semibold">Interno</h1>
          <p>
            It is a long established fact that a reader <br /> will be
            distracted lookings.
          </p>
          <div className="flex justify-center md:justify-start gap-8 text-xl my-6">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6">
          {links.map((link) => {
            const { id, title, sublinks } = link;
            return (
              <div key={id}>
                <h1>
                  <b>{title}</b>
                </h1>
                {sublinks.map((link) => {
                  return <h4>{link}</h4>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-center mt-[8rem] mb-5">
        <hr className="bg-[#E5E5E5] h-[2px] w-full my-5" />
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </footer>
  );
};

export default Footer;
