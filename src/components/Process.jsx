import { process } from "../constants/constants.js";

const Process = () => {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className="section-title">Our process</h1>
          <hr />
        </div>
        <p className="text-xl">
          Application of technology in versatile segments and bringing in
          versatile technologies into applications is indeed the core definition
          of Team Mojgenie And oh yes, challenges we had, but we prevailed and
          excelled. Take a look at Mojgenie’s project list and you will see the
          variety and the spices.nd excelled. Take a look at Mojgenie’s project
          list and you will see the variety and the spices.
        </p>
      </div>
      <div className="flex w-full flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:flex-row">
        {process.map(({ image, title, desc }) => (
          <div
            key={title}
            className="flex min-h-96 border border-gray-300 flex-col gap-5 p-5"
          >
            <img className="size-20 object-contain" src={image} alt={title} />
            <h2 className="text-3xl font-semibold lg:text-2xl">{title}</h2>
            <p className="text-xl text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
