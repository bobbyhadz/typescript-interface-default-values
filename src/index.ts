export {};

// EXAMPLE 1 - Setting TypeScript interface default values using spread syntax (...)

interface Person {
  name: string;
  age: number;
  country: string;
}

const defaults: Pick<Person, 'name' | 'country'> = {
  name: '',
  country: '',
};

const person1: Person = {
  ...defaults,
  name: 'Bobby Hadz',
  age: 30,
};

// 👇️ { name: 'Bobby Hadz', country: '', age: 30 }
console.log(person1);

// ---------------------------------------------------

// // EXAMPLE 2 - Setting TypeScript interface default values with a custom function

// interface Person {
//   name: string;
//   age: number;
//   country: string;
// }

// function initPerson(options?: Partial<Person>): Person {
//   const defaults = {
//     name: '',
//     age: 0,
//     country: '',
//   };

//   return {
//     ...defaults,
//     ...options,
//   };
// }

// const p1: Person = initPerson();

// console.log(p1); // 👉️ {name: '', age: 0, country: ''}

// const p2: Person = initPerson({ name: 'Tom', age: 30 });
// console.log(p2); // 👉️ {name: 'Tom', age: 30, country: ''}

// ---------------------------------------------------

// // EXAMPLE 3 - Setting `undefined` as the default value for interface properties

// interface Person {
//   name?: string;
//   age?: number;
//   country: string;
// }

// const p1: Person = {
//   country: 'Germany',
// };

// // 👇️ The rest are optional

// p1.age = 30;

// p1.name = 'Bobby Hadz';
