const FormInput = ({ placeHolderLabel, value, ...props }) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <input
        value={value}
        {...props}
        className={`${
          value ? 'border-black' : 'border-gray-400'
        } block border-[2px]  focus:border-black transition-colors rounded py-3 px-4 focus:outline-none appearance-none peer`}
      />
      {placeHolderLabel ? (
        <label
          htmlFor="username"
          className={`${
            value
              ? '-top-3 text-black bg-white px-2 scale-90'
              : 'top-3.5 text-gray-400 bg-white/0 px-0'
          } absolute left-4 peer-focus:-top-3  peer-focus:bg-white peer-focus:scale-90 duration-300 peer-focus:px-2 pointer-events-none transition-all  peer-focus:text-black`}
        >
          {placeHolderLabel}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
