import Title from "../../components/ui/Title";

export default function TierPage() {
  return (
    <div className="mv_container my-32 px-4  font-main text-left mx-auto  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <div className="sub_container">
        <div className="header_container text-center">
          <Title>A Tiered Approach to Empowering Education</Title>
          <p className="text-[14px] -mt-1">
            Transforming Education Through Innovation, Sustainability, and
            Community Engagement
          </p>
        </div>

        <div className="lg:flex lg:gap-4">
          <div className="bg-[#008C7A] text-white p-5 rounded-sm my-10 lg:w-2/4">
            <h1 className="text-[14px] font-bold tracking-wider lg:text-[20px]">
              Tier 1: Strategic Planning and Stakeholder Collaboration
            </h1>

            <p className="text-[14px] mt-5 lg:text-[16px]">
              focuses on forming a diverse project team comprising experts in
              education, technology, AI, and sustainable development. It
              emphasizes stakeholder involvement through virtual meetings and
              co-creation workshops with educators, parents, and local
              governments. A thorough needs assessment will be conducted across
              14 barangays, utilizing data analytics to tailor the program to
              each communitys specific needs. Regular coordination with the
              Department of Science and Technology-Metal Industries Research and
              Development Center (DOST-MIRDC) will ensure efficient production
              of educational tools, specifically Base Ten Blocks.
            </p>
          </div>
          <div className="bg-[#262626] text-white p-5 rounded-sm my-10 lg:w-2/4">
            <h1 className="text-[14px] font-bold tracking-wider  lg:text-[20px]">
              Tier 2: Innovative Development of Learning Materials and Platforms
            </h1>

            <p className="text-[14px] mt-5 lg:text-[16px]">
              focuses on forming a diverse project team comprising experts in
              education, technology, AI, and sustainable development. It
              emphasizes stakeholder involvement through virtual meetings and
              co-creation workshops with educators, parents, and local
              governments. A thorough needs assessment will be conducted across
              14 barangays, utilizing data analytics to tailor the program to
              each communitys specific needs. Regular coordination with the
              Department of Science and Technology-Metal Industries Research and
              Development Center (DOST-MIRDC) will ensure efficient production
              of educational tools, specifically Base Ten Blocks.
            </p>
          </div>
        </div>

        <div className="lg:-mt-14">
          <div className="bg-[#262626] text-white p-5 rounded-sm my-10 lg:flex lg:items-center">
            <div className="title lg:w-2/4">
              <h1 className="text-[14px] font-bold tracking-wider lg:text-[20px]">
                Tier 3: Pilot Testing and Adaptive Learning Framework
                Development and Implementation
              </h1>
            </div>

            <div className="description lg:w-2/4">
              <p className="text-[14px] my-5 lg:text-[16px]">
                Involves face-to-face and virtual training for educators to
                effectively use the new materials and platforms. The program
                promotes flexible teaching models that can adapt to both
                in-person and remote learning environments, utilizing action
                research for continuous improvement based on real-time feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:gap-4 lg:-mt-14">
          <div className="bg-[#008C7A] text-white p-5 rounded-sm my-10 lg:w-2/4">
            <h1 className="text-[14px] font-bold tracking-wider lg:text-[20px]">
              Tier 4: Scalable Replication in Los Banos Central Public Schools
            </h1>

            <p className="text-[14px] mt-5 lg:text-[16px]">
              seeks to empower schools to independently produce Base Ten Blocks
              from recycled materials, fostering sustainability. Training for
              young teachers will be provided to enhance the integration of
              workbooks and the AI platform, supported by a community-led
              monitoring system to track progress.
            </p>
          </div>
          <div className="bg-[#262626] text-white p-5 rounded-sm my-10 lg:w-2/4">
            <h1 className="text-[14px] font-bold tracking-wider  lg:text-[20px]">
              Tier 5: Community Engagement and Awareness Campaign
            </h1>

            <p className="text-[14px] mt-5 lg:text-[16px]">
              emphasizes a robust digital marketing strategy to raise awareness
              of the program and its benefits, utilizing social media and
              interactive content to engage the community.
            </p>
          </div>
        </div>

        <div className="lg:-mt-14">
          <div className="bg-[#008C7A] text-white p-5 rounded-sm my-10 lg:flex lg:items-center">
            <div className="title lg:w-2/4">
              <h1 className="text-[14px] font-bold tracking-wider lg:text-[20px]">
                Tier 6: Dynamic Monitoring, Evaluation, and Learning
              </h1>
            </div>

            <div className="description lg:w-2/4">
              <p className="text-[14px] my-5 lg:text-[16px]">
                focuses on real-time data collection and feedback loops to
                continuously improve the program, ensuring its effectiveness in
                enhancing student learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
