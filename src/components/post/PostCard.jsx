const PostCard = () => {
  return (
    <div className="my-5 bg-white rounded-xl">
      <div className="flex items-center justify-between space-x-3 px-5 py-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://i.ibb.co/sPZPKk0/416098441-1568179284017697-8516683293212790037-n.jpg"
            />
          </div>
          <div>
            <h2 className="text-base font-semibold">Sohel</h2>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <div className="flex justify-between items-center space-x-0.5 hover:bg-info rounded-full py-[15px]  px-2">
            <span className="bg-secondary w-1 h-1 rounded-full"></span>
            <span className="bg-secondary w-1 h-1 rounded-full"></span>
            <span className="bg-secondary w-1 h-1 rounded-full"></span>
          </div>
          <p className="text-xl font-medium hover:bg-info rounded-full px-2">
            X
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className="px-5 py-2">
            নিশ্চয়ই দুনিয়া ধ্বংসশীল আর আখিরাত চিরস্থায়ী। আখিরাত তালাশ করার জন্য
            আল্লাহ তোমাদের দুনিয়া দিয়েছেন; দুনিয়ার সাথে লেগে থাকার জন্য নয়।{" "}
            <br />
            —উসমান ইবনু আফফান (রা.) <br />
            [আল বিদায়া ওয়ান নিহায়া : ৭/২৪১]
            <br />
            #সীরাহ
          </p>
          
        </div>
      </div>
      <div className="py-3">
        <div className="flex justify-around items-center">
          <div className="flex items-end space-x-3">
            <i className="text-2xl icon-thumbs-o-up"></i>
            <span className="text-lg">Like</span>
          </div>
          <div className="flex items-end space-x-3">
            <i className="text-2xl icon-comment-o "></i>
            <span className="text-lg font-medium">Comment</span>
          </div>
          <div className="flex items-end space-x-3">
            <i className="text-2xl icon-share-2 "></i>
            <span className="text-lg font-medium">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
