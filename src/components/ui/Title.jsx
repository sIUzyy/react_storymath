import PropTypes from "prop-types";

export default function Title({ children, style }) {
  return (
    <h1
      style={style}
      className="text-[24px] mb-[16px] font-bold xl:text-[34px]"
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.string,
  style: PropTypes.any,
};
