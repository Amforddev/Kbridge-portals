import { LOGO } from './assets.js';

/* ============================================================
   KBridge — partner portal
   Capital partners mint into receivables platforms; platforms publish a
   daily token value and settle redemptions. State is in memory.
   ============================================================ */

/* ---------- icons (lucide-style) ---------- */
export const P = {
  wallet:'M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5M16 12h.01',
  coins:'M9 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM13.3 6.7a6 6 0 1 1 0 10.6M6 18.7A6 6 0 0 0 15 21',
  trend:'M22 7l-8.5 8.5-5-5L2 17M16 7h6v6',
  layers:'M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
  lock:'M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM7 11V7a5 5 0 0 1 10 0v4',
  plus:'M12 5v14M5 12h14',
  pencil:'M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z',
  trash:'M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6',
  check:'M20 6 9 17l-5-5',
  x:'M18 6 6 18M6 6l12 12',
  right:'M5 12h14M12 5l7 7-7 7',
  bell:'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
  out:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2',
  shield:'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1ZM9 12l2 2 4-4',
  zap:'M13 2 3 14h9l-1 8 10-12h-9l1-8Z',
  db:'M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3ZM3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3',
  activity:'M22 12h-4l-3 9L9 3l-3 9H2',
  chev:'m9 18 6-6-6-6',
  chevd:'m6 9 6 6 6-6',
  back:'M19 12H5M12 19l-7-7 7-7',
  grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  refresh:'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
  file:'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v6h6M9 13h6M9 17h6',
  upright:'M7 17 17 7M7 7h10v10',
  flame:'M12 22c4 0 7-2.6 7-7 0-4-3-6-4-9-2 2-3 3-4 3s-1-2-1-4c-2 1-5 4-5 10 0 4.4 3 7 7 7Z',
  upload:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16v-4M12 8h.01',
  alert:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4M12 16h.01',
  copy:'M8 4h10a2 2 0 0 1 2 2v10M16 8H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z',
  bank:'M3 21h18M4 10h16M5 21V10M19 21V10M9 21V10M15 21V10M12 2 3 7h18Z',
  menu:'M4 6h16M4 12h16M4 18h16',
  send:'m22 2-7 20-4-9-9-4Z',
  arrowdown:'M12 5v14M19 12l-7 7-7-7',
  gauge:'M12 14 8.5 9.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  sparkle:'M12 3 13.9 8.1 19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8Z',
  hourglass:'M6 2h12M6 22h12M8 2v4a4 4 0 0 0 4 4 4 4 0 0 0 4-4V2M8 22v-4a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4'
};
export function ic(n, cls){ return '<svg class="icon '+(cls||'')+'" viewBox="0 0 24 24" aria-hidden="true"><path d="'+P[n]+'"/></svg>'; }

export const WORD_SCALE = { theoriq:1.15, pursuit:1.15 };
export function orgWord(k, h){
  const hh = Math.round((h||32) * (WORD_SCALE[k]||1));
  if (LOGO[k] && LOGO[k].word) {
    return '<img class="brand-word" src="'+LOGO[k].word+'" alt="'+(ORGS[k]?ORGS[k].name:k)+'" referrerpolicy="no-referrer" style="height:'+hh+'px;max-height:100%;max-width:240px;object-fit:contain;display:block">';
  }
  return '<span style="font-size:'+hh+'px;font-weight:600">'+(ORGS[k]? ORGS[k].name : k)+'</span>';
}
export function orgMark(k, s){
  s = s || 40;
  if (LOGO[k] && LOGO[k].icon) {
    return '<span class="brand-mark" style="width:'+s+'px;height:'+s+'px;border-radius:'+Math.round(s/3.4)+'px;overflow:hidden;flex:none;display:inline-flex;align-items:center;justify-content:center;background:#fff;padding:3px;border:1px solid var(--line-soft)"><img src="'+LOGO[k].icon+'" alt="'+(ORGS[k]?ORGS[k].name:k)+'" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:contain;display:block"></span>';
  }
  return '';
}
export function kLogo(sz){
  const s = sz || 32;
  return '<div class="klogo" style="width:'+s+'px;height:'+s+'px;font-size:'+Math.round(s*0.62)+'px">K</div>';
}

/* ---------- orgs ---------- */
export const ORGS = {
  theoriq:{ key:'theoriq', name:'Theoriq', legal:'Theoriq Capital Management', role:'capital',
    tag:'Capital Partner', side:'Demand side · brings USDC', color:'#141413', soft:'#F3F3F0', line:'#E4E4E0',
    email:'treasury@theoriq.xyz', blurb:'Deploy treasury USDC into receivables platforms and follow what your tokens are worth.' },
  pursuit:{ key:'pursuit', name:'Pursuit', legal:'Pursuit Receivables SPV I', role:'supply',
    tag:'Receivables Partner', side:'Supply side · brings invoices', color:'#57534E', soft:'#F5F5F3', line:'#E4E4E0',
    email:'ops@pursuit.finance', blurb:'Raise capital against tokenised invoices, publish the daily token value and settle redemptions.' }
};

/* ---------- helpers ---------- */
export const TODAY = new Date(2026, 7, 27, 9, 0, 0);
export const uid = p => p + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
export const hash = () => '0x' + Array.from({length:64}, () => Math.floor(Math.random()*16).toString(16)).join('');
export const nf = (n, d) => Number(n||0).toLocaleString('en-US', {minimumFractionDigits:d===undefined?2:d, maximumFractionDigits:d===undefined?2:d});
export const usdc = n => nf(n, 2) + ' USDC';
export const tok = n => nf(n, 2) + ' KBT';
export const nav = n => '$' + Number(n).toFixed(4);
export const pct = n => (n>=0?'+':'') + n.toFixed(2) + '%';
export const short = a => a.slice(0,6) + '…' + a.slice(-4);
export const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const dstr = d => d.toLocaleDateString('en-US',{month:'short', day:'numeric', year:'numeric'});
export const dshort = d => d.toLocaleDateString('en-US',{month:'short', day:'numeric'});
export function ago(d){
  const m = Math.round((TODAY - d)/60000);
  if (m < 1) return 'just now';
  if (m < 60) return m + 'm ago';
  const h = Math.round(m/60); if (h < 24) return h + 'h ago';
  const dd = Math.round(h/24); return dd + (dd===1?' day ago':' days ago');
}
export function inDays(d){
  const dd = Math.ceil((d - TODAY)/86400000);
  if (dd < 0) return 'expired';
  if (dd === 0) return 'today';
  return 'in ' + dd + (dd===1?' day':' days');
}
export function addr(){ return '0x' + Array.from({length:40}, () => Math.floor(Math.random()*16).toString(16)).join(''); }

/* ---------- data ---------- */
export function series(days, drift, phase){
  const pts = []; let v = 1.0000;
  const start = new Date(TODAY.getTime() - days*86400000);
  for (let i = 0; i <= days-1; i++){
    const d = new Date(start.getTime() + i*86400000);
    if (i > 0) v = v * (1 + drift + Math.sin((i+phase)/9)*0.00007 + Math.sin((i+phase)/2.3)*0.00004);
    pts.push({ d, v: +v.toFixed(4) });
  }
  return pts;
}

export const S = {
  org: null,
  view: 'dash',
  openPlatform: 'pursuit',
  toasts: [],

  platforms: [
    { key:'pursuit', name:'Pursuit', legal:'Pursuit Receivables SPV I', symbol:'PUR',
      sector:'Trade receivables', terms:'30–120 day invoices',
      desc:'Short-dated receivables from vetted manufacturers, exporters and suppliers. Value is published every day as the invoices accrue.',
      status:'Open', opened:new Date(TODAY.getTime()-183*86400000), inception:1.0000,
      outstanding:4250000, history:series(183, 0.00023, 0),
      wallet:'0xkb31d9e07c4a2f68be105c3d7a49f8210cc73b0e2',
      facilities:[
        { id:'INV-2026-8921', name:'Acme Nuts & Bolts Manufacturing', sector:'Manufacturing', amount:100000, yield:5.0, term:90,  status:'Active' },
        { id:'INV-2026-8922', name:'Global Timber Exports Ltd.',      sector:'Commodities',   amount:250000, yield:7.2, term:120, status:'Active' },
        { id:'INV-2026-9004', name:'Vertex Robotics Inc.',            sector:'Robotics',      amount:180000, yield:6.4, term:60,  status:'Active' },
        { id:'INV-2026-9011', name:'Nexus Healthcare Inc.',           sector:'Healthcare',    amount:320000, yield:5.8, term:90,  status:'Funding' },
        { id:'INV-2026-9017', name:'Oasis Agriculture Inc.',          sector:'Agriculture',   amount:140000, yield:6.9, term:45,  status:'Matured' }
      ]},
    { key:'meridian', name:'Meridian Trade Finance', legal:'Meridian TF Series II', symbol:'MTF',
      sector:'Freight & logistics', terms:'30–60 day invoices',
      desc:'Cross-border freight and customs invoices from established forwarders, on shorter terms and a lower yield.',
      status:'Open', opened:new Date(TODAY.getTime()-121*86400000), inception:1.0000,
      outstanding:1860000, history:series(121, 0.00018, 40),
      wallet:'0xkb77a4c1e9b0d32a58e2704c19db8365fa07c418',
      facilities:[
        { id:'INV-2026-7710', name:'Northline Freight Group',   sector:'Logistics', amount:210000, yield:5.4, term:45, status:'Active' },
        { id:'INV-2026-7744', name:'Harbour Point Forwarding',  sector:'Logistics', amount:130000, yield:6.1, term:60, status:'Active' },
        { id:'INV-2026-7802', name:'Cedar Customs Services',    sector:'Logistics', amount:95000,  yield:5.9, term:30, status:'Funding' }
      ]},
    { key:'aster', name:'Aster Working Capital', legal:'Aster WC Series I', symbol:'AWC',
      sector:'Working capital', terms:'Revolving, 90 day',
      desc:'Revolving working-capital notes for mid-market suppliers. Opens to capital partners next quarter.',
      status:'Opening soon', opened:new Date(TODAY.getTime()+34*86400000), inception:1.0000,
      outstanding:0, history:[], wallet:'', facilities:[] }
  ],

  wallets: [
    { id:'w-t1', org:'theoriq', kind:'funds',  label:'Theoriq Treasury', address:'0x8f3ad2b91c4e77a0d5be612f9a3c8471e0d92b64', network:'Base', usdc:100000, primary:true },
    { id:'w-t2', org:'theoriq', kind:'funds',  label:'Theoriq Ops Reserve', address:'0x22c9f4e81a07d3b6c25ef90ba14d7736e8c01f52', network:'Base', usdc:45000 },
    { id:'w-t3', org:'theoriq', kind:'tokens', label:'Theoriq Token Custody', address:'0xa10b73ce55f2419d8ab6c0e73f81d2495ba7c318', network:'Base',
      bal:{ pursuit:0, meridian:0, aster:0 }, lock:{ pursuit:0, meridian:0, aster:0 }, immutable:true },
    { id:'w-p1', org:'pursuit', kind:'funds',  label:'Pursuit Funding Wallet', address:'0x5d71ac09e4b83f26d1c7590ae4bb3f8021d64c7a', network:'Base', usdc:0, primary:true },
    { id:'w-p2', org:'pursuit', kind:'funds',  label:'Pursuit Settlement Reserve', address:'0x9b48c7e0135da62f9c84be71a0d35f2647ce9810', network:'Base', usdc:500000 }
  ],

  escrow: { usdc:0, tokens:0 },

  requests: [
    { id:'RDM-0042', pf:'pursuit', holder:'Meridian Digital Fund', holderKey:'other', tokens:120000, navAt:1.0388,
      payTo:'0x71c3f0a8e2946b5d3a91cc0e88b47f2d5a9b3a9b',
      created:new Date(TODAY.getTime()-2*86400000), lockUntil:new Date(TODAY.getTime()+1*86400000), status:'Pending' },
    { id:'RDM-0041', pf:'pursuit', holder:'Aster Capital Partners', holderKey:'other', tokens:65000, navAt:1.0371,
      payTo:'0x1a4be88c7702d5f39ba0e41c6d8397f24a0be88c',
      created:new Date(TODAY.getTime()-3*86400000), lockUntil:new Date(TODAY.getTime()+2*86400000), status:'Pending' },
    { id:'RDM-0039', pf:'pursuit', holder:'Meridian Digital Fund', holderKey:'other', tokens:40000, navAt:1.0342,
      payTo:'0x71c3f0a8e2946b5d3a91cc0e88b47f2d5a9b3a9b',
      created:new Date(TODAY.getTime()-9*86400000), lockUntil:new Date(TODAY.getTime()-5*86400000),
      status:'Settled', paid:41368, settledAt:new Date(TODAY.getTime()-7*86400000) }
  ],

  positions: [],
  navPublishes: [],
  feed: [],
  notifications: []
};

