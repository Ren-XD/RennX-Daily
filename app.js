const ICONS={home:'M3 11l9-8 9 8v10h-6v-6H9v6H3z',cal:'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4',stat:'M5 21V10M12 21V4M19 21v-8',hist:'M3 12a9 9 0 109-9 9 9 0 00-7 3M3 4v4h4M12 7v5l3 2',set:'M12 9a3 3 0 100 6 3 3 0 000-6zM19 12l2-1-2-4-2 1-2-1-1-2h-4l-1 2-2 1-2-1-2 4 2 1v2l-2 1 2 4 2-1 2 1 1 2h4l1-2 2-1 2 1 2-4-2-1z',dumb:'M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12',book:'M2 4h7a3 3 0 013 3v14a2 2 0 00-2-2H2zM22 4h-7a3 3 0 00-3 3v14a2 2 0 012-2h8z',lang:'M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6',code:'M16 18l6-6-6-6M8 6l-6 6 6 6',msg:'M21 12a8 8 0 01-12 7l-6 2 2-5a8 8 0 1116-4z',calc:'M5 2h14v20H5zM8 6h8M8 11h1M12 11h1M16 11h0M8 15h1M12 15h1M8 19h1M12 19h4',sun:'M12 8a4 4 0 100 8 4 4 0 000-8zM12 1v2M12 21v2M4 4l1 1M19 19l1 1M1 12h2M21 12h2M4 20l1-1M19 5l1-1',chk:'M20 6L9 17l-5-5',plus:'M12 5v14M5 12h14',info:'M12 2a10 10 0 100 20 10 10 0 000-20zM12 16v-4M12 8h.01',quote:'M3 21c4 0 7-2 7-8V5H3v8h4M14 21c4 0 7-2 7-8V5h-7v8h4',lock:'M5 11h14v10H5zM8 11V7a4 4 0 018 0v4',x:'M18 6L6 18M6 6l12 12',half:'M12 3a9 9 0 100 18 9 9 0 000-18zM12 3v18M12 3a9 9 0 010 18z',fire:'M12 2c1 4 6 6 6 12a6 6 0 01-12 0c0-3 2-4 2-7 2 1 3 2 4-5z',left:'M15 18l-6-6 6-6',right:'M9 18l6-6-6-6',star:'M12 2l3 7 7 .6-5.3 4.8L18.2 22 12 18l-6.2 4 1.5-7.6L2 9.6 9 9z',list:'M8 6h13M8 12h13M8 18h13M3 6h0M3 12h0M3 18h0',download:'M12 3v12M7 10l5 5 5-5M4 21h16',upload:'M12 21V9M7 14l5-5 5 5M4 3h16',trash:'M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3'};
const TONES={dumb:'coral',book:'sky',lang:'lilac',code:'leaf',msg:'sun',calc:'peach',star:'lilac',chk:'leaf',fire:'coral'};
const glyph=name=>`<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;
const DEFAULT_ROUTINES=[
{id:'r1',name:'Olahraga & kebersihan',time:'Pagi',desc:'Olahraga sesuai kemampuan, pendinginan, dan bersih-bersih.',icon:'dumb',req:1,on:1},
{id:'r2',name:'Bahasa Jepang',time:'05.30 – 06.00',desc:'Hafalan kosakata, review materi kemarin, atau latihan kaiwa singkat.',icon:'book',req:1,on:1},
{id:'r3',name:'Hafalan fleksibel',time:'Siang',desc:'Saat ada waktu kosong, gunakan 5–15 menit buat mengulang kosakata Jepang atau Inggris. Kalau sedang sibuk, tidak perlu dipaksakan.',icon:'lang',req:1,on:1},
{id:'r4',name:'Coding',time:'Sore · 45–60 menit',desc:'Fokus memahami satu konsep dan mempraktikkannya langsung.',icon:'code',req:1,on:1},
{id:'r5',name:'Bahasa Inggris',time:'Malam · 30–45 menit',desc:'Kosakata, listening, dan berbicara menggunakan kalimat sederhana.',icon:'msg',req:1,on:1},
{id:'r6',name:'Matematika',time:'Bonus · 15–30 menit',desc:'Kerjakan ketika memang ada minat dan energi. Tidak wajib setiap hari.',icon:'calc',req:0,on:1}];
const ICON_CHOICES=[['star','Bintang'],['dumb','Olahraga'],['book','Buku'],['lang','Bahasa'],['code','Kode'],['msg','Percakapan'],['calc','Hitung'],['chk','Centang'],['fire','Api']];
const STORE_KEY='rennx-daily-v1';
const VIEW_KEY=STORE_KEY+'-view';
const MONTHS=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const DAYS=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const DAYS_SHORT=['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
const NAV=[['home','Beranda','home'],['cal','Kalender','cal'],['stat','Statistik','stat'],['hist','Riwayat','hist'],['set','Pengaturan','set']];
const stage=document.getElementById('stage');
const railNav=document.getElementById('railNav');
const dockNav=document.getElementById('dockNav');
const dateChip=document.getElementById('dateChip');
const avatar=document.getElementById('avatar');
const noticeBox=document.getElementById('notice');
const askDialog=document.getElementById('askDialog');
const askTitle=document.getElementById('askTitle');
const askBody=document.getElementById('askBody');
const askOk=document.getElementById('askOk');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');

const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const parseDate=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=parseDate(s);d.setDate(d.getDate()+n);return iso(d)};
const today=()=>iso(new Date());
const fmt=s=>{const d=parseDate(s);return DAYS[d.getDay()]+', '+d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear()};
const longDate=s=>{const d=parseDate(s);return d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear()};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));

let state;
function load(){
 try{state=JSON.parse(localStorage.getItem(STORE_KEY))}catch(e){state=null}
 if(!state||typeof state!=='object'||!Array.isArray(state.routines)||typeof state.days!=='object'||!state.days){
  state={name:'Tuan Shenn',weekStart:1,start:today(),routines:clone(DEFAULT_ROUTINES),days:{}}
 }
 if(!state.start)state.start=today()
}
function save(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state))}catch(e){}}
load();

let view=(()=>{try{const v=localStorage.getItem(VIEW_KEY);return NAV.some(n=>n[0]===v)?v:'home'}catch(e){return'home'}})();
let selected=today();
let shownMonth=parseDate(selected).getMonth();
let shownYear=parseDate(selected).getFullYear();
let statTab='w';
let draft=null;
let showInvalid=false;
let poppedId=null;
let fillMemory={};
let countMemory={};
let noticeTimer=0;
let lastDay=today();

function routinesFor(s){
 const rec=state.days[s];
 if(s!==today()&&rec&&rec.snap)return rec.snap;
 return state.routines.filter(x=>x.on).map(({id,name,time,desc,icon,req})=>({id,name,time,desc,icon,req}))
}
function dayInfo(s){
 const list=routinesFor(s),done=(state.days[s]&&state.days[s].done)||{};
 const must=list.filter(x=>x.req),extra=list.filter(x=>!x.req);
 const mustDone=must.filter(x=>done[x.id]).length,extraDone=extra.filter(x=>done[x.id]).length;
 return{list,done,must:must.length,mustDone,extra:extra.length,extraDone,pct:must.length?Math.round(mustDone/must.length*100):0}
}
function dayStatus(s){
 const t=today();
 if(s>t||s<state.start)return'n';
 const i=dayInfo(s);
 if(!i.must)return'n';
 if(i.mustDone===i.must)return'g';
 if(i.mustDone>0)return'y';
 return s<t?'rd':'n'
}
function aggregate(a,b){
 const t=today();
 const from=a<state.start?state.start:a,to=b>t?t:b;
 let done=0,planned=0,full=0;
 for(let s=from;s<=to;s=addDays(s,1)){const i=dayInfo(s);done+=i.mustDone;planned+=i.must;if(i.must&&i.mustDone===i.must)full++}
 return{done,planned,full,pct:planned?Math.round(done/planned*100):0}
}
function monthTotals(a,b){
 const t=today();
 let mustDone=0,must=0,extraDone=0,extra=0;
 for(let s=a<state.start?state.start:a;s<=b&&s<=t;s=addDays(s,1)){const i=dayInfo(s);mustDone+=i.mustDone;must+=i.must;extraDone+=i.extraDone;extra+=i.extra}
 return{mustDone,must,extraDone,extra}
}
function streak(){
 const complete=x=>{const i=dayInfo(x);return i.must&&i.mustDone===i.must};
 let s=today(),n=0;
 if(!complete(s))s=addDays(s,-1);
 while(s>=state.start&&complete(s)){n++;s=addDays(s,-1)}
 return n
}
function longest(){
 let best=0,run=0;
 for(let s=state.start;s<=today();s=addDays(s,1)){const i=dayInfo(s);if(i.must&&i.mustDone===i.must){run++;if(run>best)best=run}else run=0}
 return best
}
function weekStart(s){return addDays(s,-((parseDate(s).getDay()-state.weekStart+7)%7))}
function statusText(s){
 const t=today();
 if(s>t)return'Belum dimulai';
 if(s<state.start)return'Belum ada data';
 const i=dayInfo(s);
 if(s===t)return i.must&&i.mustDone===i.must?'Semua selesai':'Sedang berlangsung';
 const st=dayStatus(s);
 return st==='g'?'Semua selesai':st==='y'?'Sebagian selesai':st==='rd'?'Tidak ada yang selesai':'Belum ada data'
}
function daypart(){const h=new Date().getHours();return h<10?'dawn':h<15?'day':h<18?'dusk':'night'}
function greeting(){const h=new Date().getHours();return h<11?'Selamat pagi':h<15?'Selamat siang':h<18?'Selamat sore':'Selamat malam'}

function meter(key,pct){return`<span class="meter" data-fill="${pct}" data-key="${key}"><i class="meter-fill"></i></span>`}
function ring(key,pct,caption,size){
 return`<figure class="progress-ring" data-size="${size}" data-fill="${pct}" data-key="${key}"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="ring-track" cx="50" cy="50" r="44"/><circle class="ring-arc" cx="50" cy="50" r="44"/></svg><figcaption><b data-count="${pct}" data-suffix="%" data-key="${key}-n">${pct}%</b>${caption?`<small>${caption}</small>`:''}</figcaption></figure>`
}
function statusDot(st){
 const g={g:'chk',rd:'x',y:'half'}[st];
 return`<span class="status-dot" data-state="${st}">${g?glyph(g):''}</span>`
}
function tile(name,tone,label,value,note,pct,key,order){
 return`<li class="stat-tile" style="--i:${order||0}"><span class="tile-icon" data-tone="${tone}">${glyph(name)}</span><span class="tile-label">${label}</span><b class="tile-value">${value}</b><span class="tile-note">${note}</span>${meter(key,pct)}</li>`
}
function barChart(items,dense){
 return`<ol class="bar-chart${dense?' is-dense':''}">${items.map(b=>`<li data-state="${b.state}"><i class="bar-column" data-fill="${b.pct}" data-key="${b.key}"></i><span>${b.label||''}</span></li>`).join('')}</ol>`
}

function routineRows(s){
 const i=dayInfo(s),live=s===today();
 if(!i.list.length)return'<li class="empty-note">Tidak ada rutinitas aktif.</li>';
 return i.list.map((x,k)=>{
  const on=!!i.done[x.id];
  return`<li class="routine-row" style="--i:${k}"${on?' data-done':''}><span class="routine-icon" data-tone="${TONES[x.icon]||'leaf'}">${glyph(x.icon)}</span><small class="routine-time">${esc(x.time)}</small><h3 class="routine-name">${esc(x.name)}${x.req?'':'<span class="optional-tag">opsional</span>'}</h3><p class="routine-desc">${esc(x.desc)}</p><button class="routine-check${poppedId===x.id&&on?' is-popped':''}" data-action="toggle" data-id="${x.id}" data-date="${s}" aria-pressed="${on}" aria-label="${esc(x.name)}"${live?'':' disabled'}>${glyph('chk')}</button></li>`
 }).join('')
}
function lockNote(s){
 return`<p class="lock-note">${glyph('lock')}${s===today()?'Hari ini bisa dicentang atau dibatalkan. Setelah hari berganti, data terkunci.':'Data tanggal ini terkunci; hanya bisa dilihat.'}</p>`
}
function routinePanel(){
 const t=today(),i=dayInfo(t);
 return`<section class="routine-panel reveal" style="--i:2"><header class="panel-head"><h2>Rutinitas Hari Ini</h2><span class="count-pill">${i.mustDone+i.extraDone} / ${i.list.length}</span></header>${lockNote(t)}<ul class="routine-list">${routineRows(t)}</ul></section>`
}
function heroPanel(){
 const t=today(),i=dayInfo(t),n=streak(),left=i.must-i.mustDone;
 const facts=[`<li data-tone="coral">${glyph('fire')}${n} hari beruntun</li>`,`<li data-tone="leaf">${glyph('chk')}${left?left+' wajib tersisa':'Semua wajib tuntas'}</li>`];
 if(i.extra)facts.push(`<li data-tone="lilac">${glyph('star')}${i.extraDone}/${i.extra} bonus</li>`);
 return`<section class="hero-sunrise" data-part="${daypart()}"><p class="hero-eyebrow">${statusText(t)}</p><h1>${greeting()}, <em>${esc(state.name)}</em></h1><p class="hero-lead">Hari ini adalah kesempatan baru untuk jadi lebih baik.</p><ul class="hero-facts">${facts.join('')}</ul><figure class="sun-arch${i.pct===100?' is-complete':''}" data-fill="${i.pct}" data-key="hero"><span class="sun-disc"></span><span class="cloud cloud-far"></span><span class="cloud cloud-near"></span><svg class="arch-hills" viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true"><path class="hill-back" d="M0 50C50 10 100 20 150 46S250 70 320 30V120H0Z"/><path class="hill-front" d="M0 72C60 42 120 50 180 70S280 78 320 58V120H0Z"/></svg><figcaption><b data-count="${i.pct}" data-suffix="%" data-key="hero-n">${i.pct}%</b><small>${i.mustDone}/${i.must} wajib</small></figcaption></figure></section>`
}
function summaryPanel(s){
 const i=dayInfo(s),total=i.must+i.extra,pc=(a,b)=>b?Math.round(a/b*100):0;
 return`<section class="summary-panel reveal" style="--i:3"><h2>Ringkasan Rutinitas</h2><ul class="tile-grid">${tile('chk','leaf','Wajib',i.mustDone+'/'+i.must,i.pct+'% selesai',i.pct,'sum-must',0)}${tile('star','lilac','Opsional',i.extraDone+'/'+i.extra,pc(i.extraDone,i.extra)+'% • '+(i.extraDone?'Bonus selesai':'Belum dikerjakan'),pc(i.extraDone,i.extra),'sum-extra',1)}${tile('list','sky','Total',(i.mustDone+i.extraDone)+'/'+total,i.mustDone+' wajib + '+i.extraDone+' opsional',pc(i.mustDone+i.extraDone,total),'sum-total',2)}</ul></section>`
}
function statsPanel(){
 const t=today();
 let body='';
 if(statTab==='w'){
  const ws=weekStart(t),a=aggregate(ws,addDays(ws,6)),bars=[];
  for(let k=0;k<7;k++){const s=addDays(ws,k),i=dayInfo(s),off=s>t||s<state.start;bars.push({key:'w'+k,pct:off?0:i.pct,state:s===t?'today':off?'future':'past',label:DAYS_SHORT[parseDate(s).getDay()]})}
  body=`<div class="stat-readout">${ring('stat-ring',a.pct,'','medium')}${barChart(bars)}</div><p class="stat-caption">${a.full} hari 100% · ${a.done} dari ${a.planned} rutinitas wajib selesai</p>`
 }else if(statTab==='m'){
  const d=new Date(),ms=iso(new Date(d.getFullYear(),d.getMonth(),1)),me=iso(new Date(d.getFullYear(),d.getMonth()+1,0));
  const a=aggregate(ms,me),pv=aggregate(iso(new Date(d.getFullYear(),d.getMonth()-1,1)),iso(new Date(d.getFullYear(),d.getMonth(),0)));
  const bars=[],n=parseDate(me).getDate();
  for(let k=0;k<n;k++){const s=addDays(ms,k),off=s>t||s<state.start;bars.push({key:'m'+k,pct:off?0:dayInfo(s).pct,state:s===t?'today':off?'future':'past'})}
  body=`<div class="stat-readout">${ring('stat-ring',a.pct,'','medium')}${barChart(bars,true)}</div><p class="stat-caption">${a.done} dari ${a.planned} wajib selesai · ${a.full} hari 100%<br>${pv.planned?'Bulan lalu: '+pv.pct+'% ('+(a.pct-pv.pct>=0?'+':'')+(a.pct-pv.pct)+'%)':'Belum ada data bulan lalu'}</p>`
 }else{
  const y=new Date().getFullYear(),a=aggregate(y+'-01-01',y+'-12-31'),bars=[];
  for(let m=0;m<12;m++){const x=aggregate(iso(new Date(y,m,1)),iso(new Date(y,m+1,0)));bars.push({key:'y'+m,pct:x.planned?x.pct:0,state:x.planned?'past':'future',label:MONTHS[m].slice(0,3)})}
  body=`<div class="stat-readout">${ring('stat-ring',a.pct,'','medium')}${barChart(bars)}</div><p class="stat-caption">${a.done} dari ${a.planned} wajib selesai · ${a.full} hari 100%</p>`
 }
 const tabs=[['w','Mingguan'],['m','Bulanan'],['y','Tahunan']];
 const idx=tabs.findIndex(x=>x[0]===statTab);
 return`<section class="stats-panel reveal" style="--i:4"><h2>Statistik Progres</h2><nav class="segment" role="tablist" data-fill="${idx*50}" data-key="stat-tab">${tabs.map(([k,l])=>`<button role="tab" aria-selected="${statTab===k}" data-action="tab" data-tab="${k}">${l}</button>`).join('')}</nav>${body}</section>`
}
function periodPanel(){
 const d=new Date(),y=d.getFullYear(),m=d.getMonth();
 const cur=aggregate(iso(new Date(y,m,1)),iso(new Date(y,m+1,0)));
 const prev=aggregate(iso(new Date(y,m-1,1)),iso(new Date(y,m,0)));
 const year=aggregate(y+'-01-01',y+'-12-31');
 const delta=prev.planned?` · ${cur.pct-prev.pct>=0?'+':''}${cur.pct-prev.pct}% dari bulan lalu`:'';
 const entry=(key,label,a,extra)=>`<li class="period-entry"><h3>${label}</h3><b data-count="${a.pct}" data-suffix="%" data-key="${key}-n">${a.pct}%</b>${meter(key,a.pct)}<p>${a.done} dari ${a.planned} rutinitas wajib selesai${a.planned?'':' · belum ada data'}${extra}</p></li>`;
 return`<section class="period-panel reveal" style="--i:5"><h2>Capaian Periode</h2><ul class="period-list">${entry('period-month','Progres Bulanan',cur,delta)}${entry('period-year','Progres Tahunan',year,'')}</ul></section>`
}

