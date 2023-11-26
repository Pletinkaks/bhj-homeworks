const welcome = document.getElementById('welcome');
const signBtn = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];


if (localStorage.getItem('user_id') != null) {
  signin.classList.remove('signin_active');
  welcome.textContent += localStorage.getItem('user_id');
  welcome.classList.add('welcome_active');
} else {
  signBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sendRequest();
  });
}


function sendRequest() {
  let request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  request.addEventListener('load', () => {
    processingRequest(request);
  });
  request.send(new FormData(form));
}


function processingRequest(request) {
  let parsedResponse = JSON.parse(request.response);
  if (parsedResponse['success'] == true) {
    signin.classList.remove('signin_active');
    welcome.textContent += parsedResponse['user_id'];
    localStorage.setItem('user_id', parsedResponse['user_id']);
    welcome.classList.add('welcome_active');
  } else {
    login.value = '';
    password.value = '';
    alert('Неверный логин/пароль');
  }
}