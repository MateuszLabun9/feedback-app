
let string = "Siema co tam slychac?"

let ans = string.split(' ').map(item => { //Remember map returns NEW array
     return item.split('').reverse().join('')
}).join(' ');

console.log(ans)


let arr = [
    { id: 1, age: 12, name: 'Manu' },
    { id: 2, age: 24, name: 'Quincy' },
    { id: 3, age: 22, name: 'Abbey' },
  ]
