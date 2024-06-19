import { primeImg } from "../assets";

const Product = () => {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="section-title">Our product</h1>
        <hr />
      </div>
      <div className="flex w-full flex-col justify-center gap-10 md:flex-row">
        <img
          className="h-auto w-60 object-contain"
          src={primeImg}
          alt="prime logo"
        />
        <div className="flex flex-col items-start gap-5">
          <p className="text-xl">
            ConferencePrime is primed for every software requirement a
            conference can demand, be it a hybrid or an in-person event.
            Delegates will be treated to a flawless event stream, right from
            online registrations to activity monitoring, everything automated.
            Post event analytics become a pleasure instead of a nightmare with
            figures at your fingertips, literally.
          </p>
          <button className="border-2 border-[#0257c1] px-4 py-1.5 text-lg font-medium text-[#0257c1] hover:bg-[#0854c4] hover:text-white duration-500">
            VISIT WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
