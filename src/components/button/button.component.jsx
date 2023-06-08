const buttonVariantsStyling = {
  google: 'bg-blue-500 text-white py-3 rounded w-full hover:bg-blue-400 transition-colors',
  normal:
    'bg-black text-white py-3 rounded w-full border border-black hover:bg-white hover:text-black transition-colors ',
};
const Button = ({ children, variant, className }) => {
  return (
    <button className={`${buttonVariantsStyling[variant]} ${className} font-medium`}>
      {children}
    </button>
  );
};

export default Button;
