function createArray(){
    let currentDate = new Date(2024,4)//Устанавливаем произвольную дату, если ничего не передать автоматически установится текущая
        currentDate.setDate(1)//Устанавливаем текущий день месяца
    let firstDayOfMonth = currentDate.getDay()//Получаем значение дня 0-воскресенье, 1-понедельник
    let numberOfPreviousMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1//Создаем переменную, которая будет содержать количество дней предыдущего месяца
    let arrayOfDate = []//Создаем массив дат

    let previousMonthLastDay = new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate()//Создаем переменную типа date и устанавливаем ее значение на последний день предыдущего месяца
    let arrayOfPreviousMonthDays = []//Создаем массив под дни предыдущего месяца
    for (let i = 0; i < numberOfPreviousMonthDays; i++){//Заполняем массив
        arrayOfPreviousMonthDays.unshift(previousMonthLastDay - i)//Вставляем дни предыдущего месяца в начало массива

    }
    console.log(arrayOfPreviousMonthDays)

    for (let i = 0; i < 6; i++){//Внешний цикл
        arrayOfDate[i] = []//В каждой строке создаем пустой массив
        for (let j = 0; j < 7; j++){//Внутренний цикл
            if (i === 0 && j < numberOfPreviousMonthDays) {//Проверка для заполнения первой строки днями предыдущего месяца
                arrayOfDate[i][j] = arrayOfPreviousMonthDays[j]//Вставляем дни предыдущего месяца
                }
            else{
                arrayOfDate[i][j] = currentDate.getDate()//Начиная с первого числа текущего месяца заполняем массив
                currentDate.setDate(currentDate.getDate() + 1)
            }
        }

    }
    return arrayOfDate
}
console.log(createArray())