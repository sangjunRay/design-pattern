import React, {useLayoutEffect} from 'react';
import {obj1, obj2, singletonA, singletonB, SingletonDB1, SingletonDB2} from './patterns/singleton/singletonePattern';
import {createMacbook14, createMacbook16, numConstructor, strConstructor} from './patterns/factory/factoryPattern';

function App() {
  useLayoutEffect(() => {
    //싱글톤 패턴
    console.log(obj1 === obj2, '싱글톤 패턴 object 비교');
    console.log(singletonA === singletonB, 'class 싱글톤 비교');
    console.log(SingletonDB1 === SingletonDB2, 'DB 싱글톤 비교');

    //팩토리 패턴
    console.log(numConstructor, '팩토리 패턴 (num)');
    console.log(strConstructor, '팩토리 패턴 (str)');

    // macbook factory main function
    createMacbook14();
    createMacbook16();
  });
  return <div className="App">Design Pattern 🛠</div>;
}

export default App;
