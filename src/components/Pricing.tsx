import React from 'react';

interface PricingProps {
  onScrollTo: (elementId: string) => void;
  onSelectPlan: (plan: string) => void;
}

export default function Pricing({ onScrollTo, onSelectPlan }: PricingProps) {
  const handlePlanClick = (plan: string) => {
    onSelectPlan(plan);
    onScrollTo('contact');
  };

  return (
    <section id="pricing" className="py-20 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-2.5">料金プラン</h2>
          <p className="text-center text-[#d4af37] font-medium tracking-widest text-sm">
            分かりやすい初期費用 ＋ サブスクモデル
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* INITIAL CARD */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 relative flex flex-col justify-between shadow-[0_4px_6px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="bg-[#1a2a3a] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
                INITIAL
              </span>
              <h3 className="text-xl font-bold text-[#1a2a3a] mt-4 mb-2">初期開発費</h3>
              <div className="text-2xl font-bold text-[#1a2a3a] mb-4 pb-4 border-b border-gray-100 flex items-baseline gap-1">
                <span>¥100,000〜</span>
                <span className="text-xs font-normal text-gray-500">(税込)</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[60px]">
                ※Googleスプレッドシートやフォーム、GASを組み合わせた標準的な自動化システムの構築費用です。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  現場に合わせたスプレッドシート・フォーム設計
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  PC・タブレット・スマホからの入力最適化
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  Gmail、Googleカレンダー等との初期連携
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  導入時のサポート
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanClick('initial')}
              className="w-full bg-[#dcb35c] hover:bg-[#c9a14b] text-white font-bold py-3.5 px-4 rounded-sm text-center shadow-sm cursor-pointer transition-all border border-[#dcb35c] text-sm"
            >
              このプランで相談する
            </button>
          </div>

          {/* LIGHT CARD */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 relative flex flex-col justify-between shadow-[0_4px_6px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
                LIGHT
              </span>
              <h3 className="text-xl font-bold text-[#1a2a3a] mt-4 mb-2">エントリー保守</h3>
              <div className="text-2xl font-bold text-[#1a2a3a] mb-4 pb-4 border-b border-gray-100 flex items-baseline gap-1">
                <span>¥30,000</span>
                <span className="text-xs font-normal text-gray-500">/月 (税込)</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[60px]">
                コストを抑えて自動化システムの維持管理と、軽微なバグ修正・文言修正だけをプロに任せたい企業向け。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  Googleアカウント・GASトリガーの維持管理
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  スプレッドシートやGASの設定バックアップ・監視
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  メール・チャットでのいつでも相談窓口
                  <span className="block text-[10px] text-gray-500 mt-0.5 font-normal">（月1回の相談又は、月3時間以内の作業）</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanClick('light')}
              className="w-full bg-[#dcb35c] hover:bg-[#c9a14b] text-white font-bold py-3.5 px-4 rounded-sm text-center shadow-sm cursor-pointer transition-all border border-[#dcb35c] text-sm"
            >
              このプランで相談する
            </button>
          </div>

          {/* POPULAR CARD */}
          <div className="bg-[#fffdf9] border-2 border-[#d4af37] rounded-lg p-7 relative flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="bg-[#dcb35c] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
                POPULAR
              </span>
              <h3 className="text-xl font-bold text-[#1a2a3a] mt-4 mb-2">安心保守管理サブスク</h3>
              <div className="text-2xl font-bold text-[#1a2a3a] mb-4 pb-4 border-b border-gray-100 flex items-baseline gap-1">
                <span>¥50,000</span>
                <span className="text-xs font-normal text-gray-500">/月 (税込)</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[60px]">
                システム運用担当として、日々の業務を最適化します。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  Googleアカウント・GASトリガーの維持管理
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  月3回までのスプレッドシート設計変更やプログラム改修
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  トリガーエラー時の即時復旧・対応
                </li>
                <li className="text-xs text-gray-700 font-bold relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  月次システム稼働状況・データ集計報告
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  メール・チャットでのいつでも相談窓口
                  <span className="block text-[10px] text-gray-500 mt-0.5 font-normal">（月3回の相談又は、月５時間以内の作業）</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanClick('popular')}
              className="w-full bg-[#dcb35c] hover:bg-[#c9a14b] text-white font-bold py-3.5 px-4 rounded-sm text-center shadow-md cursor-pointer transition-all border border-[#dcb35c] text-sm"
            >
              このプランで相談する
            </button>
          </div>

          {/* PREMIUM CARD */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 relative flex flex-col justify-between shadow-[0_4px_6px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <div>
              <span className="bg-[#111111] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">
                PREMIUM
              </span>
              <h3 className="text-xl font-bold text-[#1a2a3a] mt-4 mb-2">戦略的運用サポート</h3>
              <div className="text-2xl font-bold text-[#1a2a3a] mb-4 pb-4 border-b border-gray-100 flex items-baseline gap-1">
                <span>¥100,000</span>
                <span className="text-xs font-normal text-gray-500">/月 (税込)</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[60px]">
                システムを軸に業務フローを最大化する伴奏プラン
              </p>
              <div className="text-xs font-bold text-gray-700 mb-3">
                ライトプラン、ポピュラープランの内容以外に
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  プログラム機能追加、連携修正
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  エラー時の優先対応
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  その他必要な作業
                </li>
                <li className="text-xs text-gray-700 relative pl-5 leading-normal before:content-['✓'] before:absolute before:left-0 before:text-[#d4af37] before:font-bold">
                  メール・チャットでのいつでも相談窓口
                  <span className="block text-[10px] text-gray-500 mt-0.5 font-normal">（月5回の相談、月10時間以内の作業）</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanClick('premium')}
              className="w-full bg-[#dcb35c] hover:bg-[#c9a14b] text-white font-bold py-3.5 px-4 rounded-sm text-center shadow-sm cursor-pointer transition-all border border-[#dcb35c] text-sm"
            >
              このプランで相談する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
