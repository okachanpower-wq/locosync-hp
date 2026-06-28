import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Flow from './components/Flow';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('none');

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // offset for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#334155] font-sans antialiased selection:bg-[#d4af37] selection:text-[#0f172a]">
      {/* 1. ヘッダー */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. メインビュー */}
        <Hero onScrollTo={handleScrollTo} />

        {/* 3. 私たちの強み */}
        <Strengths />

        {/* 4. 提供サービス */}
        <Services />

        {/* 5. 料金プラン */}
        <Pricing onScrollTo={handleScrollTo} onSelectPlan={setSelectedPlan} />

        {/* 6. ご成約までの流れ */}
        <Flow />

        {/* 7. お問い合わせ */}
        <InquiryForm selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}
