/* ============================================================
   DATA (dummy)
============================================================ */

const USERS = {
  sales:   { name: 'Rina Kartika',    role: 'Staf Penjualan', initials: 'RK' },
  gudang:  { name: 'Budi Santoso',    role: 'Staf Gudang',    initials: 'BS' },
  manager: { name: 'Dian Pramudita',  role: 'Manager',        initials: 'DP' }
};

let currentRole = 'sales';
let editPelangganId = null;
let editProdukId = null;
let editStokId = null;
let editStatusSoId = null;

/* --- PELANGGAN DATA --- */
let dataPelanggan = [
  { id:'PLG-001', nama:'Ahmad Fauzi',   perusahaan:'CV Maju Bersama',       telp:'0812-3456-7890', email:'ahmad@majubersama.co.id',  kategori:'Domestik', kota:'Surabaya',  total:18, status:'Aktif' },
  { id:'PLG-002', nama:'Siti Rahayu',   perusahaan:'UD Kopi Nusantara',     telp:'0813-5678-1234', email:'siti@kopinus.id',           kategori:'Reseller', kota:'Bandung',   total:12, status:'Aktif' },
  { id:'PLG-003', nama:'James Lim',     perusahaan:'PT Indah Coffee',       telp:'+60 12-345 6789',email:'james@indahcoffee.my',      kategori:'Ekspor',   kota:'Malaysia',  total:9,  status:'Aktif' },
  { id:'PLG-004', nama:'Sarah Wijaya',  perusahaan:'Toko Kopi Sejahtera',   telp:'0878-9012-3456', email:'sarah@kopisejaht.id',       kategori:'Domestik', kota:'Jember',    total:6,  status:'Aktif' },
  { id:'PLG-005', nama:'Nguyen Minh',   perusahaan:'Vietnam Coffee Trade',  telp:'+84 909 123 456',email:'nguyen@vncoffee.vn',        kategori:'Ekspor',   kota:'Ho Chi Minh',total:4, status:'Aktif' },
  { id:'PLG-006', nama:'Hendra Putra',  perusahaan:'CV Kopi Emas',          telp:'0821-4567-8901', email:'hendra@kopiemas.id',        kategori:'Reseller', kota:'Malang',    total:3,  status:'Non-aktif' },
];

/* --- PRODUK DATA --- */
let dataProduk = [
  { id:'PRD-001', nama:'Arabika Gayo Grade 1',       jenis:'Arabika', asal:'Aceh Gayo',      grade:'Grade 1',   harga:70000, status:'Aktif' },
  { id:'PRD-002', nama:'Robusta Lampung Grade A',     jenis:'Robusta', asal:'Lampung',        grade:'Grade A',   harga:55000, status:'Aktif' },
  { id:'PRD-003', nama:'Arabika Java Ijen Grade 1',   jenis:'Arabika', asal:'Java Ijen',      grade:'Grade 1',   harga:70000, status:'Aktif' },
  { id:'PRD-004', nama:'Robusta Temanggung Grade B',  jenis:'Robusta', asal:'Temanggung',     grade:'Grade B',   harga:45000, status:'Aktif' },
  { id:'PRD-005', nama:'Arabika Jember Specialty',    jenis:'Arabika', asal:'Jember',         grade:'Specialty', harga:95000, status:'Aktif' },
  { id:'PRD-006', nama:'Robusta Flores Grade A',      jenis:'Robusta', asal:'Flores',         grade:'Grade A',   harga:52000, status:'Non-aktif' },
];

