const rotators = Array.from(document.querySelectorAll('.rotator__case'));

setInterval (function () {
  for (let i = 0; i < rotators.length; i++) {
    if (rotators[i].classList.contains('rotator__case_active')) {
      rotators[i].classList.remove('rotator__case_active');
      if (i + 1 === rotators.length) {
        i = 0;
        rotators[i].classList.add('rotator__case_active');
      } else {
        i++;
        rotators[i].classList.add('rotator__case_active');
      }
    }
  }
}, 1000)