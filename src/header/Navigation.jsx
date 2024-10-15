import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-main">
      <div className="mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Mobile view */}
        <div className="main_container_mobile flex justify-between items-center p-4 md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="headerText">
            <Link to={"/"} className="font-bold text-[24px]">
              StoryMath
            </Link>
          </div>

          <div className="iconMenu">
            <button onClick={handleMenuToggle}>
              {isMenuOpen ? <IoMdClose size={25} /> : <CiMenuFries size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="mobileMenu bg-gray-100 p-4 md:hidden fixed top-[60px] w-full z-50">
            <Link to="/" className="block py-2 hover:text-[#008C7A]">
              Our Program
            </Link>
            <Link to="/aboutus" className="block py-2 hover:text-[#008C7A]">
              About Us
            </Link>
            <Link to="/tier" className="block py-2 hover:text-[#008C7A]">
              Tier
            </Link>
            <Link to="/maintenance" className="block py-2 hover:text-[#008C7A]">
              Technology Integration
            </Link>
            <div className="mt-4">
              <Link
                to="/maintenance"
                className="block w-full py-2 mb-2 bg-gray-200 text-black text-center"
              >
                Get Involved
              </Link>
              <Link
                to="/maintenance"
                className="block w-full py-2 bg-[#008C7A] text-white text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}

        {/* Desktop view */}
        <div className="main_container_desktop  hidden md:flex justify-between items-center p-4 fixed top-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="headerText">
            <Link to={"/"} className="font-bold text-[24px]">
              StoryMath
            </Link>
          </div>

          <div className="hidden md:flex md:font-normal ">
            <Link
              to="/"
              className="mr-3 hover:text-[#008C7A] xl:mr-5 focus:underline focus:text-[#008C7A] active:underline"
            >
              Our Program
            </Link>
            <Link
              to="/aboutus"
              className="mr-3 hover:text-[#008C7A] xl:mr-5 focus:underline focus:text-[#008C7A] active:underline"
            >
              About Us
            </Link>
            <Link
              to="/tier"
              className="mr-3 hover:text-[#008C7A] xl:mr-5 focus:underline focus:text-[#008C7A] active:underline"
            >
              Tier
            </Link>
            <Link
              to="/maintenance"
              className="mr-0 hover:text-[#008C7A] focus:underline focus:text-[#008C7A] active:underline"
            >
              Technology Integration
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link
              className="py-2 px-4 border border-black text-black mr-4 hover:bg-[#008C7A] hover:text-white hover:border-none"
              to="/maintenance"
            >
              Get Involved
            </Link>

            <Link
              className="py-2 px-4 bg-[#008C7A] text-white hover:opacity-80"
              to="/maintenance"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
