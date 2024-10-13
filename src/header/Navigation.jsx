// // react-icons
// import { CiMenuFries } from "react-icons/ci";

// import { Link } from "react-router-dom";
// import Button from "../components/ui/Button";

// export default function Navigation() {
//   return (
//     <div className="font-main">
//       <div className="mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
//         {/*mobile view */}
//         <div className="main_container_mobile flex justify-between items-center p-4 md:hidden">
//           <div className="headerText">
//             <h1 className="font-bold text-[24px]">StoryMath</h1>
//           </div>

//           <div className="iconMenu">
//             <CiMenuFries size={25} />
//           </div>
//         </div>

//         {/*desktop view */}
//         <div className="main_container_desktop md:flex md:justify-between md:items-center md:p-4  ">
//           <div className="headerText">
//             <h1 className="font-bold text-[24px] hidden md:block">StoryMath</h1>
//           </div>

//           <div className="hidden md:flex md:font-bold ">
//             <Link className="mr-3 hover:text-[#008C7A] xl:mr-5">
//               Our Program
//             </Link>
//             <Link className="mr-3 hover:text-[#008C7A] xl:mr-5"> About Us</Link>
//             <Link className="mr-3 hover:text-[#008C7A] xl:mr-5">
//               Sustainable Practices
//             </Link>
//             <Link className="mr-0 hover:text-[#008C7A]">
//               Technology Integration
//             </Link>
//           </div>

//           <div className="hidden lg:flex ">
//             <Button
//               style={{
//                 width: "auto",
//                 paddingHorizontal: 6,
//                 color: "black",
//                 margin: 0,
//               }}
//               to="/"
//             >
//               Get Involved
//             </Button>

//             <Button
//               style={{
//                 backgroundColor: "#008C7A",
//                 width: "auto",
//                 padding: 6,
//                 color: "white",
//               }}
//               to="/"
//             >
//               Donate Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
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
              <CiMenuFries size={25} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="mobileMenu bg-gray-100 p-4 md:hidden fixed top-[60px] w-full z-50">
            <Link to="/" className="block py-2 hover:text-[#008C7A]">
              Our Program
            </Link>
            <Link to="/" className="block py-2 hover:text-[#008C7A]">
              About Us
            </Link>
            <Link to="/" className="block py-2 hover:text-[#008C7A]">
              Sustainable Practices
            </Link>
            <Link to="/" className="block py-2 hover:text-[#008C7A]">
              Technology Integration
            </Link>
            <div className="mt-4">
              <button className="block w-full py-2 mb-2 bg-gray-200 text-black">
                Get Involved
              </button>
              <button className="block w-full py-2 bg-[#008C7A] text-white">
                Donate Now
              </button>
            </div>
          </div>
        )}

        {/* Desktop view */}
        <div className="main_container_desktop hidden md:flex justify-between items-center p-4 fixed top-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="headerText">
            <Link to={"/"} className="font-bold text-[24px]">
              StoryMath
            </Link>
          </div>

          <div className="hidden md:flex md:font-bold ">
            <Link className="mr-3 hover:text-[#008C7A] xl:mr-5">
              Our Program
            </Link>
            <Link className="mr-3 hover:text-[#008C7A] xl:mr-5"> About Us</Link>
            <Link className="mr-3 hover:text-[#008C7A] xl:mr-5">
              Sustainable Practices
            </Link>
            <Link className="mr-0 hover:text-[#008C7A]">
              Technology Integration
            </Link>
          </div>

          <div className="hidden lg:flex">
            <button
              className="py-2 px-4 border border-black text-black mr-4"
              to="/"
            >
              Get Involved
            </button>

            <button className="py-2 px-4 bg-[#008C7A] text-white" to="/">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
