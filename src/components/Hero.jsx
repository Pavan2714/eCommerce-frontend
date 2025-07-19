import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 shadow-lg overflow-hidden my-8">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-white">
        <div className="text-[#232323] w-full max-w-lg px-4">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wider shadow">
              FEATURED
            </span>
            <span className="text-xs text-gray-400 tracking-widest">
              | OUR BESTSELLERS
            </span>
          </div>
          {/* Black & White Gradient Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-500 to-white bg-clip-text text-transparent mb-4 drop-shadow">
            Latest Additions
          </h1>
          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Discover our newest arrivals, handpicked for quality and style. Shop
            the latest trends and exclusive collections now!
          </p>
          {/* Call to Action */}
          <a
            href="#shop"
            className="inline-block bg-gradient-to-r from-black to-gray-500 hover:from-gray-700 hover:to-black text-white font-bold py-2 px-6 rounded-md shadow transition duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
      {/* Hero Left Side */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt=""
      />
    </div>
  );
};

export default Hero;
