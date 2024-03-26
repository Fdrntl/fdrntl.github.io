let year = 1910
let century 

if (year % 100 === 0) {
    century = year / 100;
} else {
    century = Math.floor(year / 100) + 1;
}

console.log("task3")
console.log(century + " век");