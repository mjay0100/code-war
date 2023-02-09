import React from "react";
import image1 from "../assets/images/main.jpg";
import image2 from "../assets/images/Photo.jpg";
import logo from "../assets/images/01.svg";
import logo1 from "../assets/images/02.svg";
import logo2 from "../assets/images/03.svg";
import logo3 from "../assets/images/04.svg";
import logo4 from "../assets/images/05.svg";

import project from "../assets/images/project.png";
import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import { AiOutlineArrowRight } from "react-icons/ai";

import { sublinks, people, blog, links } from "../data";
import { BsTelephone } from "react-icons/bs";

import Footer from "../Components/Footer.jsx";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="relative">
        <div className=" main-img rounded-bl-[7rem] p-[5rem]">
          <h1 className="text-3xl md:text-6xl my-3 font-semibold">
            Let Your Home <br /> Be Unique
          </h1>
          <p className=" md:w-1/2">
            There are many variations of the passages of lorem Ipsum
            fromavailable,variations of the passages.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md ">
            Get Started
          </button>
        </div>
      </div>
      <section className="grid grid-cols-2 md:flex justify-between gap-6 mx-auto w-4/5 items-center p-6 my-6">
        {sublinks.map((content) => {
          const { id, title, body, link, icon } = content;
          return (
            <div
              key={id}
              className="grid items-center justify-center text-center ">
              <h1 className="text-[#292F36] text-xl font-semibold ">{title}</h1>
              <h1 className=" ">{body}</h1>
              <div className="flex gap-2 items-center justify-center">
                <h3 className=" ">{link}</h3>
                <span>{icon}</span>
              </div>
            </div>
          );
        })}
      </section>
      <section className="md:flex justify-center gap-5 my-8">
        <div className="w-[420px] mx-auto">
          <h1 className="text-4xl font-semibold">
            We Create The Art Of Stylish Living Stylishly
          </h1>
          <p className="">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex my-4 gap-3">
            <div className="bg-[#F4F0EC] w-[80px] relative h-[80px] rounded-full">
              <BsTelephone className="absolute top-[40%] left-[35%] text-xl text-[#CDA274]" />
            </div>
            <div>
              <h1 className="font-semibold">012345678</h1>
              <p className="text-[#4D5053]">Call Us Anytime</p>
            </div>
          </div>
          <div className="flex gap-2 my-4 bg-[#292F36] text-white rounded-lg w-fit items-center p-5">
            <button>Get Free Estimate </button>
            <span>
              <AiOutlineArrowRight className="text-[#CDA274]" />
            </span>
          </div>
        </div>
        <img
          src={image2}
          className="rounded-tr-[14rem] rounded-bl-[11rem] w-[432px] mx-auto"
          alt=""
        />
      </section>
      {/* testimonial */}
      <section className="bg-[#F4F0EC] mt-[5rem] p-8 w-5/6 mx-auto rounded-2xl">
        <h1 className="font-normal text-4xl text-center my-6">
          What the People Thinks <br /> About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-8 mx-8 rounded-md">
          {people.map((person) => {
            const { id, name, state, body, img } = person;
            return (
              <div
                key={id}
                className="p-10 mb-5 bg-white rounded-xl text-center">
                <div className=" md:flex gap-1 ">
                  <img src={img} className="rounded-full mx-auto" alt="" />
                  <div>
                    <h1>
                      <b>{name}</b>
                    </h1>
                    <p>{state}</p>
                  </div>
                </div>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* logo */}
      <section className="grid grid-cols-3 md:grid-cols-5 items-center gap-6 w-4/6 mx-auto my-12 mt-[4rem]">
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </section>
      {/* project */}
      <section className="my-12">
        <h1 className="text-3xl text-semibold text-center">
          Follow Our Projects
        </h1>
        <p className="w-1/2 mx-auto my-8 text-center ">
          It is a long established fact that a reader will be distracted by the
          of readable <br /> content of page lookings at its layouts points.
        </p>
        <div className="grid grid-cols-2 gap-4 my-6 w-4/5 mx-auto">
          <article className="">
            <img
              src={project}
              className="rounded-tr-[5rem] w-[200px] md:w-[300px] mx-auto"
              alt=""
            />
            <div className="flex justify-around items-center">
              <div>
                <h1 className="font-semibold">Modern Kitchen</h1>
                <p>Decor / Architecture</p>
              </div>
              <AiOutlineArrowRight />
            </div>
          </article>
          <article className="">
            <img
              src={project2}
              className="rounded-tl-[5rem] w-[200px] md:w-[300px] mx-auto"
              alt=""
            />
            <div className="flex justify-around items-center">
              <div>
                <h1
                  className="
                  font-semibold">
                  Modern Kitchen
                </h1>
                <p>Decor / Architecture</p>
              </div>
              <AiOutlineArrowRight />
            </div>
          </article>
          <article className="">
            <img
              src={project3}
              className="rounded-br-[5rem] w-[200px] md:w-[300px] mx-auto"
              alt=""
            />
            <div className="flex justify-around items-center">
              <div>
                <h1 className="font-semibold">Modern Kitchen</h1>
                <p>Decor / Architecture</p>
              </div>
              <AiOutlineArrowRight />
            </div>
          </article>
          <article className="">
            <img
              src={project4}
              className="rounded-bl-[5rem] w-[200px] md:w-[300px] mx-auto"
              alt=""
            />
            <div className="flex justify-around items-center">
              <div>
                <h1
                  className="
                  font-semibold">
                  Modern Kitchen
                </h1>
                <p>Decor / Architecture</p>
              </div>
              <AiOutlineArrowRight />
            </div>
          </article>
        </div>
      </section>
      {/* counter */}
      <section className="bg-[#F4F0EC] p-[5rem] my-8 capitalize flex justify-around gap-5 items-center text-center ">
        <div>
          <h1 className="text-5xl text-[#CDA274]">12</h1>
          <p>years of experience</p>
        </div>
        <hr className="bg-[#CDA274] h-[4rem] w-[1px]" />
        <div>
          <h1 className="text-5xl text-[#CDA274]">85</h1>
          <p>success Project</p>
        </div>
        <hr className="bg-[#CDA274] h-[4rem] w-[1px]" />
        <div>
          <h1 className="text-5xl text-[#CDA274]">15</h1>
          <p>admin project</p>
        </div>
        <hr className="bg-[#CDA274] h-[4rem] w-[1px]" />
        <div>
          <h1 className="text-5xl text-[#CDA274]">95</h1>
          <p>happy customers</p>
        </div>
      </section>
      {/* blog */}
      <section className="my-12">
        <h1 className="text-center font-semibold text-[#292F36] text-4xl">
          Articles & New
        </h1>
        <p className="text-center w-1/2 mx-auto">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5 my-8">
          {blog.map((blog) => {
            const { id, img, tag, body, date, icon } = blog;
            return (
              <div className="border-2 rounded-2xl border-solid border-[#E7E7E7] p-2">
                <div className="relative">
                  <img src={img} className="rounded-t-3xl" alt="" />
                  <p className="bg-white absolute bottom-[1rem] left-[1rem] p-1 rounded-md">
                    {tag}
                  </p>
                </div>
                <p className="md:text-xl">
                  <b>{body}</b>
                </p>
                <div className="flex justify-between items-center">
                  <p>{date}</p>
                  <div>{icon}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* contact */}
      <section className="my-12 bg-[#292F36] p-6 text-center w-4/5 mx-auto rounded-2xl">
        <h1 className="text-4xl text-white">Wanna join the interno?</h1>
        <p className="text-white">
          It is a long established fact will be distracted.
        </p>
        <button className="bg-[#CDA274] p-2 rounded-md my-5">
          Contact With Us
        </button>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
