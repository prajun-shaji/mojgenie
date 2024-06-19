import React from "react";
import { carImg } from "../assets";
import { vacc } from "../constants/constants.js";

const CareerPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <h1 className="cp absolute top-2 text-3xl font-bold text-white lg:top-1/3 lg:text-5xl">
          Career
        </h1>
        <img className="object-contain" src={carImg} alt="banner" />
      </div>
      <div className="cp flex flex-col">
        <h1 className="section-title">Together we make extraordinary impact</h1>
        <hr className="mb-5" />
        <p className="text-xl">
          At Mojgenie, we have long said our people are our greatest asset:
          that’s why we support and care for our colleagues as well as invest in
          our people and their professional development. We also advocate for
          work – life harmony at Mojgenie rather than work – life balance.
          Rather than pitting one against the other – we strive for a blending
          of the two. Our people need to be curious, ready to go above and
          beyond, driven and innovative, because we never stand still when
          searching for the best solutions and shaping the future for our
          customers.
        </p>
      </div>

      <div className="cp my-5 flex flex-col">
        <h1 className="section-title">Our Open Vacancies</h1>
        <hr className="mb-5" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {vacc.map(({ title, exp }) => (
            <div
              key={title}
              className="flex justify-between gap-2 border border-gray-300 p-5"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg text-gray-500">{exp}</p>
              </div>
              <button className="h-8 w-20 text-nowrap border-2 border-blue-500 p-1 text-sm duration-500 hover:bg-blue-500 hover:text-white lg:text-base">
                View job
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
