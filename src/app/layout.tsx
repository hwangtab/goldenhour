import type { Metadata } from "next";
import { Cormorant_Garamond, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation"; // Navigation 컴포넌트 임포트
import Footer from "@/components/Footer"; // Footer 컴포넌트 임포트

// Google Fonts 로드
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"], // 필요한 가중치 지정
  variable: "--font-cormorant-garamond", // CSS 변수 이름
});

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"], // 'korean' 서브셋은 next/font/google에서 지원하지 않을 수 있음, 확인 필요
  weight: ["400", "700"],
  variable: "--font-nanum-myeongjo",
});

export const metadata: Metadata = {
  title: "자이 Golden Hour: '봄의 흐름' 투어",
  description: "자이의 Golden Hour 앨범 투어 홍보 및 음악 재생 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body // Ensure no whitespace or comments between html and body tags
        className={[
          cormorantGaramond.variable,
          nanumMyeongjo.variable,
          'font-sans',
          'antialiased',
          'pt-16'
          // Removed gradient classes from body, applying globally in globals.css
        ].join(' ')}
      >
        <Navigation /> {/* Navigation 컴포넌트 추가 */}
        <main>{children}</main> {/* Wrap children in main for semantic structure */}
        <Footer /> {/* Footer 컴포넌트 추가 */}
      </body>
    </html>
  );
}
