import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedPage from './Pages/RegisterPage/2nd_hw/FeedPage';
import DetailPage from './Pages/RegisterPage/DetailPage/DetailPage';
import RegisterPage from './Pages/RegisterPage/2nd_hw/RegisterPage'; 

function App() {
    const posts = [
        { title: "게으르다고 쫒겨났다.", subtitle: "회사에서 게으르다고 쫒겨났다.", date: "2024년 08월 14일", comments: "23개의 댓글", nick: "살몬" },
        { title: "다시 시작하기로 했다.", subtitle: "새로운 도전을 시작했다.", date: "2024년 08월 15일", comments: "10개의 댓글", nick: "이사벨" },
        { title: "여름의 끝을 느끼다.", subtitle: "여름의 마지막 날을 즐기다.", date: "2024년 08월 16일", comments: "15개의 댓글", nick: "제이크" },
        { title: "여행의 기억", subtitle: "지난 여행에 대한 이야기.", date: "2024년 08월 17일", comments: "5개의 댓글", nick: "애나" },
        { title: "커피 한 잔의 여유", subtitle: "좋은 커피와 함께한 오후.", date: "2024년 08월 18일", comments: "8개의 댓글", nick: "존" },
        { title: "가을이 오고 있다.", subtitle: "가을의 준비를 하다.", date: "2024년 08월 19일", comments: "18개의 댓글", nick: "소피" },
    ];

    const initialHeartCounts = posts.map(() => 0);

    const feedInfo = {
        title: "PARD 4기 화이팅",
        content: "파드의 근본은 웹파트입니다.", 
        author_name: "김세현",
        author_id: "shkim0125",
        author_image: "./kwangil.png", 
        author_info: "인생은 짧고 굵게.",
        date: "24.10.05",
        heart_count: 0
    };

    return (
      <Router>
        <Routes>
            <Route path='/' element={<RegisterPage />} /> {/* 기본 페이지를 RegisterPage로 설정 */}
            <Route path='/detail' element={<DetailPage feedInfo={feedInfo} />} />
            <Route path='/feed' element={<FeedPage initialPosts={posts} initialHeartCounts={initialHeartCounts} />} />
        </Routes>
      </Router>
    );
}

export default App;
