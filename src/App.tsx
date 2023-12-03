import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Container from "./components/container/Container";
import SideNav from "./components/sidenav/SideNav";

function App() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        trailingSpeed={14}
        outerStyle={{
          border: "3px solid #000",
          background: "none",
        }}
        innerStyle={{ backgroundColor: "black" }}
        clickables={["a"]}
      />
      <div className="flex lg:flex-row min-h-screen min-w-screen">
        <SideNav />
        <Container />
      </div>
    </div>
  );
}

export default App;