/* ---------- platform helpers ---------- */
export const PL = k => S.platforms.find(p => p.key === k);
export const openPL = () => PL(S.openPlatform);
export const navOf = p => p.history.length ? p.history[p.history.length-1].v : p.inception;
export const changeOf = p => p.history.length > 1 ? (p.history[p.history.length-1].v / p.history[p.history.length-2].v - 1) * 100 : 0;
export const inceptionOf = p => p.history.length ? (navOf(p)/p.inception - 1) * 100 : 0;
export const poolOf = p => p.outstanding * navOf(p);
export const sameDay = (a,b) => a.toDateString() === b.toDateString();
export const publishedToday = p => p.history.length ? sameDay(p.history[p.history.length-1].d, TODAY) : false;

/* ---------- wallet helpers ---------- */
export const wal = id => S.wallets.find(w => w.id === id);
export const fundWallets = org => S.wallets.filter(w => w.org === org && w.kind === 'funds');
export const tokenWallet = () => S.wallets.find(w => w.kind === 'tokens');
export const orgCash = org => fundWallets(org).reduce((a,w) => a + (w.usdc||0), 0);
export const heldOf = k => tokenWallet().bal[k] || 0;
export const lockedOf = k => tokenWallet().lock[k] || 0;
export const positionValue = () => S.platforms.reduce((a,p) => a + (heldOf(p.key)+lockedOf(p.key)) * navOf(p), 0);
export const investedPlatforms = () => S.platforms.filter(p => heldOf(p.key)+lockedOf(p.key) > 0);
export const costOf = k => S.positions.filter(p => p.pf===k && p.type==='mint').reduce((a,p)=>a+p.usdc,0)
                  - S.positions.filter(p => p.pf===k && p.type==='redeem').reduce((a,p)=>a+(p.costOut||0),0);
export const totalCost = () => S.platforms.reduce((a,p) => a + costOf(p.key), 0);
export const myRequests = k => S.requests.filter(r => r.holderKey === 'theoriq' && (!k || r.pf === k));
export const pfRequests = k => S.requests.filter(r => r.pf === k);

/* ---------- seed derived copy ---------- */
(function seed(){
  const p = PL('pursuit'), m = PL('meridian');
  const h = p.history, n = h.length;
  const cur = h[n-1].v, d1 = h[n-2].v, d2 = h[n-3].v, d4 = h[n-5].v;
  S.navPublishes = [
    { pf:'pursuit', at:new Date(TODAY.getTime()-16*3600000), value:cur, pool:cur*p.outstanding, by:'Pursuit Ops' },
    { pf:'pursuit', at:new Date(TODAY.getTime()-40*3600000), value:d1,  pool:d1*p.outstanding,  by:'Pursuit Ops' },
    { pf:'pursuit', at:new Date(TODAY.getTime()-64*3600000), value:d2,  pool:d2*p.outstanding,  by:'Pursuit Ops' }
  ];
  S.requests[0].navAt = d1; S.requests[1].navAt = d2; S.requests[2].navAt = d4;
  S.requests[2].paid = +(S.requests[2].tokens * d4).toFixed(2);

  S.feed = [
    { ic:'coins', tone:'neutral', text:'Meridian Digital Fund minted 300,000.00 PUR on Pursuit.', at:new Date(TODAY.getTime()-6*3600000) },
    { ic:'trend', tone:'green',   text:'Pursuit published a token value of '+nav(cur)+' ('+pct((cur/d1-1)*100)+' vs. prior day).', at:new Date(TODAY.getTime()-16*3600000) },
    { ic:'trend', tone:'green',   text:'Meridian Trade Finance published a token value of '+nav(navOf(m))+'.', at:new Date(TODAY.getTime()-19*3600000) },
    { ic:'file',  tone:'gray',    text:'Facility INV-2026-9017 matured and settled into the Pursuit pool.', at:new Date(TODAY.getTime()-26*3600000) },
    { ic:'flame', tone:'amber',   text:'Redemption RDM-0039 honoured — 40,000.00 PUR burned.', at:new Date(TODAY.getTime()-7*86400000) }
  ];
  S.notifications = [
    { text:'Pursuit published a new token value: '+nav(cur)+'.', at:'16h ago', unread:true },
    { text:'Redemption RDM-0042 is awaiting settlement.', at:'2 days ago', unread:true },
    { text:'Aster Working Capital opens to capital partners on '+dstr(PL('aster').opened)+'.', at:'4 days ago', unread:false }
  ];
})();

/* ---------- toast notification helper ---------- */
export function toast(title, sub, icon, type = 'info', duration = 4200){
  const host = document.getElementById('toasts');
  const id = 'toast-' + Math.random().toString(36).slice(2, 9);
  const item = { id, title, sub, icon, type, timestamp: new Date() };
  
  if (!S.toasts) S.toasts = [];
  S.toasts.unshift(item);
  if (S.toasts.length > 50) S.toasts.pop();

  if (!host) return id;

  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.id = id;

  let icColor = '#38BDF8';
  let defaultIcon = 'info';
  if (type === 'success') { icColor = '#10B981'; defaultIcon = 'check'; }
  else if (type === 'error') { icColor = '#EF4444'; defaultIcon = 'alert'; }
  else if (type === 'warn') { icColor = '#F59E0B'; defaultIcon = 'alert'; }

  const iconName = icon || defaultIcon;

  el.innerHTML = `
    <span class="t-ic" style="color:${icColor}">
      ${ic(iconName, 'icon-sm')}
    </span>
    <div class="t-content">
      <div class="t-title">${esc(title)}</div>
      ${sub ? `<div class="t-sub">${esc(sub)}</div>` : ''}
    </div>
    <button class="t-close" data-dismiss="${id}" title="Dismiss" aria-label="Dismiss notification">
      ${ic('x', 'icon-xs')}
    </button>
  `;

  const closeBtn = el.querySelector('.t-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toast.dismiss(id);
    });
  }

  host.appendChild(el);

  if (duration > 0) {
    setTimeout(() => {
      toast.dismiss(id);
    }, duration);
  }

  return id;
}

toast.success = (title, sub, icon) => toast(title, sub, icon || 'check', 'success', 4500);
toast.error = (title, sub, icon) => toast(title, sub, icon || 'alert', 'error', 6000);
toast.warn = (title, sub, icon) => toast(title, sub, icon || 'alert', 'warn', 5000);
toast.info = (title, sub, icon) => toast(title, sub, icon || 'info', 'info', 4200);
toast.dismiss = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('toast-out');
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 240);
  }
  if (S.toasts) {
    S.toasts = S.toasts.filter(t => t.id !== id);
  }
};
toast.clear = () => {
  const host = document.getElementById('toasts');
  if (host) host.innerHTML = '';
  S.toasts = [];
};