/* --- STOK DATA --- */
let dataStok = [
  { id:'PRD-001', nama:'Arabika Gayo — Grade 1',       tersedia:85,  masuk:500, keluar:415, min:100, tgl:'2025-06-05', status:'Kritis'  },
  { id:'PRD-002', nama:'Robusta Lampung — Grade A',     tersedia:420, masuk:800, keluar:380, min:150, tgl:'2025-06-06', status:'Normal'  },
  { id:'PRD-003', nama:'Arabika Java Ijen — Grade 1',   tersedia:150, masuk:400, keluar:250, min:100, tgl:'2025-06-04', status:'Menipis' },
  { id:'PRD-004', nama:'Robusta Temanggung — Grade B',  tersedia:310, masuk:600, keluar:290, min:100, tgl:'2025-06-06', status:'Normal'  },
  { id:'PRD-005', nama:'Arabika Jember Specialty',      tersedia:200, masuk:300, keluar:100, min:80,  tgl:'2025-06-03', status:'Normal'  },
  { id:'PRD-006', nama:'Robusta Flores — Grade A',      tersedia:120, masuk:200, keluar:80,  min:100, tgl:'2025-06-01', status:'Menipis' },
];

/* --- PESANAN DATA --- */
let dataPesanan = [
  { id:'SO-2025-0042', pelanggan:'CV Maju Bersama',       produk:'Arabika Gayo — Grade 1',      qty:150, harga:70000, tgl:'2025-06-07', status:'Diproses'  },
  { id:'SO-2025-0041', pelanggan:'UD Kopi Nusantara',     produk:'Robusta Lampung — Grade A',   qty:200, harga:55000, tgl:'2025-06-06', status:'Selesai'   },
  { id:'SO-2025-0040', pelanggan:'PT Indah Coffee',       produk:'Arabika Java Ijen — Grade 1', qty:80,  harga:70000, tgl:'2025-06-05', status:'Dikirim'   },
  { id:'SO-2025-0039', pelanggan:'Toko Kopi Sejahtera',   produk:'Robusta Temanggung — Grade B',qty:120, harga:45000, tgl:'2025-06-04', status:'Selesai'   },
  { id:'SO-2025-0038', pelanggan:'Vietnam Coffee Trade',  produk:'Arabika Gayo — Grade 1',      qty:300, harga:70000, tgl:'2025-06-02', status:'Selesai'   },
  { id:'SO-2025-0037', pelanggan:'CV Maju Bersama',       produk:'Arabika Jember Specialty',    qty:50,  harga:95000, tgl:'2025-06-01', status:'Menunggu'  },
];

/* ============================================================
   MENU CONFIG PER ROLE — sesuai use case diagram
============================================================ */
const MENUS = {
  sales: [
    { icon: dashIcon(),    label: 'Dashboard',             page: 'dashboard' },
    { section: 'CRM' },
    { icon: userIcon(),    label: 'Data Pelanggan',         page: 'pelanggan' },
    { icon: historyIcon(), label: 'Riwayat Pembelian',      page: 'riwayatPembelian' },
    { section: 'Sales' },
    { icon: orderIcon(),   label: 'Pesanan Penjualan',      page: 'pesanan' },
    { icon: listIcon(),    label: 'Riwayat Pemesanan',      page: 'riwayatPesanan' },
  ],
  gudang: [
    { icon: dashIcon(),    label: 'Dashboard',              page: 'dashboard' },
    { section: 'Inventory' },
    { icon: boxIcon(),     label: 'Data Produk',            page: 'produk' },
    { icon: stockIcon(),   label: 'Data Stok',              page: 'stok' },
  ],
  manager: [
    { icon: dashIcon(),    label: 'Dashboard',              page: 'dashboard' },
    { section: 'Reporting' },
    { icon: chartIcon(),   label: 'Laporan Penjualan',       page: 'laporanPenjualan' },
    { icon: usersIcon(),   label: 'Laporan Pelanggan',       page: 'laporanPelanggan' },
    { icon: warehouseIcon(), label:'Laporan Persediaan Produk', page: 'laporanPersediaan' },
  ]
};

