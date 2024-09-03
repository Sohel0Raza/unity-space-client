import { Link } from "react-router-dom";

const Navleft = () => {
  return (
    <div className="m-5">
      <div className="p-2 flex items-center space-x-3">
        <div className="w-7 h-7">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
          />
        </div>
        <h2 className="text-base font-semibold">Sohel</h2>
      </div>
      <Link>
        <div className="navLeft">
          <i className="icon-group textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Friends</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft space-x-4 ">
          <i className="icon-youtube3 textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Video</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-clock9 textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Memories</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-web textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Feeds</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-groups textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Groups</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-chat6 font-bold textGradient text-2xl"></i>
          <h2 className="text-base font-semibold">Messenger</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-flag1 textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Pages</h2>
        </div>
      </Link>
      <Link>
        <div className="navLeft">
          <i className="icon-bookmark1 textGradient text-3xl"></i>
          <h2 className="text-base font-semibold">Saves</h2>
        </div>
      </Link>
    </div>
  );
};
export default Navleft;
