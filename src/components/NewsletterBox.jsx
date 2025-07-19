import React from "react";
// Example icons from Heroicons CDN, you can use your own SVGs or a library
const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.1v-2.9h2.1V9.5c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3v1.57h2.3l-.37 2.9h-1.93v7.05A10 10 0 0 0 22 12" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.5 12.07a12.13 12.13 0 0 1-8.8-4.46s-1.64 2.82 1.7 4.13c-.7.02-1.36-.21-1.93-.53.01 2.28 1.6 4.18 3.95 4.62-.39.11-.8.17-1.23.17-.3 0-.59-.03-.87-.08.6 1.87 2.33 3.23 4.38 3.27A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z" />
      </svg>
    ),
  },
];

const NewsletterBox = () => {
  return (
    <div className="max-w-xl mx-auto my-12 p-10 shadow-2xl border rounded-xl bg-white text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
        Have Questions or Need Help?
      </h2>
      <p className="text-gray-600 mb-6">
        Our team is here to assist you with product details, order status, or
        design advice.
        <br />
        Reach out and let us help you create your perfect space!
      </p>
      <a
        href="/contact"
        className="inline-block bg-black text-white text-sm px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold mb-6"
      >
        Contact Us
      </a>
      <div className="mt-6 flex justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsletterBox;