const DASHBOARD_METRICS = {
  sales: [
    { label:'Total Pelanggan', val:'48',    delta:'↑ 3 baru bulan ini',     up:true,  color:'#FFF3E0', stroke:'#6B3F1A' },
    { label:'Pesanan Aktif',   val:'12',    delta:'4 menunggu konfirmasi',  up:null,  color:'#E3F2FD', stroke:'#1565c0' },
    { label:'Pesanan Selesai (Bulan Ini)', val:'28', delta:'↑ 8 vs bulan lalu', up:true, color:'#EAF3DE', stroke:'#27ae60' },
    { label:'Pendapatan Bulan Ini', val:'Rp 79,2jt', delta:'↑ 11,3%', up:true, color:'#EDE7F6', stroke:'#4527a0' },
  ],
  gudang: [
    { label:'Total Produk',    val:'8',     delta:'6 aktif, 2 non-aktif',   up:null,  color:'#FFF3E0', stroke:'#6B3F1A' },
    { label:'Total Stok (kg)', val:'1.780', delta:'Tersedia di gudang',      up:null,  color:'#E3F2FD', stroke:'#1565c0' },
    { label:'Stok Kritis',     val:'1',     delta:'Arabika Gayo — 85 kg',   up:false, color:'#FFEBEE', stroke:'#c62828' },
    { label:'Stok Menipis',    val:'2',     delta:'Perlu segera diisi',      up:false, color:'#FFF8E1', stroke:'#e65100' },
  ],
  manager: [
    { label:'Total Pendapatan (Bulan Ini)', val:'Rp 79,2jt', delta:'↑ 11,3% vs bulan lalu', up:true, color:'#FFF3E0', stroke:'#6B3F1A' },
    { label:'Pesanan Bulan Ini', val:'42', delta:'↑ 8 dari bulan lalu', up:true, color:'#E3F2FD', stroke:'#1565c0' },
    { label:'Volume Terjual (kg)', val:'1.640', delta:'↑ 5,2% vs bulan lalu', up:true, color:'#EAF3DE', stroke:'#27ae60' },
    { label:'Pelanggan Aktif',   val:'28',  delta:'↑ 3 pelanggan baru', up:true, color:'#EDE7F6', stroke:'#4527a0' },
  ]
};

/* ============================================================
   SVG ICONS
============================================================ */
function dashIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`; }
function userIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`; }
function historyIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`; }
function orderIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`; }
function listIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`; }
function boxIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`; }
function stockIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`; }
function chartIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`; }
function usersIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`; }
function warehouseIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`; }
function editIcon(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`; }

/* ============================================================
   AUTH
============================================================ */
function doLogin() {
  currentRole = document.getElementById('loginRole').value;
  const u = USERS[currentRole];
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('appWrapper').style.display = 'flex';

  document.getElementById('sidebarAvatar').textContent = u.initials;
  document.getElementById('sidebarName').textContent   = u.name;
  document.getElementById('sidebarRole').textContent   = u.role;
  document.getElementById('topAvatar').textContent     = u.initials;

  buildSidebar();
  buildDashMetrics();
  showPage('dashboard');
  loadAllTables();

  const d = new Date();
  document.getElementById('dashDate').textContent = d.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

function doLogout() {
  document.getElementById('appWrapper').style.display = 'none';
  document.getElementById('loginPage').style.display  = 'flex';
}

/* ============================================================
   SIDEBAR
============================================================ */
function buildSidebar() {
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = '';
  MENUS[currentRole].forEach(item => {
    if (item.section) {
      const lbl = document.createElement('div');
      lbl.className = 'nav-section-label';
      lbl.textContent = item.section;
      nav.appendChild(lbl);
    } else {
      const btn = document.createElement('button');
      btn.className = 'nav-item';
      btn.id = 'nav-' + item.page;
      btn.innerHTML = item.icon + `<span>${item.label}</span>`;
      btn.onclick = () => showPage(item.page);
      nav.appendChild(btn);
    }
  });
}

function buildDashMetrics() {
  const metrics = DASHBOARD_METRICS[currentRole];
  const grid = document.getElementById('dashMetrics');
  grid.innerHTML = metrics.map(m => `
    <div class="metric-card">
      <div class="metric-icon" style="background:${m.color}">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${m.stroke}" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <div class="metric-info">
        <div class="metric-label">${m.label}</div>
        <div class="metric-value" style="font-size:20px">${m.val}</div>
        <div class="metric-delta ${m.up===true?'up':m.up===false?'down':''}">${m.delta}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   PAGE NAVIGATION
============================================================ */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');

  const nb = document.getElementById('nav-' + page);
  if (nb) nb.classList.add('active');

  const titles = {
    dashboard:'Dashboard', pelanggan:'Data Pelanggan', riwayatPembelian:'Riwayat Pembelian',
    pesanan:'Pesanan Penjualan', riwayatPesanan:'Riwayat Pemesanan',
    produk:'Data Produk', stok:'Data Stok',
    laporanPenjualan:'Laporan Penjualan', laporanPelanggan:'Laporan Pelanggan',
    laporanPersediaan:'Laporan Persediaan Produk'
  };
  document.getElementById('topPageTitle').textContent = titles[page] || page;
  document.getElementById('notifPanel').style.display = 'none';
}

