// src/components/Footer.tsx
import Link from 'next/link';

// Removed navLinks array

export default function Footer() {
  return (
    <footer className="bg-beige/50 py-12 px-4 sm:px-6 lg:px-8 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto"> {/* Restored max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] justify-between"> {/* Removed gap, added justify-between */}
          {/* Column 1: Info */}
          <div className="space-y-2 text-center md:text-left"> {/* Align text */}
            <Link href="http://www.kosmart.co.kr" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-roseGold transition-colors">
              <h4 className="font-semibold text-neutral-700 mb-3">한국스마트협동조합</h4>
            </Link>
            <p><a href="mailto:CONTACT@KOSMART.ORG" className="hover:text-roseGold transition-colors">CONTACT@KOSMART.ORG</a></p>
            <p><a href="tel:02-764-3114" className="hover:text-roseGold transition-colors">TEL : 02-764-3114</a></p>
            <p><a href="fax:02-764-3828" className="hover:text-roseGold transition-colors">FAX : 02-764-3828</a></p>
            <p>
              <a
                href={`https://map.kakao.com/link/search/${encodeURIComponent("서울특별시 영등포구 양산로 96 A213호")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-roseGold transition-colors"
              >
                (우)03358 서울특별시 영등포구 양산로 96 A213호
              </a>
            </p>
            <p>업무시간 : 평일 10:00 - 18:00 (점심시간 : 12:00 - 13:00)</p>
          </div>

          {/* Column 2: Additional Info (Moved from Column 3) */}
          <div className="space-y-2 text-center md:text-left"> {/* Align text */}
           <p>이사장 서인형</p>
           <p>사업자등록번호 385-86-01622</p>
           {/* Copyright moved below */}
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-10 pt-8 border-t border-neutral-300/50 text-center text-neutral-500">
          <p>©2025 by 한국스마트협동조합</p>
        </div>
      </div>
    </footer>
  );
}