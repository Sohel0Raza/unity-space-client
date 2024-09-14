import { Link } from "react-router-dom";

const AddPost = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="flex items-center space-x-2 px-5 py-4">
        <div className="w-12 h-12 rounded-full">
          <img
            className="rounded-full mt-1"
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
          />
        </div>
        <button className="bg-info rounded-3xl py-2 px-4 w-full text-left text-lg">
          What is your mind?
        </button>
      </div>
      <hr className="mx-5 text-black" />
      <div className="p-3 flex justify-around items-center">
        <Link>
          <div className="flex items-center space-x-2 font-semibold hover:bg-info py-1 px-5 rounded">
            <i className="icon-video_library text-[#5BC4BD] text-3xl"></i>
            <h3>Photo/video</h3>
          </div>
        </Link>
        <Link>
          <div className="flex items-center space-x-2 font-semibold hover:bg-info py-1 px-5 rounded">
            <i className="icon-videocam text-[#5BC4BD] text-4xl"></i>
            <h3>Reels</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default AddPost;
