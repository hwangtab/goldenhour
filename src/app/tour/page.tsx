"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from 'react'; // useState 임포트
import Link from 'next/link'; // 외부 링크용
import { FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'; // 지도, 인스타그램 아이콘 임포트

// 공연 데이터 (기획안 기반 - 로고 속성 제거됨)
const tourDates = [
  {
    city: "서울",
    venue: "원두서점 갤러리",
    date: "2025-04-27", // 실제 날짜
    address: "서울특별시 영등포구 도림로 278-4 2층", // 실제 주소
    specialEvent: "김경진 작가와 함께", // 원래 기획안 내용으로 복구
    instagram: "@coffeebeansbookstore", // 인스타그램 계정 업데이트
    instagramLink: "https://www.instagram.com/coffeebeansbookstore/", // 인스타그램 링크 업데이트
  },
  {
    city: "대구",
    venue: "나발",
    date: "2025-05-02", // 실제 날짜
    address: "대구 중구 달구벌대로446길 23-7", // 실제 주소
    specialEvent: "빅나인과 콜라보", // 원래 기획안 내용으로 복구
    instagram: "@nabal_acoustic",
    instagramLink: "https://www.instagram.com/nabal_acoustic/", // 실제 링크 필요
  },
  {
    city: "부산",
    venue: "륜빌리지Ryun Village", // 장소명 수정
    date: "2025-05-11", // 실제 날짜
    address: "부산 금정구 오륜대로 262", // 실제 주소
    specialEvent: "나유타의 부엌(@nayutas.kitchen)과 함께", // 원래 기획안 내용으로 복구
    instagram: "@cafe_ryun_official",
    instagramLink: "https://www.instagram.com/cafe_ryun_official/", // 실제 링크 필요
  },
  {
    city: "수원",
    venue: "롱플레이어",
    date: "2025-05-15", // 실제 날짜
    address: "경기 수원시 팔달구 정조로886번길 12 롱플레이어", // 실제 주소
    specialEvent: "김동산과 블루이웃과 함께", // 원래 기획안 내용으로 복구
    instagram: "@long_player",
    instagramLink: "https://www.instagram.com/long_player/", // 실제 링크 필요
  },
  {
    city: "제주",
    venue: "동백",
    date: "2025-05-24", // 실제 날짜
    address: "제주 제주시 조천읍 동백로 68", // 실제 주소
    specialEvent: "자연과 함께하는 공연", // 원래 기획안 내용으로 복구
    instagram: "@cafedongbaek",
    instagramLink: "https://www.instagram.com/cafedongbaek/", // 실제 링크 필요
  },
  { // Add new Jeju venue
    city: "제주",
    venue: "모티프",
    date: "2025-05-23", // 실제 날짜
    address: "제주 서귀포시 대정읍 중산간서로 2278", // 실제 주소 업데이트
    specialEvent: "드랙쇼가 열리는 복합문화공간", // 실제 이벤트
    instagram: "@motif.jeju",
    instagramLink: "https://www.instagram.com/motif.jeju/", // 추정 링크
  },
];

// 날짜 포맷 함수 (간단 버전)
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')} (${dayOfWeek})`;
};

