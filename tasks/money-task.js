function moneyTask() {
  let str = prompt("введіть значення (в доларах)");
  function extractCurrencyValue(str) {
    str = str.slice(1);
    return (str = Number(str));
  }
  alert(extractCurrencyValue(str));
}
