"use client";

import { TABS, CARDS } from "./aboutData";
import TrueFocus from "./TrueFocus";
import { useState } from "react";
import Image from "next/image";
import { FaSquareFacebook, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const BG_IMAGES = [
  "/bg1.webp",
  "/bg2.webp",
  "/bg3.webp",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  // Tooltip state for project cards
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    cardTitle: '',
  });

  return (
    <div
      className="min-h-screen bg-custom-black bg-transition flex flex-col relative"
      style={{
        backgroundImage: `url(${BG_IMAGES[activeTab]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0 h-full w-full" />

      {/* Header */}
      <header className="w-full flex items-center justify-between px-[32px] sm:px-[112px] md:px-[128px] py-[24px] bg-transparent">
        {/* Left: Name */}
        <div className="font-roboto font-bold text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] text-[#DAE0EDff] drop-shadow-md leading-none">
          Kim Mathew Bautista
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/kimmathewbautista29" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg">
            <FaSquareFacebook size={38} color="white" className="w-6 h-6 sm:w-8.5 sm:h-8.5" />
          </a>
          <a href="https://github.com/KimMathew" target="_blank" className="drop-shadow-lg">
            <FaSquareGithub size={38} color="white" className="w-6 h-6 sm:w-8.5 sm:h-8.5" />
          </a>
          <a href="https://www.linkedin.com/in/kim-mathew-bautista/" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg">
            <FaLinkedin size={38} color="white" className="w-6 h-6 sm:w-8.5 sm:h-8.5" />
          </a>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center pb-[24px] px-[24px]">
        {/* Body */}
        <div className="relative z-10 w-full flex flex-col items-center gap-[32px]">
          <h1 className="flex flex-col justify-center items-center">
            <TrueFocus
              sentence="ABOUT ME"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={2}
            />
          </h1>

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
          
          <div key={activeTab} className="cards-container flex flex-wrap justify-center gap-8 fade-in-up">
            {/* Tape rotation values for 3 cards per tab */}
            {(() => {
              const tapeRotations = ['-4deg', '2deg', '-7deg'];
              return CARDS[activeTab].map((card, idx) => {
                const tapeRotation = tapeRotations[idx % 3];
                const cardContent = (
                  <div
                    key={card.title}
                    className="flip-card group w-[280px] h-[330px] p-0 flex flex-col font-roboto text-black text-xl duration-300 transform bg-transparent hover:-translate-y-2 relative"
                  >
                    <div className="flip-card-inner w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front */}
                      <div className="flip-card-front absolute w-full h-full bg-[#f8f7f4] flex flex-col items-center p-[16px] backface-hidden"
                        style={{
                          backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
                        }}
                      >
                        <div className="relative w-full aspect-square flex-shrink-0">
                          <div className="polaroid-tape" style={{ transform: `translateX(-50%) rotate(${tapeRotation})` }}></div>
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
                      <div className="flip-card-back absolute w-full h-full bg-[#f8f7f4] flex flex-col items-center justify-center p-[16px] [transform:rotateY(180deg)] backface-hidden"
                        style={{
                          backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
                        }}
                      >
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
                      className="no-underline relative group"
                      onMouseMove={e => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          visible: true,
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                          cardTitle: card.title,
                        });
                      }}
                      onMouseEnter={e => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          visible: true,
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                          cardTitle: card.title,
                        });
                      }}
                      onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, cardTitle: '' })}
                    >
                      {cardContent}
                      {/* Tooltip that follows cursor */}
                      {tooltip.visible && tooltip.cardTitle === card.title && (
                        <span
                          className="pointer-events-none absolute px-4 py-2 rounded-[10px] bg-[#f8f7f4] text-black text-[0.95rem] whitespace-nowrap z-30 shadow-xl border border-gray-200 font-shadows-into-light tracking-wide"
                          style={{
                            left: tooltip.x + 24,
                            top: tooltip.y,
                            minWidth: 'max-content',
                            transform: 'translateY(-50%) rotate(-2deg)',
                            backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
                            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 0 #e0e0e0',
                            border: '1.5px solid #e0e0e0',
                          }}
                        >
                          {/* Tip indicator (triangle) */}
                          <span
                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-[#f8f7f4] border-l-0 border-l-transparent"
                            style={{ filter: 'drop-shadow(0 0 1px #ccc)' }}
                          />
                          {`Click to navigate to `}
                          <span className="font-bold">{card.title}</span>
                        </span>
                      )}
                    </a>
                  );
                }
                return cardContent;
              });
            })()}
          </div>

        </div>
      </div>
    </div>
  );

}