export default function TourPage() {
  const [selectedCity, setSelectedCity] = useState('전체'); // 선택된 도시 상태

  // 도시 목록 (원하는 순서대로 직접 정의)
  const cities = ['전체', '서울', '수원', '대구', '부산', '제주'];

  // 필터 변경 핸들러
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  // 현재 날짜를 기준으로 과거/미래 공연 분리 및 정렬 + 도시 필터링
  const now = new Date();
  now.setHours(0, 0, 0, 0); // 시간 정보 제거하여 날짜만 비교

  const upcomingDates = tourDates
    .filter(d => new Date(d.date) >= now && (selectedCity === '전체' || d.city === selectedCity)) // 도시 필터 추가
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastDates = tourDates
    .filter(d => new Date(d.date) < now && (selectedCity === '전체' || d.city === selectedCity)) // 도시 필터 추가
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 최근 지난 공연부터

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8"> {/* Removed gradient, background will come from layout body */}
      <h1 className="font-serif text-4xl font-bold mb-12 text-center text-neutral-800">투어 일정</h1> {/* text-gray-800 -> text-neutral-800 */}

      {/* City Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => handleCityChange(city)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform active:scale-95 ${ // transition-colors -> transition-all, transform, active:scale-95 추가
              selectedCity === city
                ? 'bg-roseGold text-neutral-800 shadow' // text-white -> text-neutral-800
                : 'bg-white text-neutral-600 hover:bg-beige hover:text-roseGold border border-gray-200 hover:scale-105' // hover:scale-105 추가
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Upcoming Shows */}
        {upcomingDates.length > 0 && (
          <section> {/* Removed mb-16 */}
            <h2 className="font-myeongjo text-2xl font-semibold mb-6 text-roseGold border-b-2 border-roseGold pb-2">다가오는 공연</h2>
            <div>
              {upcomingDates.map((item, index) => (
                  <div key={index} className={`relative bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center transition-transform duration-300 hover:scale-[1.02] ${index < upcomingDates.length - 1 ? 'mb-8' : ''}`}>
                    <div className="w-full sm:w-1/4 mb-4 sm:mb-0 sm:pr-6 text-center sm:text-left">
                      <p className="text-3xl font-bold text-golden">{formatDate(item.date).split(' ')[0].split('.')[2]}</p>
                      <p className="text-sm text-neutral-500">{formatDate(item.date).split(' ')[0].substring(0, 7)} ({formatDate(item.date).split(' ')[1].replace('(', '').replace(')', '')})</p>
                    </div>
                    <div className="w-full sm:w-3/4">
                      <h3 className="font-serif text-2xl font-semibold mb-1 text-neutral-800">{item.city} - {item.venue}</h3>
                      <a
                        href={`https://map.kakao.com/link/search/${encodeURIComponent(item.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-neutral-600 hover:text-golden transition-colors mb-2"
                      >
                        <FaMapMarkerAlt className="mr-1 text-roseGold" />
                        {item.address}
                      </a>
                      {item.specialEvent && (
                        <p className="text-sm italic text-roseGold mb-2">
                          {item.specialEvent.includes("(@nayutas.kitchen)") ? (
                            <>
                              나유타의 부엌
                              <Link href="https://www.instagram.com/nayutas.kitchen/" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:text-golden transition-colors">
                                (@nayutas.kitchen)
                              </Link>
                              과 함께
                            </>
                          ) : (
                            item.specialEvent
                          )}
                        </p>
                      )}
                      {item.instagramLink && (
                          <Link href={item.instagramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-skyBlue hover:text-golden transition-colors mt-2">
                            <FaInstagram className="h-4 w-4 mr-1" />
                            {item.instagram || '공연장 정보'}
                          </Link>
                      )}
                    </div>
                    {/* Connector Line (not for the last item) - Moved inside card div */}
                    {index < upcomingDates.length - 1 &&
                      <div className="absolute top-full left-1/4 -translate-x-1/2 h-8 w-0.5 bg-roseGold/50" aria-hidden="true"></div>
                    }
                  </div> // End of card div
              ))}
            </div>
          </section>
        )}

        {/* Past Shows */}
        {pastDates.length > 0 && (
          <section className="mt-16"> {/* Added mt-16 to maintain spacing */}
            <h2 className="font-myeongjo text-2xl font-semibold mb-6 text-neutral-500 border-b-2 border-neutral-300 pb-2">지난 공연</h2> {/* text-gray-500 -> text-neutral-500, border-gray-300 -> border-neutral-300 */}
            <div className="space-y-6">
              {pastDates.map((item, index) => (
                <div key={index} className="bg-beige/50 p-4 rounded-md flex flex-col sm:flex-row items-start sm:items-center opacity-80"> {/* bg-gray-100 -> bg-beige/50, opacity 조정 */}
                   <div className="w-full sm:w-1/4 mb-2 sm:mb-0 sm:pr-6 text-center sm:text-left">
                     <p className="text-lg font-semibold text-neutral-600">{formatDate(item.date)}</p> {/* text-gray-600 -> text-neutral-600 */}
                   </div>
                   <div className="w-full sm:w-3/4">
                     <h3 className="font-serif text-xl font-medium text-neutral-700">{item.city} - {item.venue}</h3> {/* text-gray-700 -> text-neutral-700 */}
                     {item.specialEvent && <p className="text-xs italic text-neutral-500 mt-1">{item.specialEvent}</p>} {/* text-gray-500 -> text-neutral-500 */}
                   </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* If no shows match filter */}
        {upcomingDates.length === 0 && pastDates.length === 0 && (
           <p className="text-center text-neutral-500 mt-10"> {/* text-gray-500 -> text-neutral-500 */}
             {selectedCity === '전체' ? '예정된 투어 일정이 없습니다.' : `${selectedCity} 지역의 투어 일정이 없습니다.`}
           </p>
        )}
      </div>
    </div>
  );
}