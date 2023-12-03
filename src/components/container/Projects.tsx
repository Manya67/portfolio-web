import ProjectCard from "./ProjectCard";

export interface ProjectCardDetail {
  id: number;
  projectName: string;
  description: string;
  picture: string;
  skills: string[];
  repoLink?: string;
  liveLink?: string;
}
const data: ProjectCardDetail[] = [
  {
    id: 1,
    projectName: "Food Villa",
    description:
      "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    picture: "../../../images/food_villa_picture.png",
    skills: ["ReactJS", "TailwindCSS"],
    repoLink: "https://github.com/Manya67/FOODVILLA/",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
  {
    id: 2,
    projectName: "Food Villa",
    description:
      "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    picture: "../../../images/food_villa_picture.png",
    skills: ["ReactJS", "TailwindCSS"],
    repoLink: "hello",
    liveLink: "hello",
  },
  {
    id: 3,
    projectName: "Food Villa",
    description:
      "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    picture: "../../../images/food_villa_picture.png",
    skills: ["ReactJS", "TailwindCSS"],
    repoLink: "hello",
    liveLink: "hello",
  },
  {
    id: 4,
    projectName: "Food Villa",
    description:
      "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    picture: "../../../images/food_villa_picture.png",
    skills: ["ReactJS", "TailwindCSS"],
    repoLink: "hello",
    liveLink: "hello",
  },
  {
    id: 5,
    projectName: "Food Villa",
    description:
      "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    picture: "../../../images/food_villa_picture.png",
    skills: ["ReactJS", "TailwindCSS"],
    repoLink: "hello",
    liveLink: "hello",
  },
];
const Projects = () => {
  return (
    <div className="bg-[#F5F8FC] min-h-screen">
      <div className="px-5 pt-10 mb-20">
        <span className=" font-extrabold font-noto text-6xl px-2">
          Projects
        </span>
      </div>
      <div className="h-auto flex flex-col justify-center items-center gap-20">
        {data.map((item) => {
          console.log(item);

          return (
            <ProjectCard
              id={item.id}
              projectName={item.projectName}
              description={item.description}
              picture={item.picture}
              skills={item.skills}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
