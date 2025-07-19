import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 items-center justify-center">
        <img
          className="w-full md:max-w-[450px] shadow-lg object-cover"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 w-full md:max-w-[450px] bg-white/90 shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-600 text-justify leading-relaxed">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              Our Mission
            </h3>
            <p className="text-gray-600 text-justify leading-relaxed">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 text-base mb-20 px-2">
        <div className="flex-1 bg-white border border-gray-200 shadow-md px-10 md:px-12 py-10 flex flex-col gap-4 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 mb-1">Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 shadow-md px-10 md:px-12 py-10 flex flex-col gap-4 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 mb-1">Convenience</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 shadow-md px-10 md:px-12 py-10 flex flex-col gap-4 hover:shadow-xl transition">
          <b className="text-lg text-gray-800 mb-1">
            Exceptional Customer Service
          </b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step
            of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
