"use client"; // 클라이언트 컴포넌트로 변경

import Link from 'next/link';
// import Image from 'next/image'; // Removed next/image import
// Removed unused react-icons import
import { useInView } from 'react-intersection-observer'; // useInView 임포트

export default function Home() {
  // useInView 훅 호출 추가
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.1, // 10% 보이면 트리거
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-neutral-800 bg-gradient-to-br from-skyBlue to-golden p-8"> {/* text-white -> text-neutral-800 */}
        {/* 중복 SNS 링크 제거됨 */}

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Golden Hour: <br /> '봄의 흐름' 투어 {/* Added <br /> for line break */}
        </h1>

        {/* Artist Silhouette/Image Placeholder */}
        {/* Artist Image */}
        <div className="mt-10 w-52 h-52 relative rounded-full overflow-hidden shadow-lg"> {/* 크기 및 그림자 조정 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/artist.png`} // Use img tag with basePath
            alt="자이 아티스트 이미지"
            className="w-full h-full absolute object-cover" // Style for fill effect
          />
        </div>

        {/* Scroll Down Indicator (Optional) */}
        <div className="absolute bottom-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Tour Intro Section with Fade-in Effect */}
      <section
        ref={ref} // Intersection Observer ref 연결
        className={`py-20 px-8 text-center transition-all duration-1000 ease-out ${ // Removed background gradient
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' // inView 상태에 따른 클래스 변경
        }`}
      >
        <h2 className="font-serif text-4xl font-bold mb-4 text-neutral-800">봄의 따스함을 담은 여정</h2> {/* text-gray-800 -> text-neutral-800 */}
        <p className="max-w-2xl mx-auto text-neutral-700 mb-8"> {/* text-gray-600 -> text-neutral-700 */}
          자이의 Golden Hour 앨범 발매 기념 투어 '봄의 흐름'에 여러분을 초대합니다. {/* Escaped single quotes */}
          황금빛 노을처럼 따스하고 감미로운 음악과 함께 특별한 봄날의 추억을 만들어보세요.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link href="/music">
            <button className="w-full sm:w-auto border border-roseGold text-roseGold px-8 py-3 rounded-full font-semibold hover:bg-roseGold hover:text-neutral-800 transition-all duration-300 transform hover:scale-105 active:scale-95"> {/* 호버/클릭 효과 추가 */}
              음악 들으러 가기
            </button>
          </Link>
          <Link href="/tour">
            <button className="w-full sm:w-auto border border-roseGold text-roseGold px-8 py-3 rounded-full font-semibold hover:bg-roseGold hover:text-neutral-800 transition-all duration-300 transform hover:scale-105 active:scale-95"> {/* 호버/클릭 효과 추가 */}
              투어 일정 보기
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
