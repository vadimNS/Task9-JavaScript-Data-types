function randomValue() {
  let min = 0;
  let max = 0;
  while (min >= max || isNaN(min) || isNaN(max)) {
    min = prompt("Введіть мінімальне число:");
    max = prompt("Введіть максимальне число:");
    min = Number(min);
    max = Number(max);
    if (min >= max) alert("min має бути меншим за max!");
    if (isNaN(min) || isNaN(max)) alert("Будь ласка, введіть числа!");
  }
  function randomNumber(min, max) {
    return min + Math.random() * (max - min);
  }

  let floatResult = randomNumber(min, max);
  let intResult = Math.round(floatResult);

  alert(`Ваше випадкове число: ${floatResult}`);
  alert(`Ваше випадкове ціле число: ${intResult}`);
}