/* ---------- NAV chart ---------- */
export let CHART_PTS = [];
export function chart(points, opts){
  opts = opts || {};
  const W = 760, H = opts.h || 250, padL = 54, padR = 16, padT = 18, padB = 30;
  const vs = points.map(p => p.v);
  const min = Math.min(...vs), max = Math.max(...vs);
  const lo = min - (max-min)*0.35 - 0.0005, hi = max + (max-min)*0.25 + 0.0005;
  const X = i => padL + (i/(points.length-1)) * (W-padL-padR);
  const Y = v => padT + (1 - (v-lo)/(hi-lo)) * (H-padT-padB);
  const line = points.map((p,i) => (i?'L':'M') + X(i).toFixed(1) + ' ' + Y(p.v).toFixed(1)).join(' ');
  const area = line + ' L ' + X(points.length-1).toFixed(1) + ' ' + (H-padB) + ' L ' + X(0).toFixed(1) + ' ' + (H-padB) + ' Z';

  let grid = '', ylab = '';
  for (let i = 0; i <= 3; i++){
    const v = lo + (hi-lo) * (i/3), y = Y(v);
    grid += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="#EFEFEB" stroke-width="1"/>`;
    ylab += `<text x="${padL-10}" y="${(y+3.5).toFixed(1)}" text-anchor="end" font-size="10" fill="#9A9A94" font-family="JetBrains Mono, monospace">$${v.toFixed(3)}</text>`;
  }
  let xlab = '', seen = '', lastX = -99;
  points.forEach((p,i) => {
    const m = p.d.toLocaleDateString('en-US',{month:'short'});
    if (m !== seen && i < points.length-2){
      seen = m;
      const x = X(i);
      if (x - lastX > 46){ lastX = x;
        xlab += `<text x="${x.toFixed(1)}" y="${H-10}" text-anchor="middle" font-size="10" fill="#9A9A94">${m}</text>`; }
    }
  });
  const last = points[points.length-1];
  CHART_PTS = points.map((p,i) => ({ x:X(i), y:Y(p.v), v:p.v, d:p.d }));
  const hit = `<rect id="chit" x="${padL}" y="${padT}" width="${W-padL-padR}" height="${H-padT-padB}" fill="transparent" style="cursor:crosshair"/>`;

  return `<div class="chart-wrap" id="chartWrap">
    <svg id="navChart" viewBox="0 0 ${W} ${H}" width="100%" height="${H}" preserveAspectRatio="xMidYMid meet" style="display:block;overflow:visible">
      <defs><linearGradient id="fillg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#141413" stop-opacity=".13"/><stop offset="1" stop-color="#141413" stop-opacity="0"/></linearGradient></defs>
      ${grid}${ylab}${xlab}
      <path d="${area}" fill="url(#fillg)"/>
      <path d="${line}" fill="none" stroke="#141413" stroke-width="1.75" stroke-linejoin="round" stroke-linecap="round"/>
      <line id="cx" x1="0" y1="${padT}" x2="0" y2="${H-padB}" stroke="#B5B5AF" stroke-width="1" stroke-dasharray="3 3" opacity="0"/>
      <circle id="chov" r="4.5" fill="#141413" stroke="#fff" stroke-width="2" opacity="0"/>
      <circle cx="${X(points.length-1).toFixed(1)}" cy="${Y(last.v).toFixed(1)}" r="4" fill="#141413" stroke="#fff" stroke-width="2"/>
      ${hit}
    </svg>
    <div class="chart-tip" id="chartTip"></div>
  </div>`;
}

export function bindChart(){
  const svg = document.getElementById('navChart'); if (!svg) return;
  const pts = CHART_PTS, hit = document.getElementById('chit');
  const tip = document.getElementById('chartTip'), wrap = document.getElementById('chartWrap');
  const cx = document.getElementById('cx'), hov = document.getElementById('chov');
  if (!hit || !tip || !wrap || !cx || !hov) return;
  hit.addEventListener('mousemove', ev => {
    const r = svg.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
    const box = svg.viewBox.baseVal, sc = r.width / box.width;
    const offY = (r.height - box.height*sc)/2;
    const vx = (ev.clientX - r.left) / sc;
    let best = 0, bd = 1e9;
    for (let i = 0; i < pts.length; i++){ const d = Math.abs(pts[i].x - vx); if (d < bd){ bd = d; best = i; } }
    const p = pts[best];
    cx.setAttribute('x1',p.x); cx.setAttribute('x2',p.x); cx.setAttribute('opacity','1');
    hov.setAttribute('cx',p.x); hov.setAttribute('cy',p.y); hov.setAttribute('opacity','1');
    tip.innerHTML = '<b class="mono">$'+p.v.toFixed(4)+'</b> &nbsp;<span style="color:#9CA3AF">'+dshort(p.d)+'</span>';
    tip.style.left = (r.left - wr.left + p.x*sc) + 'px';
    tip.style.top  = (r.top - wr.top + offY + p.y*sc) + 'px';
    tip.classList.add('on');
  });
  hit.addEventListener('mouseleave', () => {
    tip.classList.remove('on'); cx.setAttribute('opacity','0'); hov.setAttribute('opacity','0');
  });
}

export const SELS = {};
export function selectBox(id, options, value, onPick){
  SELS[id] = { options, value, onPick };
  const cur = options.find(o => o.v === value) || options[0] || {label:'—'};
  return `<div class="sel" data-sel="${id}">
    <button class="sel-btn" type="button" data-act="sel-open" data-id="${id}">
      <span class="stack" style="min-width:0">
        <span class="sel-lab">${cur.label}</span>
        ${cur.sub ? '<span class="sel-sub mono">'+cur.sub+'</span>' : ''}
      </span>
      ${ic('chevd','icon-sm')}
    </button>
    <div class="sel-menu hide" data-menu="${id}">
      ${options.map(o => `<button class="sel-opt ${o.v===value?'sel-on':''}" type="button" data-act="sel-pick" data-id="${id}" data-v="${o.v}">
        <span class="stack" style="min-width:0">
          <span class="sel-lab">${o.label}</span>
          ${o.sub ? '<span class="sel-sub mono">'+o.sub+'</span>' : ''}
        </span>
        <span class="sel-tick">${ic('check','icon-sm')}</span>
      </button>`).join('')}
    </div>
  </div>`;
}

/* ---------- 1. partner gate ---------- */
export function gateScreen(){
  const card = k => {
    const o = ORGS[k];
    return `<button class="gate-card" data-act="pick" data-org="${k}">
      <div class="between" style="align-items:center;min-height:56px">
        ${orgWord(k, 42)}
        <span class="gate-role">${o.tag}</span>
      </div>
      <div style="font-size:12.5px;color:var(--faint);margin-top:18px">${o.legal}</div>
      <p style="font-size:13.5px;color:var(--muted);margin-top:12px;line-height:1.55">${o.blurb}</p>
      <div class="row gap6" style="margin-top:20px;font-size:13.5px;font-weight:500">
        Sign in ${ic('right','icon-sm')}
      </div>
    </button>`;
  };
  return `<div class="center-screen fadein">
    <div class="brandline" style="margin-bottom:8px">${kLogo(36)}<span class="name" style="font-size:22px">kbridge</span></div>
    <h1 style="font-size:26px;font-weight:600;letter-spacing:-.02em;margin-top:16px">Partner sign in</h1>
    <p class="muted" style="font-size:14px;margin-top:6px;text-align:center;max-width:520px">
      KBridge connects capital partners with the platforms that originate receivables.</p>
    <div class="gate-grid">${card('theoriq')}${card('pursuit')}</div>
  </div>`;
}

/* ---------- 2. branded login ---------- */
export function loginScreen(k){
  const o = ORGS[k];
  return `<div class="center-screen fadein">
    <div class="login-card">
      <div class="cobrand">
        ${kLogo(34)}<span style="font-size:19px;font-weight:500;letter-spacing:-.02em">kbridge</span>
        <span class="x" style="height:30px"></span>
        ${orgWord(k, 36)}
      </div>
      <div class="card" style="border-radius:var(--r-xl);overflow:hidden">
        <div style="padding:30px 28px 26px">
          <div style="text-align:center;margin-bottom:22px">
            <h2 style="font-size:19px;font-weight:600;letter-spacing:-.02em">Sign in to ${o.name}</h2>
            <p class="muted" style="font-size:13px;margin-top:6px">${o.tag}</p>
          </div>
          <div id="loginForm" class="stack gap16">
            <label class="field"><span>Work email</span>
              <input class="input" type="email" id="lgEmail" value="${o.email}" autocomplete="email"></label>
            <label class="field"><span>Password</span>
              <input class="input" type="password" id="lgPass" value="kbridge-access" autocomplete="current-password"></label>
            <div class="between" style="font-size:13px">
              <label class="row gap8" style="cursor:pointer"><input type="checkbox" checked style="accent-color:#141413;width:15px;height:15px"> <span>Remember this device</span></label>
              <a href="#" style="font-weight:500;text-decoration:underline;text-underline-offset:3px">Forgot password?</a>
            </div>
            <button class="btn btn-primary btn-block" style="padding:11px" type="button" data-act="login" id="lgBtn">
              ${ic('lock','icon-sm')} Sign in</button>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:18px">
        <button class="btn btn-quiet btn-sm" data-act="back-gate">Use a different organisation</button>
      </div>
    </div>
  </div>`;
}

/* ---------- 3. shell ---------- */
export function navItems(){
  return S.org === 'theoriq'
    ? [['dash','Dashboard'],['platforms','Platforms'],['wallets','Wallets']]
    : [['dash','Dashboard'],['redemptions','Redemptions'],['wallets','Wallets']];
}
export function header(){
  const tabs = () => navItems().map(([k,l]) =>
    `<button class="${(S.view===k || (k==='platforms' && S.view==='platform'))?'on':''}" data-act="view" data-view="${k}">${l}</button>`).join('');
  return `<header class="app"><div class="wrap">
    <div class="hbar">
      <div class="row">
        <div class="brandline" style="cursor:pointer" data-act="view" data-view="dash">
          ${kLogo(30)}<span class="name" style="border-right:1px solid var(--line);padding-right:16px">kbridge</span>
        </div>
        <div class="row gap10" style="margin-left:16px">
          <span class="org-mark-only">${orgMark(S.org, 28)}</span>
          <span class="org-name">${orgWord(S.org, 24)}</span>
        </div>
        <nav class="nav">${tabs()}</nav>
      </div>
      <div class="row gap12">
        <button class="bell" data-act="notif">${ic('bell')}<span class="pip"></span></button>
        <button class="wallet-chip" data-act="acct">
          <span class="mono chip-bal" style="font-size:13px;font-weight:500">${nf(orgCash(S.org),0)}<span class="faint" style="font-size:11px;margin-left:4px">USDC</span></span>
          <span class="divider-v chip-div"></span>
          <span class="mono chip-addr" style="font-size:12px;color:var(--ink-2)">${short(fundWallets(S.org)[0] ? fundWallets(S.org)[0].address : '0x0000000000')}</span>
        </button>
        <button class="btn btn-quiet btn-sm" data-act="logout" title="Sign out">${ic('out','icon-sm')}</button>
      </div>
    </div>
    <div class="mobile-nav">${tabs()}</div>
  </div></header>`;
}

export function pageHead(title, sub, action, back){
  return `${back? '<button class="btn btn-quiet btn-sm" style="margin-bottom:10px;padding-left:0" data-act="view" data-view="'+back[0]+'">'+ic('back','icon-sm')+' '+back[1]+'</button>' : ''}
  <div class="page-head"><div><h1>${title}</h1><p>${sub}</p></div>${action||''}</div>`;
}
export function stat(label, icon, value, sub, cls){
  return `<div class="card card-pad stat">
    <div class="label">${ic(icon,'icon-sm')} ${label}</div>
    <div class="value mono ${cls||''}">${value}</div>
    ${sub? '<div class="sub">'+sub+'</div>' : ''}
  </div>`;
}
export function banner(kind, icon, text, action){
  return `<div class="callout c-${kind}" style="margin-bottom:22px;align-items:center;justify-content:space-between;gap:16px">
    <div class="row gap8" style="align-items:flex-start">${ic(icon,'icon-sm')}<div>${text}</div></div>
    ${action||''}</div>`;
}
export function statusBadge(s){
  const map = { 'Open':'b-green', 'Opening soon':'b-amber', 'Closed':'b-gray',
                'Active':'b-green', 'Funding':'b-amber', 'Matured':'b-gray',
                'Pending':'b-amber', 'Settled':'b-green' };
  return `<span class="badge ${map[s]||'b-gray'}"><span class="dot"></span>${s}</span>`;
}

/* ---------- shared cards ---------- */
export function balancesCard(){
  const tokenLines = S.platforms.filter(p => heldOf(p.key)+lockedOf(p.key) > 0)
    .map(p => nf(heldOf(p.key)+lockedOf(p.key),2)+' '+p.symbol).join('<br>') || '0.00';
  const rows = [
    ['Theoriq · wallet of funds', fundWallets('theoriq').length+' registered', nf(orgCash('theoriq'),2)+' USDC'],
    ['Theoriq · wallet of tokens', 'pre-configured, not editable', tokenLines],
    ['KBridge · settlement wallet', 'transit only', nf(S.escrow.usdc,2)+' USDC | '+nf(S.escrow.tokens,2)+' tokens'],
    ['Pursuit · wallet of funds', fundWallets('pursuit').length+' registered', nf(orgCash('pursuit'),2)+' USDC']
  ];
  return `<div class="card">
    <div class="card-head"><h3>${ic('db','icon-sm')} Wallet balances</h3></div>
    <div>${rows.map(([who,sub,val]) => `<div class="wrow">
      <div><div style="font-size:13px;font-weight:500">${who}</div><div class="addr">${sub}</div></div>
      <div class="mono t-right" style="font-size:12.5px;font-weight:500;white-space:nowrap">${val}</div></div>`).join('')}</div>
  </div>`;
}
export function quickActions(items){
  return `<div class="card">
    <div class="card-head"><h3>${ic('zap','icon-sm')} Quick actions</h3></div>
    <div>${items.map(([act, label, sub, dis, data]) => `
      <button class="wrow" style="width:100%;text-align:left" data-act="${act}" ${data||''} ${dis?'disabled':''}>
        <div><div style="font-size:13.5px;font-weight:500;color:${dis?'var(--faint)':'var(--ink)'}">${label}</div>
          <div class="addr">${sub}</div></div>
        <span style="color:var(--faint)">${ic('right','icon-sm')}</span></button>`).join('')}</div>
  </div>`;
}
export function activityCard(n){
  const feed = S.feed.slice(0, n||5).map(f => {
    const tone = {neutral:['#F3F3F0','#141413'],green:['#F0FDF4','#15803D'],amber:['#FFFBEB','#B45309'],gray:['#F3F3F0','#6B6B66']}[f.tone];
    return `<div class="feed-item">
      <span class="feed-ic" style="background:${tone[0]};color:${tone[1]}">${ic(f.ic,'icon-sm')}</span>
      <div><p>${esc(f.text)}</p><div class="when mono">${ago(f.at)}</div></div></div>`;
  }).join('');
  return `<div class="card"><div class="card-head"><h3>${ic('activity','icon-sm')} Recent activity</h3></div><div>${feed}</div></div>`;
}
export function facilitiesCard(p){
  if (!p.facilities.length) return '';
  const total = p.facilities.reduce((a,f)=>a+f.amount,0);
  return `<div class="card">
    <div class="card-head"><h3>${ic('file','icon-sm')} Invoices backing this platform</h3>
      <span class="mono" style="font-size:12.5px;font-weight:500">${nf(total,0)} USDC</span></div>
    <div class="table-scroll"><table>
      <thead><tr><th>Invoice</th><th>Borrower</th><th>Sector</th><th class="t-right">Face value</th>
        <th class="t-right">Yield</th><th class="t-right">Term</th><th>Status</th></tr></thead>
      <tbody>${p.facilities.map(f => `<tr class="hover-row">
        <td class="mono" style="font-weight:500">${f.id}</td>
        <td>${esc(f.name)}</td>
        <td class="muted">${f.sector}</td>
        <td class="mono t-right">${nf(f.amount,0)}</td>
        <td class="mono t-right">${f.yield.toFixed(1)}%</td>
        <td class="mono t-right">${f.term}d</td>
        <td>${statusBadge(f.status)}</td></tr>`).join('')}</tbody></table></div>
  </div>`;
}
export function requestRows(list, opts){
  opts = opts || {};
  if (!list.length) return `<tr><td colspan="${opts.cols||6}" style="padding:36px;text-align:center" class="muted">${opts.empty||'Nothing here yet.'}</td></tr>`;
  return list.map(r => {
    const p = PL(r.pf);
    const val = r.status === 'Settled' ? (r.paid || r.tokens*r.navAt) : r.tokens*navOf(p);
    return `<tr class="hover-row">
      <td class="mono" style="font-weight:500">${r.id}</td>
      ${opts.showHolder ? '<td>'+esc(r.holder)+'<div class="faint mono" style="font-size:11px">'+short(r.payTo)+'</div></td>' : '<td>'+p.name+'</td>'}
      <td class="mono t-right">${nf(r.tokens,2)} ${p.symbol}</td>
      <td class="mono t-right" style="font-weight:500">${nf(val,2)}</td>
      <td class="mono">${dshort(r.created)}<div class="faint" style="font-size:11px">${ago(r.created)}</div></td>
      <td>${statusBadge(r.status)}</td>
      ${opts.honour
        ? '<td class="t-right">' + (r.status==='Pending'
            ? '<button class="btn btn-primary btn-sm" data-act="honor" data-id="'+r.id+'">Settle '+ic('right','icon-sm')+'</button>'
            : '<span class="faint" style="font-size:11.5px">paid '+dshort(r.settledAt||r.created)+'</span>') + '</td>'
        : '<td class="faint t-right" style="font-size:11.5px">'+(r.status==='Pending' ? 'lock releases '+inDays(r.lockUntil) : 'paid '+dshort(r.settledAt||r.created))+'</td>'}
    </tr>`;
  }).join('');
}

/* ---------- 4. dashboard · capital partner ---------- */
export function viewDashCapital(){
  const cash = orgCash('theoriq');
  const value = positionValue(), cost = totalCost(), gain = value - cost;
  const invested = investedPlatforms();
  const pend = myRequests().filter(r => r.status === 'Pending');
  const tokensTotal = S.platforms.reduce((a,p) => a + heldOf(p.key) + lockedOf(p.key), 0);

  const alert = pend.length
    ? banner('amber','hourglass',
        `<b>${pend.length} redemption request${pend.length>1?'s':''} waiting to be settled.</b> ${nf(pend.reduce((a,r)=>a+r.tokens,0),2)} tokens are locked until then.`, '')
    : (invested.length === 0
        ? banner('neutral','info','<b>No holdings yet.</b> Choose a platform and mint your first tokens.',
            `<button class="btn btn-primary btn-sm" data-act="view" data-view="platforms">Browse platforms</button>`)
        : '');

  const holdings = invested.length ? invested.map(p => {
    const t = heldOf(p.key) + lockedOf(p.key), v = t * navOf(p), c = costOf(p.key), g = v - c;
    return `<button class="wrow" style="width:100%;text-align:left" data-act="platform" data-key="${p.key}">
      <div class="row gap12">
        ${platformMark(p, 40)}
        <div><div style="font-size:14px;font-weight:600">${p.name}</div>
          <div class="addr">${nf(t,2)} ${p.symbol} · ${nav(navOf(p))} per token</div></div>
      </div>
      <div class="row gap16">
        <div class="t-right"><div class="mono" style="font-size:14px;font-weight:500">${nf(v,2)} USDC</div>
          <div class="mono ${g>=0?'pos':'neg'}" style="font-size:11.5px">${(g>=0?'+':'')+nf(g,2)} ${c?'('+pct(g/c*100)+')':''}</div></div>
        <span style="color:var(--faint)">${ic('right','icon-sm')}</span>
      </div></button>`;
  }).join('') : `<div style="padding:40px;text-align:center" class="muted">
      You don’t hold tokens on any platform yet.<br>
      <button class="btn btn-ghost btn-sm" style="margin-top:14px" data-act="view" data-view="platforms">See what’s available ${ic('right','icon-sm')}</button>
    </div>`;

  return `${pageHead('Dashboard', 'Theoriq Capital Management', '')}
  ${alert}

  <div class="stats">
    ${stat('Cash available','wallet', nf(cash,0)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', 'Across '+fundWallets('theoriq').length+' fund wallets')}
    ${stat('Platforms','layers', String(invested.length), invested.length? invested.map(p=>p.name).join(' · ') : 'None yet')}
    ${stat('Portfolio value','layers', nf(value,2)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', cost? 'Cost '+nf(cost,2)+' USDC' : '—')}
    ${stat('Gain','trend', (gain>=0?'+':'')+nf(gain,2), cost? pct(gain/cost*100)+' on cost' : 'No holdings yet', gain>0?'pos':'')}
  </div>

  <div class="cols cols-2-1">
    <div class="stack" style="gap:20px">
      <div class="card">
        <div class="card-head"><h3>${ic('layers','icon-sm')} Your holdings</h3>
          <button class="btn btn-quiet btn-sm" data-act="view" data-view="platforms">All platforms ${ic('right','icon-sm')}</button></div>
        <div>${holdings}</div>
      </div>
      <div class="card">
        <div class="card-head"><h3>${ic('hourglass','icon-sm')} Redemption requests</h3></div>
        <div class="table-scroll"><table>
          <thead><tr><th>Request</th><th>Platform</th><th class="t-right">Tokens</th><th class="t-right">Value (USDC)</th>
            <th>Submitted</th><th>Status</th><th></th></tr></thead>
          <tbody>${requestRows(myRequests().slice(0,5), {cols:7, empty:'No redemption requests yet.'})}</tbody></table></div>
      </div>
      ${activityCard(5)}
    </div>
    <div class="stack" style="gap:20px">
      ${balancesCard()}
      ${quickActions([
        ['view','Browse platforms','See every platform on KBridge',false,'data-view="platforms"'],
        ['mint','Mint tokens','Turn USDC into platform tokens',false],
        ['redeem','Request redemption','Burn tokens back into USDC', tokensTotal<=0],
        ['wallet-add','Add a wallet','Register a send / receive address',false]
      ])}
    </div>
  </div>`;
}

/* ---------- 5. platforms list ---------- */
export function platformMark(p, size){
  const s = size || 44;
  const rad = Math.round(s / 3.4);
  const box = `width:${s}px;height:${s}px;border-radius:${rad}px;flex:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;background:#fff;border:1px solid var(--line-soft);box-shadow:0 1px 3px rgba(0,0,0,0.06);`;
  if (LOGO[p.key] && LOGO[p.key].icon) {
    return `<span class="brand-mark" style="${box}">
      <img src="${LOGO[p.key].icon}" alt="${p.name}" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover;display:block"></span>`;
  }
  return `<span class="brand-mark" style="${box}">
    <svg viewBox="0 0 64 64" width="100%" height="100%" style="display:block">
      <rect width="64" height="64" rx="14" fill="#1E293B"/>
      <circle cx="32" cy="32" r="16" fill="none" stroke="#38BDF8" stroke-width="3.5"/>
      <polygon points="32,20 42,38 22,38" fill="#10B981"/>
    </svg>
  </span>`;
}
export function viewPlatforms(){
  const cards = S.platforms.map(p => {
    const open = p.status === 'Open';
    const t = heldOf(p.key) + lockedOf(p.key);
    return `<div class="card card-pad" style="display:flex;flex-direction:column;gap:16px">
      <div class="between" style="align-items:flex-start">
        <div class="row gap12">${platformMark(p, 46)}
          <div><div style="font-size:16px;font-weight:600;letter-spacing:-.01em">${p.name}</div>
            <div class="faint" style="font-size:12px">${p.legal} · ${p.sector}</div></div></div>
        ${statusBadge(p.status)}
      </div>
      <p class="muted" style="font-size:13px;line-height:1.55">${p.desc}</p>
      <div class="between" style="border-top:1px solid var(--line-soft);padding-top:14px;flex-wrap:wrap;gap:12px">
        <div><div class="micro">Value per token</div>
          <div class="mono" style="font-size:15px;margin-top:3px">${open? nav(navOf(p)) : '—'}</div></div>
        <div><div class="micro">Tokens minted</div>
          <div class="mono" style="font-size:15px;margin-top:3px">${open? nf(p.outstanding,0) : '—'}</div></div>
        <div><div class="micro">Pool value</div>
          <div class="mono" style="font-size:15px;margin-top:3px">${open? nf(poolOf(p),0) : '—'}</div></div>
        <div><div class="micro">6 month change</div>
          <div class="mono ${open?'pos':''}" style="font-size:15px;margin-top:3px">${open? pct(inceptionOf(p)) : '—'}</div></div>
      </div>
      <div class="between" style="gap:12px">
        <div class="faint" style="font-size:12px">${t>0 ? 'You hold <span class="mono">'+nf(t,2)+' '+p.symbol+'</span>' : (open? 'No position' : 'Opens '+dstr(p.opened))}</div>
        <div class="row gap8">
          ${open? `<button class="btn btn-ghost btn-sm" data-act="platform" data-key="${p.key}">View</button>
                   <button class="btn btn-primary btn-sm" data-act="mint" data-key="${p.key}">Mint tokens</button>`
                : `<button class="btn btn-ghost btn-sm" disabled>Not open yet</button>`}
        </div>
      </div>
    </div>`;
  }).join('');

  return `${pageHead('Platforms', 'Every receivables platform on KBridge. Mint tokens on the ones that are open.', '')}
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(400px,100%),1fr))">${cards}</div>`;
}

/* ---------- 6. platform detail ---------- */
export function viewPlatform(){
  const p = openPL();
  const held = heldOf(p.key), locked = lockedOf(p.key), t = held + locked;
  const value = t * navOf(p), cost = costOf(p.key), gain = value - cost;
  const mine = myRequests(p.key);
  const moves = S.positions.filter(x => x.pf === p.key);

  const ledgerRows = moves.length ? moves.map(m => `
    <tr class="hover-row">
      <td>${m.type==='mint' ? '<span class="badge b-gray"><span class="dot"></span>Mint</span>' : '<span class="badge b-amber"><span class="dot"></span>Redemption</span>'}</td>
      <td class="mono">${dstr(m.at)}<div class="faint" style="font-size:11px">${ago(m.at)}</div></td>
      <td class="mono t-right">${nf(m.tokens,2)}</td>
      <td class="mono t-right">${nav(m.nav)}</td>
      <td class="mono t-right">${nf(m.usdc,2)}</td>
      <td class="mono faint" style="font-size:11.5px">${m.tx.slice(0,10)}…${m.tx.slice(-6)}</td>
    </tr>`).join('')
    : '<tr><td colspan="6" style="padding:36px;text-align:center" class="muted">No token movements yet.</td></tr>';

  return `${pageHead(p.name, p.legal + ' · ' + p.sector + ' · ' + p.terms,
    `<div class="row gap8">
      <button class="btn btn-ghost" data-act="redeem" data-key="${p.key}" ${held<=0?'disabled':''}>${ic('flame','icon-sm')} Request redemption</button>
      <button class="btn btn-primary" data-act="mint" data-key="${p.key}">${ic('coins','icon-sm')} Mint tokens</button></div>`,
    ['platforms','Platforms'])}

  <div class="stats">
    ${stat('Value per token','trend', nav(navOf(p)),
      '<span class="'+(changeOf(p)>=0?'pos':'neg')+'">'+pct(changeOf(p))+'</span> vs. previous day · published '+ago(S.navPublishes.filter(x=>x.pf===p.key)[0] ? S.navPublishes.filter(x=>x.pf===p.key)[0].at : TODAY))}
    ${stat('Tokens minted','db', nf(p.outstanding,0)+' <span style="font-size:15px;color:var(--muted)" class="mono">'+p.symbol+'</span>', 'Across all holders')}
    ${stat('Aggregate value','layers', nf(poolOf(p),0)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', 'Tokens minted × '+nav(navOf(p)))}
    ${stat('Your position','wallet', nf(t,2)+' <span style="font-size:15px;color:var(--muted)" class="mono">'+p.symbol+'</span>',
      t? nf(value,2)+' USDC'+(locked? ' · '+nf(locked,2)+' locked':'') : 'No tokens yet')}
  </div>

  <div class="cols cols-2-1">
    <div class="stack" style="gap:20px">
      <div class="card">
        <div class="card-head"><h3>${ic('activity','icon-sm')} Token value · last 6 months</h3>
          <span class="badge b-gray">${pct(inceptionOf(p))} since opening</span></div>
        <div style="padding:18px 18px 4px">${chart(p.history, {h:240})}</div>
        <div class="between" style="padding:14px 22px 18px;border-top:1px solid var(--line-soft);flex-wrap:wrap;gap:14px">
          <div><div class="micro">Opening value</div><div class="mono" style="font-size:15px;margin-top:3px">${nav(p.inception)}</div></div>
          <div><div class="micro">Low</div><div class="mono" style="font-size:15px;margin-top:3px">${nav(Math.min(...p.history.map(x=>x.v)))}</div></div>
          <div><div class="micro">High</div><div class="mono" style="font-size:15px;margin-top:3px">${nav(Math.max(...p.history.map(x=>x.v)))}</div></div>
          <div><div class="micro">Opened</div><div class="mono" style="font-size:15px;margin-top:3px">${dstr(p.opened)}</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><h3>${ic('activity','icon-sm')} Your token movements</h3></div>
        <div class="table-scroll"><table>
          <thead><tr><th>Event</th><th>Date</th><th class="t-right">Tokens</th><th class="t-right">Value per token</th>
            <th class="t-right">USDC</th><th>Transaction</th></tr></thead>
          <tbody>${ledgerRows}</tbody></table></div>
      </div>

      ${facilitiesCard(p)}
    </div>

    <div class="stack" style="gap:20px">
      <div class="card">
        <div class="card-head"><h3>${ic('wallet','icon-sm')} Your position</h3></div>
        <div class="card-pad stack" style="gap:2px">
          <div class="kv"><span class="k">Tokens held</span><span class="v mono">${nf(held,2)} ${p.symbol}</span></div>
          <div class="kv"><span class="k">Locked in redemption</span><span class="v mono">${nf(locked,2)} ${p.symbol}</span></div>
          <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(navOf(p))}</span></div>
          <div class="kv"><span class="k">Cost</span><span class="v mono">${nf(cost,2)} USDC</span></div>
          <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">Current value</span>
            <span class="v mono" style="font-size:15px">${nf(value,2)} USDC</span></div>
          <div class="kv"><span class="k">Gain</span><span class="v mono ${gain>=0?'pos':'neg'}">${(gain>=0?'+':'')+nf(gain,2)} USDC</span></div>
          <div class="callout c-neutral" style="margin-top:12px">${ic('lock','icon-sm')}<div>
            Tokens are delivered to <b>${tokenWallet().label}</b> — the only address that can hold them. It is pre-configured and cannot be edited.</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><h3>${ic('hourglass','icon-sm')} Your requests here</h3></div>
        <div class="table-scroll"><table>
          <thead><tr><th>Request</th><th>Platform</th><th class="t-right">Tokens</th><th class="t-right">Value</th><th>Submitted</th><th>Status</th><th></th></tr></thead>
          <tbody>${requestRows(mine, {cols:7, empty:'None yet.'})}</tbody></table></div>
      </div>
    </div>
  </div>`;
}

/* ---------- 7. wallets ---------- */
export function viewWallets(){
  const isCap = S.org === 'theoriq';
  const funds = fundWallets(S.org);
  const tw = tokenWallet();

  const fundRows = funds.map(w => `
    <div class="wrow">
      <div class="row gap12" style="min-width:0;flex:1 1 auto">
        <span class="wic">${ic('wallet','icon-sm')}</span>
        <div style="min-width:0;overflow:hidden">
          <div class="row gap8" style="flex-wrap:nowrap"><span style="font-size:13.5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(w.label)}</span>
            ${w.primary? '<span class="badge b-ink" style="font-size:10px;flex:none">Default</span>':''}</div>
          <div class="addr mono" title="${w.address}">${short(w.address)}</div>
        </div>
      </div>
      <div class="row gap12" style="flex:none;align-items:center;margin-left:auto">
        <div class="t-right" style="flex:none"><div class="mono" style="font-size:13.5px;font-weight:500">${nf(w.usdc,2)}</div>
          <div class="faint" style="font-size:11px">USDC · ${w.network}</div></div>
        <div class="row gap4" style="flex:none">
          ${w.primary ? '' : '<button class="btn btn-ghost btn-sm" data-act="wallet-primary" data-id="'+w.id+'">Make default</button>'}
          <button class="btn btn-quiet btn-sm" data-act="wallet-edit" data-id="${w.id}" title="Edit">${ic('pencil','icon-sm')}</button>
          <button class="btn btn-quiet btn-sm" data-act="wallet-del" data-id="${w.id}" title="Remove">${ic('trash','icon-sm')}</button>
        </div>
      </div>
    </div>`).join('') || '<div style="padding:36px;text-align:center" class="muted">No wallets registered yet.</div>';

  const tokenCard = isCap ? `
    <div class="card">
      <div class="card-head"><h3>${ic('lock','icon-sm')} Token wallet</h3>
        <span class="badge b-gray">${ic('lock','icon-sm')} Not editable</span></div>
      <div class="wrow locked">
        <div class="row gap12" style="min-width:0;flex:1 1 auto">
          <span class="wic">${ic('lock','icon-sm')}</span>
          <div style="min-width:0;overflow:hidden">
            <div style="font-size:13.5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(tw.label)}</div>
            <div class="addr mono" title="${tw.address}">${short(tw.address)}</div>
          </div>
        </div>
      </div>
      <div>${S.platforms.filter(p => p.status==='Open').map(p => `
        <div class="wrow" style="padding-top:11px;padding-bottom:11px">
          <div class="row gap12" style="min-width:0;flex:1">${platformMark(p, 26)}<span style="font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</span></div>
          <div class="mono t-right" style="font-size:13px;font-weight:500;flex:none">${nf(heldOf(p.key)+lockedOf(p.key),2)} ${p.symbol}</div>
        </div>`).join('')}</div>
      <div style="padding:14px 20px;border-top:1px solid var(--line-soft)">
        <div class="callout c-neutral">${ic('shield','icon-sm')}<div>
          Every token you mint is delivered to this address and no other. It is managed by Theoriq outside KBridge, so it is shown here read-only.</div></div>
      </div>
    </div>` : `
    <div class="card">
      <div class="card-head"><h3>${ic('bank','icon-sm')} How funds move</h3></div>
      <div class="card-pad stack" style="gap:2px">
        <div class="kv"><span class="k">Receives capital from mints</span>
          <span class="v mono">${short((funds.find(w=>w.primary)||funds[0]||{address:'—'}).address)}</span></div>
        <div class="kv"><span class="k">Pays out redemptions</span>
          <span class="v">Chosen when you settle each request</span></div>
        <div class="kv"><span class="k">Network</span><span class="v">Base · USDC</span></div>
        <div class="callout c-neutral" style="margin-top:12px">${ic('info','icon-sm')}<div>
          Add every wallet you want to receive capital in or pay redemptions from. The default wallet receives mint proceeds.</div></div>
      </div>
    </div>`;

  return `${pageHead('Wallets', isCap
      ? 'The wallets you send funds from and receive funds into.'
      : 'The wallets that receive capital and settle redemptions.',
    `<button class="btn btn-primary" data-act="wallet-add">${ic('plus','icon-sm')} Add wallet</button>`)}

  <div class="cols cols-1-1">
    <div class="card">
      <div class="card-head"><h3>${ic('wallet','icon-sm')} Fund wallets</h3>
        <span class="mono" style="font-size:12.5px;font-weight:500">${nf(orgCash(S.org),2)} USDC</span></div>
      <div>${fundRows}</div>
    </div>
    ${tokenCard}
  </div>`;
}

/* ---------- 8. dashboard · receivables partner ---------- */
export function viewDashSupply(){
  const p = PL('pursuit');
  const pend = pfRequests('pursuit').filter(r => r.status === 'Pending');
  const owed = pend.reduce((a,r) => a + r.tokens*navOf(p), 0);
  const cash = orgCash('pursuit');
  const funds = fundWallets('pursuit');
  const short_ = cash < owed;

  const alert = !publishedToday(p)
    ? banner('amber','alert',
        `<b>Today’s token value has not been published.</b> Holders still see ${nav(navOf(p))} from ${ago(S.navPublishes[0].at)}.`,
        `<button class="btn btn-primary btn-sm" data-act="publish">${ic('upload','icon-sm')} Publish now</button>`)
    : banner('green','check', `<b>Today’s token value is published</b> at ${nav(navOf(p))}. Every holder is marked at this value.`, '');

  const pubRows = S.navPublishes.slice(0,5).map((x,i) => {
    const prev = S.navPublishes[i+1];
    const ch = prev ? (x.value/prev.value - 1)*100 : 0;
    return `<tr class="hover-row">
      <td class="mono">${dstr(x.at)}<div class="faint" style="font-size:11px">${ago(x.at)}</div></td>
      <td class="mono t-right" style="font-weight:500">${nav(x.value)}</td>
      <td class="mono t-right">${nf(x.pool,0)}</td>
      <td class="mono t-right ${ch>=0?'pos':'neg'}">${prev?pct(ch):'—'}</td></tr>`;
  }).join('');

  return `${pageHead('Dashboard', p.legal,
    `<button class="btn btn-primary" data-act="publish">${ic('upload','icon-sm')} Publish token value</button>`)}
  ${alert}

  <div class="stats">
    ${stat('Capital received','bank', nf(cash,0)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', 'Across '+funds.length+' registered wallets')}
    ${stat('Tokens minted','db', nf(p.outstanding,0)+' <span style="font-size:15px;color:var(--muted)" class="mono">'+p.symbol+'</span>', 'Held by capital partners')}
    ${stat('Pool value','layers', nf(poolOf(p),0)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', 'Tokens minted × '+nav(navOf(p)))}
    ${stat('Redemptions due','hourglass', String(pend.length), short_
      ? '<span style="color:var(--bad)">'+nf(owed,2)+' USDC owed · short by '+nf(owed-cash,2)+'</span>'
      : nf(owed,2)+' USDC payable · funded')}
  </div>

  <div class="cols cols-2-1">
    <div class="stack" style="gap:20px">
      <div class="card">
        <div class="card-head"><h3>${ic('activity','icon-sm')} Published token value</h3>
          <span class="badge ${publishedToday(p)?'b-green':'b-amber'}"><span class="dot"></span>${publishedToday(p)?'Published today':'Not published today'}</span></div>
        <div style="padding:18px 18px 4px">${chart(p.history, {h:230})}</div>
        <div class="between" style="padding:14px 22px 18px;border-top:1px solid var(--line-soft);flex-wrap:wrap;gap:14px">
          <div><div class="micro">Latest</div><div class="mono" style="font-size:15px;margin-top:3px">${nav(navOf(p))}</div></div>
          <div><div class="micro">Previous day</div><div class="mono" style="font-size:15px;margin-top:3px">${nav(p.history[p.history.length-2].v)}</div></div>
          <div><div class="micro">Change</div><div class="mono ${changeOf(p)>=0?'pos':'neg'}" style="font-size:15px;margin-top:3px">${pct(changeOf(p))}</div></div>
          <div><div class="micro">Since opening</div><div class="mono pos" style="font-size:15px;margin-top:3px">${pct(inceptionOf(p))}</div></div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><h3>${ic('hourglass','icon-sm')} Redemption queue</h3>
          <button class="btn btn-quiet btn-sm" data-act="view" data-view="redemptions">All ${ic('right','icon-sm')}</button></div>
        <div class="table-scroll"><table>
          <thead><tr><th>Request</th><th>Holder</th><th class="t-right">Tokens</th><th class="t-right">Payable</th>
            <th>Submitted</th><th>Status</th><th></th></tr></thead>
          <tbody>${requestRows(pend.slice(0,4), {cols:7, showHolder:true, honour:true, empty:'Queue is clear.'})}</tbody></table></div>
      </div>

      ${facilitiesCard(p)}
      ${activityCard(5)}
    </div>

    <div class="stack" style="gap:20px">
      ${balancesCard()}
      ${quickActions([
        ['publish','Publish token value','Mark the pool for today',false],
        ['view','Settle a redemption','Pay a holder and burn their tokens', pend.length===0,'data-view="redemptions"'],
        ['wallet-add','Register a wallet','Receive capital and pay redemptions',false]
      ])}
      <div class="card">
        <div class="card-head"><h3>${ic('clock','icon-sm')} Recent publications</h3></div>
        <div class="table-scroll"><table>
          <thead><tr><th>Date</th><th class="t-right">Per token</th><th class="t-right">Pool</th><th class="t-right">Δ</th></tr></thead>
          <tbody>${pubRows}</tbody></table></div>
      </div>
    </div>
  </div>`;
}

/* ---------- 9. redemptions · receivables partner ---------- */
export function viewRedemptionsSupply(){
  const p = PL('pursuit');
  const all = pfRequests('pursuit');
  const pend = all.filter(r => r.status === 'Pending');
  const done = all.filter(r => r.status !== 'Pending');
  const owed = pend.reduce((a,r) => a + r.tokens*navOf(p), 0);
  const cash = orgCash('pursuit');

  return `${pageHead('Redemptions', 'Holders burn tokens back into USDC. Pick a request, choose the wallet to pay from, and settle it.', '')}

  <div class="stats">
    ${stat('Waiting','hourglass', String(pend.length), 'Requests to settle')}
    ${stat('Tokens to burn','flame', nf(pend.reduce((a,r)=>a+r.tokens,0),2)+' <span style="font-size:15px;color:var(--muted)" class="mono">'+p.symbol+'</span>','Locked in holders’ wallets')}
    ${stat('Cash required','bank', nf(owed,2)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>', 'At '+nav(navOf(p))+' per token')}
    ${stat('Available to pay','wallet', nf(cash,2)+' <span style="font-size:15px;color:var(--muted)" class="mono">USDC</span>',
      cash>=owed? 'Enough across your wallets' : '<span style="color:var(--bad)">Short by '+nf(owed-cash,2)+' USDC</span>')}
  </div>

  <div class="card" style="margin-bottom:20px">
    <div class="card-head"><h3>${ic('hourglass','icon-sm')} Waiting to be settled</h3></div>
    <div class="table-scroll"><table>
      <thead><tr><th>Request</th><th>Holder</th><th class="t-right">Tokens</th><th class="t-right">Payable</th>
        <th>Submitted</th><th>Status</th><th></th></tr></thead>
      <tbody>${requestRows(pend, {cols:7, showHolder:true, honour:true, empty:'Queue is clear.'})}</tbody></table></div>
  </div>

  <div class="card">
    <div class="card-head"><h3>${ic('check','icon-sm')} Settled</h3></div>
    <div class="table-scroll"><table>
      <thead><tr><th>Request</th><th>Holder</th><th class="t-right">Tokens</th><th class="t-right">Paid</th>
        <th>Submitted</th><th>Status</th><th></th></tr></thead>
      <tbody>${requestRows(done, {cols:7, showHolder:true, honour:true, empty:'Nothing settled yet.'})}</tbody></table></div>
  </div>`;
}

/* ============================================================
   Modals, flows, router
   ============================================================ */
let modalHost = document.getElementById('modal-host');
if (!modalHost) {
  modalHost = document.createElement('div');
  modalHost.id = 'modal-host';
  document.body.appendChild(modalHost);
}

export function openModal(html){ modalHost.innerHTML = '<div class="overlay" id="ovl">'+html+'</div>'; }
export function closeModal(){ modalHost.innerHTML = ''; }
export function modalShell(title, sub, icon, body, foot, wide){
  return `<div class="modal ${wide?'modal-wide':''}">
    <div class="modal-head">
      <div><h2>${ic(icon,'icon-sm')} ${title}</h2><p>${sub}</p></div>
      <button class="xbtn" data-act="close">${ic('x','icon-sm')}</button>
    </div>
    <div class="modal-body" id="mBody">${body}</div>
    ${foot ? '<div class="modal-foot">'+foot+'</div>' : ''}
  </div>`;
}
export const spinner = '<svg class="icon icon-sm spin" viewBox="0 0 24 24"><path d="'+P.refresh+'"/></svg>';
export const walletOptions = org => fundWallets(org).map(w => ({ v:w.id, label:w.label, sub:short(w.address)+' · '+nf(w.usdc,2)+' USDC' }));

/* ---------- step runner ---------- */
export function execSteps(steps, onDone){
  const body = document.getElementById('mBody');
  let i = 0;
  const paint = () => {
    body.innerHTML = `<div class="callout c-neutral">${ic('shield','icon-sm')}<div>Confirming each step. Keep this window open.</div></div>
      <div class="steps">` + steps.map((s, idx) => {
        const cls = idx < i ? 'done' : (idx === i ? 'active' : '');
        const glyph = idx < i ? ic('check','icon-sm') : (idx === i ? spinner : '<span style="width:7px;height:7px;border-radius:99px;background:#D6D6D1;display:block"></span>');
        return `<div class="step ${cls}"><span class="sic">${glyph}</span>
          <div><div class="txt">${s.label}</div>${s.meta?'<div class="meta">'+s.meta+'</div>':''}</div></div>`;
      }).join('') + `</div>
      <div class="progress"><div style="width:${Math.round(i/steps.length*100)}%"></div></div>`;
  };
  paint();
  const tick = () => {
    if (i >= steps.length){ onDone(); return; }
    setTimeout(() => { if (steps[i].fx) steps[i].fx(); i++; paint(); tick(); }, steps[i].ms || 900);
  };
  tick();
}
export function successBlock(title, lines, tx){
  return `<div style="text-align:center;padding:6px 0 2px">
      <div class="tick">${ic('check','icon-lg')}</div>
      <h3 style="font-size:16.5px;font-weight:600;margin-top:14px">${title}</h3>
    </div>
    <div class="panel">${lines.map(([k,v]) => `<div class="kv"><span class="k">${k}</span><span class="v mono">${v}</span></div>`).join('')}</div>
    <div><div class="micro" style="margin-bottom:6px">Transaction</div><div class="hashbox mono">${tx}</div></div>`;
}

/* ============================================================
   Mint — USDC into platform tokens
   ============================================================ */
export let M = {};
export function mintOpen(key){
  const openPfs = S.platforms.filter(p => p.status === 'Open');
  const pf = key || (openPfs.find(p => heldOf(p.key) > 0) || openPfs[0]).key;
  const funds = fundWallets('theoriq');
  const richest = funds.slice().sort((a,b) => b.usdc - a.usdc)[0];
  const pref = funds.find(w => w.primary);
  const from = (pref && pref.usdc > 0) ? pref : (richest || funds[0]);
  M = { pf, wid:from.id, amt: Math.min(100000, Math.max(0, from.usdc)), step:'config' };
  mintRender();
}
export const mintTokens = () => M.amt / navOf(PL(M.pf));
export function mintRender(){
  const p = PL(M.pf), w = wal(M.wid), tw = tokenWallet();
  const over = M.amt > (w ? w.usdc : 0);
  const openPfs = S.platforms.filter(x => x.status === 'Open');

  if (M.step === 'config'){
    const body = `
      <label class="field"><span>Platform</span>
        ${selectBox('mPf', openPfs.map(x => ({ v:x.key, label:x.name, sub:nav(navOf(x))+' per token · '+x.sector })), M.pf,
          v => { M.pf = v; mintRender(); })}</label>

      <label class="field"><span>Pay from</span>
        ${selectBox('mW', walletOptions('theoriq'), M.wid, v => { M.wid = v; mintRender(); })}</label>

      <div>
        <div class="between" style="margin-bottom:6px">
          <span style="font-size:13px;font-weight:500;color:var(--ink-2)">Amount</span>
          <span class="faint" style="font-size:12px">Balance <span class="mono">${nf(w?w.usdc:0,2)}</span> USDC</span>
        </div>
        <div style="position:relative">
          <input class="input input-lg mono" id="mAmt" type="number" min="0" step="100" value="${M.amt}">
          <span class="mono faint" style="position:absolute;right:14px;top:13px;font-size:13px">USDC</span>
        </div>
        <div class="presets" style="margin-top:10px">
          <button data-act="mint-pct" data-p="25">25%</button>
          <button data-act="mint-pct" data-p="50">50%</button>
          <button data-act="mint-pct" data-p="100">Max</button>
        </div>
        ${over ? '<div class="err">'+ic('alert','icon-sm')+' More than this wallet holds.</div>' : ''}
      </div>

      <div class="panel" id="mPrev">
        <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(navOf(p))}</span></div>
        <div class="kv"><span class="k">Tokens you receive</span><span class="v mono">${nf(mintTokens(),2)} ${p.symbol}</span></div>
        <div class="kv"><span class="k">Delivered to</span><span class="v" title="${tw.address}">${esc(tw.label)} ${ic('lock','icon-sm')}</span></div>
        <div class="kv"><span class="k">Fee</span><span class="v mono">0.00 USDC</span></div>
        <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">Total to pay</span>
          <span class="v mono" style="font-size:15px">${nf(M.amt,2)} USDC</span></div>
      </div>`;
    const foot = `<button class="btn btn-ghost" data-act="close">Cancel</button>
      <button class="btn btn-primary" data-act="mint-review" ${over||M.amt<=0?'disabled':''}>Review ${ic('right','icon-sm')}</button>`;
    openModal(modalShell('Mint tokens', 'Turn USDC into '+p.name+' tokens', 'coins', body, foot));
    document.getElementById('mAmt').addEventListener('input', e => {
      M.amt = Math.max(0, Number(e.target.value)||0); mintPreview();
    });
    return;
  }

  const body = `
    <div class="panel">
      <div class="kv"><span class="k">Platform</span><span class="v">${p.name}</span></div>
      <div class="kv"><span class="k">Paying from</span><span class="v">${esc(w.label)}</span></div>
      <div class="kv"><span class="k">Amount</span><span class="v mono">${nf(M.amt,2)} USDC</span></div>
      <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(navOf(p))}</span></div>
      <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">Tokens you receive</span>
        <span class="v mono" style="font-size:15px">${nf(mintTokens(),2)} ${p.symbol}</span></div>
    </div>
    <div>
      <div class="micro" style="margin-bottom:10px">What happens next</div>
      <div class="stack" style="gap:9px">
        ${[['1','USDC leaves '+esc(w.label)],
           ['2',nf(mintTokens(),2)+' '+p.symbol+' is minted'],
           ['3','Tokens are delivered to '+esc(tw.label)],
           ['4','USDC settles to '+p.name+'’s funding wallet']].map(([n,t]) =>
          `<div class="row gap12" style="font-size:13px;color:var(--ink-2)">
            <span class="numdot mono">${n}</span>${t}</div>`).join('')}
      </div>
    </div>
    <div class="callout c-amber">${ic('alert','icon-sm')}<div>Minting cannot be reversed. To exit, submit a redemption request and ${p.name} settles it.</div></div>`;
  const foot = `<button class="btn btn-ghost" data-act="mint-back">Back</button>
    <button class="btn btn-primary" data-act="mint-go">${ic('shield','icon-sm')} Confirm</button>`;
  openModal(modalShell('Confirm', 'Check the details before you continue', 'shield', body, foot));
}
export function mintPreview(){
  const el = document.getElementById('mPrev'); if (!el) return;
  const p = PL(M.pf), w = wal(M.wid);
  el.querySelectorAll('.kv')[1].querySelector('.v').textContent = nf(mintTokens(),2)+' '+p.symbol;
  el.querySelector('.kv-total .v').textContent = nf(M.amt,2)+' USDC';
  const b = document.querySelector('[data-act="mint-review"]');
  if (b) b.disabled = (M.amt <= 0 || M.amt > w.usdc);
}
export function mintGo(){
  const p = PL(M.pf), w = wal(M.wid), tw = tokenWallet();
  if (!w || M.amt <= 0) {
    toast.error('Invalid mint amount', 'Please enter a valid USDC amount greater than zero.', 'alert');
    return;
  }
  if (M.amt > w.usdc) {
    toast.error('Insufficient balance', `Selected wallet only has ${nf(w.usdc, 2)} USDC.`, 'alert');
    return;
  }
  const dest = p.key === 'pursuit' ? fundWallets('pursuit').find(x => x.primary) : null;
  const amt = M.amt, tokens = mintTokens(), tx = hash();
  const steps = [
    { label:'Confirming with your wallet', meta:w.label, ms:1000 },
    { label:'Withdrawing '+nf(amt,2)+' USDC', meta:'From '+short(w.address), ms:1050,
      fx:()=>{ w.usdc -= amt; S.escrow.usdc += amt; } },
    { label:'Minting '+nf(tokens,2)+' '+p.symbol, meta:'At '+nav(navOf(p))+' per token', ms:1150,
      fx:()=>{ S.escrow.tokens += tokens; } },
    { label:'Delivering tokens to your token wallet', meta:tw.label+' · '+short(tw.address), ms:1000,
      fx:()=>{ S.escrow.tokens -= tokens; tw.bal[p.key] += tokens; p.outstanding += tokens; } },
    { label:'Settling USDC to '+p.name, meta:dest ? dest.label+' · '+short(dest.address) : p.name+' funding wallet', ms:1050,
      fx:()=>{ S.escrow.usdc -= amt; if (dest) dest.usdc += amt; } }
  ];
  openModal(modalShell('Minting', nf(amt,2)+' USDC → '+nf(tokens,2)+' '+p.symbol, 'coins', '<div class="steps"></div>', ''));
  execSteps(steps, () => {
    S.positions.unshift({ pf:p.key, type:'mint', at:new Date(TODAY), tokens, nav:navOf(p), usdc:amt, tx });
    S.feed.unshift({ ic:'coins', tone:'neutral', text:'You minted '+nf(tokens,2)+' '+p.symbol+' on '+p.name+'.', at:new Date(TODAY) });
    openModal(modalShell('Done', 'Your tokens are in your token wallet', 'check',
      successBlock('Minted '+nf(tokens,2)+' '+p.symbol, [
        ['Paid', nf(amt,2)+' USDC'], ['Value per token', nav(navOf(p))],
        ['Held in', tw.label], ['Settled to', p.name]
      ], tx),
      `<button class="btn btn-ghost" data-act="close">Close</button>
       <button class="btn btn-primary" data-act="goto-platform" data-key="${p.key}">View platform ${ic('right','icon-sm')}</button>`));
    toast.success('Minted '+nf(tokens,2)+' '+p.symbol, nf(amt,2)+' USDC settled to '+p.name, 'coins');
  });
}

/* ============================================================
   Redemption request
   ============================================================ */
export let R = {};
export function redeemOpen(key){
  const held = S.platforms.filter(p => heldOf(p.key) > 0);
  if (!held.length){
    toast.warn('No tokens to redeem', 'Mint tokens on an active platform first', 'alert');
    return;
  }
  const pf = (key && heldOf(key) > 0) ? key : held[0].key;
  const funds = fundWallets('theoriq');
  R = { pf, tokens: Math.floor(heldOf(pf)/2), wid:(funds.find(w=>w.primary)||funds[0]).id, step:'config' };
  redeemRender();
}
export function redeemRender(){
  const p = PL(R.pf), held = heldOf(R.pf);
  const value = R.tokens * navOf(p);
  const lockUntil = new Date(TODAY.getTime() + 2*86400000);
  const heldPfs = S.platforms.filter(x => heldOf(x.key) > 0);

  if (R.step === 'config'){
    const body = `
      ${heldPfs.length > 1 ? `<label class="field"><span>Platform</span>
        ${selectBox('rPf', heldPfs.map(x => ({ v:x.key, label:x.name, sub:nf(heldOf(x.key),2)+' '+x.symbol+' held' })), R.pf,
          v => { R.pf = v; R.tokens = Math.floor(heldOf(v)/2); redeemRender(); })}</label>` : ''}

      <div>
        <div class="between" style="margin-bottom:2px">
          <span style="font-size:13px;font-weight:500;color:var(--ink-2)">Tokens to burn</span>
          <input class="input mono" id="rTok" type="number" min="0" max="${held}" value="${R.tokens}" style="max-width:170px;text-align:right;padding:6px 10px">
        </div>
        <input class="slider" id="rSlide" type="range" min="0" max="${Math.floor(held)}" value="${R.tokens}">
        <div class="between faint mono" style="font-size:11px"><span>0</span><span>${nf(held,0)} ${p.symbol} held</span></div>
        <div class="presets" style="margin-top:10px">
          <button data-act="rdm-pct" data-p="25">25%</button>
          <button data-act="rdm-pct" data-p="50">50%</button>
          <button data-act="rdm-pct" data-p="100">All</button>
        </div>
      </div>

      <label class="field"><span>Send the USDC to</span>
        ${selectBox('rW', walletOptions('theoriq'), R.wid, v => { R.wid = v; })}</label>

      <div class="panel" id="rPrev">
        <div class="kv"><span class="k">Tokens burned</span><span class="v mono">${nf(R.tokens,2)} ${p.symbol}</span></div>
        <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(navOf(p))}</span></div>
        <div class="kv"><span class="k">Tokens locked until</span><span class="v">${dstr(lockUntil)}</span></div>
        <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">You receive</span>
          <span class="v mono" style="font-size:15px">${nf(value,2)} USDC</span></div>
      </div>

      <div class="callout c-amber">${ic('lock','icon-sm')}<div>
        These tokens are locked as soon as you submit, until ${p.name} settles the request.</div></div>`;
    const foot = `<button class="btn btn-ghost" data-act="close">Cancel</button>
      <button class="btn btn-primary" data-act="rdm-review" ${R.tokens<=0?'disabled':''}>Review ${ic('right','icon-sm')}</button>`;
    openModal(modalShell('Request redemption', 'Burn '+p.name+' tokens back into USDC', 'flame', body, foot));

    const t = document.getElementById('rTok'), sl = document.getElementById('rSlide');
    t.addEventListener('input', e => { R.tokens = Math.min(held, Math.max(0, Number(e.target.value)||0)); sl.value = R.tokens; redeemPreview(); });
    sl.addEventListener('input', e => { R.tokens = Number(e.target.value); t.value = R.tokens; redeemPreview(); });
    return;
  }

  const w = wal(R.wid);
  const body = `
    <div class="panel">
      <div class="kv"><span class="k">Platform</span><span class="v">${p.name}</span></div>
      <div class="kv"><span class="k">Tokens burned</span><span class="v mono">${nf(R.tokens,2)} ${p.symbol}</span></div>
      <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(navOf(p))}</span></div>
      <div class="kv"><span class="k">Paid into</span><span class="v">${esc(w.label)}</span></div>
      <div class="kv"><span class="k">Left after this</span><span class="v mono">${nf(held - R.tokens,2)} ${p.symbol}</span></div>
      <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">You receive</span>
        <span class="v mono" style="font-size:15px">${nf(R.tokens*navOf(p),2)} USDC</span></div>
    </div>
    <div class="callout c-neutral">${ic('info','icon-sm')}<div>
      The request goes into ${p.name}’s queue. You can follow it from your dashboard.</div></div>`;
  const foot = `<button class="btn btn-ghost" data-act="rdm-back">Back</button>
    <button class="btn btn-primary" data-act="rdm-go">${ic('shield','icon-sm')} Submit request</button>`;
  openModal(modalShell('Confirm request', 'Tokens lock as soon as you submit', 'shield', body, foot));
}
export function redeemPreview(){
  const el = document.getElementById('rPrev'); if (!el) return;
  const p = PL(R.pf);
  el.querySelectorAll('.kv')[0].querySelector('.v').textContent = nf(R.tokens,2)+' '+p.symbol;
  el.querySelector('.kv-total .v').textContent = nf(R.tokens*navOf(p),2)+' USDC';
  const b = document.querySelector('[data-act="rdm-review"]'); if (b) b.disabled = R.tokens <= 0;
}
export function redeemGo(){
  const p = PL(R.pf), tw = tokenWallet(), w = wal(R.wid);
  const held = heldOf(p.key);
  if (R.tokens <= 0 || R.tokens > held) {
    toast.error('Invalid amount', `You have ${nf(held, 2)} ${p.symbol} available to redeem.`, 'alert');
    return;
  }
  const tokens = R.tokens, navAt = navOf(p), tx = hash();
  const id = 'RDM-' + String(43 + myRequests().length).padStart(4,'0');
  const steps = [
    { label:'Checking your balance', meta:nf(heldOf(p.key),2)+' '+p.symbol+' available', ms:950 },
    { label:'Locking '+nf(tokens,2)+' '+p.symbol, meta:'Released when settled or on '+dstr(new Date(TODAY.getTime()+2*86400000)), ms:1050,
      fx:()=>{ tw.bal[p.key] -= tokens; tw.lock[p.key] += tokens; } },
    { label:'Sending the request to '+p.name, meta:'Queued as '+id, ms:1050,
      fx:()=>{ S.requests.unshift({ id, pf:p.key, holder:'Theoriq Capital Management', holderKey:'theoriq', tokens, navAt,
        payTo:w.address, created:new Date(TODAY), lockUntil:new Date(TODAY.getTime()+2*86400000), status:'Pending' }); } }
  ];
  openModal(modalShell('Submitting', nf(tokens,2)+' '+p.symbol, 'flame', '<div class="steps"></div>', ''));
  execSteps(steps, () => {
    S.feed.unshift({ ic:'flame', tone:'amber', text:'You requested redemption of '+nf(tokens,2)+' '+p.symbol+' ('+id+').', at:new Date(TODAY) });
    openModal(modalShell('Request submitted', p.name+' will settle it from the queue', 'check',
      successBlock('Request '+id+' submitted', [
        ['Platform', p.name], ['Tokens locked', nf(tokens,2)+' '+p.symbol],
        ['Value per token', nav(navAt)], ['You receive', nf(tokens*navAt,2)+' USDC'], ['Into', w.label]
      ], tx),
      `<button class="btn btn-primary" data-act="close">Done</button>`));
    toast.success('Request '+id+' submitted', nf(tokens,2)+' '+p.symbol+' locked for settlement', 'hourglass');
  });
}

/* ============================================================
   Settle a redemption (receivables partner)
   ============================================================ */
export let H = {};
export function honorOpen(id){
  const r = S.requests.find(x => x.id === id); if (!r) return;
  const funds = fundWallets('pursuit');
  H = { id, wid:(funds.find(w => w.usdc > 0) || funds[0]).id, price: navOf(PL(r.pf)) };
  honorRender();
}
export function honorRender(){
  const r = S.requests.find(x => x.id === H.id), p = PL(r.pf);
  const w = wal(H.wid), total = r.tokens * H.price, short_ = w.usdc < total;
  const body = `
    <div class="panel">
      <div class="between">
        <div><div class="micro">Request</div>
          <div class="mono" style="font-size:14px;font-weight:600;margin-top:3px">${r.id}</div>
          <div class="faint" style="font-size:11.5px">${esc(r.holder)} · ${ago(r.created)}</div></div>
        <div class="t-right"><div class="micro">Tokens to burn</div>
          <div class="mono" style="font-size:15px;font-weight:600;margin-top:3px">${nf(r.tokens,2)} ${p.symbol}</div>
          <div class="faint" style="font-size:11px">locked ${inDays(r.lockUntil)}</div></div>
      </div>
    </div>

    <label class="field"><span>Pay from</span>
      ${selectBox('hW', walletOptions('pursuit'), H.wid, v => { H.wid = v; honorRender(); })}</label>

    <label class="field"><span>Value per token</span>
      <input class="input mono" id="hPrice" type="number" step="0.0001" value="${H.price.toFixed(4)}">
      <div class="hint">Today’s published value is <span class="mono">${nav(navOf(p))}</span> · at request it was <span class="mono">${nav(r.navAt)}</span></div></label>

    <div class="panel" id="hPrev">
      <div class="kv"><span class="k">Tokens burned</span><span class="v mono">${nf(r.tokens,2)} ${p.symbol}</span></div>
      <div class="kv"><span class="k">Value per token</span><span class="v mono">${nav(H.price)}</span></div>
      <div class="kv"><span class="k">Paid to</span><span class="v mono">${short(r.payTo)}</span></div>
      <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">Total to pay</span>
        <span class="v mono" style="font-size:15px">${nf(total,2)} USDC</span></div>
    </div>
    ${short_ ? '<div class="err">'+ic('alert','icon-sm')+' This wallet holds less than the amount payable.</div>' : ''}`;
  const foot = `<button class="btn btn-ghost" data-act="close">Cancel</button>
    <button class="btn btn-primary" data-act="honor-go" ${short_?'disabled':''}>${ic('shield','icon-sm')} Pay and burn</button>`;
  openModal(modalShell('Settle redemption', 'Pay the holder and burn their tokens', 'bank', body, foot));
  document.getElementById('hPrice').addEventListener('input', e => {
    H.price = Math.max(0, Number(e.target.value)||0); honorPreview();
  });
}
export function honorPreview(){
  const r = S.requests.find(x => x.id === H.id), w = wal(H.wid), el = document.getElementById('hPrev');
  if (!el) return;
  const total = r.tokens * H.price;
  el.querySelectorAll('.kv')[1].querySelector('.v').textContent = nav(H.price);
  el.querySelector('.kv-total .v').textContent = nf(total,2)+' USDC';
  const b = document.querySelector('[data-act="honor-go"]'); if (b) b.disabled = (w.usdc < total || H.price <= 0);
}
export function honorGo(){
  const r = S.requests.find(x => x.id === H.id), p = PL(r.pf), w = wal(H.wid), tw = tokenWallet();
  const total = r.tokens * H.price, tx = hash();
  if (w.usdc < total) {
    toast.error('Insufficient wallet balance', 'Selected funding wallet holds less than the payable amount.', 'alert');
    return;
  }
  const mine = r.holderKey === 'theoriq';
  const dest = mine ? S.wallets.find(x => x.address === r.payTo) : null;
  const steps = [
    { label:'Confirming with your wallet', meta:w.label, ms:1000 },
    { label:'Taking '+nf(total,2)+' USDC from '+w.label, meta:short(w.address), ms:1050,
      fx:()=>{ w.usdc -= total; S.escrow.usdc += total; } },
    { label:'Paying the holder', meta:short(r.payTo), ms:1050,
      fx:()=>{ S.escrow.usdc -= total; if (dest) dest.usdc += total; } },
    { label:'Burning '+nf(r.tokens,2)+' '+p.symbol, meta:'Removed from supply', ms:1150,
      fx:()=>{ if (mine) tw.lock[p.key] -= r.tokens; p.outstanding -= r.tokens;
               r.status='Settled'; r.paid=total; r.settledAt=new Date(TODAY); r.navAt=H.price; } }
  ];
  openModal(modalShell('Settling', r.id, 'bank', '<div class="steps"></div>', ''));
  execSteps(steps, () => {
    S.feed.unshift({ ic:'flame', tone:'amber', text:'Redemption '+r.id+' settled — '+nf(r.tokens,2)+' '+p.symbol+' burned.', at:new Date(TODAY) });
    if (mine) S.positions.unshift({ pf:p.key, type:'redeem', at:new Date(TODAY), tokens:r.tokens, nav:H.price, usdc:total,
      costOut: costPerToken(p.key)*r.tokens, tx });
    openModal(modalShell('Settled', 'Funds delivered and tokens burned', 'check',
      successBlock('Redemption '+r.id+' settled', [
        ['Holder', r.holder], ['Tokens burned', nf(r.tokens,2)+' '+p.symbol],
        ['Value per token', nav(H.price)], ['Paid', nf(total,2)+' USDC'], ['From', w.label]
      ], tx),
      '<button class="btn btn-primary" data-act="close">Done</button>'));
    toast.success('Settled '+r.id, nf(total,2)+' USDC paid to '+short(r.payTo), 'check');
  });
}
export function costPerToken(k){
  const mints = S.positions.filter(x => x.pf===k && x.type==='mint');
  const t = mints.reduce((a,x)=>a+x.tokens,0), c = mints.reduce((a,x)=>a+x.usdc,0);
  return t ? c/t : navOf(PL(k));
}

/* ============================================================
   Publish today's token value
   ============================================================ */
export let N = {};
export function publishOpen(){
  const p = PL('pursuit');
  N = { per: +(navOf(p) * 1.0012).toFixed(4), mode:'per' };
  publishRender();
}
export function publishRender(){
  const p = PL('pursuit'), prev = navOf(p);
  const pool = N.per * p.outstanding, delta = (N.per/prev - 1) * 100;
  const body = `
    <div class="panel">
      <div class="between">
        <div><div class="micro">Currently showing</div>
          <div class="mono" style="font-size:15px;font-weight:600;margin-top:3px">${nav(prev)}</div>
          <div class="faint" style="font-size:11.5px">${ago(S.navPublishes[0].at)}</div></div>
        <div class="t-right"><div class="micro">Tokens minted</div>
          <div class="mono" style="font-size:15px;font-weight:600;margin-top:3px">${nf(p.outstanding,0)}</div>
          <div class="faint" style="font-size:11.5px">${p.symbol}</div></div>
      </div>
    </div>
    <div class="seg">
      <button class="${N.mode==='per'?'on':''}" data-act="nav-mode" data-m="per">${ic('coins','icon-sm')} Per token</button>
      <button class="${N.mode==='pool'?'on':''}" data-act="nav-mode" data-m="pool">${ic('layers','icon-sm')} Whole pool</button>
    </div>
    ${N.mode === 'per'
      ? `<label class="field"><span>Value per token</span>
          <input class="input input-lg mono" id="nPer" type="number" step="0.0001" value="${N.per.toFixed(4)}">
          <div class="hint">Every holder’s balance is marked at this value.</div></label>`
      : `<label class="field"><span>Total pool value (USDC)</span>
          <input class="input input-lg mono" id="nPool" type="number" step="100" value="${pool.toFixed(2)}">
          <div class="hint">Divided by tokens minted to get the value per token.</div></label>`}

    <div class="panel" id="nPrev">
      <div class="kv"><span class="k">New value per token</span><span class="v mono">${nav(N.per)}</span></div>
      <div class="kv"><span class="k">Pool value</span><span class="v mono">${nf(pool,2)} USDC</span></div>
      <div class="kv kv-total"><span class="k" style="color:var(--ink);font-weight:500">Change since yesterday</span>
        <span class="v mono ${delta>=0?'pos':'neg'}" style="font-size:15px">${pct(delta)}</span></div>
    </div>`;
  const foot = `<button class="btn btn-ghost" data-act="close">Cancel</button>
    <button class="btn btn-primary" data-act="nav-go">${ic('upload','icon-sm')} Publish</button>`;
  openModal(modalShell('Publish token value', dstr(TODAY), 'upload', body, foot));

  const per = document.getElementById('nPer'), poolEl = document.getElementById('nPool');
  if (per) per.addEventListener('input', e => { N.per = Math.max(0, Number(e.target.value)||0); publishPreview(); });
  if (poolEl) poolEl.addEventListener('input', e => {
    const v = Math.max(0, Number(e.target.value)||0);
    N.per = p.outstanding ? +(v / p.outstanding).toFixed(4) : 0; publishPreview();
  });
}
export function publishPreview(){
  const p = PL('pursuit'), el = document.getElementById('nPrev'); if (!el) return;
  const pool = N.per * p.outstanding, delta = (N.per/navOf(p) - 1)*100;
  el.querySelectorAll('.kv')[0].querySelector('.v').textContent = nav(N.per);
  el.querySelectorAll('.kv')[1].querySelector('.v').textContent = nf(pool,2)+' USDC';
  const t = el.querySelector('.kv-total .v');
  t.textContent = pct(delta); t.className = 'v mono ' + (delta>=0?'pos':'neg');
}
export function publishGo(){
  const p = PL('pursuit'), per = N.per, prev = navOf(p), pool = per * p.outstanding;
  if (per <= 0) {
    toast.error('Invalid token valuation', 'Valuation price must be greater than zero.', 'alert');
    return;
  }
  const steps = [
    { label:'Signing today’s valuation', meta:'Pursuit Ops', ms:950 },
    { label:'Publishing '+nav(per)+' to every holder', meta:'Pool marked at '+nf(pool,2)+' USDC', ms:1150,
      fx:()=>{ p.history.push({ d:new Date(TODAY), v:per });
        S.navPublishes.unshift({ pf:'pursuit', at:new Date(TODAY), value:per, pool, by:'Pursuit Ops' }); } }
  ];
  openModal(modalShell('Publishing', dstr(TODAY), 'upload', '<div class="steps"></div>', ''));
  execSteps(steps, () => {
    S.feed.unshift({ ic:'trend', tone:'green', text:'Pursuit published a token value of '+nav(per)+' ('+pct((per/prev-1)*100)+' vs. prior day).', at:new Date(TODAY) });
    openModal(modalShell('Published', 'Every holder now sees this value', 'check',
      successBlock('Token value published', [
        ['Value per token', nav(per)], ['Pool value', nf(pool,2)+' USDC'],
        ['Change', pct((per/prev-1)*100)], ['Date', dstr(TODAY)]
      ], hash()),
      '<button class="btn btn-primary" data-act="close">Done</button>'));
    toast.success('Token value published: '+nav(per), pct((per/prev-1)*100)+' vs. yesterday', 'trend');
  });
}

/* ============================================================
   Wallets
   ============================================================ */
export let WM = {};
export function walletModal(id){
  const w = id ? wal(id) : null;
  WM = { id, net: w ? w.network : 'Base', use: 'both' };
  walletModalRender();
}
export function walletModalRender(){
  const w = WM.id ? wal(WM.id) : null;
  const body = `
    <label class="field"><span>Name</span>
      <input class="input" id="wLabel" value="${w?esc(w.label):''}" placeholder="e.g. Treasury Operations"></label>
    <label class="field"><span>Wallet address</span>
      <input class="input mono" id="wAddr" value="${w?w.address:''}" placeholder="0x…" style="font-size:12.5px"></label>
    <div class="cols" style="grid-template-columns:1fr 1fr;gap:14px">
      <label class="field"><span>Network</span>
        ${selectBox('wNet', [{v:'Base',label:'Base'},{v:'Ethereum',label:'Ethereum'},{v:'Polygon',label:'Polygon'}], WM.net,
          v => { WM.net = v; })}</label>
      <label class="field"><span>Used for</span>
        ${selectBox('wUse', [{v:'both',label:'Sending and receiving'},{v:'send',label:'Sending only'},{v:'receive',label:'Receiving only'}], WM.use,
          v => { WM.use = v; })}</label>
    </div>
    ${w ? '' : `<label class="field"><span>Starting balance</span>
      <input class="input mono" id="wBal" type="number" step="1000" value="0"></label>`}`;
  const foot = `<button class="btn btn-ghost" data-act="close">Cancel</button>
    <button class="btn btn-primary" data-act="wallet-save">${ic('check','icon-sm')} ${w?'Save changes':'Add wallet'}</button>`;
  openModal(modalShell(w?'Edit wallet':'Add wallet', w?'Update this wallet':'Register a wallet to send and receive funds', 'wallet', body, foot));
}
export function walletSave(){
  const label = (document.getElementById('wLabel')||{}).value ? document.getElementById('wLabel').value.trim() : '';
  const address = (document.getElementById('wAddr')||{}).value ? document.getElementById('wAddr').value.trim() : '';
  if (!label || !address){
    toast.error('Missing wallet details', 'Name and wallet address are required.', 'alert');
    return;
  }
  if (WM.id){
    const w = wal(WM.id);
    w.label = label;
    w.address = address;
    w.network = WM.net;
    toast.info('Wallet updated', label, 'check');
  } else {
    const bal = Number((document.getElementById('wBal')||{}).value) || 0;
    S.wallets.push({ id:uid('w'), org:S.org, kind:'funds', label, address, network:WM.net, usdc:bal });
    toast.success('Wallet registered', label + ' on ' + WM.net, 'wallet');
  }
  closeModal();
  render();
}
export function walletDelete(id){
  const w = wal(id);
  openModal(modalShell('Remove wallet', 'You can add it again at any time', 'trash',
    `<div class="callout c-amber">${ic('alert','icon-sm')}<div>
      Remove <b>${esc(w.label)}</b>? No funds move — the address simply stops being available on KBridge.</div></div>
     <div class="panel">
       <div class="kv"><span class="k">Address</span><span class="v mono" style="font-size:12px">${short(w.address)}</span></div>
       <div class="kv"><span class="k">Balance</span><span class="v mono">${nf(w.usdc,2)} USDC</span></div></div>`,
    `<button class="btn btn-ghost" data-act="close">Cancel</button>
     <button class="btn btn-danger" data-act="wallet-del-go" data-id="${id}">${ic('trash','icon-sm')} Remove</button>`));
}

/* ---------- notifications ---------- */
export function notifModal(){
  const body = S.notifications.map(n => `
    <div class="row gap12" style="align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--line-soft)">
      <span style="color:${n.unread?'var(--ink)':'var(--faint)'};margin-top:1px">${ic(n.unread?'clock':'check','icon-sm')}</span>
      <div><p style="font-size:13px;color:var(--ink-2)">${esc(n.text)}</p>
        <div class="faint mono" style="font-size:11px;margin-top:3px">${n.at}</div></div>
    </div>`).join('');
  openModal(modalShell('Notifications', '', 'bell', body, '<button class="btn btn-primary" data-act="close">Close</button>'));
}

/* ============================================================
   Router
   ============================================================ */
export function doLogin(){
  const b = document.getElementById('lgBtn');
  if (!b || b.disabled || !S.gateOrg) return;
  b.innerHTML = spinner + ' Signing in…'; b.disabled = true;
  setTimeout(() => {
    S.org = S.gateOrg; S.gateOrg = null; S.view = 'dash'; render();
    toast.success('Signed in as '+ORGS[S.org].name, ORGS[S.org].tag, 'check');
  }, 800);
}
export function render(){
  const root = document.getElementById('root');
  if (!root) return;
  if (!S.org){
    root.innerHTML = S.gateOrg ? loginScreen(S.gateOrg) : gateScreen();
    if (S.gateOrg) ['lgEmail','lgPass'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); doLogin(); } });
    });
    return;
  }
  const cap = S.org === 'theoriq';
  const views = cap
    ? { dash:viewDashCapital, platforms:viewPlatforms, platform:viewPlatform, wallets:viewWallets }
    : { dash:viewDashSupply, redemptions:viewRedemptionsSupply, wallets:viewWallets };
  const fn = views[S.view] || views.dash;
  root.innerHTML = header() + '<main><div class="wrap fadein">' + fn() + '</div></main>';
  if (S.view === 'platform' || (!cap && S.view === 'dash')) bindChart();
}
export function go(v){ S.view = v; window.scrollTo(0,0); render(); }

