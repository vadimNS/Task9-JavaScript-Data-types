function emptyObj() {
  let schedule = {};

  function isEmpty(schedule) {
    if (Object.keys(schedule).length > 0) {
      return false;
    } else {
      return true;
    }
  }
  alert(isEmpty(schedule));
  schedule["8:30"] = "Вставай";
  alert(isEmpty(schedule)); // false
}
