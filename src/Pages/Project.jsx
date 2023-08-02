import project from "../assets/images/project-details.jpg";
import project2 from "../assets/images/project-details2.png";
import { BsSearch } from "react-icons/bs";
import Footer from "../Components/Footer.jsx";

const Project = () => {
  return (
    <div className="">
      <img src={project} className="mb-12 h-[200px] w-full" alt="" />

      <div className="grid md:grid-cols-2 gap-8 w-[90%] mx-auto my-[7rem]">
        <div className="flex justify-around p-4 bg-[#F4F0EC] items-center rounded-[5rem]">
          <ul className="text-[#4D5053] font-semibold capitalize">
            <li>client</li>
            <li>category</li>
            <li>tags</li>
            <li>date</li>
            <li>link</li>
          </ul>
          <ul>
            <li>Your client name</li>
            <li>interiors</li>
            <li>interior, Home</li>
            <li>Date 23,02, 2022</li>
            <li>Link example.com</li>
          </ul>
        </div>
        <div className='text-center'>
          <h1 className="font-semibold text-2xl ">Minimal Look Bedrooms</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
            at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in
            the ipsum vel lectus bibendum commodo.
          </p>
          <p>
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
            arcu. Donec a pellentesque Cras erat enim, gravida non ante
            vitae,elequis convallis elit, in viverra felis. Donec ultrices
            tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
            porttitor.
          </p>
        </div>
      </div>

      <div className="mx-auto w-4/5 my-8 relative">
        <img src={project2} className=" mx-auto rounded-lg" alt="" />
        <div className="absolute top-[50%] right-[50%] text-[2rem] bg-white rounded-full text-[#CDA274]">
          <BsSearch className="p-[9px] text-[2rem]" />
        </div>
      </div>
      <Footer className="my-[5rem]" />
    </div>
  );
};

export default Project;
