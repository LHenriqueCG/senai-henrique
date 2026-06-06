// A lógica JavaScript original foi mantida intacta para garantir o funcionamento perfeito.
const TOTAL = 10, TIME = 15;
const EASY = ["Brazil","United States","France","Germany","Japan","China","Italy","Spain","Portugal","Argentina","Mexico","Canada","Australia","India","United Kingdom","Russia","South Korea","Netherlands","Sweden","Norway","Denmark","Finland","Switzerland","Belgium","Poland","Turkey","Greece","Egypt","South Africa","New Zealand","Saudi Arabia","Iran","Iraq","Israel","Ukraine","Romania","Hungary","Czech Republic","Austria","Ireland","Croatia","Serbia","Bulgaria","Slovakia","Slovenia","Lithuania","Latvia","Estonia","Belarus","Moldova","Algeria","Morocco","Tunisia","Libya","Kenya","Nigeria","Ghana","Ethiopia","Tanzania","Uganda","Cameroon","Ivory Coast","Senegal","Zimbabwe","Mozambique","Zambia","Angola","Madagascar","Cuba","Venezuela","Colombia","Chile","Peru","Bolivia","Ecuador","Paraguay","Uruguay","Guatemala","Honduras","El Salvador","Nicaragua","Costa Rica","Panama","Dominican Republic","Jamaica","Haiti","Trinidad and Tobago","Indonesia","Vietnam","Thailand","Malaysia","Philippines","Pakistan","Bangladesh","Sri Lanka","Nepal","Myanmar","Cambodia","Singapore","Kuwait","Qatar","United Arab Emirates","Jordan","Lebanon","Syria","Yemen","Oman","Bahrain","Afghanistan","Kazakhstan","Uzbekistan","Turkmenistan","Azerbaijan","Georgia","Armenia","Mongolia"];
let allCountries=[], filtered=[], questions=[], cur=0, score=0, timer=null, timeLeft=0, answered=false;
let stats=JSON.parse(localStorage.getItem('fq_stats')||'{"best":0,"games":0,"totalScore":0}');

function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active')}

async function init(){
  try{
    const r=await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    allCountries=await r.json();
    document.getElementById('hi-score').textContent=stats.best||'—';
    document.getElementById('hi-games').textContent=stats.games;
    show('s-start');
  }catch(e){
    document.getElementById('s-loading').innerHTML='<p style="color:var(--danger);padding:2rem;text-align:center">Erro ao carregar. Verifique sua conexão.</p>';
  }
}

function showStart(){
  document.getElementById('hi-score').textContent=stats.best||'—';
  document.getElementById('hi-games').textContent=stats.games;
  show('s-start');
}

function startGame(){
  const diff=document.getElementById('diff').value;
  filtered=diff==='easy'
    ? allCountries.filter(c=>EASY.includes(c.name.common))
    : allCountries;
  const pool=[...filtered].sort(()=>Math.random()-0.5).slice(0,10);
  questions=pool;
  cur=0; score=0;
  show('s-quiz');
  nextQ();
}

function nextQ(){
  if(cur>=TOTAL){endGame();return}
  answered=false;
  clearInterval(timer);
  const q=questions[cur];
  document.getElementById('q-num').textContent=cur+1;
  document.getElementById('q-score').textContent=score;
  document.getElementById('flag-img').src=q.flags.svg;
  document.getElementById('flag-img').alt='Bandeira de ' + q.name.common;
  document.getElementById('feedback').textContent='';
  const wrong=filtered.filter(c=>c.name.common!==q.name.common).sort(()=>Math.random()-0.5).slice(0,3);
  const opts=[q,...wrong].sort(()=>Math.random()-0.5);
  const oDiv=document.getElementById('options');
  oDiv.innerHTML='';
  opts.forEach(o=>{
    const b=document.createElement('button');
    b.className='opt-btn';
    b.textContent=o.name.common;
    b.onclick=()=>answer(b,o.name.common===q.name.common,q.name.common);
    oDiv.appendChild(b);
  });
  timeLeft=TIME;
  document.getElementById('q-time').textContent=timeLeft;
  document.getElementById('timer-bar').style.transition='none';
  document.getElementById('timer-bar').style.width='100%';
  document.getElementById('timer-bar').style.background='var(--primary)';
  
  setTimeout(() => {
    document.getElementById('timer-bar').style.transition='width 1s linear, background-color 0.3s';
  }, 50);

  timer=setInterval(()=>{
    timeLeft--;
    document.getElementById('q-time').textContent=timeLeft;
    const pct=Math.round((timeLeft/TIME)*100);
    document.getElementById('timer-bar').style.width=pct+'%';
    if(timeLeft<=5) document.getElementById('timer-bar').style.background='var(--danger)';
    if(timeLeft<=0){clearInterval(timer);timeUp(q.name.common)}
  },1000);
}

function answer(btn,correct,correctName){
  if(answered)return;
  answered=true;
  clearInterval(timer);
  document.querySelectorAll('.opt-btn').forEach(b=>{
    b.disabled=true;
    if(b.textContent===correctName) b.className='opt-btn correct';
  });
  if(!correct) btn.className='opt-btn wrong';
  const pts=correct?Math.max(10,Math.round(timeLeft/TIME*100)):0;
  if(correct){score+=pts;document.getElementById('feedback').style.color='var(--success)';document.getElementById('feedback').textContent='+'+pts+' pontos'}
  else{document.getElementById('feedback').style.color='var(--danger)';document.getElementById('feedback').textContent='Era '+correctName}
  questions[cur]._correct=correct;
  cur++;
  setTimeout(nextQ,1400);
}

function timeUp(correctName){
  if(answered)return;
  answered=true;
  document.querySelectorAll('.opt-btn').forEach(b=>{
    b.disabled=true;
    if(b.textContent===correctName) b.className='opt-btn correct';
  });
  document.getElementById('feedback').style.color='var(--danger)';
  document.getElementById('feedback').textContent='Tempo esgotado! Era '+correctName;
  questions[cur]._correct=false;
  cur++;
  setTimeout(nextQ,1400);
}

function endGame(){
  clearInterval(timer);
  stats.games++;
  stats.totalScore+=score;
  if(score>stats.best) stats.best=score;
  localStorage.setItem('fq_stats',JSON.stringify(stats));
  document.getElementById('final-score').textContent=score;
  const correct=questions.filter(q=>q._correct).length;
  document.getElementById('r-correct').textContent=correct+'/10';
  document.getElementById('r-best').textContent=stats.best;
  document.getElementById('r-avg').textContent=stats.games>0?Math.round(stats.totalScore/stats.games):'—';
  const msgs=['Pode melhorar!','Quase lá!','Bom resultado!','Muito bem!','Excelente!'];
  const mi=Math.min(4,Math.floor(correct/2));
  document.getElementById('final-msg').textContent=msgs[mi];
  const list=document.getElementById('result-list');
  list.innerHTML=questions.map(q=>`<div class="result-row"><span class="dot ${q._correct?'ok':'ko'}"></span><span style="flex:1;margin-left:12px;color:var(--text-main);font-weight:500;">${q.name.common}</span><img src="${q.flags.svg}" style="height:20px;width:30px;object-fit:cover;border:1px solid var(--border-color);border-radius:4px"></div>`).join('');
  show('s-result');
}

init();