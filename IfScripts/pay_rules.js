let payRate = 7.50;
let hoursWorked = 45;
let grossPay = payRate * hoursWorked;

if (hoursWorked > 40) {
    grossPay = 40 * payRate + (hoursWorked - 40) * payRate * 2;
}
console.log(grossPay);