/* ============================================================
   LOAD ALL TABLES
============================================================ */
function loadAllTables() {
  renderPelanggan(dataPelanggan);
  renderRiwayatBeli();
  renderPesanan(dataPesanan);
  renderRiwayatPesanan();
  renderProduk(dataProduk);
  renderStok(dataStok);
  renderLapPenjualan();
  renderLapPelanggan();
  renderLapPersediaan();
}

/* ============================================================
   PELANGGAN
============================================================ */
function renderPelanggan(data) {
  const tb = document.getElementById('tbodyPelanggan');
  tb.innerHTML = data.map(p => `
    <tr>
      <td class="mono">${p.id}</td>
      <td><div class="avatar-row"><div class="avatar-sm">${p.nama.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div><div class="avatar-name">${p.nama}</div><div class="avatar-detail">${p.email}</div></div></div></td>
      <td>${p.perusahaan}</td>
      <td>${p.telp}</td>
      <td><span class="badge ${p.kategori==='Ekspor'?'badge-info':p.kategori==='Reseller'?'badge-purple':'badge-teal'}">${p.kategori}</span></td>
      <td>${p.total} transaksi</td>
      <td><span class="badge ${p.status==='Aktif'?'badge-success':'badge-gray'}">${p.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="openEditPelanggan('${p.id}')">${editIcon()} Ubah</button>
      </td>
    </tr>
  `).join('');
}

function filterPelanggan(q) {
  renderPelanggan(dataPelanggan.filter(p =>
    p.nama.toLowerCase().includes(q.toLowerCase()) ||
    p.perusahaan.toLowerCase().includes(q.toLowerCase())
  ));
}

function filterPelangganKategori(k) {
  renderPelanggan(k ? dataPelanggan.filter(p => p.kategori === k) : dataPelanggan);
}

function openModalTambahPelanggan() {
  editPelangganId = null;
  document.getElementById('modalPelangganTitle').textContent = 'Tambah Pelanggan';
  ['fNamaPelanggan','fPerusahaanPelanggan','fTelpPelanggan','fEmailPelanggan','fKotaPelanggan','fAlamatPelanggan'].forEach(id => document.getElementById(id).value = '');
  openModal('modalPelanggan');
}

function openEditPelanggan(id) {
  const p = dataPelanggan.find(x => x.id === id);
  editPelangganId = id;
  document.getElementById('modalPelangganTitle').textContent = 'Ubah Data Pelanggan';
  document.getElementById('fNamaPelanggan').value        = p.nama;
  document.getElementById('fPerusahaanPelanggan').value  = p.perusahaan;
  document.getElementById('fTelpPelanggan').value        = p.telp;
  document.getElementById('fEmailPelanggan').value       = p.email;
  document.getElementById('fKategoriPelanggan').value    = p.kategori;
  document.getElementById('fKotaPelanggan').value        = p.kota;
  openModal('modalPelanggan');
}

