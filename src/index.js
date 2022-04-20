import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js를 App이라는 이름으로 불러옴
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
//import Potato from './Potato';

// ReactDOM : 리액트의 가상돔을 의미
// createRoot : 리액트의 가상돔을 생성
// ReactDOM document.getElementById('root')으로 가상 HTML을 만듬
const root = ReactDOM.createRoot(document.getElementById('root'));
// render : 리액트의 가상돔을 사용하여 실제 화면을 그려줌
// strictMode : 기본 자바스크립트의 언어 규칙을 강력한 규칙을 적용함
// <App /> : 사용자 컴포넌트, 실제 리액트를 이용하여 생성한 화면
// root.render(...<App />...); :불러온 App.js 사용

// 리액트의 기본 구성요소 3가지
// 컴포넌트 : 실제 구현될 화면, js 파일
// 리액트는 컴포넌트를 여러개 생성하여 컴포넌트를 조합시켜 하나의 화면을 구성함
// jsp나 spring에서 header, footer를 미리 만들어놓고 필요한 부분에서 로딩하여 사용하는 것과 동일한 형태
// JSX : html과 js가 합해진 형태의 문법
// 화면을 그리기 위한 소스코드를 전부 순수 자바스크립트로 생성하기에는 힘들기 때문에
// js + XML로 이루어진 JSX라는 문법을 사용하여 html 화면을 쉽게 구성함
// PROPS : 각 컴포넌트끼리 데이터를 주고받기 위한 객체(일종의 매개변수)

root.render(
  <React.StrictMode>
    <App2 />
    {/* <Potato /> */}
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
