// components
import Button from "../components/ui/Button";
import CommunityCard from "../components/ui/CommunityCard";
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

export default function MainPage() {
  return (
    <div className="main_container font-main      ">
      <div className="relative w-full h-[500px] xl:h-[750px]">
        {/* Background Image */}
        <img
          src={Hero}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center">
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
            <button className="bg-[#008C7A] text-white py-2 px-4 rounded hover:bg-[#008C7A] transition">
              Learn More
            </button>
            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/*mission-vision   */}
      <div className="mv_container py-16 px-4 text-center md:text-left mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="md:flex">
          <div className="md:w-2/4 md:flex md:items-center ">
            <img src={MV} alt="mission-vision-pic" />
          </div>

          <div className="md:w-2/4 md:pl-3 xl:pl-16 ">
            <div className="my-3">
              <Title>Our Mission & Vision</Title>
              <p className="text-[14px] xl:text-[18px]">
                At StoryMath, we strive to revolutionize education by
                integrating sustainable practices and advanced technology. Our
                vision is to empower children in underserved communities,
                enhancing their literacy and numeracy skills through innovative
                and engaging methods.
              </p>
            </div>

            <div className="my-5">
              <Title>5000 students</Title>
              <p className="text-[14px] xl:text-[18px]">
                Since our inception in 2023, we have reached over 5, 000
                students, providing them with the tools and resources necessary
                for academic success. Our commitment to inclusivity ensures that
                every child has access to quality education.
              </p>
            </div>

            <div className="my-5">
              <Title>100 programs </Title>
              <p className="text-[14px] xl:text-[18px]">
                We have successfully launched 100 educational programs that
                focus on literacy and numeracy, each designed to engage children
                in a fun and interactive way, making learning enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*educational programs  */}
      <div className="educational_container py-16 px-4 mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl ">
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
              " Our program focuses on improving reading and writing skills through interactive storytelling and technology-based learning tools."
            }
            to={"/"}
          />
          <EducationCard
            imgsrc={Num}
            alt={"educ_num"}
            title={"numercay skills development"}
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
      </div>

      {/*sustainable practice  */}
      <div className="sustainable_container  py-16 px-4 mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="md:flex md:items-center lg:items-start">
          <div className="mb-5 md:w-2/4 lg:flex lg:justify-center ">
            <img
              className="lg:w-96 xl:w-auto"
              src={SustainImg}
              alt="sustainable-practices"
            />
          </div>

          <div className="md:w-2/4  md:pl-3 xl:pl-16 ">
            <div className="text-center  md:text-left">
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
              <div className="flex text-[14px] mb-3 items-center xl:text-[18px] ">
                <IoIosLeaf size={20} color="#008C7A" />
                <div className="ml-2">
                  <h1 className="">
                    {" "}
                    Utilizing recycled materials for educational tools.
                  </h1>
                </div>
              </div>

              <div className="flex text-[14px] mb-3 items-center xl:text-[18px] ">
                <div>
                  <IoIosLeaf size={20} color="#008C7A" />
                </div>

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
      </div>

      {/*innovative technology in education  */}
      <div className="innovative_container py-16 px-4 text-center mx-auto  md:text-left lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
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
              <div className="my-10 mr-5   ">
                <Title>Digital Tools</Title>
                <p className="text-[14px] xl:text-[18px]">
                  We use tablets and educational apps to make learning
                  interactive and fun.
                </p>
              </div>

              <div className="md:my-10">
                <Title> Interactive Platforms</Title>
                <p className="text-[14px] xl:text-[18px]">
                  Our online platforms provide personalized learning experiences
                  for each student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*community voices */}
      <div className="community_voices py-16 px-4 mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="text-center mb-10">
          <Title> Community Voices</Title>

          <p>
            <span className="font-bold xl:text-[18px]">
              Hear from our community!
            </span>
            <span className="italic xl:text-[18px]">
              Discover how
              <span className="text-[#008C7A] font-bold xl:text-[18px]">
                StoryMath
              </span>
              is making a difference
            </span>
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          <CommunityCard
            message={
              "StoryMath has transformed my childs learning experience. The integration of technology and storytelling has made education fun and engaging!"
            }
            name={"Emily Johnson"}
            occupation={"Parent and Volunteer"}
          />

          <CommunityCard
            message={
              "As an educator, I see the positive impact StoryMath has on students' literacy and numeracy skills. It's a game-changer for our community."
            }
            name={"Michael Smith"}
            occupation={"Local Teacher"}
          />

          <CommunityCard
            message={
              "The workshops organized by StoryMath have brought families together and fostered a love for learning in our neighborhood."
            }
            name={"Sarah Lee"}
            occupation={"Community Member"}
          />

          <CommunityCard
            message={
              "I support StoryMath because I believe in their mission. They are truly making a difference in children's education."
            }
            name={"David Brown"}
            occupation={"Local Business Owner"}
          />

          <CommunityCard
            message={
              "Thanks to StoryMath, I improved my reading skills and gained confidence. I love learning now!"
            }
            name={"Jessica White"}
            occupation={"Former Student"}
          />

          <CommunityCard
            message={
              "StoryMath's commitment to education and sustainability is inspiring. They are shaping the future of our children."
            }
            name={"Tom Green"}
            occupation={"Community Leader"}
          />
        </div>
      </div>

      {/*join our mission today section */}
      <div className="join_our_mission px-4  text-white py-16 bg-[#008C7A]  ">
        <div className="text-center ">
          <Title style={{ textTransform: "capitalize" }}>
            join our mission today
          </Title>

          <p className="text-[14px] xl:text-[18px]">
            Support StoryMath in transforming children education through
            donations or by volunteering your time. Every contribution makes a
            difference!
          </p>
        </div>

        <div className="mt-10 text-center flex  flex-col items-center md:flex-row md:justify-center ">
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
      </div>
    </div>
  );
}
