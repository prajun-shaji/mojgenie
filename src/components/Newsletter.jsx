import React from "react";

const Newsletter = () => {
  return (
    <div className="flex w-full flex-col gap-7 lg:flex-row">
      <div className="flex w-full flex-col gap-2.5 text-white">
        <h1 className="text-xl font-bold lg:text-5xl">
          Build your next <br />
          innovation
        </h1>
        <p className="text-wrap text-base lg:text-lg">
          We would love to hear about your project. Reach out to our specialists
          at
          <span className="font-semibold">+91 83019 91502 </span>
          or email us at
          <span className="font-semibold"> info@mojgenie.com.</span>
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 bg-white p-5 lg:h-full lg:w-4/5 lg:p-10">
        <h2 className="text-lg font-semibold lg:text-3xl">Let's talk</h2>
        <p className="text-gray-500">
          One of our specialist will reach you out with in next 6 hours
        </p>
        <form className="flex flex-col gap-3 lg:gap-5">
          <input
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            type="number"
            placeholder="Phone no. with country code"
            required
          />
          <textarea
            className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            type="text"
            placeholder="Description"
            required
          />
          <button
            className="border border-[#084ca4] py-2 text-[#084ca4] duration-500 hover:bg-[#084ca4] hover:text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
