import React, { useState } from "react"; 
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

function RegisterPage() {
  const navigate = useNavigate(); // nav로 페이지 간 이동 구현(link말고 다른 걸로 구현해보고 싶어서)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [focusedField, setFocusedField] = useState(""); // 포커스된 필드를 저장하는 상태

  // 유효성 검사 함수
  const validateForm = () => {
    if (!name || !email || !password || !introduction || !checkBox) {
      alert("모든 필드를 입력해주세요."); 
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {  // test 메서드 새로 알게 됨.
      alert("유효한 이메일 주소를 입력해주세요.");
      return false;
    }    
    return true;  // 유효성 통과 시 true 리턴
  };

  const handleRegister = () => {  
    if (validateForm()) {     // 등록 성공 후 FeedPage로 이동
      navigate("/feed"); // feedpage로 이동
    }
  };

  return (
    <BaseContainer>
      <Container>
        <WelcomeStc>환영합니다!</WelcomeStc>
        <RegisterStc>기본 회원 정보를 등록해주세요</RegisterStc>

        <ItemBox>
          <Label focused={focusedField === "name"}>이름</Label>
          <Input 
            name="name"     // 인풋에 이름 추가
            type="text" 
            placeholder="이름을 입력해주세요." 
            width="249px" 
            color="#15B886" 
            value={name}  // name이랑 입력값 동기화
            onChange={(event) => setName(event.target.value)}  // 변경사항 발생 시 setName으로 입력값과 name값 동기화
            onFocus={() => setFocusedField("name")} // 포커스 시 상태 변경
            onFocusOut={() => setFocusedField("")} // 포커스 아웃 시 상태 초기화
          />
        </ItemBox>

        <ItemBox>
          <Label focused={focusedField === "email"}>이메일</Label>
          <Input 
            name="email"
            type="email" 
            placeholder="이메일을 입력해주세요." 
            width="333px" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            onFocus={() => setFocusedField("email")} // 포커스 시 상태 변경
            onFocusOut={() => setFocusedField("")} // 포커스 아웃 시 상태 초기화
          />
        </ItemBox>

        <ItemBox>
          <Label focused={focusedField === "password"}>비밀번호</Label>
          <Input 
            name="password"
            type="password" 
            placeholder="비밀번호를 입력해주세요." 
            width="274px" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            onFocus={() => setFocusedField("password")} // 포커스 시 상태 변경
            onFocusOut={() => setFocusedField("")} // 포커스 아웃 시 상태 초기화
          />
        </ItemBox>

        <ItemBox>
          <Label focused={focusedField === "introduction"}>한 줄 소개</Label>
          <Input 
            name="introduction"
            type="text" 
            placeholder="당신을 한 줄로 소개해보세요" 
            width="373px" 
            value={introduction} 
            onChange={(event) => setIntroduction(event.target.value)} 
            onFocus={() => setFocusedField("introduction")} // 포커스 시 상태 변경
            onFocusOut={() => setFocusedField("")} // 포커스 아웃 시 상태 초기화
          />
        </ItemBox>

        <Stc>
          <CheckBox type='checkbox' checked={checkBox} onChange={() => setCheckBox(!checkBox)}/> 
          <Url href='#' target="_blank" rel="noopener noreferrer">이용약관</Url>과 
          <Url href='#' target="_blank" rel="noopener noreferrer">개인정보취급방침</Url>에 동의합니다.  {/* 새 창에서 열기 추가 */}
        </Stc>

        <ButtonsBox>
          <Btn1 onClick={() => alert("취소되었습니다.")}>취소</Btn1> 
          <Btn2 onClick={handleRegister}>가입</Btn2> 
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
  color: ${(props) => (props.focused ? "#15B886" : "#ACB5BD")}; // 포커스 여부에 따라 색상 변경
`;

const Input = styled.input`
  width: ${(props) => props.width};
  height: 33.5px;
  border: none;
  border-bottom: 1px solid #ACB5BD;
  outline: none;
  font-family: Inter;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.99px;
  color: #ACB5BD;

  &::placeholder {
    color: #ACB5BD;
    opacity: 1;
    font-weight: 400;
    font-family: Inter;
    font-size: 19px;
    line-height: 22.99px;
  }

  &:focus {
    border-bottom: 1px solid #15B886; // 포커스 되었을 때 아래 테두리 색상 (녹색)
    color: #15B886; 
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

const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

export default RegisterPage; // 사용하기 위한 export
