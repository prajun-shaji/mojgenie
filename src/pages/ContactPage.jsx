import { cb } from "../assets/index.js";
import { contacts } from "../constants/constants.js";
const ContactPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <h1 className="absolute top-2 px-8 py-5 text-3xl font-bold text-white lg:top-1/3 lg:px-28 lg:py-14 lg:text-5xl">
          Contact Us
        </h1>
        <img className="object-contain" src={cb} alt="banner" />
      </div>

      <div className="cp flex flex-col">
        <h1 className="section-title">How can we help you?</h1>
        <hr className="mb-5" />
        <p className="text-xl">
          Got a question? Need some clarification? We’d love to help. Simply
          touch base with us or leave a message right here and we’ll get back to
          you shortly.
        </p>
        <div className="my-10 flex flex-col justify-between gap-5 lg:flex-row">
          {contacts.map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-5">
              <img className="size-16 object-contain" src={icon} alt="icon" />
              <div>
                {text.map((t, i) => (
                  <p key={i} className="text-sm lg:text-lg">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
