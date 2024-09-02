import Navleft from "../home/homeNavLeft/Navleft";
import Story from "../home/story/Story";

const Main = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navleft />
      </div>
      <div className="col-span-2 m-10">
        <div>
          <Story />
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl">nav right</h3>
      </div>
    </div>
  );
};

export default Main;
