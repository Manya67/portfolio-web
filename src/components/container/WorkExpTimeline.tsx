import { MdWorkspacePremium } from "react-icons/md";
import { WorkExpDetails } from "./About";

const WorkExpTimeline = ({
  position,
  company,
  description,
  date,
}: WorkExpDetails) => {
  return (
    <>
      <div className="flex flex-row px-2 gap-2">
        <div className="flex flex-col justify-center items-center">
          <span className="bg-gray-300 p-4 rounded-full">
            <MdWorkspacePremium size={32} />
          </span>
          <div className="h-full border-l-2" />
        </div>
        <div className=" flex flex-col gap-2 pt-2 ">
          <span className="font-semibold text-xl px-2 py-2">{company}</span>
          <div className="flex flex-row gap-2 justify-start items-center">
            <span className=" font-medium text-lg ">{position}</span>
            <span className="font-normal text-sm text-gray-500">{date}</span>
          </div>

          <p className="tracking-wide	text-justify text-base mb-4">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkExpTimeline;
