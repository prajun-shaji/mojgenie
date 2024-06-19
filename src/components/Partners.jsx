import { partners } from "../assets/index.js";

const Partners = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-center text-lg text-gray-500">Our Partners</h1>
      <ul className="flex w-full items-center justify-center">
        {partners.map((partner, i) => (
          <li key={i} className="flex w-full items-center justify-center">
            <img className="object-contain" src={partner} alt="icons" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
