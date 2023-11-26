const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('load', () => {
  let xhrJSON = JSON.parse(xhr.response);
  pollTitle.textContent = xhrJSON.data.title;
  for (const element of xhrJSON.data.answers) {
    let answerBtn = document.createElement('button');
    answerBtn.classList.add('poll__answer');
    answerBtn.innerHTML = element;
    answerBtn.addEventListener('click', () => {
      alert(`Спасибо, ваш голос засчитан!`);
      location.reload();
    });
    pollAnswers.insertAdjacentElement('afterbegin', answerBtn);
  }
});