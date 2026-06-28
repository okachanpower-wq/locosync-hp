import React from 'react';

export default function Flow() {
  const steps = [
    {
      num: '01',
      title: 'お問い合わせ・申込',
      desc: 'お電話、または当サイトのお問い合わせフォームより、お気軽にお問い合わせ・お申し込みください。',
    },
    {
      num: '02',
      title: 'ヒアリング・無料相談',
      desc: '現在の手作業での業務や、お困りごとを詳しくヒアリングします。オンライン（Zoom等）または対面にて対応可能です。',
    },
    {
      num: '03',
      title: 'プラン・ご提案',
      desc: 'ヒアリング内容をもとに、どのようなGoogleフォームやスプレッドシート、GASを組み合わせて自動化するか、最適なプランをご提案します。',
    },
    {
      num: '04',
      title: 'お見積もり・ご検討',
      desc: '開発範囲やサポート内容に基づいた明確なお見積もりをご提示いたします。じっくりとご検討ください。',
    },
    {
      num: '05',
      title: 'ご成約',
      desc: 'ご提案内容とお見積もりにご納得いただけましたら、正式にご成約・開発スタートとなります。',
    },
  ];

  return (
    <section className="py-20 bg-white" id="flow">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-2">ご成約までの流れ</h2>
        <p className="text-center text-[#d4af37] font-medium tracking-widest text-sm mb-16">
          お問い合わせから開発開始までの5ステップ
        </p>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/30 to-[#d4af37]/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100 hover:border-[#d4af37]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative"
              >
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-full bg-[#0f172a] text-[#d4af37] font-bold text-lg flex items-center justify-center mb-5 border border-[#d4af37]/30 shadow-sm">
                  {step.num}
                </div>

                <h3 className="text-base font-bold text-[#0f172a] mb-3 min-h-[48px] flex items-center justify-center">
                  {step.title}
                </h3>
                
                <p className="text-xs text-[#475569] leading-relaxed text-left">
                  {step.desc}
                </p>

                {/* Desktop arrow hints */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-[22px] -right-4 translate-x-1/2 z-20 text-[#d4af37] text-lg font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
