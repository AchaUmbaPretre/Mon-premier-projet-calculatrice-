let bouttons = document.querySelectorAll('.btn');
let resultant = document.querySelector('.resultant');

bouttons.forEach((bouton)=>{
   bouton.addEventListener('click', (e)=>{
    resultant.textContent += e.target.id
   });
});

equal.addEventListener('click', ()=>{
    resultant.textContent = eval(resultant.textContent)
});
clear.addEventListener('click',()=>{
    resultant.textContent = '';
});