function savePelanggan() {
  const nama = document.getElementById('fNamaPelanggan').value.trim();
  if (!nama) { showToast('Nama pelanggan wajib diisi', 'error'); return; }

  if (editPelangganId) {
    const p = dataPelanggan.find(x => x.id === editPelangganId);
    p.nama        = nama;
    p.perusahaan  = document.getElementById('fPerusahaanPelanggan').value;
    p.telp        = document.getElementById('fTelpPelanggan').value;
    p.email       = document.getElementById('fEmailPelanggan').value;
    p.kategori    = document.getElementById('fKategoriPelanggan').value;
    p.kota        = document.getElementById('fKotaPelanggan').value;
    showToast('Data pelanggan berhasil diperbarui', 'success');
  } else {
    const newId = 'PLG-' + String(dataPelanggan.length + 1).padStart(3,'0');
    dataPelanggan.push({
      id: newId, nama, status:'Aktif', total:0,
      perusahaan: document.getElementById('fPerusahaanPelanggan').value,
      telp:       document.getElementById('fTelpPelanggan').value,
      email:      document.getElementById('fEmailPelanggan').value,
      kategori:   document.getElementById('fKategoriPelanggan').value,
      kota:       document.getElementById('fKotaPelanggan').value,
    });
    showToast('Pelanggan baru berhasil ditambahkan', 'success');
  }
  closeModal('modalPelanggan');
  renderPelanggan(dataPelanggan);
}

/* ============================================================
   RIWAYAT PEMBELIAN PELANGGAN
============================================================ */
function renderRiwayatBeli() {
  const all = dataPesanan.filter(p => p.status === 'Selesai' || p.status === 'Dikirim');
  document.getElementById('tbodyRiwayatBeli').innerHTML = all.map(p => `
    <tr>
      <td class="mono primary">${p.id}</td>
      <td>${p.pelanggan}</td>
      <td>${p.produk}</td>
      <td>${p.qty.toLocaleString('id')}</td>
      <td class="bold">Rp ${(p.qty*p.harga).toLocaleString('id')}</td>
      <td>${p.tgl}</td>
      <td><span class="badge ${badgePesanan(p.status)}">${p.status}</span></td>
    </tr>
  `).join('');
}

/* ============================================================
   PESANAN PENJUALAN
============================================================ */
function renderPesanan(data) {
  document.getElementById('tbodyPesanan').innerHTML = data.map(p => `
    <tr>
      <td class="mono primary">${p.id}</td>
      <td>${p.pelanggan}</td>
      <td>${p.produk}</td>
      <td>${p.qty.toLocaleString('id')} kg</td>
      <td class="bold">Rp ${(p.qty*p.harga).toLocaleString('id')}</td>
      <td>${p.tgl}</td>
      <td><span class="badge ${badgePesanan(p.status)}">${p.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="openUbahStatus('${p.id}')">${editIcon()} Ubah Status</button>
      </td>
    </tr>
  `).join('');
}

function badgePesanan(s) {
  return s==='Selesai'?'badge-success':s==='Dikirim'?'badge-info':s==='Diproses'?'badge-warning':s==='Menunggu'?'badge-gray':'badge-danger';
}

function openModalTambahPesanan() {
  document.getElementById('fTglPesanan').value = new Date().toISOString().split('T')[0];
  document.getElementById('previewTotal').textContent = 'Rp 0';
  openModal('modalPesanan');
}

function hitungTotal() {
  const harga = parseInt(document.getElementById('fProdukPesanan').value) || 0;
  const qty   = parseInt(document.getElementById('fQtyPesanan').value)    || 0;
  document.getElementById('previewTotal').textContent = 'Rp ' + (harga*qty).toLocaleString('id');
}

