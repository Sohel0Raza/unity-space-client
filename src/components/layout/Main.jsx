import Navleft from "../home/homeNavLeft/Navleft";

const Main = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <Navleft/>
      </div>
      <div className="col-span-2">
        <h3 className="text-2xl">content</h3>
      </div>
      <div className="">
        <h3 className="text-2xl">nav right</h3>
      </div>
    </div>
  );
};

export default Main;
