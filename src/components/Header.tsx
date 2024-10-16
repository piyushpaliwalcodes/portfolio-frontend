import { IconHexagonLetterP } from "@tabler/icons-react";
import NavAnchor from "./NavAnchor";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const links: string[] = [
    "ABOUT",
    "PROJECTS",
    "SKILLS",
    "EXPERIENCE",
    "CONTACTUS",
  ];

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  });
  return (
    <nav
      className={` ${show ? "translate-y-0" : "-translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out
       fixed w-full navbar flex gap-2 dm-mono-regular justify-between h-[14vh] px-10 bg-bgcolor items-center !z-20   `}
    >
      <div>
        <IconHexagonLetterP size={"50px"} color="#64FFDA" stroke={1.5} />
      </div>
      <div className="text-textColor hover:text-primaryColor flex gap-4 sm-mx:hidden h-full  ">
        {links.map((item, index) => (
          <NavAnchor item={item} index={index} flag={false} />
        ))}
      </div>

      <Sidebar arr={links} />
    </nav>
  );
};

export default Header;
