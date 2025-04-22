// src/components/Navigation.tsx
"use client"; // Link 컴포넌트 사용 및 향후 상호작용을 위해

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 현재 경로 확인용
import React, { useState } from 'react'; // 모바일 메뉴 상태 관리
import { FaInstagram, FaFacebookF, FaLink } from 'react-icons/fa'; // react-icons 임포트


export default function Navigation() {
  const pathname = usePathname(); // 현재 활성화된 메뉴 표시용
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/music', label: '음악 재생' },
    { href: '/tour', label: '투어 일정' },
  ];

  const snsLinks = [
    { href: 'https://www.instagram.com/jai.music_official/', label: 'Instagram', icon: <FaInstagram /> }, // URL 업데이트
    { href: 'https://www.facebook.com/Jaihemp.jung', label: 'Facebook', icon: <FaFacebookF /> }, // URL 업데이트
    { href: 'https://litt.ly/golden_hour', label: 'Website', icon: <FaLink /> }, // URL 업데이트
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-xl font-bold text-golden hover:text-roseGold transition-colors">
              Golden Hour
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-roseGold font-bold'
                    : 'text-gray-700 hover:text-golden'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SNS Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {snsLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="text-golden hover:text-roseGold transition-all duration-300 hover:shadow-[0_0_15px_rgba(246,197,131,0.7)] rounded-full p-1" // 색상, 호버 효과, 패딩 추가
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-golden focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 16h7" />
                </svg>
              ) : (
                // Close Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-roseGold text-white'
                    : 'text-gray-700 hover:bg-beige hover:text-golden'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile SNS Links */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4 px-5">
              {snsLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="text-golden hover:text-roseGold transition-all duration-300 hover:shadow-[0_0_15px_rgba(246,197,131,0.7)] rounded-full p-1" // 색상, 호버 효과, 패딩 추가
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}