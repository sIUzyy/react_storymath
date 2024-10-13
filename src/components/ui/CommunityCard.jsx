import PropTypes from "prop-types";

// icons
import { RxAvatar } from "react-icons/rx";

// component
import RateIcons from "./RateIcons";

export default function CommunityCard({ message, name, occupation }) {
  return (
    <div className="bg-[#303030] text-white rounded-sm p-5 my-2">
      <RateIcons />

      <div className="rates text-[14px] mb-5 xl:text-[16px] ">
        <h1>{message}</h1>
      </div>

      <div className="profile flex items-center">
        <div>
          <RxAvatar size={40} color="white" />
        </div>

        <div className="ml-2">
          <h1 className="text-[14px] ">{name}</h1>
          <p className="text-[12px] ">{occupation}</p>
        </div>
      </div>
    </div>
  );
}

CommunityCard.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
};
