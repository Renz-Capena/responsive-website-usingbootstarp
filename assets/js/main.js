let submit_btn = document.querySelector('#submit_btn');
let name = document.querySelector('#name');

submit_btn.addEventListener('click',()=>{
   alert(`Thank you for messaging us ${name.value}`);
})