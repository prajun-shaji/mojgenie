import { aboutImg, vision } from "../assets/index.js";
import { about } from "../constants/constants.js";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <h1 className="cp absolute top-2 text-3xl font-bold text-white lg:top-1/3 lg:text-5xl">
          Our Company
        </h1>
        <img className="object-contain" src={aboutImg} alt="banner" />
      </div>
      <div className="cp">
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="flex w-full flex-col">
            <h1 className="section-title">
              We're more than just a software company
            </h1>
            <hr />
          </div>
          <p className="w-full lg:w-4/5">
            Everyone develops an idea or two, once in a way. Some are even
            seemingly brilliant. But only a lucky few get a chance, even to
            attempt making those concepts into a workable reality. However, what
            is almost impossible individually is often possible with a
            collective will, resources and collaboration. Mojgenie, meaning My
            Genie, is the result of such a collaboration, of four like-minded,
            successful young minds, who have come together to make many such
            “brilliant concepts”, both shelved and new, into commercial
            successes.
          </p>
        </div>
      </div>
      <div className="cp flex w-full flex-col gap-7 lg:flex-row">
        <div className="flex w-full flex-col gap-8 lg:w-7/12">
          <div className="flex w-full flex-col">
            <h1 className="section-title">Our mission & vision</h1>
            <hr />
          </div>
          <p>
            To lead in various avenues of software development by implementing
            novel ideas for project development thus delivering customized
            cost-effective solutions to its prospective and current clients.
          </p>
          <p>
            To earn global admiration as a software development company, by
            building and maintaining a long lasting relationship with people and
            technology along with the fabrication of functional software and
            excellent services.
          </p>
        </div>
        <img className="size-96 object-contain" src={vision} alt="" />
      </div>
      <div className="cp flex mb-5 flex-col gap-5 py-5 lg:py-5">
        <div className="flex flex-col">
          <h1 className="section-title">Discover the values that drive us</h1>
          <hr />
        </div>
        <p>
          At Mojgenie, we would rather not do a project than leave a client
          unhappy. Every client will be made to feel that Mojgenie is a part of
          their team, always with them rather than just “available on call” to
          solve problems
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {about.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-1 p-5 border border-gray-300">
              <img src={icon} className="size-20 object-contain" alt={title} />
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-wrap text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
