const PostCard = () => {
  return (
    <div className="my-5 bg-white rounded-xl">
      <div className="flex items-center space-x-3 px-5 py-4">
        <div className="w-10 h-10 rounded-full">
          <img
            className="rounded-full mt-1"
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">Sohel</h2>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
