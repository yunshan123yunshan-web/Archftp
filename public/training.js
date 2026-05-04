let cur=0;const total=28;
function go(i){
  document.getElementById('s'+cur).classList.remove('active');
  const pn=document.getElementById('n'+cur);
  if(cur<i){pn.classList.remove('active');pn.classList.add('done');const s=pn.querySelector('.sbn');if(s)s.textContent='✓';}
  else if(cur>i){pn.classList.remove('active');}
  cur=i;
  document.getElementById('s'+cur).classList.add('active');
  document.querySelectorAll('.sb-item').forEach(el=>el.classList.remove('active'));
  const ne=document.getElementById('n'+cur);
  ne.classList.add('active');ne.classList.remove('done');
  const as=ne.querySelector('.sbn');
  if(as&&as.textContent==='✓'){const lb=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','A','B','20','15a','15b','15c','15d','15e','C'];as.textContent=lb[cur];}
  const pct=Math.round((cur/(total-1))*100);
  document.getElementById('pf').style.width=pct+'%';
  document.getElementById('pt').textContent=(cur+1)+' / '+total;
  document.getElementById('ca').scrollTo({top:0,behavior:'smooth'});
  ne.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function chk(el){el.classList.toggle('chk');el.textContent=el.classList.contains('chk')?'✓':'';}
function cp(btn){
  const bl=btn.closest('.code');
  const tx=bl.innerText.replace(/^(Copy|Copied!)\n/,'').trim();
  navigator.clipboard.writeText(tx).then(()=>{
    btn.textContent='Copied!';btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='Copy';btn.classList.remove('copied');},2000);
  });
}
document.getElementById('pt').textContent='1 / '+total;