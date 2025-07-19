import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover timeless furniture designs crafted with precision and care.
            From modern aesthetics to classic styles, our pieces are designed to
            elevate your living spaces and bring comfort to your home.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">BRAND</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONTACT US</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+911234567890</li>
            <li>contact@NestFurniture.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
