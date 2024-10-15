// components
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import EducationCard from "../components/ui/EducationCard";

// icons
import { IoIosLeaf } from "react-icons/io";

// images
import SustainImg from "../assets/sustainable_pic.jpg";
import Lite from "../assets/educ_lite.jpg";
import Num from "../assets/educ_num.webp";
import Adv from "../assets/educ_adv.webp";
import MV from "../assets/mv_picc.jpg";
import Hero from "../assets/hero_pic.webp";

// navigation
import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MainPage() {
  // Mission and Vision section
  const mvControls = useAnimation();
  const [mvRef, mvInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (mvInView) {
      mvControls.start({ x: 0, opacity: 1 });
    } else {
      mvControls.start({ x: 100, opacity: 0 }); // Revert to off-screen right and hidden when out of view
    }
  }, [mvControls, mvInView]);

  // Educational Programs section
  const eduControls = useAnimation();
  const [eduRef, eduInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (eduInView) {
      eduControls.start({ x: 0, opacity: 1 });
    } else {
      eduControls.start({ x: -100, opacity: 0 }); // Revert to off-screen left and hidden when out of view
    }
  }, [eduControls, eduInView]);

  // Sustainable practices section animation controls
  const sustainableControls = useAnimation();
  const [sustainableRef, sustainableInView] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjusts when the animation triggers
  });

  useEffect(() => {
    if (sustainableInView) {
      sustainableControls.start({ y: 0, opacity: 1 });
    } else {
      sustainableControls.start({ y: 50, opacity: 0 }); // Revert when out of view
    }
  }, [sustainableControls, sustainableInView]);

  // innovative technology in education
  const innovativeControls = useAnimation();
  const { ref: innovativeRef, inView: innovativeInView } = useInView();

  useEffect(() => {
    if (innovativeInView) {
      innovativeControls.start({ y: 0, opacity: 1 });
    } else {
      innovativeControls.start({ y: -50, opacity: 0 }); // Reset position above with opacity 0
    }
  }, [innovativeControls, innovativeInView]);

  // community voice
  // const communityControls = useAnimation();
  // const { ref: communityRef, inView: communityInView } = useInView();

  // useEffect(() => {
  //   if (communityInView) {
  //     communityControls.start({ x: 0, opacity: 1 });
  //   } else {
  //     communityControls.start({ x: -50, opacity: 0 }); // Reset position to left with opacity 0
  //   }
  // }, [communityControls, communityInView]);

  // join our mission today
  const missionControls = useAnimation();
  const { ref: missionRef, inView: missionInView } = useInView();

  useEffect(() => {
    if (missionInView) {
      missionControls.start({ x: 0, opacity: 1 });
    } else {
      missionControls.start({ x: 50, opacity: 0 }); // Reset position to right with opacity 0
    }
  }, [missionControls, missionInView]);

  return (
    <div className="main_container font-main ">
      {/*hero section */}
      <div className="relative w-full h-[500px] xl:h-[750px]">
        {/* Background Image */}
        <motion.img
          src={Hero}
          alt="Hero Image"
          className="object-cover w-full h-full"
          initial={{ scale: 1.1 }} // Initial zoom in
          animate={{ scale: 1 }} // Scale to normal size
          exit={{ scale: 0.9 }} // Scale down when exiting
          transition={{ duration: 0.5 }} // Transition duration
        />

        {/* Overlay Content */}
        <div className="px-4 absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Empowering Young Minds with StoryMath
          </h1>
          <p className="text-white mb-6 max-w-lg">
            Join us in revolutionizing education through sustainable practices,
            advanced technology, and community engagement. Together, we can
            enhance literacy and numeracy for children everywhere.
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <Link
              to="/aboutus"
              className="bg-[#008C7A] text-white font-normal py-2 px-4 rounded hover:opacity-80 transition"
            >
              Learn More
            </Link>
            <Link className="bg-gray-300 font-normal text-gray-800 py-2 px-4 rounded hover:opacity-80 transition">
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/*mission-vision   */}
      <motion.div
        className="mv_container py-16 px-4 text-center md:text-left mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
        ref={mvRef}
        initial={{ x: 100, opacity: 0 }} // Start from right (100px off-screen)
        animate={mvControls}
        transition={{ duration: 0.6 }}
      >
        <div className="md:flex">
          <div className="md:w-2/4 md:flex md:items-center">
            <img src={MV} alt="mission-vision-pic" />
          </div>

          <div className="md:w-2/4 md:pl-3 xl:pl-16">
            <div className="my-3">
              <Title>Our Mission & Vision</Title>
              <p className="text-[14px] xl:text-[18px] my-5">
                To revolutionize education by integrating sustainable practices,
                advanced technology, and community engagement, empowering
                students to excel in literacy, numeracy, and critical thinking.
                Through innovative approaches, StoryMath aims to create
                accessible, inclusive, and impactful learning experiences that
                inspire lifelong learners across diverse regions.
              </p>

              <p className="text-[14px] xl:text-[18px] my-5">
                To create a future where all students, regardless of their
                background, are equipped with the knowledge, skills, and values
                needed to thrive in a rapidly evolving world. By fostering a
                strong foundation in literacy, numeracy, and sustainability,
                StoryMath envisions a global community of empowered learners who
                contribute to a more equitable and sustainable society.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/*educational programs  */}
      <motion.div
        className="educational_container py-16 px-4 mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
        ref={eduRef}
        initial={{ x: -100, opacity: 0 }} // Start from left (-100px off-screen)
        animate={eduControls}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <Title>Explore Our Educational Programs</Title>
          <p className="text-[14px] xl:text-[18px]">
            StoryMath offers a range of programs designed to enhance literacy
            and numeracy among children. Each tier builds upon the last,
            ensuring a comprehensive approach to learning. Discover how our
            innovative methods can benefit your child’s education.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          <EducationCard
            imgsrc={Lite}
            alt={"educ_lite"}
            title={"Literacy enhancement program"}
            desc={
              "Our program focuses on improving reading and writing skills through interactive storytelling and technology-based learning tools."
            }
            to={"/"}
          />
          <EducationCard
            imgsrc={Num}
            alt={"educ_num"}
            title={"Numeracy skills development"}
            desc={
              "This program strengthens children's mathematical skills through hands-on activities and real-world applications."
            }
            to={"/"}
          />
          <EducationCard
            imgsrc={Adv}
            alt={"educ_adv"}
            title={"Advanced Learning Initiatives"}
            desc={
              "Our advanced programs integrate technology and community engagement to provide a holistic educational experience."
            }
            to={"/"}
          />
        </div>
      </motion.div>

      {/*sustainable practice  */}
      <motion.div
        className="sustainable_container py-16 px-4 mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
        ref={sustainableRef} // Connect to the InView hook
        initial={{ y: 50, opacity: 0 }} // Start 50px below with opacity 0
        animate={sustainableControls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <div className="md:flex md:items-center lg:items-start">
          <div className="mb-5 md:w-2/4 lg:flex lg:justify-center">
            <img
              className="lg:w-96 xl:w-auto"
              src={SustainImg}
              alt="sustainable-practices"
            />
          </div>

          <div className="md:w-2/4 md:pl-3 xl:pl-16">
            <div className="text-center md:text-left">
              <Title style={{ textTransform: "capitalize" }}>
                our commitment to sustainable practices
              </Title>

              <p className="text-[14px] xl:text-[18px]">
                At StoryMath, we integrate eco-friendly methods into our
                educational programs to promote sustainability. Our initiatives
                not only enhance learning but also instill a sense of
                environmental responsibility in children.
              </p>
            </div>

            <div className="mt-10">
              <div className="flex text-[14px] mb-3 items-center xl:text-[18px]">
                <IoIosLeaf size={20} color="#008C7A" />
                <div className="ml-2">
                  <h1>Utilizing recycled materials for educational tools.</h1>
                </div>
              </div>

              <div className="flex text-[14px] mb-3 items-center xl:text-[18px]">
                <IoIosLeaf size={20} color="#008C7A" />
                <div className="ml-2">
                  <h1>
                    Incorporating outdoor learning sessions to connect with
                    nature.
                  </h1>
                </div>
              </div>

              <div className="flex text-[14px] mb-3 items-center xl:text-[18px]">
                <IoIosLeaf size={20} color="#008C7A" />
                <div className="ml-2">
                  <h1>
                    Implementing energy-efficient technologies in our
                    facilities.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/*innovative technology in education  */}
      <motion.div
        className="innovative_container py-16 px-4 text-center mx-auto md:text-left lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
        ref={innovativeRef}
        initial={{ y: -50, opacity: 0 }} // Start above screen (y: -50) with opacity 0
        animate={innovativeControls}
        transition={{ duration: 0.6 }} // Adjust the speed of the animation
      >
        <div className="mb-5 md:flex">
          <div className="md:w-2/5 lg:w-2/4 lg:text-center">
            <Title>Innovative Technology in Education</Title>
          </div>
          <div className="md:w-2/4">
            <p className="text-[14px] xl:text-[18px]">
              At StoryMath, we leverage cutting-edge technology to create
              engaging and effective learning experiences. Our programs utilize
              interactive tools and digital platforms to enhance both literacy
              and numeracy skills among children.
            </p>

            <div className="md:flex">
              <div className="my-10 mr-5">
                <Title>Digital Tools</Title>
                <p className="text-[14px] xl:text-[18px]">
                  We use tablets and educational apps to make learning
                  interactive and fun.
                </p>
              </div>

              <div className="md:my-10">
                <Title>Interactive Platforms</Title>
                <p className="text-[14px] xl:text-[18px]">
                  Our online platforms provide personalized learning experiences
                  for each student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/*join our mission today section */}
      <motion.div
        className="join_our_mission px-4 text-white py-16 bg-[#008C7A]"
        ref={missionRef}
        initial={{ x: 50, opacity: 0 }} // Start from right (50px off-screen) with opacity 0
        animate={missionControls}
        transition={{ duration: 0.6 }} // Adjust the speed of the animation
      >
        <div className="text-center">
          <Title style={{ textTransform: "capitalize" }}>
            join our mission today
          </Title>

          <p className="text-[14px] xl:text-[18px]">
            Support StoryMath in transforming childrens education through
            donations or by volunteering your time. Every contribution makes a
            difference!
          </p>
        </div>

        <div className="mt-10 text-center flex flex-col items-center md:flex-row md:justify-center">
          <Button to="/">Donate Now</Button>
          <Button
            style={{
              backgroundColor: "#008C7A",
              color: "white",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            to="/"
          >
            Volunteer With Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
