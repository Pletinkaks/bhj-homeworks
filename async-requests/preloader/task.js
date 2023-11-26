const items = document.getElementById('items');
const loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('load', () => {
  let valuteTable = JSON.parse(xhr.response);
  for (const element in valuteTable.response.Valute) {
    items.innerHTML += `<div class="item">
      <div class="item__code">`
        + valuteTable.response.Valute[element].CharCode +
      `</div>
      <div class="item__value">`
        + valuteTable.response.Valute[element].Value +
      `</div>
      <div class="item__currency">
          руб.
      </div>
    </div>`;
  }
  loader.classList.remove('loader_active');
});