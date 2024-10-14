import Title from "../../components/ui/Title";

import { IoIosPeople, IoIosLeaf } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

export default function AboutUsPage() {
  return (
    <div className="mv_container mt-32 px-4 text-left mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <div>
        <Title style={{ textAlign: "center" }}>About StoryMath</Title>
        <p className="text-[14px] mb-10 text-center lg:text-[16px] ">
          Discover how we are transforming education through sustainable
          practices, advanced technology, and community engagement.
        </p>

        <Title style={{ textAlign: "center" }}>
          Our Commitment to Education
        </Title>
        <p className="text-[14px] mb-10 text-center lg:text-[16px]">
          At StoryMath, we strive to enhance literacy and numeracy among
          children in underserved communities. Our mission integrates
          sustainable practices and advanced technology to create engaging
          educational experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <div className="mb-10 md:p-3 xl:p-5">
            <IoIosPeople
              style={{ marginBottom: 5 }}
              size={30}
              color={"#008C7A"}
            />
            <Title>Inclusivity</Title>
            <p className="text-[14px] lg:text-[16px]">
              We believe every child deserves access to quality education,
              regardless of their background. Our programs are designed to be
              inclusive and cater to diverse learning needs.
            </p>
          </div>

          <div className="mb-10 md:p-3 xl:p-5">
            <IoIosLeaf
              style={{ marginBottom: 5 }}
              size={25}
              color={"#008C7A"}
            />

            <Title>Sustainability</Title>
            <p className="text-[14px] lg:text-[16px]">
              We are committed to environmentally friendly practices in our
              operations, ensuring that our educational initiatives not only
              benefit children but also protect our planet for future
              generations.
            </p>
          </div>

          <div className="mb-10 md:p-3 xl:p-5">
            <FaMessage
              style={{ marginBottom: 5 }}
              size={20}
              color={"#008C7A"}
            />

            <Title>Community Engagement</Title>
            <p className="text-[14px] lg:text-[16px]">
              We actively involve local communities in our initiatives,
              fostering collaboration and ensuring that our programs are
              relevant and effective in addressing local educational challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
