const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function() {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].className === 'tab tab_active') {
      tab[i].className = 'tab';
      tabContent[i].classList.toggle('tab__content_active');
      }
    }
    tab[i].classList.toggle('tab_active');
    tabContent[i].classList.toggle('tab__content_active');
  })
}