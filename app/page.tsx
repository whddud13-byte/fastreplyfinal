"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarCheck, Workflow } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          24시간, 3초 응답 고객상담 — FastReply
        </motion.h1>
        <p className="mb-6 text-lg md:text-xl text-blue-100">
          채팅 · 이메일 · SNS 문의를 자동으로 응답하고, 복잡한 건은 담당자에게 연결합니다.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition">
          무료 체험 시작하기
        </button>
      </section>

      {/* Features */}
      <section className="bg-white text-gray-800 w-full py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <MessageCircle className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">즉시 응답</h3>
            <p className="text-sm text-gray-500">90% 빠른 응답, 고객 만족도 상승</p>
          </div>
          <div>
            <Clock className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">24시간 상담</h3>
            <p className="text-sm text-gray-500">야간·휴일에도 끊기지 않는 상담</p>
          </div>
          <div>
            <CalendarCheck className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">예약 기능</h3>
            <p className="text-sm text-gray-500">손쉬운 일정 예약과 알림</p>
          </div>
          <div>
            <Workflow className="mx-auto mb-2 text-blue-600" size={32} />
            <h3 className="font-bold">자동 이관</h3>
            <p className="text-sm text-gray-500">정해진 규칙에 따라 담당자에게 연결</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">요금제</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold">기본</h3>
              <p className="text-3xl font-extrabold">₩29,000 <span className="text-sm">/월</span></p>
              <ul className="mt-4 text-gray-600 text-sm">
                <li>최대 50건 자동 응답</li>
                <li>이메일 지원 포함</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold">프리미엄</h3>
              <p className="text-3xl font-extrabold">₩79,000 <span className="text-sm">/월</span></p>
              <ul className="mt-4 text-gray-600 text-sm">
                <li>무제한 자동 응답</li>
                <li>전담 매니저 상담 지원</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white w-full py-6">
        <div className="max-w-5xl mx-auto flex justify-center space-x-12 opacity-70">
          <span>고객사 로고</span>
          <span>파트너</span>
          <span>브랜드</span>
        </div>
      </footer>
    </main>
  );
}
