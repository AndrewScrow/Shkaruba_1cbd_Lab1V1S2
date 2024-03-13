function count4Number(num){
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function count4NumberSumK(k){
    let count = 0;
    for (let num = 1000; num <= 9999; num++){
        if(count4Number(num) === k) {
            count++;
        }
    }
    return count;
}
console.log("(Варіант1) Знайти кількість чотиризначних чисел, сума цифр яких дорівнює k:")

let k = parseInt(prompt("Введіть значення k:"));
if (!isNaN(k)){
if (k > 0 && k <= 36){
    let countNumbers = count4NumberSumK(k);
    console.log("Кількість чотиризначних чисел з сумою цифр, яка дорівнює " + k + ":" + countNumbers);
 } else {
     console.log("Будь ласка, введіть коректну суму цифр для k. (від 1 до 36 для чотиризначних чисел) ");
 }
} else {
    console.log("Введіть коректне число.");
}