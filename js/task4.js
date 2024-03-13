function primeFactors(n){
    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }
    for (let i = 3; i <= Math.sqrt(n);i = i + 2){
        while (n % i === 0) {
            factors.push(i)
            n = n / i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }
    return factors;
}
console.log("(Варіант1) Розкласти натуральне число на прості множники:")

let number = parseInt(prompt("Введіть натуральне число:"));
if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
    let factors = primeFactors(number);
    if (factors.length > 0) {
        console.log("Прості множиники числа " + number + ": " + factors.join(','));
    } else {
        console.log("Число " + number + " є простим числом.")
    }
    
} else {
    console.log("Будь ласка, введіть коректне натуральне число.")
}