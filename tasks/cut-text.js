function cutText() {
  let str = prompt("Введіть повідомлення:");
  let maxlength = prompt(
    "введіть довжину повідомлення (враховуються тільки символи)"
  );
  dots = "...";
  str = String(str);
  maxlength = Number(maxlength);
  function truncate(str, maxlength) {
    if (str.length > maxlength) {
      str = str.slice(0, maxlength - dots.length) + dots;
    }
    return str;
  }
  alert(truncate(str, maxlength));
}
