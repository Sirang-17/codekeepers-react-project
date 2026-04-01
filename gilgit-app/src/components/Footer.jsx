import React from 'react';
import * as Lucide from 'lucide-react'; 

const Footer = () => {
  const cityCategories = [
    { title: "CARS BY CITY", category: "Cars" },
    { title: "BIKES BY CITY", category: "Bikes" },
    { title: "LAPTOPS BY CITY", category: "Laptops" },
    { title: "MOBILES BY CITY", category: "Mobiles" },
    { title: "FASHION BY CITY", category: "Fashion" },
  ];

  const cities = ["Karachi", "Lahore", "Multan", "Quetta", "Rawalpindi", "Faisalabad", "Peshawar", "Gilgit"];

  const socialLinks = [
    { Icon: Lucide.Facebook || Lucide.Globe, href: "#" },
    { Icon: Lucide.Twitter || Lucide.MessageCircle, href: "#" },
    { Icon: Lucide.Instagram || Lucide.Camera, href: "#" },
    { Icon: Lucide.Linkedin || Lucide.Users, href: "#" },
  ];

  return (
    <footer className="w-full bg-white dark:bg-[#0a0d14] text-gray-900 dark:text-white transition-colors overflow-hidden border-t border-gray-200 dark:border-[#1e232e]/50">
      
      <div className="max-w-312.5 mx-auto px-4">
        
        {/* --- CITY LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 pt-10 pb-10 border-b border-gray-200 dark:border-[#1e232e]">
          {cityCategories.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-tight">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {cities.map((city, i) => (
                  <li key={i}>
                    <a href="#" className="text-[13px] text-gray-600 dark:text-[#9ca3af] hover:text-black dark:hover:text-white transition-colors">
                      {col.category} In {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- SITE INFO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12 pb-14">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black dark:bg-white text-white dark:text-black font-black h-8 w-8 flex items-center justify-center rounded text-xl">g</div>
              <span className="text-[22px] font-black text-black dark:text-white tracking-tighter">GilgitApp</span>
            </div>
            <p className="text-[14px] text-gray-600 dark:text-[#9ca3af] mb-6 max-w-70 leading-normal">
              A marketplace to buy & sell anything anywhere in Pakistan.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((item, i) => {
                const SocialIcon = item.Icon; 
                return (
                  <a key={i} href={item.href} className="h-9 w-9 rounded-full border border-gray-200 dark:border-[#1e232e] flex items-center justify-center text-gray-600 dark:text-[#9ca3af] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all">
                    <SocialIcon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {[
            { title: "GilgitApp", links: ["About GilgitApp", "Contact Us", "Blog", "FAQs", "GilgitApp Policies", "Terms of Use"] },
            { title: "Top Categories", links: ["Cars", "Bikes", "Mobiles", "Laptops", "Home", "Plots"] },
            { title: "Trending Categories", links: ["Pets", "Fashion", "Appliances", "Furniture", "Shops", "Offices"] }
          ].map((section, idx) => (
            <div key={idx} className="lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white mb-5 uppercase text-[13px] tracking-tight">{section.title}</h4>
              <ul className="space-y-3 text-[13px] text-gray-600 dark:text-[#9ca3af]">
                {section.links.map(link => (
                  <li key={link}><a href="#" className="hover:text-black dark:hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-5 uppercase text-[13px] tracking-tight">Download Our App</h4>
            <div className="flex flex-col gap-3">
               <a href="#" className="flex items-center gap-2 bg-black border border-gray-800 dark:border-[#1e232e] text-white px-3 py-1.5 rounded-lg w-37.5 hover:bg-gray-900 transition-all">
                  <Lucide.Apple size={22} fill="white" />
                  <div className="text-left">
                    <p className="text-[9px] uppercase leading-none opacity-60">Download on the</p>
                    <p className="text-[13px] font-bold leading-tight">App Store</p>
                  </div>
               </a>
               <a href="#" className="flex items-center gap-2 bg-black border border-gray-800 dark:border-[#1e232e] text-white px-3 py-1.5 rounded-lg w-37.5 hover:bg-gray-900 transition-all">
                  <Lucide.Play size={18} fill="white" />
                  <div className="text-left">
                    <p className="text-[9px] uppercase leading-none opacity-60">GET IT ON</p>
                    <p className="text-[13px] font-bold leading-tight">Google Play</p>
                  </div>
               </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="py-8 border-t border-gray-200 dark:border-[#1e232e] text-center">
          <p className="text-[13px] text-gray-500 dark:text-[#6b7280] font-medium">
            Copyright © 2026 GilgitApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;