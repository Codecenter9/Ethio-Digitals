"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 relative overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-purple-700/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1: Logo & Description */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors"
          >
            EthioDigitals
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Modern digital solutions for web, mobile, AI, and enterprise systems.
            Let’s build the future together.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Projects", "Blog", "Contact"].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {["Web Development", "Mobile Apps", "AI & Automation", "Careers"].map((service, idx) => (
              <li key={idx}>
                <Link
                  href={`/services/${service.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Addis Ababa, Ethiopia <br />
            Phone: +251-900-000-000 <br />
            Email: info@ethiodigitals.com
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {[
              { href: "https://facebook.com", icon: "/icons/facebook.svg", color: "hover:bg-blue-600" },
              { href: "https://twitter.com", icon: "/icons/twitter.svg", color: "hover:bg-blue-400" },
              { href: "https://linkedin.com", icon: "/icons/linkedin.svg", color: "hover:bg-blue-300" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 transition-all ${social.color} hover:scale-110`}
              >
                <Image
                  src={social.icon}
                  alt="social"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} EthioDigitals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
