import { technologiesImg } from "../assets";

const Technologies = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 lg:flex-row">
      <div className="flex w-full flex-col gap-7 lg:w-1/2">
        <div className="flex flex-col">
          <h1 className="section-title">
            We Create innovations with the latest technologies
          </h1>
          <hr />
        </div>
        <p className="text-xl">
          Our team consists of enthusiastic technologists who love bringing real
          world solutions to our clients’ problems. Our ideas stem from a deep
          understanding of our clients’ markets, solutions, and visions. our
          talented engineering team bring in-depth knowledge of the latest
          technologies, a strong grasp around market dynamics, and a strong
          understanding of our clients’ visions for every project. This enables
          us to deliver the highest quality digital transformation services and
          software solutions for all of our projects.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 lg:w-1/2">
        {technologiesImg.map((image) => (
          <div
            key={image}
            className="flex items-center justify-center bg-white p-6"
          >
            <img className="size-16 object-contain" src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
