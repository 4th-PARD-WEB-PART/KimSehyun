<h1>Velog 회원가입, 피드페이지 만들기</h1>
<li>아래에 hw3 readme 존재합니다.</li>
<h2>📖 소개</h2>
<p>이 과제는 Velog 플랫폼의 기본적인 피드를 구현하는 것이 목표입니다.</p>

<h2>기능</h2>
<ul>
    <li><strong>하트 기능</strong>: 사용자가 하트를 클릭하면 하트 이미지가 빨간색으로 변경되고, 하트 수가 증가합니다. 다시 클릭하면 하트가 검은색으로 돌아가고 수가 감소합니다.</li>
    <li><strong>Styled-components</strong>: 컴포넌트 기반 스타일링을 위해 사용되었습니다.</li>
</ul>

<h2>컴포넌트 설명</h2>

<h3>1. App.js</h3>
<p><strong>역할</strong>: 애플리케이션의 메인 컴포넌트로, 초기 게시물 목록과 하트 수를 <code>FeedPage</code>에 전달합니다.</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>initialPosts</code>: 게시물 정보 배열.</li>
    <li><code>initialHeartCounts</code>: 각 게시물의 초기 하트 수 배열.</li>
</ul>

<h3>2. FeedPage.js</h3>
<p><strong>역할</strong>: 게시물 목록을 표시하는 페이지 컴포넌트.</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>initialPosts</code>: 게시물 정보 배열.</li>
    <li><code>initialHeartCounts</code>: 각 게시물의 초기 하트 수 배열.</li>
</ul>

<h3>3. FeedItem.js</h3>
<p><strong>역할</strong>: 개별 게시물 정보를 표시하는 컴포넌트.</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>title</code>: 게시물 제목.</li>
    <li><code>subtitle</code>: 게시물 부제목.</li>
    <li><code>date</code>: 게시물 날짜.</li>
    <li><code>comments</code>: 댓글 수.</li>
    <li><code>nick</code>: 작성자 닉네임.</li>
    <li><code>heartCount</code>: 현재 하트 수.</li>
    <li><code>onHeartClick</code>: 하트를 클릭할 때 호출되는 함수.</li>
</ul>

<h2>스타일</h2>
<p>모든 스타일은 <code>styled-components</code>를 사용하여 각 스타일을 정의합니다.</p>
-------------------------------------------------------------
<h1 style="text-align: center">HW3 README</h1>
<h2>📖 소개</h2>
<p>목표: 

1. 디테일 페이지 구현
2. usestate로 사이드바 하트 구현
3. 각 페이지 연결하기
4. 변수로 데이터 끌어오기
</p>

<h2>기능</h2>
<ul>
    <li><strong>사이드바 하트 기능</strong>: 하트는 기본 0값을 가지고 있습니다. 사용자가 클릭 시 1이 되며 빨간색으로 변하고, 다시 클릭하면 검정하트와 0으로 돌아옵니다.</li>
    <li><strong>Routes, Route</strong>: 페이지간 이동을 하기 위한 연결의 역할을 하는데 사용됩니다..</li>
    <li><strong>Link</strong>: 피드페이지에서 세부페이지로, 세부페이지에서 피드페이지로 가는데 사용됩니다.</li>
    <li><strong>Nav</strong>: 등록페이지에서 피드페이지로 이동하는데 사용됩니다.</li>
</ul>

<h2>컴포넌트 설명</h2>
<h3>1. App.js</h3>
<ul>
<p><strong>역할</strong>: 애플리케이션의 메인 컴포넌트로, 라우터를 통해 각 페이지들을 <br/>연결합니다.
 프롭스 내용들을 저장하고 있습니다. </p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>initialPosts</code>: 게시물 정보 배열.</li>
    <li><code>initialHeartCounts</code>: 각 게시물의 초기 하트<br> 수 배열.</li>
</ul>
</ul>

<h3>2. RegisterPage.js</h3>
<ul>
<p><strong>역할</strong>: 사용자 등록을 하는 컴포넌트.</p>
<p><strong>설명</strong>:</p>
<ul>
    <li><code>input, Label</code>: 각 내용들을 프롭스로 받아 상태를 최신화하고 유효성 검사에 사용됨.</li>
</ul>
</ul>

<h3>3. FeedPage.js</h3>
<ul?>
<p><strong>역할</strong>: 게시물 목록을 표시하는 페이지 컴포넌트.</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>initialPosts</code>: 게시물 정보 배열.</li>
    <li><code>initialHeartCounts</code>: 피드 페이지에서 각 게시물의 초기 하트 수 배열.</li>
</ul>
</ul>

<h3>4. DetailPage.js</h3>
<p><strong>역할</strong>: 개별 게시물의 상세 페이지를 보여주는 컴포넌트</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>Title</code>: 게시물 제목.</li>
    <li><code>content</code>: 게시물 내용.</li>
    <li><code>author_name</code>: 작성자 이름.</li>
    <li><code>author_id</code>: 작성자 아이디.</li>
    <li><code>author_image</code>: 작성자 프로필 이미지.</li>
    <li><code>author_info</code>: 작성자 정보.</li>
    <li><code>date</code>: 작성 날짜.</li>
    <li><code>heart_count</code>: 현재 하트클릭 수.</li>
     
</ul>
</ul>

<h3>5. FeedItem.js</h3>
<p><strong>역할</strong>: 개별 게시물 정보를 표시하는 컴포넌트.</p>
<p><strong>프롭스</strong>:</p>
<ul>
    <li><code>title</code>: 게시물 제목.</li>
    <li><code>subtitle</code>: 게시물 부제목.</li>
    <li><code>date</code>: 게시물 날짜.</li>
    <li><code>comments</code>: 댓글 수.</li>
    <li><code>nick</code>: 작성자 닉네임.</li>
    <li><code>heartCount</code>: 현재 하트 수.</li>
    <li><code>onHeartClick</code>: 하트를 클릭할 때 호출되는 함수.</li>
</ul>
</ul>


<h2>스타일</h2>
<p>모든 스타일은 <code>styled-components</code>를 사용하여 각 스타일을 정의합니다.</p>

<h2>어려웠던 점</h2>
<p>인풋 값의 내용을 ststate로 최신화시키는 부분이 이해하는 데 시간이 좀 걸림.(event) - 사실 아직도 완벽 숙지 X </p>
<p>> navigate와 link의 큰 차이를 잘 모르겠음. 오히려 naviagte가 더 쉬운 느낌이 들고 있음. (link를 적용시킬 때 기존 스타일이 깨지는 경우가 있었기에 공부필요)