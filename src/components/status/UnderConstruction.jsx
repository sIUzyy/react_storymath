import { MdOutlineConstruction } from "react-icons/md";

export default function Maintenance() {
  return (
    <div className="flex justify-center items-center h-screen font-main text-center text-[16px] font-bold">
      <div className=" ">
        <div className="flex justify-center mb-5">
          <MdOutlineConstruction size={35} />
        </div>
        <h1>Sorry, we couldn’t find the page you’re looking for.</h1>

        <p>
          <span className="text-[#008C7A]">StoryMath</span> is still under
          development
        </p>
      </div>
    </div>
  );
}
