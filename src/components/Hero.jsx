const Hero = () => {
  return (
    <div className="flex w-2/3 flex-col items-start gap-2">
      <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
        Leading App and Software Development Company
      </h1>
      <p className="text-base lg:text-xl">
        Being a software and mobile app development company, we build solution
        that to optimize the business process and we understand the complexities
        that comes across and drive a possible output as per your expectation.
      </p>
      <button className="mt-3 bg-[#084ca4] px-2 py-1 text-base font-medium text-white hover:bg-blue-800 active:ring-4 active:ring-blue-400 lg:px-3 lg:py-2 lg:text-xl">
        Get Free Consultation
      </button>
    </div>
  );
};

export default Hero;
