const queue = ['Иван', 'Мария', 'Саша', 'Даша']
const outside = ['Aмфибрахий']



//outside.push(queue.shift())
//const dashaIndex = queue.indexOf("Даша")
//outside.push(queue.splice(dashaIndex,1)[0])
//queue.push(outside.shift())

let firstPerson = queue.shift() // Иван вышел из банка
outside.push(firstPerson) //Иван в списке тех, кто на улице

let secondPersonIndex = queue.indexOf("Даша")//нашли индекс Даши
let secondPerson = queue.splice(secondPersonIndex,1)[0]//убираем Дашу из массива
outside.push(secondPerson)

let thirdPerson = outside.shift()//убрали амф с улицы
queue.push(thirdPerson)//добавили амф в банк


console.log('В очереди: ' + queue + '\n ' + 'Вне банка: ' + outside)