export function closeSelects(except){
  document.querySelectorAll('[data-menu]').forEach(m => { if (m.dataset.menu !== except) m.classList.add('hide'); });
  document.querySelectorAll('.sel-btn').forEach(b => { if (b.dataset.id !== except) b.classList.remove('on'); });
}

document.addEventListener('click', e => {
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    const text = cp.dataset.copy || cp.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success('Copied to clipboard', text.length > 20 ? short(text) : text, 'check');
      }).catch(() => {
        toast.info('Copied', text, 'check');
      });
    } else {
      toast.info('Copied to clipboard', text, 'check');
    }
    return;
  }

  const t = e.target.closest('[data-act]');
  if (e.target.id === 'ovl'){ closeModal(); return; }
  if (!t){ closeSelects(); return; }
  const a = t.dataset.act;
  if (a !== 'sel-open' && a !== 'sel-pick') closeSelects();

  if (a === 'sel-open'){
    const id = t.dataset.id;
    const menu = document.querySelector('[data-menu="'+id+'"]');
    const willOpen = menu.classList.contains('hide');
    closeSelects(willOpen ? id : null);
    menu.classList.toggle('hide', !willOpen);
    t.classList.toggle('on', willOpen);
    return;
  }
  if (a === 'sel-pick'){
    const id = t.dataset.id, v = t.dataset.v, s = SELS[id];
    closeSelects();
    if (s && s.onPick) s.onPick(v);
    return;
  }

  if (a === 'pick'){ S.gateOrg = t.dataset.org; render(); }
  else if (a === 'login'){ doLogin(); }
  else if (a === 'back-gate'){ S.gateOrg = null; render(); }
  else if (a === 'logout'){
    S.org = null; S.gateOrg = null; closeModal(); render();
    toast.info('Signed out', 'Returned to institutional portal gate', 'out');
  }
  else if (a === 'view'){ go(t.dataset.view); }
  else if (a === 'platform'){ S.openPlatform = t.dataset.key; go('platform'); }
  else if (a === 'goto-platform'){ closeModal(); S.openPlatform = t.dataset.key; go('platform'); }
  else if (a === 'close'){ closeModal(); render(); }
  else if (a === 'notif'){ notifModal(); }
  else if (a === 'acct'){ go('wallets'); }

  else if (a === 'mint'){ mintOpen(t.dataset.key); }
  else if (a === 'mint-pct'){ const w = wal(M.wid); M.amt = Math.round(w.usdc * (+t.dataset.p)/100); mintRender(); }
  else if (a === 'mint-review'){ M.step = 'review'; mintRender(); }
  else if (a === 'mint-back'){ M.step = 'config'; mintRender(); }
  else if (a === 'mint-go'){ mintGo(); }

  else if (a === 'redeem'){ redeemOpen(t.dataset.key); }
  else if (a === 'rdm-pct'){ R.tokens = Math.floor(heldOf(R.pf) * (+t.dataset.p)/100); redeemRender(); }
  else if (a === 'rdm-review'){ R.step = 'review'; redeemRender(); }
  else if (a === 'rdm-back'){ R.step = 'config'; redeemRender(); }
  else if (a === 'rdm-go'){ redeemGo(); }

  else if (a === 'honor'){ honorOpen(t.dataset.id); }
  else if (a === 'honor-go'){ honorGo(); }

  else if (a === 'publish'){ publishOpen(); }
  else if (a === 'nav-mode'){ N.mode = t.dataset.m; publishRender(); }
  else if (a === 'nav-go'){ publishGo(); }

  else if (a === 'wallet-add'){ walletModal(null); }
  else if (a === 'wallet-edit'){ walletModal(t.dataset.id); }
  else if (a === 'wallet-save'){ walletSave(); }
  else if (a === 'wallet-del'){ walletDelete(t.dataset.id); }
  else if (a === 'wallet-primary'){
    const w = wal(t.dataset.id);
    S.wallets.forEach(x => { if (x.org === w.org && x.kind === 'funds') x.primary = false; });
    w.primary = true; render(); toast.success('Default wallet updated', w.label, 'check');
  }
  else if (a === 'wallet-del-go'){
    const w = wal(t.dataset.id);
    S.wallets = S.wallets.filter(x => x.id !== t.dataset.id);
    closeModal(); render(); toast.warn('Wallet removed', w.label, 'trash');
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape'){ closeSelects(); closeModal(); } });

// Initial render on boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => render());
} else {
  render();
}
