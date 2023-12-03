import WorkExpTimeline from "./WorkExpTimeline";

export interface WorkExpDetails {
  position: string;
  company: string;
  description: string;
  date: string;
}
interface SkillsDetails {
  name: string;
  value: string;
}
const workexp_data = [
  {
    position: "Software Developer Intern",
    company: "Kursaha",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora impedit consequuntur iusto sunt error,",

    date: "05/2023 - 07/2023",
  },
];
const skill_data: SkillsDetails[] = [
  { name: "ReactJS", value: "70%" },
  { name: "ReactJS", value: "70%" },
  { name: "ReactJS", value: "70%" },
  { name: "ReactJS", value: "70%" },
  { name: "ReactJS", value: "70%" },
];
const About = () => {
  return (
    <div className="bg-[#fff] h-screen flex flex-col px-5">
      <div className="pt-10 h-1/6 flex flex-row gap-5">
        <span className="font-extrabold font-noto text-6xl px-2 w-1/2">
          About Me
        </span>
        <span className="font-extrabold font-noto text-6xl px-2">
          Work Experience
        </span>
      </div>
      <div className="flex flex-row w-full h-5/6">
        <div className="w-1/2 h-full px-2 py-4 space-y-4">
          <div className="h-1/3 flex flex-col gap-2">
            <span className="font-bold text-2xl font-noto">
              Hi, Im Rokers Nelson
            </span>
            <span className=" font-medium  text-xl font-notosans text-justify py-4">
              Im a Freelancer Front-end Developer with over 6 years of
              experience. Im from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
            </span>
          </div>
          <div className="w-full">
            <span className="font-bold text-2xl font-noto mb-4">Skills</span>
            <div className="flex flex-row flex-wrap w-full gap-y-4 px-2 py-2">
              {skill_data.map((skill) => {
                return (
                  <div className="flex flex-col gap-2 w-1/2">
                    <span>{skill.name}</span>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: skill.value }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 overflow-y-scroll p-2 rounded-lg mb-4">
          {workexp_data.map((data) => {
            return (
              <WorkExpTimeline
                position={data.position}
                company={data.company}
                description={data.description}
                date={data.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
