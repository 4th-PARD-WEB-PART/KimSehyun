import styled from "styled-components";
import Title from "./components/Title";
import React, { useEffect, useState } from "react";
import { getMembersAPI, postMemberAPI, postUserData } from "./API/AxiosAPI"; // hint!
import FilterButton from "./components/FilterButton";
import Member from "./components/Member";
import AddMember from "./components/AddMember";

function App() {
  const [members, setMembers] = useState([]);
  const [part, setPart] = useState("ALL");
  const [newUserData, setNewUserData] = useState({ name: "", part: "" });
  const parts = ["ALL", "SERVER", "iOS", "WEB"];

  const getMember = async () => {
    // 주의사항 : get에서는 뒤에 URL parameters가 들어갈 수 있어요!
    // URL parameters가 없다면 전체 구성원을 불러오고
    // 있다면 해당 파트의 구성원을 불러옴을 인지하세요.
    // 각각의 파트는 parameter로 'server', 'web', 'iOS' 로 정확히 기입 되어야만 합니다.
    const response = await getMembersAPI(part);
    setMembers(response);
  };

  // 데이터 추가 함수
  const handlePostData = async () => {
    try {
      if (handleCheckInvalid(newUserData)) { // 유효성 검사코드입니다.
        await postMemberAPI(newUserData); // 사용자 데이터를 추가하는 코드입니다.
        await getMember(); // 데이터 추가 후 불러오는 코드입니다.
        setNewUserData({ name: "", part: "" }); // 입력 필드값을 공백으로 만듭니다.
      } else {
        alert("모든 입력값을 입력하세요.");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  // 간단한 유효성 검사 함수
  const handleCheckInvalid = (data) => {
    return data.name && data.part; // 이름과 파트가 모두 입력되었는지 확인
  };

  useEffect(() => {
    getMember();
  }, [part]);

  return (
    <Background>
      <Title />
      <FilterContainer>
        {parts.map((partname) => {
          return (
            <FilterButton
              key={partname}
              part={partname}
              setPart={setPart}
              selected={part}
            />
          );
        })}
      </FilterContainer>
      <AddMember onAdd={handlePostData} /> {/* 추가: 데이터 추가 함수 전달 */}
      <Container />
      {
        members && members.map((member) => {
          return <Member key={member.id} member={member} />;
        })
      }
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #222222;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  width: 600px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default App;
