// icons
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const media = [
  {
    icon: <FaFacebookF size={18} />,
    path: "https://www.facebook.com/profile.php?id=61566854351464&mibextid=LQQJ4d",
  },
  {
    icon: <FaTwitter size={18} />,
    path: "",
  },
  {
    icon: <FaInstagram size={18} />,
    path: "",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    path: "",
  },
];

const headers = [
  {
    name: "Our Programs",
    path: "/",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
  {
    name: "Sustainable Practices",
    path: "/maintenance",
  },
  {
    name: "Technology Integration",
    path: "/maintenance",
  },
];

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <div className=" main_container font-main bg-[#000000] text-white py-16">
      <div className=" mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl ">
        <div className="sub_container px-4 lg:flex lg:justify-between lg:items-center ">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-bold text-[24px] text-center xl:text-[34px]">
              StoryMath
            </h1>
          </div>

          <div className="links_container flex flex-col text-center text-[14px] lg:flex-row  ">
            {headers.map((header, key) => (
              <Link
                className="mb-3 hover:text-[#008C7A] lg:mb-0 lg:mr-5 "
                key={key}
                to={header.path}
              >
                {header.name}
              </Link>
            ))}
          </div>

          <div className="media flex justify-center mt-5 lg:mt-0 ">
            {media.map((med, key) => (
              <div className="mr-3" key={key}>
                <Link
                  target="_blank"
                  className="hover:text-[#008C7A]"
                  to={med.path}
                >
                  {med.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="management px-4 mt-16 font-light">
          <div>
            <h1 className="text-center text-[14px] ">
              © {year} StoryMath. All rights reserved. Empowering children
              through innovative education
            </h1>
          </div>

          <div className="text-center flex flex-col text-[14px] mt-10 lg:flex-row lg:justify-center ">
            <Link to="/maintenance" className="hover:text-[#008C7A] lg:mx-2 ">
              Terms of Service
            </Link>
            <Link to="/maintenance" className="hover:text-[#008C7A] lg:mx-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
