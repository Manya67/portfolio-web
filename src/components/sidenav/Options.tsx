import { Call, DocumentCode, Home2, Profile } from "iconsax-react";

const Options = () => {
  const optionsStyle =
    "flex flex-row justify-evenly items-center text-2xl w-full hover:bg-gray-400 py-4 hover:rounded-lg";
  return (
    <div className="h-4/6 flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-evenly min-w-[80%] min-h-[80%] text-left">
        <span className={optionsStyle}>
          <Home2 size="44" color="#000000" variant="Outline" />
          <span>Home</span>
        </span>
        <span className={optionsStyle}>
          <Profile size="44" color="#000000" variant="Outline" />
          <span>About</span>
        </span>
        <span className={optionsStyle}>
          <DocumentCode size="44" color="#000000" variant="Outline" />
          <span>Projects</span>
        </span>
        <span className={optionsStyle}>
          <Call size="44" color="#000000" variant="Outline" />
          <span>Contact</span>
        </span>
      </div>
    </div>
  );
};

export default Options;