function savePesanan() {
  const qty = parseInt(document.getElementById('fQtyPesanan').value) || 0;
  if (qty <= 0) { showToast('Jumlah qty wajib diisi', 'error'); return; }

  const newId = 'SO-2025-' + String(dataPesanan.length + 43).padStart(4,'0');
  dataPesanan.unshift({
    id: newId,
    pelanggan: document.getElementById('fPelangganPesanan').value,
    produk:    document.getElementById('fProdukPesanan').options[document.getElementById('fProdukPesanan').selectedIndex].text.split(' (')[0],
    qty,
    harga:     parseInt(document.getElementById('fProdukPesanan').value),
    tgl:       document.getElementById('fTglPesanan').value,
    status:    'Menunggu'
  });
  closeModal('modalPesanan');
  renderPesanan(dataPesanan);
  showToast(`Pesanan ${newId} berhasil dibuat`, 'success');
}

function openUbahStatus(id) {
  editStatusSoId = id;
  const p = dataPesanan.find(x => x.id === id);
  document.getElementById('fSoStatus').value   = id;
  document.getElementById('fStatusBaru').value = p.status;
  openModal('modalStatusPesanan');
}

function applyStatusPesanan() {
  const p = dataPesanan.find(x => x.id === editStatusSoId);
  const newStatus = document.getElementById('fStatusBaru').value;
  p.status = newStatus;
  closeModal('modalStatusPesanan');
  renderPesanan(dataPesanan);
  renderRiwayatPesanan();
  showToast(`Status ${editStatusSoId} diubah ke "${newStatus}"`, 'success');
}

/* ============================================================
   RIWAYAT PEMESANAN
============================================================ */
function renderRiwayatPesanan() {
  document.getElementById('tbodyRiwayatPesanan').innerHTML = dataPesanan.map(p => `
    <tr>
      <td class="mono primary">${p.id}</td>
      <td>${p.pelanggan}</td>
      <td>${p.produk}</td>
      <td>${p.qty.toLocaleString('id')} kg</td>
      <td class="bold">Rp ${(p.qty*p.harga).toLocaleString('id')}</td>
      <td>${p.tgl}</td>
      <td>${p.status==='Selesai'?p.tgl:'-'}</td>
      <td><span class="badge ${badgePesanan(p.status)}">${p.status}</span></td>
    </tr>
  `).join('');
}

/* ============================================================
   PRODUK
============================================================ */
function renderProduk(data) {
  document.getElementById('tbodyProduk').innerHTML = data.map(p => `
    <tr>
      <td class="mono">${p.id}</td>
      <td class="bold">${p.nama}</td>
      <td><span class="badge ${p.jenis==='Arabika'?'badge-teal':'badge-info'}">${p.jenis}</span></td>
      <td>${p.asal}</td>
      <td>${p.grade}</td>
      <td class="bold">Rp ${p.harga.toLocaleString('id')}</td>
      <td><span class="badge ${p.status==='Aktif'?'badge-success':'badge-gray'}">${p.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="openEditProduk('${p.id}')">${editIcon()} Ubah</button>
      </td>
    </tr>
  `).join('');
}

function openModalTambahProduk() {
  editProdukId = null;
  document.getElementById('modalProdukTitle').textContent = 'Tambah Produk';
  ['fNamaProduk','fAsalProduk','fHargaProduk','fDesProduk'].forEach(id => document.getElementById(id).value = '');
  openModal('modalProduk');
}

function openEditProduk(id) {
  const p = dataProduk.find(x => x.id === id);
  editProdukId = id;
  document.getElementById('modalProdukTitle').textContent = 'Ubah Data Produk';
  document.getElementById('fNamaProduk').value   = p.nama;
  document.getElementById('fJenisProduk').value  = p.jenis;
  document.getElementById('fAsalProduk').value   = p.asal;
  document.getElementById('fGradeProduk').value  = p.grade;
  document.getElementById('fHargaProduk').value  = p.harga;
  document.getElementById('fStatusProduk').value = p.status;
  openModal('modalProduk');
}

