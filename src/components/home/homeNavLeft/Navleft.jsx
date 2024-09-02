import { Link } from "react-router-dom";

const Navleft = () => {
  return (
    <div className="m-5">
      <div className="p-2 flex items-center space-x-3">
        <div className="w-7 h-7">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