function homeView(){
 return heroPanel()+routinePanel()+`<aside class="insight-rail">${summaryPanel(today())}${statsPanel()}${periodPanel()}</aside>`
}
function calendarView(){
 const t=today(),first=new Date(shownYear,shownMonth,1);
 const offset=(first.getDay()-state.weekStart+7)%7,dim=new Date(shownYear,shownMonth+1,0).getDate(),weeks=Math.ceil((offset+dim)/7);
 const heads=[0,1,2,3,4,5,6].map(k=>`<span class="weekday-label">${DAYS_SHORT[(state.weekStart+k)%7]}</span>`).join('');
 const origin=addDays(iso(first),-offset);
 let cells='';
 for(let k=0;k<weeks*7;k++){
  const s=addDays(origin,k),d=parseDate(s),outside=d.getMonth()!==shownMonth;
  cells+=`<button class="day-cell" style="--i:${k}" data-action="pick-day" data-date="${s}" aria-pressed="${s===selected}" aria-label="${fmt(s)}, ${statusText(s)}"${outside?' data-outside':''}${s===t?' data-today':''}><span class="day-number">${d.getDate()}</span>${statusDot(dayStatus(s))}</button>`
 }
 const i=dayInfo(selected),live=selected===t,st=dayStatus(selected);
 const now=new Date(),ms=iso(new Date(now.getFullYear(),now.getMonth(),1)),me=iso(new Date(now.getFullYear(),now.getMonth()+1,0));
 const m=monthTotals(ms,me),wk=weekStart(t),w=aggregate(wk,addDays(wk,6));
 const pp=(a,b)=>b?Math.round(a/b*100):0,total=m.must+m.extra;
 const best=longest(),run=streak();
 return`<section class="calendar-panel reveal" style="--i:0"><header class="panel-head"><span class="tile-icon" data-tone="leaf">${glyph('cal')}</span><h2>Kalender Progres</h2></header><p class="panel-sub">Lihat dan pantau progres rutinitasmu setiap hari.</p><nav class="calendar-nav" aria-label="Pilih bulan"><button class="round-action" data-action="month" data-step="-1" aria-label="Bulan sebelumnya">${glyph('left')}</button><b>${MONTHS[shownMonth]} ${shownYear}</b><button class="round-action" data-action="month" data-step="1" aria-label="Bulan berikutnya">${glyph('right')}</button></nav><div class="day-grid">${heads}${cells}</div><ul class="legend-list"><li>${statusDot('g')}Semua selesai</li><li>${statusDot('y')}Sebagian selesai</li><li>${statusDot('rd')}Tidak ada yang selesai</li><li>${statusDot('n')}Belum dimulai</li><li><i class="today-ring"></i>Hari ini</li></ul></section>
<section class="detail-panel reveal" style="--i:1"><h2>Detail Tanggal</h2><p class="detail-date">${fmt(selected)}</p><p class="detail-status">${statusDot(st)}${statusText(selected)} · ${i.mustDone}/${i.must} wajib selesai</p><div class="detail-progress">${ring('detail-ring',i.pct,'','small')}<p><b>Progres ${live?'Hari Ini':'Hari Itu'}</b><span>${i.mustDone} / ${i.must} rutinitas wajib</span><span>${i.extra?(i.extraDone?'+ '+i.extraDone+' opsional selesai':'Opsional belum dikerjakan'):'Tidak ada opsional'}</span></p></div><header class="panel-head"><h3>Rutinitas ${live?'Hari Ini':'Tanggal Ini'}</h3><span class="count-pill">${i.mustDone+i.extraDone} / ${i.must+i.extra}</span></header><ul class="routine-list">${routineRows(selected)}</ul>${lockNote(selected)}<p class="info-note">${glyph('info')}Rutinitas opsional tidak memengaruhi progres wajib.</p></section>
<section class="month-panel reveal" style="--i:2"><h2>Ringkasan Progres Bulan Ini</h2><ul class="tile-grid">${tile('chk','leaf','Wajib',m.mustDone+' / '+m.must,pp(m.mustDone,m.must)+'%',pp(m.mustDone,m.must),'month-must',0)}${tile('star','lilac','Opsional',m.extraDone+' / '+m.extra,pp(m.extraDone,m.extra)+'%',pp(m.extraDone,m.extra),'month-extra',1)}${tile('list','sky','Total',(m.mustDone+m.extraDone)+' / '+total,pp(m.mustDone+m.extraDone,total)+'%',pp(m.mustDone+m.extraDone,total),'month-total',2)}</ul></section>
<ul class="glance-grid reveal" style="--i:3">${tile('stat','leaf','Progres Minggu Ini',w.pct+'%',w.done+' / '+w.planned+' wajib',w.pct,'glance-week',0)}${tile('fire','sun','Streak',run+' hari','Terpanjang: '+best+' hari',best?Math.round(run/best*100):0,'glance-streak',1)}<li class="quote-tile">${glyph('quote')}<p>Bukan tentang seberapa cepat kamu sampai, tapi seberapa konsisten kamu melangkah.</p><cite>— RennX</cite></li></ul>`
}
function statsView(){
 return statsPanel()+summaryPanel(today())+periodPanel()
}
function historyView(){
 const t=today();
 let rows='',n=0;
 for(let s=t;s>=state.start;s=addDays(s,-1)){
  const i=dayInfo(s),st=dayStatus(s);
  rows+=`<li style="--i:${Math.min(n++,12)}"><button class="history-day" data-action="open-day" data-date="${s}"><span class="percent-pill" data-state="${st}">${i.pct}%</span><b class="history-date">${fmt(s)}</b><span class="history-done">${i.list.filter(x=>i.done[x.id]).map(x=>esc(x.name)).join(', ')||'Belum ada yang selesai'}</span><span class="history-score">${i.mustDone}/${i.must}${i.extraDone?' +bonus':''}</span></button></li>`
 }
 const ws=weekStart(t),pw=aggregate(addDays(ws,-7),addDays(ws,-1)),d=new Date();
 const pm=aggregate(iso(new Date(d.getFullYear(),d.getMonth()-1,1)),iso(new Date(d.getFullYear(),d.getMonth(),0)));
 return`<section class="history-summary reveal" style="--i:0"><h2>Ringkasan Sebelumnya</h2><ul class="tile-grid">${tile('stat','leaf','Minggu lalu',pw.planned?pw.pct+'%':'-',pw.full+' hari 100%',pw.pct,'prev-week',0)}${tile('cal','sky','Bulan lalu',pm.planned?pm.pct+'%':'-',pm.full+' hari 100%',pm.pct,'prev-month',1)}${tile('hist','sun','Tercatat sejak',longDate(state.start),'Awal pencatatanmu',100,'since',2)}</ul></section><section class="history-panel reveal" style="--i:1"><h2>Riwayat Harian</h2><ul class="history-list">${rows}</ul></section>`
}
function ensureDraft(){if(!draft)draft={name:state.name,ws:state.weekStart,rt:clone(state.routines)}}
function settingsView(){
 ensureDraft();
 const bad=r=>showInvalid&&!r.name.trim()?' aria-invalid="true"':'';
 const editors=draft.rt.map((r,k)=>`<li class="editor-row" style="--i:${Math.min(k,8)}"><label class="field"><span>Nama aktivitas</span><input value="${esc(r.name)}" placeholder="Nama aktivitas" data-field="routine" data-index="${k}" data-prop="name"${bad(r)}></label><label class="field"><span>Waktu</span><input value="${esc(r.time)}" placeholder="Mis. Pagi · 30 menit" data-field="routine" data-index="${k}" data-prop="time"></label><label class="field field-wide"><span>Deskripsi</span><textarea rows="2" placeholder="Deskripsi" data-field="routine" data-index="${k}" data-prop="desc">${esc(r.desc)}</textarea></label><label class="field"><span>Ikon</span><select data-field="routine" data-index="${k}" data-prop="icon">${ICON_CHOICES.map(([v,l])=>`<option value="${v}"${r.icon===v?' selected':''}>${l}</option>`).join('')}</select></label><span class="switch-row"><label class="switch"><input type="checkbox" data-field="routine" data-index="${k}" data-prop="req"${r.req?' checked':''}>Wajib</label><label class="switch"><input type="checkbox" data-field="routine" data-index="${k}" data-prop="on"${r.on?' checked':''}>Aktif</label>${/^r[1-6]$/.test(r.id)?'':`<button class="pill-action is-danger" data-action="delete-routine" data-index="${k}">${glyph('trash')}Hapus</button>`}</span></li>`).join('');
 return`<section class="profile-panel reveal" style="--i:0"><h2>Profil</h2><label class="field"><span>Nama</span><input value="${esc(draft.name)}" data-field="name"></label><label class="field"><span>Awal minggu</span><select data-field="weekStart"><option value="1"${draft.ws==1?' selected':''}>Senin</option><option value="0"${draft.ws==0?' selected':''}>Minggu</option></select></label></section>
<section class="editor-panel reveal" style="--i:1"><h2>Rutinitas</h2><p class="panel-sub">Ubah nama, waktu, dan deskripsi aktivitas, atau tambah aktivitas baru. Tekan Simpan untuk menerapkan. Hari yang sudah lewat mempertahankan definisi lamanya.</p><ul class="editor-list">${editors}</ul><button class="pill-action is-wide" data-action="add-routine">${glyph('plus')}Tambah aktivitas</button></section>
<section class="backup-panel reveal" style="--i:2"><h2>Cadangan data</h2><p class="panel-sub">Data disimpan di localStorage browser ini saja, tidak tersinkron ke cloud. Gunakan ekspor untuk cadangan.</p><span class="action-set"><button class="pill-action" data-action="export">${glyph('download')}Ekspor JSON</button><label class="pill-action">${glyph('upload')}Impor JSON<input type="file" accept=".json" hidden data-action="import"></label></span></section>
<footer class="save-bar reveal" style="--i:3"><button class="pill-action is-primary" data-action="save-settings">Simpan perubahan</button><button class="pill-action is-danger" data-action="reset-data">Atur ulang data</button></footer>`
}
const RENDERERS={home:homeView,cal:calendarView,stat:statsView,hist:historyView,set:settingsView};