function saveProduk() {
  const nama = document.getElementById('fNamaProduk').value.trim();
  const harga = parseInt(document.getElementById('fHargaProduk').value) || 0;
  if (!nama || !harga) { showToast('Nama dan harga wajib diisi', 'error'); return; }

  if (editProdukId) {
    const p = dataProduk.find(x => x.id === editProdukId);
    p.nama   = nama;
    p.jenis  = document.getElementById('fJenisProduk').value;
    p.asal   = document.getElementById('fAsalProduk').value;
    p.grade  = document.getElementById('fGradeProduk').value;
    p.harga  = harga;
    p.status = document.getElementById('fStatusProduk').value;
    showToast('Data produk berhasil diperbarui', 'success');
  } else {
    const newId = 'PRD-' + String(dataProduk.length + 1).padStart(3,'0');
    dataProduk.push({ id:newId, nama, jenis:document.getElementById('fJenisProduk').value,
      asal:document.getElementById('fAsalProduk').value, grade:document.getElementById('fGradeProduk').value,
      harga, status:document.getElementById('fStatusProduk').value });
    showToast('Produk baru berhasil ditambahkan', 'success');
  }
  closeModal('modalProduk');
  renderProduk(dataProduk);
}

/* ============================================================
   STOK
============================================================ */
function renderStok(data) {
  document.getElementById('tbodyStok').innerHTML = data.map((s,i) => `
    <tr>
      <td class="mono">${s.id}</td>
      <td class="bold">${s.nama}</td>
      <td>${s.tersedia.toLocaleString('id')}</td>
      <td style="color:#27ae60;font-weight:600">+${s.masuk.toLocaleString('id')}</td>
      <td style="color:#e74c3c;font-weight:600">-${s.keluar.toLocaleString('id')}</td>
      <td>${s.min}</td>
      <td>${s.tgl}</td>
      <td><span class="badge ${s.status==='Normal'?'badge-success':s.status==='Menipis'?'badge-warning':'badge-danger'}">${s.status}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="openEditStok(${i})">${editIcon()} Ubah</button>
      </td>
    </tr>
  `).join('');
}

function openModalTambahStok() {
  document.getElementById('fTglStok').value = new Date().toISOString().split('T')[0];
  openModal('modalStok');
}

function saveStok() {
  const jml = parseInt(document.getElementById('fJumlahStok').value) || 0;
  if (jml <= 0) { showToast('Jumlah stok wajib diisi', 'error'); return; }
  const namaProduk = document.getElementById('fProdukStok').value;
  const s = dataStok.find(x => x.nama === namaProduk);
  if (s) {
    s.tersedia += jml;
    s.masuk    += jml;
    s.tgl = document.getElementById('fTglStok').value;
    s.status = s.tersedia <= s.min * 0.3 ? 'Kritis' : s.tersedia <= s.min * 1.5 ? 'Menipis' : 'Normal';
  }
  closeModal('modalStok');
  renderStok(dataStok);
  showToast(`Stok masuk +${jml} kg berhasil dicatat`, 'success');
}

function openEditStok(i) {
  editStokId = i;
  document.getElementById('fEditStokNama').value = dataStok[i].nama;
  document.getElementById('fEditStokJml').value  = dataStok[i].tersedia;
  document.getElementById('fEditStokMin').value  = dataStok[i].min;
  openModal('modalEditStok');
}

function applyEditStok() {
  const jml = parseInt(document.getElementById('fEditStokJml').value) || 0;
  const min = parseInt(document.getElementById('fEditStokMin').value) || 0;
  dataStok[editStokId].tersedia = jml;
  dataStok[editStokId].min      = min;
  dataStok[editStokId].tgl = new Date().toISOString().split('T')[0];
  dataStok[editStokId].status = jml <= min*0.3 ? 'Kritis' : jml <= min*1.5 ? 'Menipis' : 'Normal';
  closeModal('modalEditStok');
  renderStok(dataStok);
  showToast('Data stok berhasil diperbarui', 'success');
}

