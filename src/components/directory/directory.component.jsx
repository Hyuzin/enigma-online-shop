import Category from "../category/category.component";

const Directory = ({categories}) => {
  return (
    <div className="grid grid-cols-3 gap-10 text-white max-w-4xl h-[550px]  ">
      {categories.map(({ id, title, imgUrl }) => {
        return <Category key={id} title={title} imgUrl={imgUrl} />;
      })}
    </div>
  );
};

export default Directory;
