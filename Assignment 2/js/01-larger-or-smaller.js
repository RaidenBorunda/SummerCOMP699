let num1 = prompt("Please enter a number.");
let num2 = prompt("Please enter another number.");
if (Number(num1) > Number(num2)) {
    document.write(num1);
} else if (num1 == num2) {
    document.write("Both of these numbers are the same: "+ num1)
} else {
    document.write(num2);
}