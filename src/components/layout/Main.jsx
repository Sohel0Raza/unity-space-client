const Main = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-black">
        <h3 className="text-2xl">nav left</h3>
      </div>
      <div className="col-span-2 bg-red-700">
        <h3 className="text-2xl">content</h3>
      </div>
      <div className="bg-green-500">
        <h3 className="text-2xl">nav right</h3>
      </div>
    </div>
  );
};

export default Main;
