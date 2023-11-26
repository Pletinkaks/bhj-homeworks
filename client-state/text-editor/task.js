const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
  localStorage.setItem('input-value', editor.value);
});

editor.value = localStorage.getItem('input-value');