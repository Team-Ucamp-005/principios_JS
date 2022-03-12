// console.log('Hola mundo');

// Variables y Constantes
// var x = 'Hola soy una variable';

// let nombre = 'Goku';

// const raza = 'sayajin';

// console.log(nombre, raza);


// let str = 'Soy un string';

// let num = 1234;

// const booleano = true;

// let vacia;

// const nulo = null;

// console.log(str);
// console.log(num);
// console.log(booleano);
// console.log(vacia);
// console.log(nulo);


// Coercion de datos

// 2 + 2
// = 4
// '2' +  '2'
// = '22'
// 2 + 2 - 2
// = 2
// '2' + '2' 
// = '22'
// '22' - 2
// = 20
// 'a' + 'b' - 'b'
// = NaN
// '2' + '2'
// = '22'
// '22' - '2'
// = 20
// 5 - '3'
// = 2
// String(123)
// = '123'
// String(false)
// = 'false'
// Number('2134')
// = 2134
// Number('hola')
// = NaN


// let number = 1234

// let str = '234'

// console.log(number - str)


// Operadores aritmeticos

// 2 + 2
// = 4
// 2 - 2
// = 0
// 2 * 2
// = 4
// 123 / 2
// = 61.5
// 40 % 7
// = 5
// 40 % 2
// = 0
// 4 ** 3
// = 64


// let num = 2
// console.log(num++)
// console.log(num++)
// console.log(num++)


// Operadores Logicos

// 4 ** 3
// = 64
// 3 === 3
// = true
// 3 !== '3'
// = true
// !!1
// = true
// !!2
// = true
// 4 >= 4

// = true
// 4 >= 3

// = true
// 4 >= 5

// = false
// 5 >= 3 && 3 === 3
// = true
// 5 >= 3 && 3 === '3'
// = false
// 5 >= 3 || 3 === '3'
// = true
// 5 >= 10 || 3 === '3'
// = false

// let x
// undefined
// x
// if(x) {console.log('indefinido')}
// if(x === undefined) {console.log('indefinido')}
// indefinido
// x = 10
// 10
// if(x) {console.log('indefinido')}
// indefinido

// let leche = true;
// let huevos = 'hay 4';

// if (huevos) {
//   leche = 5
//   console.log(leche)
// }

// let num;

// if (huevos) {
//   console.log('cumple la primera')
// } else if(leche) {
//   console.log('cumple la segunda')
// } else {
//   console.log('vas a otra tienda')
// }

// let edad = 18;

// switch (edad) {
//   case 18:
//     console.log('cumple')
//     break;
//   case 17:
//     console.log('no cumple')
//     break;
//   case 3:
//     console.log('compra 3')
//     break;
//   case 2:
//     console.log('compra 2')
//     break;
//   default:
//     console.log('ve a otra tienda')
//     break;
// }


// for (let index = 1; index <= 10; index++) {
//   console.log('vuelta', index)
// }

// while (false) {
//   console.log('vuelta')
// }


// function sayHello(name, age) {
//   // console.log('Hola soy ' + name + ' y tengo ' + age + ' años');
//   console.log(`Hola soy ${name} y tengo ${age} años`);
// };

// sayHello('Fredo', 28)


console.log('holi')


function printEven() {
  let num = prompt('Cuantos numero pares deseas mostrar?');
  num = Number(num)
  if (num === null || num === '') {
    alert('Ingresa un valor numerico')
    printEven()
  } else {
    console.log(!isNaN(num))
    if (typeof num === 'number' && !isNaN(num)) {
      console.log('pokemon', num)
      for (let i = 1; i <= num * 2; i++) {
        if (i % 2 === 0) {
          console.log('-->', i)
        }
      }
    } else {
      alert('Ingresa un valor numerico')
      printEven()
    }
  }
}
printEven()