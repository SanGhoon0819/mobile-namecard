
function showMain(type){
  document.getElementById('plan59').classList.toggle('hidden', type!=='59');
  document.getElementById('plan84').classList.toggle('hidden', type!=='84');
  document.getElementById('tab59').classList.toggle('active', type==='59');
  document.getElementById('tab84').classList.toggle('active', type==='84');
}
function show84(type){
  ['a','b','c'].forEach(function(t){
    document.getElementById('plan84'+t).classList.toggle('hidden', t!==type);
    document.getElementById('tab84'+t).classList.toggle('active', t===type);
  });
}