/* ============================================================
   LAPORAN PENJUALAN
============================================================ */
function renderLapPenjualan() {
  document.getElementById('tbodyLapPenjualan').innerHTML = dataPesanan.map(p => `
    <tr>
      <td class="mono primary">${p.id}</td>
      <td>${p.pelanggan}</td>
      <td>${p.produk}</td>
      <td>${p.qty.toLocaleString('id')}</td>
      <td>Rp ${p.harga.toLocaleString('id')}</td>
      <td class="bold">Rp ${(p.qty*p.harga).toLocaleString('id')}</td>
      <td>${p.tgl}</td>
      <td><span class="badge ${badgePesanan(p.status)}">${p.status}</span></td>
    </tr>
  `).join('');
}

/* ============================================================
   LAPORAN PELANGGAN
============================================================ */
function renderLapPelanggan() {
  document.getElementById('tbodyLapPelanggan').innerHTML = dataPelanggan.map(p => `
    <tr>
      <td class="mono">${p.id}</td>
      <td><div class="avatar-row"><div class="avatar-sm">${p.nama.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div><div class="avatar-name">${p.nama}</div><div class="avatar-detail">${p.perusahaan}</div></div></div></td>
      <td><span class="badge ${p.kategori==='Ekspor'?'badge-info':p.kategori==='Reseller'?'badge-purple':'badge-teal'}">${p.kategori}</span></td>
      <td>${p.total} transaksi</td>
      <td>${(p.total * 150).toLocaleString('id')} kg</td>
      <td class="bold" style="color:var(--brown)">Rp ${(p.total * 8500000).toLocaleString('id')}</td>
      <td>2025-01-01</td>
      <td><span class="badge ${p.status==='Aktif'?'badge-success':'badge-gray'}">${p.status}</span></td>
    </tr>
  `).join('');
}

/* ============================================================
   LAPORAN PERSEDIAAN
============================================================ */
function renderLapPersediaan() {
  document.getElementById('tbodyLapPersediaan').innerHTML = dataStok.map(s => `
    <tr>
      <td class="mono">${s.id}</td>
      <td class="bold">${s.nama}</td>
      <td><span class="badge ${s.id.startsWith('PRD-001')||s.id.startsWith('PRD-003')||s.id.startsWith('PRD-005')?'badge-teal':'badge-info'}">${s.id==='PRD-001'||s.id==='PRD-003'||s.id==='PRD-005'?'Arabika':'Robusta'}</span></td>
      <td>0</td>
      <td style="color:#27ae60;font-weight:600">${s.masuk.toLocaleString('id')}</td>
      <td style="color:#e74c3c;font-weight:600">${s.keluar.toLocaleString('id')}</td>
      <td class="bold">${s.tersedia.toLocaleString('id')}</td>
      <td>${s.min}</td>
      <td><span class="badge ${s.status==='Normal'?'badge-success':s.status==='Menipis'?'badge-warning':'badge-danger'}">${s.status}</span></td>
    </tr>
  `).join('');
}

/* ============================================================
   MODAL HELPERS
============================================================ */
function openModal(id) {
  document.getElementById(id).classList.add('show');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

/* ============================================================
   NOTIF
============================================================ */
function toggleNotif() {
  const p = document.getElementById('notifPanel');
  p.style.display = p.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('#notifBtn') && !e.target.closest('#notifPanel')) {
    document.getElementById('notifPanel').style.display = 'none';
  }
  if (!e.target.closest('.modal-backdrop') && !e.target.closest('[onclick^="open"]')) {
    // only close via explicit buttons
  }
});

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' '+type : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}