import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function DetailPage({ feedInfo }) { 
    const [current, setCurrent] = useState(feedInfo.heart_count); // heart_count 초기값을 feedInfo에서 가져옴

    const update = () => {
        setCurrent(prevCount => (prevCount === 1 ? 0 : prevCount + 1)); // heart_count 업데이트
    };

    return (
        <Screen>
            <BaseContainer>
                <Header>
                    <HeaderLeft>
                        <Link to="/feed">      { /* Link로 피드페이지 이동 */} 
                            <VImage src="./V_image.png" alt="V logo" /> 
                        </Link>
                      
                        <UserId>
                            <Highlight>{feedInfo.author_id}.</Highlight> <Log>log</Log>     {/*id 변수로 끌어오기*/}
                        </UserId>
                    </HeaderLeft>
                    <HeaderImgs>
                        <BellImg src='./Bell.png' alt='Bell' />
                        <Search src='./Search.png' alt='Search' />
                        <Writing src='./Writing.png' alt='Writing' />
                        <Profile src='./Profile.png' alt='Profile' />
                    </HeaderImgs>
                </Header>

                <Content>
                    <LeftSideBar>   {/*왼쪽 사이드바 하트 usestate로 구현*/}
                        <img 
                            src={current === 0 ? "./likeheart_black.png" : "./sample.png"} /* 값이1 이면 검정하트 아니면 빨강하트로 이미지 변경, 샘플 이미지 손수 김세현이 직접 제작함.*/  
                            alt="likeheart" 
                            onClick={update} /* 하트 카운트 업데이트*/ 
                        />
                        <HeartCount>{current}</HeartCount>
                        <img src="./share.png" alt="share" />
                    </LeftSideBar>

                    <ContentBody>
                        <FeedTitle>
                            <h1>{feedInfo.title}</h1>
                        </FeedTitle>
                        
                        <FeedInfoContainer>
                            <Name>{feedInfo.author_name}</Name>
                            <Date>{feedInfo.date}</Date>
                            <ButtonList>
                                <List href="#"  target="blank">통계</List>  {/* 클릭 시 새 페이지에서 열기*/}
                                <List href="#"  target="blank">수정</List>
                                <List href="#"  target="blank">삭제</List>
                            </ButtonList>
                        </FeedInfoContainer>

                        <FeedContent>
                            <p>{feedInfo.content}</p>
                        </FeedContent>

                        <FeedAuthorInfo>
                            <AuthorImage>
                              <img src={feedInfo.author_image} alt="AuthorImage" />
                            </AuthorImage>
                            <AuthorDetail>
                                <AuthorName><p>{feedInfo.author_name}</p></AuthorName>
                                <AuthorInfo><p>{feedInfo.author_info}</p></AuthorInfo>
                            </AuthorDetail>
                        </FeedAuthorInfo>
                        <HR />
                        <LinkList>
                            <Click src="./github.png" alt="github" />
                            <Click src="./home.png" alt="home" />
                            <Click src="./mail.png" alt="mail" />
                        </LinkList>
                    </ContentBody>
                </Content>
            </BaseContainer>
        </Screen>
    );
}

const Screen = styled.div`
    width: 1800px;
    height: 1000px;
`;

const BaseContainer = styled.div`
    width: 1006px;  
    height: 866px; 
    margin-left: 392px;
    padding-top: 15px;
`;

const Header = styled.div`
    display: flex;
    height: 40px;
    width: auto;
    align-items: flex-start;
    justify-content: space-between;
`;

const HeaderLeft = styled.div`
    display: flex;
    width: 209px;
`;

const VImage = styled.img`
    width: 28px;
    height: 28px;
    margin-top: 7px;
    margin-right: 18px;
`;

const UserId = styled.p`
    display: flex;
    margin-top: 7px;
    margin-bottom: 0px;
    height: 27px;
    width: 120px;
    font-size: 22px;
`;

const Highlight = styled.span`
    font-weight: bold;
`;

const Log = styled.p`
    margin: 0px;
    width: 41px;
    font-family: Inter;
`;

const HeaderImgs = styled.div`
    display: flex;
    align-items: self-start;
    height: 40px;
`;

const BellImg = styled.img`
    padding: 0px;
    width: 15.5px;
    height: 20px;
    margin-top: 10px;
`;

const Search = styled.img`
    margin-left: 27.5px;
    width: 17px;
    height: 17.5px;
    margin-top: 11px;
`;

const Writing = styled.img`
    margin-left: 19px;
    width: 100px;
    height: 33px;
    border-radius: 16.5px;
    margin-top: 4px;
`;

const Profile = styled.img`
    margin-left: 20px;
    width: 40px;
    height: 40px;
`;

const Content = styled.div`
    margin-top: 115px;
    display: flex;
`;

const LeftSideBar = styled.div`
    padding-top: 9px;
    padding-bottom: 9px;
    margin-left: 17px;
    margin-right: 47px;
    margin-top: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 149px;
    width: 64px;
    border-radius: 30px;
    border: none;
    background-color: lightgrey;
`;

const HeartCount = styled.p`
    margin: 0px;
`;

const ContentBody = styled.div`
    width: 800px;
`;

const FeedTitle = styled.div`
    width: 346px; 
    height: 56px;
    font-size: 24px;
    text-align: left;
    margin-bottom: 20px; 
    margin-bottom: 43px;
    
    h1 {
        margin: 0; 
    }
`;

const FeedInfoContainer = styled.div`
    display: flex;
    padding-bottom: 99px;
`;

const Name = styled.p`
    width: 42px;
    height: 18px;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    margin: 0px;
    margin-right: 20px;
`;

const Date = styled.p`
    width: 60px;
    height: 18px;
    font-size: 15px;
    text-align: left;
    margin: 0px;
    margin-right: 547px;
`;

const ButtonList = styled.div`
    display: flex; 
    align-items: center; 
`;

const List = styled.a`
    color: #858E96;
    text-decoration: none;
    width: 28px;
    height: 18px;
    margin-left: 15px; 
`;

const FeedContent = styled.div`
    height: 279px;
`;

const FeedAuthorInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 31.5px;
`;

const AuthorImage = styled.div`
    width: 132px;
    height: 132px;
    margin-right: 14px;
`;

const AuthorDetail = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center; 
`;

const AuthorName = styled.div`
    width: 65px;
    height: 28px;
    display: block;
    font-size: 23px;
    font-weight: 700;
    text-align: left;
    p {
        margin: 0px;
    }
`;

const AuthorInfo = styled.div`
    width: 187px;
    height: 21px;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.57px;
    text-align: left;
    p {
        margin-top: 10px;
    }
`;

const HR = styled.hr`
    border: 1px solid #EAECEF;
`;

const LinkList = styled.div`
    float: left;
`;

const Click = styled.img`
    margin-top: 22.5px;
    margin-right: 11px;
    width: 35px;
    height: 35px;
`;

export default DetailPage;
