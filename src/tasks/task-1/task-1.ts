// Задание 1 - Калькулятор

type Base = 2 | 10 | 16;

// строка -> число с учетом системы счисления
function parseNumber(value: string, base: Base): number {
  return parseInt(value, base);
}

// число -> в строку с заданной системой счисления
function formatNumber(value: number, base: Base): string {
  return value.toString(base).toUpperCase();
}

function add(a: string, b: string, base: Base): string {
  const numA = parseNumber(a, base);
  const numB = parseNumber(b, base);
  const result = numA + numB;
  return formatNumber(result, base);
}

function subtract(a: string, b: string, base: Base): string {
  const numA = parseNumber(a, base);
  const numB = parseNumber(b, base);
  const result = numA - numB;
  return formatNumber(result, base);
}

function multiply(a: string, b: string, base: Base): string {
  const numA = parseNumber(a, base);
  const numB = parseNumber(b, base);
  const result = numA * numB;
  return formatNumber(result, base);
}

function divide(a: string, b: string, base: Base): string {
  const numA = parseNumber(a, base);
  const numB = parseNumber(b, base);
  if (numB === 0) {
    throw new Error("Деление на ноль 🙃");
  }
  const result = Math.floor(numA / numB);
  return formatNumber(result, base);
}

// В двоичной
const num1 = "1010";
const num2 = "101";

console.log("Работа с двоичной системой счисления:");
console.log(`${num1} + ${num2} = ${add(num1, num2, 2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2, 2)}`);
console.log(`${num1} * ${num2} = ${multiply(num1, num2, 2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2, 2)}`);

// В шестнадцатеричной
const num3 = "A";
const num4 = "5";

console.log("\nРабота с шестнадцатеричной системой счисления:");
console.log(`${num3} + ${num4} = ${add(num3, num4, 16)}`);
console.log(`${num3} - ${num4} = ${subtract(num3, num4, 16)}`);
console.log(`${num3} * ${num4} = ${multiply(num3, num4, 16)}`);
console.log(`${num3} / ${num4} = ${divide(num3, num4, 16)}`);

// В десятичной
const num5 = "10";
const num6 = "5";

console.log("\nРабота с десятичной системой счисления:");
console.log(`${num5} + ${num6} = ${add(num5, num6, 10)}`);
console.log(`${num5} - ${num6} = ${subtract(num5, num6, 10)}`);
console.log(`${num5} * ${num6} = ${multiply(num5, num6, 10)}`);
console.log(`${num5} / ${num6} = ${divide(num5, num6, 10)}`);

// tsc -t es6 app.ts
