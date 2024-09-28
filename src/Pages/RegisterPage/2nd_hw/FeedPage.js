import React, { useState } from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

function FeedPage({ initialPosts, initialHeartCounts }) {
  const [heartCounts, setHeartCounts] = useState(initialHeartCounts);

  const handleHeartClick = (index, isHearted) => {
    const newCounts = [...heartCounts];
    newCounts[index] += isHearted ? -1 : 1; // 하트를 누르면 감소, 다시 누르면 증가
    setHeartCounts(newCounts);
  };

  return (
    <BaseContainer>
      <Container>
        <Top>
          <Logo src='./velog logo.png' alt='Velog Logo' />
          <Bell_img src='./Bell.png' alt='Bell' />
          <Search src='./Search.png' alt='Search' />
          <Writing src='./Writing.png' alt='Writing' />
          <Profile src='./Profile.png' alt='Profile' />
        </Top>
        <Menu>
          <Box1>
            <Trending src='./Trending.png' alt='Trending' />
          </Box1>
          <Box2>
            <Current src='./Current.png' alt='Current' />
          </Box2>
          <Box3>
            <Peed src='./Peed.png' alt='Peed' />
          </Box3>
          <Dropdown src='./dropdown.png' alt='dropdown' />
          <ThreeDots src='./ThreeDots.png' alt='threedots' />
        </Menu>

        <Content>
          <RowSection>
            {initialPosts.map((post, index) => (
              <FeedItem 
                key={index}
                title={post.title}
                subtitle={post.subtitle}
                date={post.date}
                comments={post.comments}
                nick={post.nick}
                heartCount={heartCounts[index]} 
                onHeartClick={(isHearted) => handleHeartClick(index, isHearted)} 
              />
            ))}
          </RowSection>
        </Content>
      </Container>
    </BaseContainer>
  );
}

// 스타일드 컴포넌트 정의
const BaseContainer = styled.div`
  width: 1800px;
  height: 1000px;
`;

const Container = styled.div`
  margin-left: 381px;
  margin-right: 379px;
  width: 1040px;
  height: 792px; 
`;

const Top = styled.div`
  padding-top: 15px;
  width: 1040px;
  height: 40px; 
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 72px;
  height: 23px;
`;

const Bell_img = styled.img`
  margin-left: 711px;
  width: 15.5px;
  height: 20px;
`;

const Search = styled.img`
  margin-left: 27.5px;
  width: 17px;
  height: 17.5px;
`;

const Writing = styled.img`
  margin-left: 19px;
  width: 100px;
  height: 33px;
  border-radius: 16.5px;
`;

const Profile = styled.img`
  margin-left: 20px;
  width: 40px;
  height: 40px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 38px;
  height: 33px;
`;

const Box1 = styled.div`
  width: 85.5px;    
  height: 32px; 
`;

const Box2 = styled.div`
  margin-left: 17.5px;
  width: 67.5px;    
  height: 32px;
`;

const Box3 = styled.div`
  margin-left: 19.5px;
  width: 65.5px;    
  height: 32px;
`;

const Trending = styled.img`
  width: 78px;
  height: 22px;
`;

const Current = styled.img`
  width: 63px;
  height: 22px;
`;

const Peed = styled.img`
  margin-left: 20px;
  width: 61px;
  height: 22px;
`;

const Dropdown = styled.img`
  color: black;
  margin-left: 654px;
  width: 101px;
  height: 33px;
`;

const ThreeDots = styled.img`
  margin-left: 21px;
  width: 4px;
  height: 16px;
`;

const Content = styled.div`
  margin-top: 21px;    
  width: 1040px;
  height: 797px;
`;

const RowSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default FeedPage;
