"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // 기본 스타일 임포트
// import Image from 'next/image'; // Removed next/image import

// 임시 트랙 데이터 (실제 음원 및 이미지 경로 필요)
const tracks = [
  { id: 1, title: "너의 데이트", src: "/music/YOUR DATE.mp3", artwork: "/images/albumart.png",
    lyrics: `작사, 작곡, 노래: 자이
편곡: 박찬울, 이보람
기타, 미디 프로그래밍: 박찬울
피아노: 이보람

비가 오면 괜찮을지
눈이라도 내리면 더 좋을런지
잠깐 사이 사라진 햇빛은 누굴 불러올런지

어제 넌 분명 구멍난 셔츠였는데
오늘은 새로 산 옷을 입고
새 구두도 신었구나
뭐가 그리 신이 나는지

잠깐 사라진 햇빛은 다시 돌아오고
너의 구두도 빛이 나

어제 넌 분명 구멍난 셔츠였는데
오늘은 어울리지 않는 모습으로
머리도 넘겼구나
코미디가 있다면 이런 걸까하며
웃음이 나

어제 넌 분명 구멍난 셔츠였는데
오늘은 어울리지 않는 모습으로
백화점을 털어왔나
이러다 꽃다발까지 준비하겠구나 모자른 놈
아니 사실 내가 모지리였네`,
    gradientClass: "bg-gradient-to-b from-roseGold/30 to-skyBlue/30" },
  { id: 2, title: "Fever", src: "/music/FEVER.mp3", artwork: "/images/albumart.png",
    lyrics: `작사, 작곡, 노래: 자이
편곡: 박찬울, 이보람
기타: 박찬울
피아노: 이보람
베이스: 정수민
드럼: 권낙주

바람아 불어라 나와 함께
Running a fever Running a fever
그 입맞춤이 없었다면 스쳐갈 인연
Running a fever Running a fever
내 사람

태양아 가거라 달님오게
Running a fever Running a fever
달빛에 불러주던 노래 이젠 없구나
Running a fever Running a fever
내 사람아

아주 긴 시간을 울었네
집잃은 고양이 울음처럼
슬픈 노래라도 다시 불러 줄 수는 없나
행여나 다시 오실까 하는 마음만

아주 긴 시간을 울었네
집잃은 고양이 울음처럼
슬픈 노래라도 다시 불러 줄 수는 없나
행여나 다시 오실까 하는 마음만
애타게 Running a fever Running a fever
(아주 긴 시간을 울었네 집 잃은 고양이 울음처럼)
내 사람 내 사람 내 사람아 내 사람아 running a fever`,
    gradientClass: "bg-gradient-to-b from-golden/50 to-roseGold/30" },
  { id: 3, title: "오늘 이 밤을", src: "/music/TODAY TONIGHT.mp3", artwork: "/images/albumart.png",
    lyrics: `작사, 작곡, 노래: 자이
편곡: 박찬울, 이보람
기타: 박찬울
피아노: 이보람
베이스: 정수민
드럼: 권낙주

어제 넌 그런 말을 했지
내일 밤도 어떠냐고
비싼 위스키를 남김 없이 비운 난 그저 웃고 걸어갈 뿐
뒤에서 걸어오는 그 걸음이 왜 그리 쓸쓸하던지
나도 모르게 걸음을 늦추며 기다리는 이 맘은

오늘 이 밤을
오늘 이 밤을
놓치지 않을 그럴 자신이 있을까

오늘  이 밤을
내일이면 우린 다시 모른척
하루면 일탈이겠지
이틀도 그렇게
모른 척 지나가면 될 일이라고
그러다 그리워지면 어쩌나 우린 모르는 사이가 아닌데

오늘 이 밤을
오늘 이 밤을
놓치지 않을 그럴 자신이 있을까`,
    gradientClass: "bg-gradient-to-b from-skyBlue/50 to-purple-400/30" },
  { id: 4, title: "때늦은 옛 이야기", src: "/music/OLD STORY.mp3", artwork: "/images/albumart.png",
    lyrics: `작사, 작곡, 노래: 자이
편곡: 박찬울, 이보람
기타: 박찬울
피아노: 이보람
베이스: 정수민
드럼: 권낙주

사랑이 다시 시작될까
가끔 목이 메이기도 하지만
이제 와 외롭다 말하는 너에게 더 이상 내 맘 줄 순 없을 것 같아

가슴이 뜨거워야하는데 쓰디쓴 커피만 마셔 댄다고
이제와 미안하다 말하는 너에게 더 이상 내 맘 줄 순 없을 것 같아

당신은 얼만큼 울었었나요
나보다 훨씬 많이 더 울었나요 울어봤었나요
이제 와 사랑이라 말해봐야 때늦은 옛 이야기일 뿐

사랑이 다시 기억돼도
그 기억에 맘이 저며 와도
이제 와 미안하다 말하는 너에게 더 이상 내 맘 줄 순 없을 것 같아

당신은 얼만큼 울었었나요
나보다 훨씬 많이 더 울었나요 울어봤었나요
이제 와 사랑이라 말해봐야 때늦은 옛 이야길 뿐

얼마만큼 울었나요
가슴이 터지도록
이 상처가 보이나요
당신만 아는 사랑
이제와 사랑이라 말해봐야 때늦은 옛 이야기`,
    gradientClass: "bg-gradient-to-b from-golden/60 to-purple-500/40" },
  { id: 5, title: "너의 데이트 (피아노 버전)", src: "/music/YOU DATE(PIANO VERSION).mp3", artwork: "/images/albumart.png",
    lyrics: `작사, 작곡, 노래: 자이
편곡, 피아노: 이보람`, // 연주곡 정보 업데이트
    gradientClass: "bg-gradient-to-b from-white to-golden/20" },
];

