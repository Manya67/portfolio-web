import Header from "./Header";
import Options from "./Options";
import Connect from "./Connect";

const SideNav = () => {
  return (
    <div className="w-1/5 max-h-screen  shadow-[0_3px_5px_rgb(0,0,0,0.1)]">
      <Header />
      <Options />
      <Connect />
    </div>
  );
};

export default SideNav;
