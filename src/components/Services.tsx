import React from 'react';

export default function Services() {
  const serviceItems = [
    'Googleスプレッドシート・Gmail・フォーム連携のGASオーダーメイド開発',
    '業務の変化に合わせたGASプログラム・自動化トリガーの毎月アップデート代行',
    'LINE・Chatwork・Slack等との通知連携や、外部APIとの自動連携システム構築',
    'Googleフォームを活用した予約システムの構築・その他',
  ];

  return (
    <section id="services" className="py-20 bg-[#f1f5f9]">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-2">提供サービス</h2>
        <p className="text-center text-[#d4af37] font-medium tracking-widest text-sm mb-10">
          現場の効率化に関わる全てをお任せ
        </p>
        
        <div className="max-w-[600px] mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-md border-l-4 border-[#d4af37]">
          <ul className="space-y-4">
            {serviceItems.map((item, index) => (
              <li 
                key={index} 
                className="text-base sm:text-lg text-gray-700 font-medium list-none py-1 flex items-start"
              >
                <span className="text-[#d4af37] mr-2.5 font-bold">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
