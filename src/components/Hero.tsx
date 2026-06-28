import React from 'react';
import bgImgSrc from '../assets/images/baumannfoto_hands_1782457843332.jpg';

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {

  return (
    <section 
      className="relative overflow-hidden min-h-[900px] flex flex-col justify-center items-center text-center text-white px-5 pt-[160px] pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${bgImgSrc}")` }}
      id="hero"
    >
      {/* Semi-transparent dark overlay to ensure high-contrast readability of white text */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none z-0" />

      {/* Hero content container */}
      <div className="relative z-10 max-w-[1100px] mx-auto w-full flex flex-col items-center">
        <span className="text-[#FFFDF6] font-medium tracking-[0.15em] text-sm sm:text-base md:text-lg block mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
          千葉県野田市を拠点に、作って終わりにしない、伴走型・業務改善システム開発
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug tracking-tight mb-6 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
          システムのチカラで、<br />現場の無駄を価値に変える。
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[800px] mx-auto mb-10 leading-relaxed text-gray-100 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
          私たちは、使いやすい独自システムの開発だけでなく、毎月の面倒な維持管理・現場のアップデートまで「丸ごと身代わり対応」するパートナーです。
        </p>
        
        <div className="max-w-[90%,_700px] mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-white [text-shadow:2px_2px_3px_rgba(0,0,0,0.9)]">
          <p>
            ご質問があればお気軽に。
            <span className="font-semibold text-lg sm:text-xl md:text-2xl block mt-2.5 text-[#FF8C00] [text-shadow:1px_1px_2px_rgba(0,0,0,1)]">
              ご相談だけでも大歓迎です。
            </span>
          </p>
        </div>
        
        <div className="w-full flex justify-center px-4 mt-2">
          <button 
            onClick={() => onScrollTo('contact')}
            className="inline-block bg-[#FF8C00] hover:bg-[#e67600] text-white font-bold text-lg sm:text-xl px-10 py-4.5 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_28px_rgba(0,0,0,0.4)] hover:-translate-y-1 transform transition-all duration-200 cursor-pointer min-w-[260px] max-w-[90%]"
          >
            無料相談してみる
          </button>
        </div>
      </div>
    </section>
  );
}
