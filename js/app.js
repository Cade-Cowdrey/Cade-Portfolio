
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.createElement('div');
  btn.className='toggle';
  btn.innerText='🌙';
  document.body.appendChild(btn);
  btn.onclick=()=>{
    document.body.classList.toggle('lightmode');
    btn.innerText=document.body.classList.contains('lightmode')?'☀️':'🌙';
  }
});
