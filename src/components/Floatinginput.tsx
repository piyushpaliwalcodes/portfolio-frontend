import React from "react";

type FloatinginputProps = {
  id: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const Floatinginput = ({ id, error, ...inputProps }: FloatinginputProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    inputProps.onChange?.(event); // Ensure the original onChange works
  };
  console.log("ERROR",error);
  return (
    <div className="relative my-3">
      {id !== "message" ? (
        <input
          type="text"
          id={id}
          {...inputProps}
          onChange={handleChange} // Use handleChange for input
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            error ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer placeholder=" "`}
        />
      ) : (
        <textarea
          id={id}
          rows={4}
          {...inputProps}
          onChange={handleChange} // Use handleChange for textarea
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            error ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
        ></textarea>
      )}
      <label
        htmlFor={id}
        className="absolute text-xl text-gray-500 duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgcolor px-2 peer-focus:px-2 peer-focus:bg-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {id}
      </label>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Floatinginput;
