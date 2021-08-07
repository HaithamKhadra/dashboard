const darkModeToggle = document.querySelector('#checkbox');

addEventListener('click', () => {
  if (darkModeToggle.checked === true) {
    document.body.classList.add('dark');
  } else {  
    document.body.classList.remove('dark');
  }
});
