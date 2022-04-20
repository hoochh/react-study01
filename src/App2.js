import React from 'react';
// default로 생성시 import에서 이름을 다르게 설정해도 적용 가능
//import Po from './Potato';

// export {Potato} from Potato; 혹은 export {Potato};로 생성시
import { SweetPotato } from './Potato';
import { Potato } from './Potato';
import { name } from './Potato';
// import 해당 모듈에서 제공하는 함수, class, 변수 등을한 번에 import 가능
// import {Potato, name} from './Potato';

// 컴포넌트의 부모 태그는 1개만 존재해야 함
// return 뒤에 사용되는 JSX 문법 중 단일 코드로 사용될 경우 () 괄호 생략 가능
// 두 줄 이상의 내용을 입력할 경우 () 괄호 사용하여 감싸야 함
function App2() {
  console.log(name);
  return (
    <div>
      <h1>App2 파일 생성</h1>
      <h2>추가로 한번 만들어 봄..</h2>
      {/* <Po /> */}
      {/* Prop을 사용하여 해당 컴포넌트에 데이터 전달 */}
      {/* Props를 통해서 하위 컴포넌트로 데이터 전달시 문자열은 ""로 감싸서 쓰고, 
      논리형, 숫자, 배열, 오브젝트 타입은 {} 중괄호로 감싼다 */}
      <Potato
        fav="kimchi"
        something={1}
        papapa={['hello', 1, 2, 3, 4, true]}
        aaa={{ name: '홍길동', age: 20 }}
        booltype={true}
      />
      <SweetPotato data="오렌지" />
      <SweetPotato data="배" />
      <SweetPotato data="수박" />
      <SweetPotato data="딸기" />
      <SweetPotato data="복숭아" />
    </div>
  );
  //   return <h1>한 줄로 표현하는 것도 상관 없음</h1>;
}

export default App2;
