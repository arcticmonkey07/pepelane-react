import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

let a: string = 'Adfsaf';
a = 'asdf';

let b: number | null | string = 10;
a = 'asdfa';

let isCar: boolean | null = true;
isCar = null;

let names: Array<string> = ['Peter', 'Kolya', 'Vasya'];
let names2: string[] = ['Peter', 'Kolya', 'Vasya']; // другой синтаксис . массив строк
// alert(names[0].toUpperCse); // фиксит опечатки
// names.forEach(n => {
//   alert(n.toUpperCase());
// });

// let sex: 'male' | 'felame'; // назначаем тип в виде строки кастомной
// sex = 'male';

// type AddressType = {
//   city: string
//   country: string
// }

// type UserType = {
//   sayHello?: Function,
//   name: string,
//   age: number,
//   isSamurai: boolean,
//   adress: AddressType | null
// }

// let user: UserType = {
//   // sayHello(message: string) { alert('yo') },
//   name: 'Peter',
//   age: 30,
//   isSamurai: true,
//   adress: {
//     city: 'Moscow',
//     country: 'Russia'
//   }
// };

// const summ = (a: number, b:number) => {
//   return a + b;
// };
// summ(10, +'20');
// summ(10, Number('20'));


// const summ = (a: any, b:any) => { // any - что угодно передаем
//   return a + b;
// };
// summ(10, +'20');

// type UserType = {
//   sayHello: (message: string) => void,
// }

// const summ: (a: number, b: number) => number = (a: number, b:number) => {  // избыточная типизация
//   return a + b;
// };


let initialState = {
  name: null as string | null,
  age: null as number | null | string,
  isSamurai: null as boolean | null,
}

export type initialStateType = typeof initialState; // ts 

let state: initialStateType = {
  name: 'asdf',
  age: 'asdf',
  isSamurai: true
}


let GET_TASKS = "APP/GetTASKS";
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}

export default App;
