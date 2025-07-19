import { assets } from "../assets/assets";

const policies = [
  {
    icon: assets.exchange_icon,
    title: "Easy Exchange Policy",
    desc: "We offer hassle-free exchange policy",
  },
  {
    icon: assets.quality_icon,
    title: "7 Days Return Policy",
    desc: "We provide 7 days free return policy",
  },
  {
    icon: assets.support_img,
    title: "Best Customer Support",
    desc: "We provide 24/7 customer support",
  },
];

const OurPolicy = () => {
  return (
    <div className="py-16 px-2 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {policies.map((policy, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full p-4 mb-5 shadow">
              <img src={policy.icon} className="w-12 h-12" alt={policy.title} />
            </div>
            <p className="font-semibold text-base mb-2">{policy.title}</p>
            <p className="text-gray-500 text-sm">{policy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
