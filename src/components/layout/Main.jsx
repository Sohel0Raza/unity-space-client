import Navleft from "../home/homeNavLeft/Navleft";
import Story from "../home/story/Story";
import AddPost from "../post/AddPost";
import PostCard from "../post/PostCard";

const Main = () => {
  return (
    <div className="grid grid-cols-4 h-screen py-16">

      <div className="overflow-y-scroll h-full scrollbar">
        <Navleft />
      </div>

      <div className="col-span-2 m-10 overflow-y-scroll scrollbar2 h-full">
        <div className="mx-2">
          <Story />
        </div>
        <div className="w-10/12 mx-auto mt-7">
          <AddPost />
          <PostCard />
        </div>
      </div>

      <div className="overflow-visible sticky top-16 h-full">
        {/* Right sidebar content (if needed) */}
      </div>
    </div>
  );
};

export default Main;
