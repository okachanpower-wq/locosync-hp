import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';

interface InquiryFormProps {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

export default function InquiryForm({ selectedPlan, setSelectedPlan }: InquiryFormProps) {
  // Formspreeのフックを使用し、フォームIDをセット
  const [state, handleSubmit] = useForm("mzdwqpgp");
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [refId] = useState(`LS-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`);

  // 送信成功時：元のデザインと機能を維持したままFormspreeの状態を利用
  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="max-w-[650px] mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-center py-8">
              <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-500 mb-6">
                <CheckCircle className="w-14 h-14" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">送信が完了いたしました</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">
                この度はお問い合わせいただき、誠にありがとうございます。入力いただいた内容は正常に送信されました。<br />
                2営業日以内に、担当スタッフよりメールにてご連絡させていただきますので、今しばらくお待ちください。
              </p>

              <div className="bg-[#FFFDF6] border border-[#d4af37]/30 inline-block px-6 py-4 rounded-md text-left w-full shadow-sm mb-8">
                <div className="text-xs font-bold text-gray-400 border-b border-gray-100 pb-1.5 mb-2 uppercase tracking-wide">お問い合わせ控え</div>
                <div className="text-xs text-gray-700 flex justify-between py-1"><span>受付番号：</span><span className="font-mono font-bold text-[#0f172a]">{refId}</span></div>
                <div className="text-xs text-gray-700 flex justify-between py-1"><span>お名前：</span><span className="font-bold">{name} 様</span></div>
                <div className="text-xs text-gray-700 flex justify-between py-1"><span>メール：</span><span className="font-mono">{email}</span></div>
                <div className="text-xs text-gray-700 flex justify-between py-1"><span>ご検討プラン：</span><span className="font-bold">
                  {selectedPlan === 'initial' && '初期開発費（¥100,000〜）'}
                  {selectedPlan === 'light' && 'エントリー保守（¥30,000/月）'}
                  {selectedPlan === 'popular' && '安心保守管理サブスク（¥50,000/月）'}
                  {selectedPlan === 'premium' && '戦略的運用サポート（¥100,000/月）'}
                  {selectedPlan === 'none' && '選択してください'}
                </span></div>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-md shadow-sm transition-colors cursor-pointer"
              >
                フォームに戻る
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-2">無料相談・お問い合わせ</h2>
        <p className="text-center text-[#d4af37] font-medium tracking-widest text-sm mb-12">
          システム開発や業務の効率化に関することなら、何でもお気軽にご相談ください
        </p>

        <div className="max-w-[650px] mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="plan" value={selectedPlan} />
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-sm font-bold text-[#0f172a] mb-2">お名前 <span className="bg-[#ef4444] text-white text-[10px] px-1.5 py-0.5 rounded-sm ml-1.5 align-middle">必須</span></label>
              <input type="text" id="name" name="name" placeholder="例: 山田 太郎" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3.5 border border-gray-300 focus:border-[#d4af37] rounded-md focus:outline-none transition-all" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-bold text-[#0f172a] mb-2">メールアドレス <span className="bg-[#ef4444] text-white text-[10px] px-1.5 py-0.5 rounded-sm ml-1.5 align-middle">必須</span></label>
              <input type="email" id="email" name="email" placeholder="例: example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3.5 border border-gray-300 focus:border-[#d4af37] rounded-md focus:outline-none transition-all" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="plan" className="block text-sm font-bold text-[#0f172a] mb-2">ご検討中のプラン</label>
              <select id="plan" name="plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="w-full p-3.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#d4af37] transition-all bg-white">
                <option value="none">選択してください</option>
                <option value="initial">初期開発費（¥100,000〜）</option>
                <option value="light">エントリー保守（¥30,000/月）</option>
                <option value="popular">安心保守管理サブスク（¥50,000/月）</option>
                <option value="premium">戦略的運用サポート（¥100,000/月）</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="block text-sm font-bold text-[#0f172a] mb-2">ご相談内容 <span className="bg-[#ef4444] text-white text-[10px] px-1.5 py-0.5 rounded-sm ml-1.5 align-middle">必須</span></label>
              <textarea id="message" name="message" rows={6} placeholder="新しく業務システムを作りたい、Excelでの手作業を自動化したい、今のシステムを改修したいなど" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-3.5 border border-gray-300 focus:border-[#d4af37] rounded-md focus:outline-none transition-all" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="pt-4 text-center">
              <button type="submit" disabled={state.submitting} className="inline-block bg-[#d4af37] hover:bg-[#f1c40f] text-[#0f172a] font-bold text-base py-4 px-12 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer min-w-[220px] max-w-full">
                この内容で送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}