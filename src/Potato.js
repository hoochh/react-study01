import React from 'react';

function Potato(props) {
  console.log(props);
  console.log(props.fav);
  console.log(props.something);
  console.log(props.papapa);
  console.log(props.aaa);
  console.log(props.booltype);
  return <h3>I love potato</h3>;
}

//리액트는 시작 : index.html > index.js에서 reactDOM 생성
// > index.html에서 id가 root인 태그를 찾음 > 생성한 reactDOM(가상DOM)을 검색한 태그(root)에 붙여넣는다
// > 화면 생성 > index.js에서 App.js 호출

function SweetPotato({ data }) {
  // console.log(props);

  // 1번 방식 : object 타입의 변수 props가 가지고 있는 key 명을 사용하여 출력
  //return <h3>I love {props.data}</h3>;

  // 2번 방식 : ES5 버전의 객체 분해 할당을 통해 object 타입의 변수 porps의 key명을 사용하여
  // 새로운 변수에 데이터를 할당하고, jsx 부분에서 해당 변수를 사용
  // let data = props.data;

  // 3번 방식 : ES6 버전의 객체 분해 할당을 통해서 object 타입의 변수 props의 key명을
  //새로운 변수명으로 사용하고 해당 key의 값을 새 변수의 값으로 할당하여 사용
  // const { data } = props;

  // 4번 방식 : ES5 버전의 객체 분해 할당을 통해서 매개변수 부분에 바로 새로운 {변수명}을 사용하고
  // jsx 부분에 해당 변수를 사용하여 출력
  //function SweetPotato({ data }) {}
  return <h3>I love {data}</h3>;
}

let name = '감자';
// export : 해당 파일을 외부에서 import 할 경우
// 외부에서 지정한 함수, class, 변수 등을 사용할 수 있도록 설정하는 명령어
// default : 해당 파일을 import 할 경우 기본적으로 사용할 수 있는 함수, class, 변수 등으로 등록
// default를 사용 시 import 할 경우 이름을 원하는 대로 붙여서 사용할 수 있음
//export default Potato;

// default는 반드시 쓸 필요는 없음
// Named Export 방식 : import 하는 부분에서 {함수, class, 변수명} 이름을 그대로 써 주어야 함
// 아래 형식이 기본 형식
// 1번 방식
//export {Potato} from Potato;
// 2번 방식
export { Potato, SweetPotato };
export { name };

// 혹은 아래와 같이 한 번에 가져오기 가능
//export{Potato, name};
