import { mjlogo, socialImg } from "../assets";

const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-5 p-5 text-white lg:flex-row lg:gap-1">
      <a href="/">
        <img className="w-44 object-contain" src={mjlogo} alt="logo" />
      </a>
      <div className="flex w-[70%] flex-col-reverse items-center justify-between gap-5 lg:flex-row lg:gap-1">
        <p className="text-center">
          Copyright©MOJGENIE IT SOLUTIONS PRIVATE LIMITED All rights reserved
        </p>
        <div className="flex w-full items-center justify-center gap-2">
          <p className="text-nowrap">Follow us:</p>
          <ul className="flex gap-2.5">
            {socialImg.map((image, i) => (
              <li key={i} className="cursor-pointer">
                <img src={image} alt="social media" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
