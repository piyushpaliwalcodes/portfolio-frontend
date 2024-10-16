import { Info } from "../User";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
const Footer = () => {
  return (
    <div className="mx-36 mt-20 mb-10 font-mono flex justify-center flex-col">
      <div className="text-center text-3xl text-primaryColor font-semibold">
        {Info.name}
      </div>
      <div className="container flex items-center gap-5 text-textColor justify-center">
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:hover:scale-105 duration-300 ease-in-out"
        >
          <IconBrandLinkedin size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:hover:scale-105 duration-300 ease-in-out "
        >
          <IconBrandGithub size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:hover:scale-105 duration-300 ease-in-out "
        >
          <IconBrandInstagram size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:scale-105 duration-300 ease-in-out "
        >
          <IconBrandLeetcode size="40" />
        </a>
      </div>
      <div className="text-textColor text-center">
        Copyright &copy; {new Date().getFullYear()} {Info.name} | ALL RIGHTS
        RESERVED
      </div>
    </div>
  );
};
export default Footer;
