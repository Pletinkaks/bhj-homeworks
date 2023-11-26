const timer = document.getElementById("timer");
let countdown = timer.textContent;
const timerInterval = setInterval(() => {
  countdown -= 1;
  timer.textContent = countdown;

  if (countdown <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerInterval);
  }
}, 1000);