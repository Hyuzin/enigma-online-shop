import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext)
  const {imageUrl, name, price} = products

  const addProductToCart = () => addItemToCart(products)

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
        <Button variant={'outline'} onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
