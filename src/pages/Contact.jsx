import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 items-center justify-center mb-28">
        <img
          className="w-full md:max-w-[480px] shadow-lg object-cover"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 bg-white/90 shadow-lg border border-gray-100 p-8 w-full md:max-w-[480px]">
          <div>
            <p className="font-semibold text-xl text-gray-700 mb-1">
              Our Store
            </p>
            <p className="text-gray-500 leading-relaxed">
              Vadodara Gujarat <br /> India
            </p>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed">
              Tel:{" "}
              <span className="font-medium text-gray-700">+911234567890</span>
              <br />
              Email:{" "}
              <span className="font-medium text-gray-700">
                nestfurniture@gmail.com
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl text-gray-700 mb-1">
              Join Our Team
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="border border-black px-8 py-3 text-sm font-semibold rounded-md bg-white hover:bg-black hover:text-white transition-all duration-300 shadow">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