// 크레딧 정보
const albumCredits = `프로듀서: 박찬울
기획, 녹음, 믹싱: 황경하 (@스튜디오 놀)
마스터링: 이재수 (@소노리티 마스터링)
제작: 한국스마트협동조합
후원: 고경일, 구선희, 구영탄, 권구백, 권동희, 김상화, 김성용, 김지숙, 나상진, 배은희, 상뮈, 서원숙, 송상희, 심대현, 심상욱, 아작, 어린왕자, 예병구, 윤솔지, 윤진경, 이미진, 이상민, 이종희, 이창훈, 이한주, 정인천, 정영모, 정지승, 조민수, 조형덕, 피터판, 하루뮤직바, 하순분, 한받`;

// Helper function to check if a line is a credit line
const creditKeywords = [
  "작사:", "작곡:", "노래:", "편곡:", "기타:", "피아노:", "베이스:", "드럼:", "미디 프로그래밍:",
  "작사, 작곡, 노래:", "기타, 미디 프로그래밍:", "편곡, 피아노:" // Add combined keywords
];
const isCreditLine = (line: string): boolean => {
  // Handle potential variations
  const trimmedLine = line.trim();
  return creditKeywords.some(keyword => trimmedLine.startsWith(keyword));
};

export default function MusicPage() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // Removed showLyrics and showCredits state

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  // Removed toggleLyrics and toggleCredits functions

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className={`min-h-screen ${currentTrack.gradientClass} py-16 px-4 sm:px-8 flex flex-col items-center transition-colors duration-1000 ease-in-out`}> {/* 동적 그라데이션 및 전환 효과 적용 */}
      <h1 className="font-serif text-4xl font-bold mb-10 text-neutral-800">음악 재생</h1> {/* text-gray-800 -> text-neutral-800 */}

      {/* 플레이어 카드 배경은 흰색 유지 */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Album Artwork */}
        <div className="w-full md:w-1/2 relative aspect-square bg-gray-200"> {/* Added background color */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${currentTrack.artwork}`} // Use img tag with basePath
            alt={`${currentTrack.title} 앨범 아트워크`}
            className="w-full h-full absolute object-cover" // Style for fill effect
          />
          {/* Overlay for Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
             <h2 className="text-white text-3xl font-semibold drop-shadow-md">{currentTrack.title}</h2>
          </div>
        </div>

        {/* Player & Tracklist */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-700">Track List</h3> {/* text-gray-700 -> text-neutral-700 */}
            <ul className="space-y-2 mb-6"> {/* Removed overflow-y-auto and pr-2 */}
              {tracks.map((track, index) => (
                <li key={track.id}>
                  <button
                    onClick={() => handleTrackChange(index)}
                    className={`w-full text-left px-4 py-2 rounded transition-all duration-200 ease-in-out transform active:scale-95 ${ // transform, active:scale-95 추가
                      index === currentTrackIndex
                        ? 'bg-roseGold text-neutral-800 font-bold shadow-sm scale-105' // text-white -> text-neutral-800
                        : 'text-neutral-600 hover:bg-beige hover:text-roseGold hover:scale-105' // hover:scale-105 추가
                    }`}
                  >
                    {index + 1}. {track.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Audio Player Component */}
          <AudioPlayer
            autoPlayAfterSrcChange={true} // 곡 변경 시 자동 재생
            src={currentTrack.src} // 실제 음원 파일 경로 필요
            onEnded={handleNextTrack} // 현재 곡 끝나면 다음 곡 재생
            showSkipControls={true} // 이전/다음 버튼 표시
            onClickNext={handleNextTrack}
            onClickPrevious={handlePreviousTrack}
            // header={`${currentTrack.title}`} // 플레이어 헤더에 곡 제목 표시 (옵션)
            className="mt-auto rhap_theme-color: #F6C583 !important;" // Apply custom theme color (needs !important potentially)
            style={{ '--rhap_theme-color': '#F6C583' } as React.CSSProperties} // Alternative way to set theme color via CSS variable
          />
        </div>
      </div>
       {/* 가사 표시 영역 (추후 구현) */}
       {/* 가사 표시 영역 */}
       {/* Combined Lyrics and Credits Area */}
       <div className="mt-8 w-full max-w-2xl bg-white bg-opacity-70 p-6 rounded-lg shadow-xl text-left text-neutral-700 leading-relaxed"> {/* Changed shadow to shadow-xl */}
         {/* Render lyrics line by line with conditional styling */}
         {(currentTrack.lyrics || "가사가 없습니다.").split('\n').map((line, index) => (
           <p key={index} className={isCreditLine(line) ? 'text-xs text-neutral-500 mb-1' : 'mb-2'}>
             {line || '\u00A0'} {/* Render line or non-breaking space for empty lines */}
           </p>
         ))}

         {/* Divider and Credits */}
         <hr className="my-6 border-neutral-300" />
         <h4 className="font-semibold mb-3 text-neutral-800">Credit</h4>
         <p className="text-sm text-neutral-600 whitespace-pre-line">{albumCredits}</p> {/* Added whitespace-pre-line */}
       </div>
   </div>
 );
}