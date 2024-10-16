import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
const Social = () => {
  return (
    <div className="fixed social -left-64 bottom-20 font-mono text-lg rotate-90 ">
      <div className="container flex items-center gap-5 text-textColor">
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:-translate-x-2 duration-300 ease-in-out -rotate-90"
        >
          <IconBrandLinkedin size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:-translate-x-2 duration-300 ease-in-out -rotate-90"
        >
          <IconBrandGithub size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:-translate-x-2 duration-300 ease-in-out -rotate-90"
        >
          <IconBrandInstagram size="40" />
        </a>
        <a
          href="mailto:ppaliwal868@gmail.com"
          className="text-textColor hover:text-primaryColor hover:-translate-x-2 duration-300 ease-in-out -rotate-90"
        >
          <IconBrandLeetcode size="40" />
        </a>
        <hr className="border-t-4 w-96 text-textColor bg-bgcolor border-black rounded-xl " />
      </div>
    </div>
  );
};

export default Social;
