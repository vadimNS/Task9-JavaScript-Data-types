function MassiveOperation() {
  let styles = ["Jazz", "Blues"];
  alert(styles);
  styles.push("Rock-n-Roll");
  alert(styles);
  styles[Math.floor(styles.length / 2)] = "Classics";
  alert(styles);
  alert(`видаляємо перший елемент ${styles[0]}`);
  styles.shift();
  alert(styles);
  styles.unshift("Rap", "Reggae");
  alert(styles);
}
