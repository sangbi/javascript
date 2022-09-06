'use strict';

// 2. variable
// let (added in ES6)
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello'; 
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (웬만하면 쓰지말기)
// var hosisting 어디에 선언 상관없이 항상 제일 위로 선언을 끓어올려주는것
// block scope 없음 
//console.log(age);
age = 4;
console.log(age);

var age;

// 3. constants  한번 할당하면 값이 절대 바뀌지 않음
// - security 보안상의 이유
// - thread safety 동시에 값을 변경될 위험에 안전성
// - reduce human mistakes 다른 사람의 실수방지
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitice, single item: number, string, boolean, null, undefiedn, symbol
// 더이상 작은 단위로 나뉘어 질수 없는
// object, box container
// 싱글 여러개로 묶어서 한박스 한단위로 묶어주는것
// function, first-class function
// 다른데이터타입처럼 변수에 할당이가능, 인자로도 전달되고 return 타입으로도 가능하다

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values: infinity, -infinity, NaN
// 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
