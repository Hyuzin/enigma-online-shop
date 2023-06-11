const CartItem = ({name, price, imageUrl, quantity}) => {
  return (
    <div className="flex flex-row gap-2 items-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow">
      <div className="w-[60px] h-[60px] rounded-l overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="font-medium">
        <p>{name}</p>
        <p className="text-gray-700">{quantity} x ${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
