import { professionals } from "../data";
import Footer from "../Components/Footer.jsx";
import main from "../assets/images/main-prof.jpg";

const Professional = () => {
  console.log(professionals);
  return (
    <div>
      <img src={main} className="relative" alt="" />
      <div className="md:relative text-center bg-white p-4 top-[1rem] md:top-[-5rem] w-fit mx-auto rounded-xl">
        <h1 className="text-3xl">
          <b>Our Professional</b>
        </h1>
        <p>Home / Team</p>
      </div>
      <div className="w-5/6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-[5rem]">
        {professionals.map((prof) => {
          const { id, name, job, img, icon } = prof;
          return (
            <div className="justify-center text-center">
              <img src={img} className=" rounded-2xl" alt="" />
              <p>{name}</p>
              <p>{job}</p>
              <div className="flex justify-center gap-4 my-3">
                {icon.map((icon) => {
                  return <div>{icon}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
