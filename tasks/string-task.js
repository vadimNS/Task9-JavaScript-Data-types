function upperFirstLetter() {
  let str = prompt("Введіть ваше слово:");
  str = str[0].toUpperCase() + str.slice(1);
  alert(str);
}
