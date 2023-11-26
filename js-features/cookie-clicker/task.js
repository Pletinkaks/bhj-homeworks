const cookie = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__counter");
cookie.onclick = function () {
  if (clickerStatus.textContent % 2 == 0) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
  clickerStatus.textContent++;
};