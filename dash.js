// document.addEventListener('DOMContentLoaded', () => {

  
// });


// const darkModeToggle = document.querySelector('#dark');
 
// darkModeToggle.addEventListener('click', () => {
//   if (darkModeToggle.checked === true) {
//     document.body.classList.add('dark');
//   } else {  
//     document.body.classList.remove('dark');
//   }
// });
// const chk = document.querySelector('#default');

// chk.addEventListener('click', () => {
//   if (chk.checked == true && chk.id === 'default') {
//     document.body.classList.add('dark');
//   }
// });

const darkModeToggle = document.querySelectorAll('#dark, #light');

darkModeToggle.forEach(inp => {
  addEventListener('click', () => {
    if (inp.checked == true && inp.id === 'dark') {
      document.body.classList.add('dark');
    } else {  
      document.body.classList.remove('dark');
    }
  });
})

