import { ser, servpg } from "../assets/index.js";
import { service } from "../constants/constants.js";

const ServicePage = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <h1 className="cp absolute top-2 text-3xl font-bold text-white lg:top-1/3 lg:text-5xl">
          Services we <br />
          Provide
        </h1>
        <img className="object-contain" src={servpg} alt="banner" />
      </div>
      <div className="cp py-5 mt-5 lg:mt-10 lg:py-5">
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col">
            <h1 className="section-title">
              Design & development services for apps, digital products, and more{" "}
            </h1>
            <hr />
          </div>
          <p>
            Mojgenie is a technology solution company. Our highly-skilled and
            highly-trained workforce deliver a wide range of services from
            business consulting to custom software development. We utilise the
            best software applications, technologies and processes in our desire
            to deliver the most comprehensive suite of solutions, services and
            products for our clients.
          </p>
        </div>
      </div>
      <div className="cp flex w-full flex-col gap-8">
        {service.map(({ icon, title, text, list, rev }) => (
          <div
            key={title}
            className={`${rev ? "lg:flex-row-reverse" : "lg:flex-row"} flex flex-col gap-1 lg:gap-10`}
          >
            <img src={icon} className="size-[450px] object-contain" alt="" />
            <div className="flex flex-col justify-center gap-5">
              <div className="flex flex-col">
                <h1 className="section-title">{title}</h1>
                <hr />
              </div>
              <p>{text}</p>
              {list && (
                <ul className="flex flex-col gap-2 pl-5">
                  {list.map((l) => (
                    <li key={l} className="list-decimal">
                      {l}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