function prefersReduced(){return reducedMotion.matches}
function tween(node){
 const key=node.dataset.key,to=Number(node.dataset.count),suffix=node.dataset.suffix||'';
 const from=key in countMemory?countMemory[key]:0;
 countMemory[key]=to;
 if(prefersReduced()||from===to){node.textContent=to+suffix;return}
 node.textContent=from+suffix;
 const begin=performance.now(),span=800;
 const step=now=>{const p=Math.min(1,(now-begin)/span),e=1-Math.pow(1-p,3);node.textContent=Math.round(from+(to-from)*e)+suffix;if(p<1)requestAnimationFrame(step)};
 requestAnimationFrame(step)
}
function settle(){
 const nodes=[...stage.querySelectorAll('[data-fill]')];
 const targets=nodes.map(node=>{
  const key=node.dataset.key,to=Number(node.dataset.fill)/100,from=key in fillMemory?fillMemory[key]:0;
  fillMemory[key]=to;
  node.style.setProperty('--fill',from);
  return[node,to]
 });
 void stage.offsetWidth;
 requestAnimationFrame(()=>targets.forEach(([node,to])=>node.style.setProperty('--fill',to)));
 stage.querySelectorAll('[data-count]').forEach(tween)
}
function syncChrome(){
 const nowDate=parseDate(today());
 dateChip.innerHTML=glyph('cal')+`<span class="date-full">${fmt(today())}</span><span class="date-short">${nowDate.getDate()} ${MONTHS[nowDate.getMonth()].slice(0,3)}</span>`;
 dateChip.setAttribute('datetime',today());
 avatar.textContent=(state.name.trim().charAt(0)||'R').toUpperCase();
 const idx=NAV.findIndex(n=>n[0]===view);
 [railNav,dockNav].forEach(nav=>{
  nav.style.setProperty('--fill',idx/(NAV.length-1));
  nav.querySelectorAll('button').forEach((b,k)=>{if(k===idx)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')})
 })
}
function render(mode='none'){
 const y=window.scrollY;
 try{localStorage.setItem(VIEW_KEY,view)}catch(e){}
 if(mode==='enter'){fillMemory={};countMemory={}}
 syncChrome();
 stage.dataset.view=view;
 stage.dataset.motion=mode;
 stage.innerHTML=RENDERERS[view]();
 poppedId=null;
 settle();
 scrollTo({top:mode==='enter'?0:y,behavior:'instant'})
}
function buildNav(){
 railNav.innerHTML=NAV.map(([k,l,i])=>`<button class="nav-link" data-action="go" data-view="${k}">${glyph(i)}<span>${l}</span></button>`).join('');
 dockNav.innerHTML=NAV.map(([k,l,i])=>`<button class="dock-link" data-action="go" data-view="${k}">${glyph(i)}<span>${k==='set'?'Setelan':l}</span></button>`).join('')
}
function notify(message,kind){
 clearTimeout(noticeTimer);
 noticeBox.textContent=message;
 noticeBox.dataset.kind=kind||'success';
 noticeBox.dataset.show='';
 noticeTimer=setTimeout(()=>{delete noticeBox.dataset.show},3200)
}
function ask(title,body,okLabel){
 return new Promise(resolve=>{
  askTitle.textContent=title;askBody.textContent=body;askOk.textContent=okLabel;askDialog.returnValue='';
  askDialog.addEventListener('close',()=>resolve(askDialog.returnValue==='ok'),{once:true});
  askDialog.showModal()
 })
}
function celebrate(){
 const arch=stage.querySelector('.sun-arch');
 if(!arch||prefersReduced())return;
 const colors=['#FFB020','#E4572E','#2E9AD4','#7360E8','#147F4E'];
 for(let k=0;k<20;k++){
  const dot=document.createElement('i');
  const angle=Math.PI*2*k/20,dist=26+Math.random()*28;
  dot.className='burst-dot';
  dot.style.cssText=`--dx:${(Math.cos(angle)*dist).toFixed(1)}cqw;--dy:${(Math.sin(angle)*dist).toFixed(1)}cqw;background:${colors[k%5]}`;
  arch.append(dot);
  setTimeout(()=>dot.remove(),1200)
 }
}
function toggleRoutine(id,s){
 if(s!==today())return;
 const before=dayInfo(s).pct;
 const rec=state.days[s]||(state.days[s]={done:{}});
 if(!rec.snap)rec.snap=routinesFor(s);
 rec.done[id]=!rec.done[id];
 rec.at=Date.now();
 save();
 poppedId=id;
 render('none');
 if(before<100&&dayInfo(s).pct===100)celebrate()
}
function shiftMonth(n){
 shownMonth+=n;
 if(shownMonth<0){shownMonth=11;shownYear--}
 if(shownMonth>11){shownMonth=0;shownYear++}
 render('month')
}
function pickDay(s){
 selected=s;
 const d=parseDate(s);
 shownMonth=d.getMonth();shownYear=d.getFullYear();
 render('date')
}
function goTo(v){view=v;draft=null;showInvalid=false;render('enter')}
function addRoutine(){
 ensureDraft();
 draft.rt.push({id:'c'+Date.now().toString(36),name:'',time:'',desc:'',icon:'star',req:1,on:1});
 render('none');
 const rows=stage.querySelectorAll('.editor-row'),last=rows[rows.length-1];
 if(last){last.scrollIntoView({block:'center',behavior:'instant'});last.querySelector('input').focus()}
}
async function deleteRoutine(k){
 if(await ask('Hapus aktivitas ini?','Riwayat hari lama tetap tersimpan.','Hapus')){draft.rt.splice(k,1);render('none')}
}
function saveSettings(){
 ensureDraft();
 if(draft.rt.some(r=>!r.name.trim())){showInvalid=true;render('none');notify('Nama aktivitas tidak boleh kosong.','error');return}
 state.name=draft.name.trim()||'Tuan Shenn';
 state.weekStart=draft.ws;
 state.routines=draft.rt.map(r=>({...r,name:r.name.trim()}));
 const t=today();
 if(state.days[t]&&state.days[t].snap)state.days[t].snap=routinesFor(t);
 save();draft=null;showInvalid=false;
 render('none');
 notify('Perubahan disimpan.','success')
}
async function resetData(){
 if(await ask('Hapus SEMUA data?','Tindakan ini tidak dapat dibatalkan.','Hapus semua')){
  draft=null;
  try{localStorage.removeItem(STORE_KEY)}catch(e){}
  load();save();render('enter');
  notify('Data diatur ulang.','success')
 }
}
function exportData(){
 const link=document.createElement('a');
 link.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,1)],{type:'application/json'}));
 link.download='rennx-daily-'+today()+'.json';
 link.click();
 setTimeout(()=>URL.revokeObjectURL(link.href),1000);
 notify('Cadangan diekspor.','success')
}
function importData(input){
 const file=input.files[0];
 if(!file)return;
 const reader=new FileReader();
 reader.onload=async()=>{
  let data;
  try{data=JSON.parse(reader.result);if(!Array.isArray(data.routines)||typeof data.days!=='object'||!data.days)throw 0}catch(e){notify('File tidak valid.','error');input.value='';return}
  if(await ask('Timpa data saat ini?','Data di browser ini akan diganti dengan isi file.','Timpa')){
   state=data;if(!state.start)state.start=today();
   save();draft=null;render('enter');notify('Data diimpor.','success')
  }
  input.value=''
 };
 reader.readAsText(file)
}
const ACTIONS={
 go:t=>goTo(t.dataset.view),
 toggle:t=>toggleRoutine(t.dataset.id,t.dataset.date),
 month:t=>shiftMonth(Number(t.dataset.step)),
 'pick-day':t=>pickDay(t.dataset.date),
 'open-day':t=>{pickDay(t.dataset.date);goTo('cal')},
 tab:t=>{statTab=t.dataset.tab;render('tab')},
 'add-routine':addRoutine,
 'delete-routine':t=>deleteRoutine(Number(t.dataset.index)),
 'save-settings':saveSettings,
 'reset-data':resetData,
 export:exportData
};
document.addEventListener('click',e=>{
 const target=e.target.closest('[data-action]');
 if(!target||target.tagName==='INPUT')return;
 const run=ACTIONS[target.dataset.action];
 if(run)run(target)
});
function editField(e){
 const el=e.target;
 if(el.dataset.action==='import'&&e.type==='change'){importData(el);return}
 const field=el.dataset.field;
 if(!field||!draft)return;
 const value=el.type==='checkbox'?(el.checked?1:0):el.value;
 if(field==='name')draft.name=value;
 else if(field==='weekStart')draft.ws=Number(value);
 else if(field==='routine'){
  draft.rt[Number(el.dataset.index)][el.dataset.prop]=value;
  if(el.dataset.prop==='name'&&el.getAttribute('aria-invalid')&&value.trim())el.removeAttribute('aria-invalid')
 }
}
document.addEventListener('input',editField);
document.addEventListener('change',editField);
function rollDay(){
 const t=today();
 if(t!==lastDay){
  if(selected===lastDay){selected=t;const d=parseDate(t);shownMonth=d.getMonth();shownYear=d.getFullYear()}
  lastDay=t;render('none')
 }
}
setInterval(rollDay,30000);
document.addEventListener('visibilitychange',rollDay);
buildNav();
render('enter');
