import CreatePost from "../createPost/createPost";
import Navleft from "../home/homeNavLeft/Navleft";
import Story from "../home/story/Story";
import Post from "../post/Post";

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
        <div className="w-10/12 mx-auto mt-7">
          <CreatePost />
          <Post/>
        </div>
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default Main;
