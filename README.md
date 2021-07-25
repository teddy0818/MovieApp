# 소개글

> 영화로 재밌게 놀아보자 BadMovie 😎<br><br>
링크 : https://cryptic-falls-97963.herokuapp.com/    (⛔️ 첫 접속 시 다소 시간이 걸릴 수 있습니다)

평소 영화를 좋아해서 영화와 관련 된 사이트를 만들어 볼까? 생각만 하다가

우연히 좋은 영화 API(TMDB)와 자료를 발견해서 

아! 이거다! 하고 만들게 되었습니다

<br><br>
# 작업기간 및 인원
- 작업기간 : 약 3주
- 인원 : 1명

<br><br>
# 기술

### Front
- React
- Redux (로그인 및 회원가입 일부만 사용)
- Ant Design

### Backend
- Node.js (express)
- MongoDB
- Heroku

<br><br>
# 주요기능
### 🔍  궁금한 영화를 검색해보자
![https://images.velog.io/images/teddy0818/post/8434d36c-8a22-41fc-8def-26c6c7863b6a/search.png](https://images.velog.io/images/teddy0818/post/8434d36c-8a22-41fc-8def-26c6c7863b6a/search.png)
---
![https://images.velog.io/images/teddy0818/post/40050937-8759-4cf7-ac5e-a0f5b979b5dc/search2.png](https://images.velog.io/images/teddy0818/post/40050937-8759-4cf7-ac5e-a0f5b979b5dc/search2.png)

<br><br>
### 👀  영화 정보를 살펴보자
![https://images.velog.io/images/teddy0818/post/bff9f352-f949-4276-bc2d-b420a3e1bb85/detail.png](https://images.velog.io/images/teddy0818/post/bff9f352-f949-4276-bc2d-b420a3e1bb85/detail.png)
---
![https://images.velog.io/images/teddy0818/post/307f98fc-816b-44f6-862c-3befe1444e8f/detail2.png](https://images.velog.io/images/teddy0818/post/307f98fc-816b-44f6-862c-3befe1444e8f/detail2.png)

<br><br>
### 🔖  관심있는 영화를 즐겨찾기
![https://images.velog.io/images/teddy0818/post/b4fa508f-2692-46d7-ad40-2b5d49d65711/favorite.png](https://images.velog.io/images/teddy0818/post/b4fa508f-2692-46d7-ad40-2b5d49d65711/favorite.png)
---
![https://images.velog.io/images/teddy0818/post/c0be4eb1-8c48-4268-84aa-ef26606c8be2/favorite2.png](https://images.velog.io/images/teddy0818/post/c0be4eb1-8c48-4268-84aa-ef26606c8be2/favorite2.png)

<br><br>
### ⭐  내 맘대로 평가하기
![https://images.velog.io/images/teddy0818/post/db6aa95a-c5d0-449a-8da5-4eb9ebe5cb45/star.png](https://images.velog.io/images/teddy0818/post/db6aa95a-c5d0-449a-8da5-4eb9ebe5cb45/star.png)
---
![https://images.velog.io/images/teddy0818/post/5d026bde-3274-4f0d-9b3b-5efea8a86cdb/star2.png](https://images.velog.io/images/teddy0818/post/5d026bde-3274-4f0d-9b3b-5efea8a86cdb/star2.png)

<br><br>
### 💬  영화에 댓글 달기
![https://images.velog.io/images/teddy0818/post/aba224dc-4e4c-46e6-bbbf-0afde78974e6/comment.png](https://images.velog.io/images/teddy0818/post/aba224dc-4e4c-46e6-bbbf-0afde78974e6/comment.png)

<br><br>
### 📱 모바일 환경
<img src = "https://images.velog.io/images/teddy0818/post/b2411e64-035b-4b67-ac98-9ce03183112d/mobile.png" width="300px" height="450">
---
<img src = "https://images.velog.io/images/teddy0818/post/856d84ad-e695-45f5-8c84-731a4d597220/mobile2.png" width="300px" height="450">
---
<img src = "https://images.velog.io/images/teddy0818/post/c8f53d08-4550-48fb-98f0-90cb3f2ef300/mobile3.png" width="300px" height="450">

<br><br>
## 후기
### React는 정말 좋다

이번 프로젝트에서 React를 처음 배워서 사용봤는데, 정말 좋았다!

view 단을 component 화 해서 관리한다는게 첨엔 생소하고 적응이 안됐는데,

개발하다보니까 다들 왜 쓰는지 알겠더라..

일단, 유지보수성이 탁월하다.

개발하다보면 같은 view단을 쓸 일이 은근히 많은데 (별점, 좋아요 등등)

component 하나만 만들어서 재사용하니까 편했다. 수정도 용이했고.

~~예전에 jsp로 개발할 땐 복붙복붙의 연속이었다..~~<br><br>


### Component(props) -> Component(props) -> Component(props) ...
component 끼리 데이터를 주고 받을 땐 props를 주로 이용했는데,

component 가 많아지면 많아질수록 구조가 복잡해져서 힘들었다.

검색기능을 만들 때 검색결과 데이터를 하위 component가 아닌 다른 component에 전달하는데 어려움을 겪었다.

결국 쿼리스트링으로 검색값을 전달해서 다른 component에서 영화 데이터를 받았다.

이번엔 빠르게 개발하려고 Redux를 사용하지 않았지만, 나중엔 Redux나 Context API를 꼭 써봐야겠다

<br><br>

### 총평
처음으로 MERN 스택을 사용해봤다.

JSP,Spring,MySQL 을 사용해 개발 할 때랑은 세팅이 훨씬 쉽고 가벼워서 좋았다.

이 프로젝트를 하면서 자바스크립트 실력이 많이 오른 거 같다.

우여곡절이 많았지만 좋은 경험이었다.
