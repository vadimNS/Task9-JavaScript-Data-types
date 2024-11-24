function spamCheck() {
  let strings = prompt("Введіть ваше повідомлення:");
  strings = strings.toLowerCase();
  let spamWords = [
    "виграш",
    "гроші",
    "безкоштовно",
    "рекомендуємо",
    "знижки",
    "акція",
  ];
  for (let word of spamWords) {
    if (strings.includes(word)) {
      alert("вас заблоковано за спам");
      return;
    }
    alert("Повідомлення відправлене!");
    return;
  }
}
