function showMain(t){
  const is59=t==='59';
  document.getElementById('plan59').classList.toggle('hidden',!is59);
  document.getElementById('plan84').classList.toggle('hidden',is59);
  document.getElementById('tab59').classList.toggle('active',is59);
  document.getElementById('tab84').classList.toggle('active',!is59);
}
function show84(t){
  ['a','b','c'].forEach(x=>{
    document.getElementById('plan84'+x).classList.toggle('hidden',x!==t);
    document.getElementById('tab84'+x).classList.toggle('active',x===t);
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  const box=document.getElementById('lightbox'), img=box.querySelector('img');
  document.querySelectorAll('img.zoomable, .zoomable img').forEach(el=>{
    el.addEventListener('click',()=>{
      img.src=el.src; img.alt=el.alt||'확대 이미지';
      box.classList.add('open'); box.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    });
  });
  const close=()=>{box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow='';img.src='';};
  box.querySelector('.close').addEventListener('click',close);
  box.addEventListener('click',e=>{if(e.target===box)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
});