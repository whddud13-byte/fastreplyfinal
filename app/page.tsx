"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarCheck, Workflow } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          24시간, 3초 응답 <br /> 고객상담
        </motion.h1>
        <p className="mb-6 text-lg md:text-xl text-blue-200">
          채팅 · 이메일 · SNS 무역팀 자꾸 치식하고,  
          흑집단 건 담당자에게 연결됩니다.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition">
          무료 체험
        </button>
      </section>

      {/* Features */}
      <section className="bg-white text-gray-800 w-full py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <MessageCircle className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">즉시 응답</h3>
            <p className="text-sm text-gray-500">답숫 버튼 클릭에 자동으로 응답일시니다.</p>
          </div>
          <div>
            <Clock className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">24시간 상담</h3>
            <p className="text-sm text-gray-500">야간과 휴일에도 상담이 가능합니다.</p>
          </div>
          <div>
            <CalendarCheck className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">손쉬운 예약</h3>
            <p className="text-sm text-gray-500">고객이 직접 예약을 등록하고 확인할 수 있습니다.</p>
          </div>
          <div>
            <Workflow className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">자동 업무 이관</h3>
            <p className="text-sm text-gray-500">정해진 규칙에 따라 담당자에게 전달됩니다.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">자동 응답 미리보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold">기본</h3>
              <p className="text-3xl font-extrabold">₩29,000 <span className="text-sm">/월</span></p>
              <ul className="mt-4 text-gray-600 text-sm">
                <li>최대 50건 응답</li>
                <li>이메일 지원</li>
              </ul>
              <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                바로 시작하기
              </button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold">프리미엄</h3>
              <p className="text-3xl font-extrabold">₩79,000 <span className="text-sm">/월</span></p>
              <ul className="mt-4 text-gray-600 text-sm">
                <li>무제한 응답</li>
                <li>전담 매니저 상담</li>
              </ul>
              <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                바로 시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white w-full py-6">
        <div className="max-w-5xl mx-auto flex justify-center space-x-12 opacity-70">
          <span>skyscanner</span>
          <span>trive</span>
          <span>로고</span>
        </div>
      </footer>
    </main>
  );
}