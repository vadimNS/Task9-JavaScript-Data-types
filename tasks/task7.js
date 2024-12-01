function task7() {
  //1
  let usd = prompt("введіть usd:");
  function convert(usd) {
    return usd * 40;
  }
  alert(convert(usd));
  //2
  function reverse(str) {
    let reversed = "";
    let massive = str.split("");
    for (let index = massive.length - 1; index >= 0; index--) {
      reversed += massive[index];
    }
    return reversed;
  }
  alert(reverse("abc")); // 'cba'

  //3
  function printStairs(n) {
    let str = "";
    for (let index = 0; index < n; index++) {
      str += "#";
      console.log(str);
    }
  }
  alert(printStairs(3));
  //4
  function sumRange(start, end) {
    let sum = 0;
    for (let index = start; index <= end; index++) {
      sum += index;
    }
    return sum;
  }
  alert(sumRange(2, 4));
  //5
  function min(a, b, c) {
    let array = [a, b, c];
    return Math.min(...array);
    //звісно можна зробити через цикл, де додати в змінну найбільше число і проходитись по масиву перевіряючи числа, але нашо)
  }
  alert(min(10, 5, 11));
  //6
  function firstAndLastToUpper(str) {
    str = str[0].toUpperCase() + str.slice(1, -1) + str.at(-1).toUpperCase();
    return str;
  }
  let str = prompt(
    "Введіть ваше слово (перший і останні букви будуть підняті до великих):"
  );
  alert(firstAndLastToUpper(str));
  //7
  function dfrontendCheck(str) {
    str = str.toLowerCase();
    let spamWords = ["church", "dfrontend", "kek"];
    for (let word of spamWords) {
      if (str.includes(word)) {
        return true;
      }
    }
    return false;
  }
  alert(dfrontendCheck("Hello DFrontend")); //true
  alert(dfrontendCheck("lolkek")); // true
  alert(dfrontendCheck("Hello")); // false

  //8
  // ти якось то показував зробити одним іфом, але я забув якщо чесно, зробив трохи ковиркасто, але вроді працює
  function removeDuplicationLetters(str) {
    let array = str.split("");
    let result = "";
    for (let index = 0; index < array.length; index++) {
      if (result.toLowerCase().includes(array[index].toLowerCase())) {
        if (array[index] === " ") {
          result += " ";
        }
        continue;
      } else {
        result += array[index];
      }
    }
    return result;
  }
  alert(removeDuplicationLetters("Hello I am Iron Man")); // 'Helo I am rn '
}
