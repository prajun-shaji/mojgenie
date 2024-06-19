import React from "react";
import { services } from "../constants/constants.js";

const Services = () => {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className="section-title">Services We provide</h1>
          <hr />
        </div>
        <p className="text-xl">
          We’re designers, developers, project managers, and solutions
          architects. We are problem solvers who come up with new ways to make
          technology faster, safer, and easier. We are builders who create
          experiences and products that people love. We integrate complex
          systems in the simplest ways possible. We help fast-growing companies
          and their customers do more.
        </p>
      </div>

      <div className="flex w-full flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:flex-row">
        {services.map(({ title, desc, image }) => (
          <div
            key={title}
            className="flex min-h-96 flex-col items-start justify-evenly gap-5 border border-gray-300 p-5"
          >
            <img className="size-20 object-contain" src={image} alt={title} />
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold lg:text-2xl">{title}</h2>
              <hr />
            </div>
            <p className="text-xl text-gray-500">{desc}</p>
            <button className="border-2 border-[#0257c1] px-4 py-1.5 text-lg font-medium text-[#0257c1] duration-500 hover:bg-[#0854c4] hover:text-white">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
