import Title from "../../components/ui/Title";

import About from "../../assets/hero_pic.webp";

export default function AboutUsPage() {
  return (
    <div className="mv_container my-32 px-4 text-left mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <div className="sub_container lg:flex  lg:items-center ">
        <div className="image lg:order-2 lg:w-2/4">
          <img src={About} alt="about-storymath" />
        </div>

        <div className="text_container mt-10 lg:w-2/4 lg:pr-5">
          <div className="header ">
            <Title style={{ width: "100px" }}>About StoryMath</Title>

            <p className="text-[14px] my-5 xl:text-[18px]">
              StoryMath is an innovative educational initiative dedicated to
              transforming the way students learn by integrating sustainability,
              cutting-edge technology, and strong community collaboration. Our
              mission is to enhance literacy and numeracy skills among children,
              empowering them with the tools they need to thrive in an
              ever-changing world.
            </p>

            <p className="text-[14px] my-5 xl:text-[18px]">
              We believe that education goes beyond textbooks; it requires a
              holistic approach that addresses the unique needs of each
              community. That’s why we’ve developed a multi-tier program that
              works closely with educators, parents, local governments, and
              experts in technology and sustainable development. Together, we
              co-create culturally relevant learning materials and adaptive
              platforms that engage students while promoting environmental
              consciousness.
            </p>

            <p className="text-[14px] my-5 xl:text-[18px]">
              Our commitment to inclusivity, innovation, and sustainability
              drives every aspect of StoryMath. From eco-friendly educational
              tools to AI-powered learning platforms, we are paving the way for
              a new generation of learners who are not only academically
              equipped but also empowered to make a positive impact on their
              communities.
            </p>

            <p className="text-[14px] my-5 xl:text-[18px]">
              StoryMath is more than a program — it’s a movement to redefine
              education for a brighter, more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
