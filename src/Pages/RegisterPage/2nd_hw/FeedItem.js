import React, { useState } from 'react';
import styled from 'styled-components';

const FeedItem = ({ title, subtitle, date, comments, nick, heartCount, onHeartClick }) => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted); // 하트 상태 반전
    onHeartClick(isHearted); // 부모에게 상태 전달
  };

  return (
    <Post>
      <Upper />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Smallcontainer>
        <Date>{date}</Date>
        <Comment>{comments}</Comment>
      </Smallcontainer>
      <Hr />
      <Bottomcontainer>
        <Profile1 src='./Profile.png' alt='Profile' />
        <By>by</By>
        <Nick>{nick}</Nick>
        <Heart 
          src={isHearted ? './redheart.png' : './blackheart.png'} 
          onClick={handleHeartClick} 
          alt='Heart' 
        />
        <Count>{heartCount}</Count>
      </Bottomcontainer>
    </Post>
  );
};

// 스타일드 컴포넌트 정의
const Post = styled.div`
  margin: 15px;
  width: calc((100% / 3) - 30px);
  height: 386px;
`;

const Upper = styled.div`
  height: 171px;
  background: #F96969;
`;

const Title = styled.h2`
  font-size: 15px;
  padding-left: 20px;
`;

const Subtitle = styled.p`
  padding-left: 20px;
`;

const Smallcontainer = styled.div`
  height: 15px;
  display: flex;
  margin-top: 70px;
  margin-bottom: 21.5px; 
`;

const Date = styled.p`
  color: #858E96;
  padding-left: 20px;
`;

const Comment = styled.p`
  color: #858E96;
  padding-left: 10px;
`;

const Hr = styled.hr`
  margin-top: 21.5px; /* 위쪽 여백 조정 */
  height: 0px;
`;

const Bottomcontainer = styled.div`
  display: flex;
  height: 15px;
  align-items: center;
`;

const Profile1 = styled.img`
  padding-left: 21px;
  width: 22px;
  height: 22px;
`;

const By = styled.p`
  color: #858E96;
  padding-left: 10px;
  padding-right: 3px;
`;

const Nick = styled.p`
  width: 100px;
  color: #212529;
  margin-right: 90px;
`;

const Heart = styled.img`
  cursor: pointer;
`;

const Count = styled.p`
  padding-right: 14px;
`;

export default FeedItem;
