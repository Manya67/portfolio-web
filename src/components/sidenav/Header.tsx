import { Moon } from "iconsax-react";

const Header = () => {
  return (
    <div className="h-1/6 flex flex-row items-center justify-between px-5 border-b-[1px] border-gray-700">
      <span className="font-noto font-bold text-4xl">Manya</span>
      <span className="bg-gray-300 p-4 rounded-full">
        <Moon size="32" color="#000000" variant="Bold" />
      </span>
    </div>
  );
};

export default Header;
