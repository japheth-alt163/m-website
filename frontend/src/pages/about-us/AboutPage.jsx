import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[60%] ml-[60px] h-[320px] mt-[40px]">
      <div className=" mt-6">
        <h1 className="text-purple-700 text-4xl tracking-[4px] pb-4 font-semibold">
          About Us
        </h1>
      </div>
      <div>
        <p className="text-gray-600 sp">
          {" "}
          A variety of animal supplies and pet accessories are also sold in our
          pet shops. The products sold include: food, treats, toys, collars,
          leashes, cat litter, cages and aquariums. We offer a house sitting
          business- provides the service of looking after peoples' homes while
          they are away on business or vacation.
        </p>
      </div>

      <div>
        <h1 className="text-xl pb-4 font-semibold">Our Story</h1>
        <p className="text-gray-600 sp">
          M-pet began in 2023 with a simple mission: to help animals in need.
          Founded by , who has always had a passion for animal welfare,We saw a
          growing number of abandoned pets and knew something had to be done.
          Since then, we've grown into a passionate team dedicated to making a
          difference in the lives of animals and the families who adopt them.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
