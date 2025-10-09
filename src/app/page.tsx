"use client";

import { TABS, CARDS } from "./aboutData";
import { useState } from "react";
import Image from "next/image";

const BG_IMAGES = [
  "/bg1.webp",
  "/bg2.webp",
  "/bg3.webp",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="min-h-screen bg-custom-black bg-transition"
      style={{
        backgroundImage: `url(${BG_IMAGES[activeTab]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

      {/* Header */}
      <header className="w-full flex items-center justify-between px-[32px] sm:px-[112px] md:px-[128px] py-[24px] bg-transparent">
        {/* Left: Name */}
        <div className="font-roboto font-bold text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] text-[#DAE0EDff] drop-shadow-md leading-none">
          Kim Mathew Bautista
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/kimmathewbautista29" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg">
            <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="w-7 h-7 sm:w-10 sm:h-10" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kimmathewcbautista@gmail.com" target="_blank" className="drop-shadow-lg">
            <Image src="/github.png" alt="Gmail" width={40} height={40} className="w-6 h-6 sm:w-8.5 sm:h-8.5" />
          </a>
          <a href="https://www.linkedin.com/in/kim-mathew-bautista/" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg">
            <Image src="/linkedin.png" alt="LinkedIn" width={44} height={44} className="w-8 h-8 sm:w-11 sm:h-11" />
          </a>
        </div>
      </header>

      <div className=" flex flex-col items-center justify-center pb-[24px]">
        {/* Body */}
        <div className="relative z-10 w-full flex flex-col items-center gap-[32px]">
          <div className="title flex flex-col justify-center items-center font-bebas text-[8rem] sm:text-[9rem] md:text-[10rem] m-0 p-0 leading-[0.85] text-[#DAE0EDff] drop-shadow-lg" >ABOUT ME</div>

          <div
            className={`tabs-container rounded-[16px] flex gap-[0.5rem] p-[5px] transition-colors duration-300 bg-blur shadow-sm`}
          >
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 rounded-[10px] font-roboto text-[0.75rem] transition-all duration-200 sm:text-[1rem] md:text-[1rem] ${
                  activeTab === idx
                    ? "bg-white text-black shadow font-bold"
                    : "bg-transparent text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div key={activeTab} className="cards-container flex flex-col md:flex-row gap-8 fade-in-up items-center md:items-stretch justify-center w-full max-w-5xl">
            {CARDS[activeTab].map((card, idx) => {
              const cardContent = (
                <div
                  key={card.title}
                  className="flip-card group w-[280px] h-[330px] p-0 flex flex-col font-roboto text-black text-xl duration-300 transform bg-transparent hover:-translate-y-2 relative"
                >
                  <div className="flip-card-inner w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="flip-card-front absolute w-full h-full bg-[#F7F7F7] flex flex-col items-center p-[16px] backface-hidden">
                      <div className="relative w-full aspect-square flex-shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 280px) 100vw, 280px"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                      </div>
                      <div className="text-[20px] font-bold italic text-center mt-4">{card.title}</div>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back absolute w-full h-full bg-[#F7F7F7] flex flex-col items-center justify-center p-[16px] [transform:rotateY(180deg)] backface-hidden">
                      <div className="text-[20px] text-center font-shadows-into-light">{card.content}</div>
                    </div>
                  </div>
                </div>
                
              );

              // Only wrap with <a> if it's a project card with a link
              if (activeTab === 1 && 'link' in card) {
                return (
                  <a
                    key={card.title}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {cardContent}
                  </a>
                );
              }
              return cardContent;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
