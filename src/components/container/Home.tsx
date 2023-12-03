const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-[#F5F8FC] ">
      <div className="min-w-[70%] min-h-[80%] flex flex-col items-center justify-center gap-4">
        <span className="border-2 bg-black rounded-full h-52 w-52"></span>
        <span className="text-2xl font-bold font-notosans">
          Hello, I'm Manya Jain
        </span>
        <span className="text-6xl font-noto font-bold ">Web Devloper</span>
        <span className="text-xl font-notosans font-semibold w-2/3 text-center">
          I'm a Freelancer Front-end React Developer based In India.
        </span>
        <button className="border-2 py-4 px-4 text-lg rounded-xl">
          Download Cv{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
