const modal = document.getElementById('subscribe-modal');
const modal_close = Array.from(document.getElementsByClassName('modal__close'));

function getCookie(name) {
  try {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(element => element.startsWith(name + '='));
    return cookie.substring(name.length + 1);
  } catch {
    return false;
  }
}

if (getCookie('popupStatus') != 'shown') {
  modal.classList.add('modal_active');
}

modal_close.forEach(element => element.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'popupStatus=shown';
}));