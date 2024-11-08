<h1>Get, Post 구현하기</h1>
<h2>함수 설명</h2>

<h3>1. getMember 함수</h3>
<p>이 함수는 서버에서 멤버 데이터를 가져오는 역할을 합니다. part의 값에 따라 전체 멤버(all) 을/를 가져오거나 특정 파트의 멤버(web, server, IOS)를 가져옵니다.</p>

<pre><code>const getMember = async () => {
const response = await getMembersAPI(part);
setMembers(response);
 } 
 // 가져온 데이터로 멤버 상태를 업데이트합니다.</pre>

<h3>2. handlePostData 함수</h3>
<p>이 함수는 새로운 멤버 데이터를 추가하는 POST의 역할을 합니다. <br/>
데이터를 서버로 전송하기 전에 필요한 모든 필드가 채워졌는지 확인하는 유효성 검사가 포함되어 있습니다.</p>
<ul>
    <li><strong>데이터 추가</strong>: 데이터가 유효한 경우 <code>postMemberAPI(newUserData)</code>를 호출하여 멤버를 추가합니다.</li>
    <br/>
    <li><strong>멤버 목록 갱신</strong>: 새로운 멤버가 성공적으로 추가된 후, <code>getMember()</code>를 호출하여 멤버 목록을 갱신합니다.</li>
    <br/>
</ul>
<pre><code>const handlePostData = async () => {
try {
    if (handleCheckInvalid(newUserData)) { 
        // 새로운 멤버 데이터를 유효성 검사합니다.
    await postMemberAPI(newUserData); 
        // 새로운 멤버를 추가.
    await getMember(); 
        // 멤버 목록 갱신gkrl.
        setNewUserData({ name: "", part: "" }); // 입력 필드를 초기화.
    } else {
        alert("모든 입력값을 입력하세요."); 
    }
} catch (error) {
    console.error("Error adding data:", error);
}
</pre>