<h1>Velog 회원가입, 피드페이지 만들기</h1>

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
