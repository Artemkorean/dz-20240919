// const userInput = prompt("enter your age")
// function getAge(userInput){
//     switch(true){
//         case (userInput >=0 && userInput <12):
//             return "youre baby";
//         case (userInput >=12 && userInput <18):
//             return "you are teenager";
//         case (userInput >=18 && userInput <60):
//             return "you r adult man";
//         case (userInput >=60):
//             return "you r old man";
//     }
// }
// alert(getAge(userInput))


// const userInput = +prompt("enter the number")
// function getTheSymbol(userInput){
//     switch(true){
//         case userInput == "1":
//             return "!"
//         case userInput == '2':
//             return "@"
//         case userInput == '3':
//             return "#"
//         case userInput == '4':
//             return "$"
//         case userInput == '5':
//             return "%"
//         case userInput == '6':
//             return "^"
//         case userInput == '7':
//             return "&"
//         case userInput == '8':
//             return "*"
//         case userInput == '9':
//             return "("
//     }
// } 
// alert(getTheSymbol(userInput))


// const userInput = +prompt("введите сумму в долларах")
// const userInput2 = +prompt("в какую валюту сконвертировать? 1(eur),2(rub),3(krw)")
// function getCurrency(userInput,userInput2){
//     switch(true){
//         case userInput2 == "1":
//             return userInput * 0.9
//         case userInput2 == "2":
//             return userInput * 100
//         case userInput2 == "3":
//             return userInput * 1300
//     }
// }
// alert(getCurrency(userInput,userInput2))


// const userInput = +prompt("enter first number")
// const userInput2 = +prompt("enter second number")
// function getTheSumOfNumbers(userInput,userInput2){
//     let sum=0;
//     for(let i=userInput; i<=userInput2; i++){
//         sum += i;
//     }
//     return sum;
// }
// alert(getTheSumOfNumbers(userInput,userInput2))


// let minValue=0;
// let maxValue=100;
// let guess;
// let userResponse;

// alert("загадайте число от 0 до 100.Я попробую его отгадать!")

// function getTheNumber(minValue,maxValue,guess,userResponse){
//     while(minValue<=maxValue){
//         guess = Math.floor((minValue+maxValue)/2);
//         userResponse = prompt(`ваше число больше,меньше или равно ${guess}?(введите ">","<","==")`);

//         if(userResponse === "="){
//             alert(`я угадал ваше число : ${guess}`)
//             break;
//         }
//         else if(userResponse === ">"){
//             minValue=guess+1;
//         }
//         else if(userResponse === "<"){
//             maxValue=guess-1;
//         }
//         else{
//             alert("пожалуйста введите корректный ответ > , < , ==")
//         }

//     }
//     if(minValue>maxValue){
//         alert("введите корректное число")
//     }
// }
// alert(getTheNumber(minValue,maxValue,guess,userResponse))


