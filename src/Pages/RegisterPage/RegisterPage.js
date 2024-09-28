import React from "react";
import styled from "styled-components";

function RegisterPage() {
  return (
    <BaseContainer>
      <Container>
        <WelcomeStc>환영합니다!</WelcomeStc>
        <RegisterStc>기본 회원 정보를 등록해주세요</RegisterStc>

        <ItemBox>
          <Label color="#15B886">이름</Label>
          <Input type="text" placeholder="이름을 입력해주세요." width="249px" color="#15B886" />
        </ItemBox>

        <ItemBox>
          <Label>이메일</Label>
          <Input type="email" placeholder="이메일을 입력해주세요." width="333px" />
        </ItemBox>

        <ItemBox>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력해주세요." width="274px" />
        </ItemBox>

        <ItemBox>
          <Label>한 줄 소개</Label>
          <Input type="text" placeholder="당신을 한 줄로 소개해보세요" width="373px" />
        </ItemBox>

        <Stc>
          <input type='checkbox' className='CheckBox' />
          <Url href='#'>이용약관</Url>과 <Url href='#'>개인정보취급방침</Url>에 동의합니다.
        </Stc>

        <ButtonsBox>
          <Btn1>취소</Btn1>
          <Btn2>가입</Btn2>
        </ButtonsBox>
      </Container>
    </BaseContainer>
  );
}

const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Container = styled.div`
  background: white;
  padding: 0;
  width: 373px;
`;

const WelcomeStc = styled.h1`
  margin-top: 168px;
  margin-bottom: 0;
  text-align: left;
  font-family: Inter;
  font-size: 51px;
  font-weight: 700;
  line-height: 61.72px;
  color: #212529;
`;

const RegisterStc = styled.p`
  margin-top: 14px;
  margin-bottom: 46px;
  text-align: left;
  font-family: Inter;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.99px;
  color: #000;
`;

const ItemBox = styled.div`
  margin-bottom: 23.5px;
`;

const Label = styled.p`
  font-family: Inter;
  margin-bottom: 20px;
  margin-top: 0;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.color || "#ACB5BD"}; // color prop을 사용
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: 33.5px;
  border: none;
  border-bottom: 1px solid ${(props) => props.color || "#ACB5BD"}; // color prop을 사용;
  outline: none;
  font-family: Inter;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.99px;
  color: ${(props) => props.color || "#ACB5BD"}; // color prop을 사용

  &::placeholder {
    color: #ACB5BD;
    opacity: 1;
    font-weight: 400;
    font-family: Inter;
    font-size: 19px;
    line-height: 22.99px;
  }
`;

const Stc = styled.p`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  color: #000;
  margin-bottom: 84px;
`;

const Url = styled.a`
  color: #15B886;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
`;

const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn1 = styled.div`
  width: 93px;
  height: 41px;
  border-radius: 20.5px;
  background: #DEE2E6;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Btn2 = styled.div`
  width: 93px;
  height: 41px;
  border-radius: 20.5px;
  background: #15B886;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export default RegisterPage;
