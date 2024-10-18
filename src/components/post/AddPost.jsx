import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [files, setFiles] = useState([]);

  const handleFile = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("description", e.target.description.value);

    files?.forEach((file) => {
      formData.append("photos", file);
    });

    await axios
      .post(`http://localhost:5001/api/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return res.data;
      });
  };
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl">
        <div className="flex items-center space-x-2 px-5 py-4">
          <div className="w-12 h-12 rounded-full">
            <img
              className="rounded-full mt-1"
              alt="Tailwind CSS Navbar component"
              src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
            />
          </div>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-info rounded-3xl py-2 px-4 w-full text-left text-lg"
          >
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

      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className=" btn-sm  btn-circle text-xl font-semibold bg-[#e9e7e7]  hover:bg-[#d1d0d0] absolute right-4 top-[22px]">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Create Post</h3>
          <hr className="mt-3" />
          <div className="my-3">
            <div className="p-2 flex items-center space-x-3">
              <div className="w-10 h-10">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
                />
              </div>
              <div>
                <h2 className="text-base font-semibold mb-1">Sohel</h2>
                <i className="icon-public bg-slate-200 p-1 rounded">
                  <span className="ml-1 text-black font-semibold">Public</span>
                </i>
              </div>
            </div>
          </div>
          <form onSubmit={handleFile}>
            <textarea
              name="description"
              id=""
              className="w-full focus:outline-none text-xl"
              placeholder="What is your mind?"
            ></textarea>
            <div>
              <input
                type="file"
                multiple
                onChange={(e) => {
                  setFiles(Object.values(e.target.files));
                }}
                id="file"
                name="file"
              />
              <div className="border-[1px]  p-1 rounded my-2 flex items-center justify-between">
                <h4 className="text-xl pl-2">Add to your post</h4>
                <label htmlFor="file" className="text-4xl cursor-pointer">
                  <i className="icon-add_photo_alternate textGradient"></i>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Post"
              className="btn-primary w-full mt-4  text-center cursor-pointer"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddPost;
