const buttonVariantsStyling = {
  google:
    'bg-blue-500 text-white py-3 rounded w-full hover:bg-blue-400 transition-colors',
  normal:
    'bg-black text-white py-3 rounded w-full border border-black hover:bg-white hover:text-black transition-colors ',
  outline:
    'bg-white border border-blue-500 text-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition-colors',
};
const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      className={`${buttonVariantsStyling[variant]} ${className} font-medium`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
