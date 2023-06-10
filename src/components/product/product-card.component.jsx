import Button from "../button/button.component";

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div
      className="max-w-sm bg-white overflow-hidden rounded-lg hover:scale-105 transition-transform drop-shadow-lg"
    >
      <div className="h-[300px] ">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 font-medium flex justify-between items-center">
        <div>
          <h1>{name}</h1>
          <p className="text-gray-800">${price}</p>
        </div>
        <Button variant={'outline'}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
