// Массивы - нужны для того чтобы в них хранить любые данные



// let array = ['Zafar', 100, true, 50, 'test']
// console.log(array.length);

// let word = 'hello world'
// console.log(word.length);


// let numbers = [5,10,15,20,25,30,35,40, 50, 100]
// let sum = 0

// for(let  i = 0; i < numbers.length;i++) {
//     sum += numbers[i]
// }

// console.log(sum);




// let users = ['Amir', 'Zafar', 'Aziz','Ruslan','Umid']

// for(let i = 0; i < users.length;i++) {
    
//     users[i] == 'Aziz' ? users.splice(i,2) : ''
// }

// users.push('Html')
// users.unshift('CSs')
// users.pop()
// users.shift()

// console.log(users);


// let items = []

// for(let i = 0; i < Infinity;i++) {
//     let word = prompt('Введите слово')
//     if(word == 'stop') {
//         break
//     }else if(word.length > 2 && !items.includes(word)) {
//         items.push(word)
//     }else {
//         alert('Вы ввели меньше 3 символов')
//     }
//     console.log(items);
// }




// let array = ['html','css','js','react']

// console.log(array[array.length - 1]);

// let arr = [];





let array = []

for(let i = 0; i < Infinity; i++ ) {
  let element = prompt("Введите слово")
  let command = element.split(", ")
if(command[0] == "stop") {
  break
} else if(command[0] == "add") {
     array.push(command[1])

}else if(command[0] == "del") {
   for(let x = 0; x < array.length ; x++){
    array[x] == command[1] ? array.splice(x,1) : ''
   }

}

console.log(array);
}

console.log(array);

 
 


