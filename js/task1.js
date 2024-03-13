function reverseNumber(number){
    let numberString = number.toString();
    let reversedNumberString = numberString.split('').reverse().join('');
    return parseInt(reversedNumberString);
}

console.log("(Варіант1) Записати трицифрове натуральне число в зворотньому порядку:")
let userInput = prompt("Введіть трицифрове число:");
if (!isNaN(userInput)){
    if (userInput.length === 3){
        let reversedNumber = reverseNumber(parseInt(userInput));
        console.log("В зворотному порядку:" + reversedNumber);
    }
    else {
        console.log("Будь ласка, введіть трицифрове число.");
    } 
}  else {
        console.log("Введіть коректне число.");
    }
