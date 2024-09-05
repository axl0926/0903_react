# 연락처 리스트

> 연락처를 추가/삭제 가능한 주소록
> 

[데모 페이지](https://axl0926.github.io/0903_react/)

### 주요 기능

- 연락처 추가/삭제
- 그룹 추가/삭제
- 등록된 연락처 검색 / 검색필터 초기화
- 등록된 연락처 상세보기

### 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂InputForm
 ┃ ┃ ┣ 📜GroupField.jsx
 ┃ ┃ ┣ 📜GroupModal.jsx
 ┃ ┃ ┣ 📜InputForm.jsx
 ┃ ┃ ┗ 📜TextField.jsx
 ┃ ┗ 📂List
 ┃ ┃ ┣ 📜List.jsx
 ┃ ┃ ┣ 📜ListItem.jsx
 ┃ ┃ ┣ 📜ListModal.jsx
 ┃ ┃ ┗ 📜Search.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

### 요구 사항 체크리스트

- [x]  반응형 레이아웃
- [x]  리스트 추가 기능
- [x]  연락처 추가 유효성 검사
- [x]  모달 열기/닫기
- [x]  리스트 검색 기능
- [x]  삭제 기능
- [x]  로컬 스토리지 활용
- [x]  검색 후 input 요소 초기화
- [ ]  검색 후 focus
- [ ]  동일한 이름 등록 시 메시지 출력
- [ ]  그룹 삭제 시 사용중인 그룹명이 존재 할 경우 버튼 비활성화
- [x]  하나 이상의 그룹이 항상 존재하도록 ( 기본 그룹 생성 )
- [ ]  상세 페이지 수정기능
