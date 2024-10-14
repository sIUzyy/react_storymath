import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// components
import Title from "./Title";

export default function EducationCard({ imgsrc, alt, title, desc, to }) {
  return (
    <div className="card_section mb-8  rounded-sm p-3 ">
      <div>
        <div>
          <img className="md:h-[250px]" src={imgsrc} alt={alt} />
        </div>

        <div className="mt-3 ">
          <Title style={{ textTransform: "capitalize" }}>{title}</Title>

          <p className="text-[14px] mb-10 xl:text-[18px]">{desc}</p>

          <Link
            to={to}
            className="text-[#008C7A] font-bold underline hover:text-black"
          >
            Learn More...
          </Link>
        </div>
      </div>
    </div>
  );
}

EducationCard.propTypes = {
  imgsrc: PropTypes.any,
  alt: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string,
  to: PropTypes.any,
};
