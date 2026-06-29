import React from 'react';

export default function Strengths() {
  const strengths = [
    {
      icon: '⚡',
      title: '現場目線＆スピーディ開発',
      desc: '現場に不要な難解な機能を徹底的にカット。現場の誰もが迷わず直感的に使えるシンプルなシステムを、どこよりもスピーディにお届けします。',
    },
    {
      icon: '🛡️',
      title: 'ITに詳しくなくても安心の導入サポート',
      desc: '専門用語を使わず、お客様の現状業務を丁寧にヒアリング。システム導入が初めての方でも安して使いこなせる状態まで伴走します。',
    },
    {
      icon: '📈',
      title: '毎月の業務改善アドバイザー業務',
      desc: 'ただシステムを作って終わりではありません。毎月の実際の利用ログをプロの視点で分析し、次にどんな業務効率化の手を打てばいいか、分かりやすいアドバイスと共にご提案します。',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-2">私たちの強み</h2>
        <p className="text-center text-[#d4af37] font-medium tracking-widest text-sm mb-12">
          選ばれる3つの理由
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-start"
            >
              <div className="text-4xl mb-5" role="img" aria-label="icon">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3.5">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
