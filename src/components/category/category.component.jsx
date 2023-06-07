const Category = ({ imgUrl, title }) => {
  return (
    <div className="group overflow-hidden rounded-xl relative bg-black flex">
      <img
        src={`${imgUrl}`}
        alt=""
        className="object-cover w-full h-full group-hover:scale-110 group-hover:opacity-75 transition-all group-hover:rotate-3 duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center font-semibold">
        <button className="text-white hover:text-black border-[2px] border-white px-1 rounded py-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-white ">
          Shop now.
        </button>
      </div>
      <div className="absolute bottom-0 rounded-tr-xl bg-gray-700/50 backdrop-blur flex flex-row items-center justify-between px-3 py-1">
        <p className="font-medium text-md">{title}</p>
      </div>
    </div>
  );
};

export default Category;
