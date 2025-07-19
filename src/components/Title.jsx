const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-3xl font-extrabold bg-gradient-to-r from-black via-gray-500 to-gray-200 bg-clip-text text-transparent">
        {text1} <span className="">{text2}</span>
      </p>

      {/* <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p> */}
    </div>
  );
};

export default Title;
