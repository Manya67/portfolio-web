import { Send2 } from "iconsax-react";

const Connect = () => {
  return (
    <div className="h-1/6 flex flex-row items-center justify-center border-t-[1px] border-gray-700">
      <div className=" flex flex-row items-center justify-center gap-2">
        <span className="bg-gray-400 rounded-full p-3">
          <Send2 size="24" color="#d9e3f0" variant="Outline" />
        </span>
        <div className=" flex flex-col gap-1">
          <span className="font-bold text-xl">Support</span>
          <span>manyajain62002@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Connect;
