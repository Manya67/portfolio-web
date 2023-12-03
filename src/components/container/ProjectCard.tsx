import { ProjectCardDetail } from "./Projects";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const ProjectCard: React.FC<ProjectCardDetail> = ({
  projectName,
  description,
  picture,
  skills,
  id,
  repoLink,
  liveLink,
}) => {
  return (
    <div className="w-[85%] h-60 px-2 flex flex-row justify-between items-center gap-4 hover:bg-slate-500 hover:rounded-xl hover:shadow-2xl">
      <div
        className={`w-3/5 h-[90%] flex flex-col gap-2 py-2 px-2 justify-between bg-white rounded-xl ${
          id % 2 == 0 ? "order-first" : "order-last"
        }`}
      >
        <div className="flex flex-col gap-1">
          <span className="text-semibold text-4xl font-noto">
            {projectName}
          </span>
          <span className="font-notosans font-medium pr-4 text-justify">
            {description}
          </span>
          <div>
            <span>Skills used : </span>
            {skills.map((skill) => {
              return <span>{skill} </span>;
            })}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <a href={repoLink}>
            <button className="flex flex-row items-center justify-center gap-2 px-2 py-2 border-2 rounded-lg">
              <FaGithub />
              <span>Repo</span>
            </button>
          </a>
          <a href={liveLink}>
            <button className="flex flex-row items-center justify-center gap-2 px-2 py-2 border-2 rounded-lg">
              <VscLiveShare />
              <span>Live</span>
            </button>
          </a>
        </div>
      </div>
      <div className="w-2/5 h-full flex flex-row items-center justify-center rounded-lg">
        <img src={picture} alt={projectName} className="rounded-lg" />
      </div>
    </div>
  );
};

export default ProjectCard;
