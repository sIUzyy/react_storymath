import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Button({ children, style, to }) {
  return (
    <div
      style={style}
      className="rounded-sm mb-4 text-[14px] text-black bg-[#ffffff] px-1 py-2 w-36 hover:opacity-75 md:mx-3 lg:mb-0"
    >
      <Link className="" to={to}>
        {children}
      </Link>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.any,
};
