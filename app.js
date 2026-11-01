/**
 * Mutaba'ah Yaumiyah - Mobile-First Daily Habit Tracker
 * Features Open Color Themes, 2D Vector Icons, Full Activity Heatmap,
 * Flexible Ruhiyah / Faith Status, 100% Offline with Internal Device Storage.
 */

// Open Color Palettes (13 Color Families from https://yeun.github.io/open-color/)
// Each palette contains 10 sequential shades (0: lightest -> 9: darkest)
const OPEN_COLOR_PALETTES = {
  gray: {
    id: 'gray',
    name: 'Hening Slate',
    sub: 'Abu-abu Tenang & Khusyuk',
    colors: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529']
  },
  red: {
    id: 'red',
    name: 'Bara Crimson',
    sub: 'Merah Semangat Membara',
    colors: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a']
  },
  pink: {
    id: 'pink',
    name: 'Rose Qalbi',
    sub: 'Merah Muda Kelembutan Hati',
    colors: ['#fff0f6', '#ffe3f0', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c']
  },
  grape: {
    id: 'grape',
    name: 'Royal Grape',
    sub: 'Ungu Anggur Kemuliaan',
    colors: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c']
  },
  violet: {
    id: 'violet',
    name: 'Aura Violet',
    sub: 'Ungu Senja Kedamaian Jiwa',
    colors: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4']
  },
  indigo: {
    id: 'indigo',
    name: 'Lazuardi Malam',
    sub: 'Biru Indigo Syahdu Sepertiga Malam',
    colors: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7']
  },
  blue: {
    id: 'blue',
    name: 'Samudra Azure',
    sub: 'Biru Samudra Luas & Jernih',
    colors: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab']
  },
  cyan: {
    id: 'cyan',
    name: 'Oasis Cyan',
    sub: 'Biru Pirus Sejuk Menyegarkan',
    colors: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#1098ad', '#0c8599', '#0b7285', '#095c66']
  },
  teal: {
    id: 'teal',
    name: 'Zamrud Firdaus',
    sub: 'Teal Sejuk Permata Hijau Kebun',
    colors: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b']
  },
  green: {
    id: 'green',
    name: 'Raudhah Green',
    sub: 'Hijau Nabawi Berkah & Damai',
    colors: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e']
  },
  lime: {
    id: 'lime',
    name: 'Embun Lime',
    sub: 'Hijau Pupuk Segar Semangat Pagi',
    colors: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d']
  },
  yellow: {
    id: 'yellow',
    name: 'Fajar Emas',
    sub: 'Kuning Mentari Hangat & Bercahaya',
    colors: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fab005', '#f59f00', '#f08c00', '#e67700', '#d9480f']
  },
  orange: {
    id: 'orange',
    name: 'Surya Sahara',
    sub: 'Oranye Hangat Senja Mengingat Waktu',
    colors: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
  }
};

// Configurations for Core Mutaba'ah Categories
const PRAYERS_CONFIG = [
  {
    id: 'subuh',
    name: 'Subuh',
    desc: '2 Rakaat Shalat Subuh',
    rawatib: [
      {
        id: 'rawatib-subuh-qabliyah',
        title: '2 rakaat sebelum Subuh (Qabliyah Subuh)',
        desc: 'Lebih baik dari dunia dan seisinya (HR. Muslim)'
      }
    ]
  },
  {
    id: 'zuhur',
    name: 'Zuhur',
    desc: '4 Rakaat Shalat Zuhur',
    rawatib: [
      {
        id: 'rawatib-zuhur-qabliyah',
        title: '4 rakaat sebelum Zuhur (Qabliyah Zuhur)',
        desc: 'Bisa 4 rakaat sekaligus atau 2 rakaat salam 2 rakaat salam (opsi 2 rakaat)'
      },
      {
        id: 'rawatib-zuhur-badiyah',
        title: '2 rakaat sesudah Zuhur (Ba\'diyah Zuhur)',
        desc: 'Sunnah rawatib mu\'akkadah sesudah Zuhur'
      }
    ]
  },
  {
    id: 'ashar',
    name: 'Ashar',
    desc: '4 Rakaat Shalat Ashar',
    rawatib: []
  },
  {
    id: 'maghrib',
    name: 'Maghrib',
    desc: '3 Rakaat Shalat Maghrib',
    rawatib: [
      {
        id: 'rawatib-maghrib-badiyah',
        title: '2 rakaat sesudah Maghrib (Ba\'diyah Maghrib)',
        desc: 'Sunnah rawatib mu\'akkadah sesudah Maghrib'
      }
    ]
  },
  {
    id: 'isya',
    name: 'Isya',
    desc: '4 Rakaat Shalat Isya',
    rawatib: [
      {
        id: 'rawatib-isya-badiyah',
        title: '2 rakaat sesudah Isya (Ba\'diyah Isya)',
        desc: 'Sunnah rawatib mu\'akkadah sesudah Isya'
      }
    ]
  }
];

const SUNNAH_SHALAT_CONFIG = [
  { id: 'sunnah-qiyamul-lail', title: 'Qiyamul Lail', desc: 'Sepertiga malam terakhir, munajat & doa' },
  { id: 'sunnah-witir', title: 'Witir', desc: 'Penutup shalat malam (minimal 1 atau 3 rakaat)' },
  { id: 'sunnah-dhuha', title: 'Dhuha', desc: 'Minimal 2 rakaat pagi hari sebagai sedekah persendian' },
  { id: 'sunnah-taubat', title: 'Taubat', desc: '2 rakaat memohon ampunan & istighfar kepada Allah' }
];

const TILAWAH_LEMBAR_CONFIG = [
  { id: 'tilawah-2-lembar', label: '2 Lembar', sub: '4 Halaman' },
  { id: 'tilawah-4-lembar', label: '4 Lembar', sub: '8 Halaman' },
  { id: 'tilawah-6-lembar', label: '6 Lembar', sub: '12 Halaman' },
  { id: 'tilawah-8-lembar', label: '8 Lembar', sub: '16 Halaman' }
];

const TILAWAH_JUZ_CONFIG = [
  { id: 'tilawah-1-juz', label: '1 JUZ', sub: 'Khatam 1 bulan' },
  { id: 'tilawah-2-juz', label: '2 JUZ', sub: 'Khatam 15 hari' },
  { id: 'tilawah-3-juz', label: '3 JUZ', sub: 'Khatam 10 hari' },
  { id: 'tilawah-4-juz', label: '4 JUZ', sub: 'Khatam seminggu' }
];

// Configuration for Core Puasa (Sunnah & Wajib)
const PUASA_CONFIG = [
  {
    id: 'puasa-senin',
    title: 'Puasa Sunnah Hari Senin',
    desc: 'Sunnah mu\'akkadah mingguan kelahiran Rasulullah ﷺ (HR. Muslim No. 1162)',
    badge: 'Senin',
    scheduleType: 'senin'
  },
  {
    id: 'puasa-kamis',
    title: 'Puasa Sunnah Hari Kamis',
    desc: 'Hari amalan dihadapkan kepada Allah Ta\'ala (HR. Tirmidzi)',
    badge: 'Kamis',
    scheduleType: 'kamis'
  },
  {
    id: 'puasa-ayyamul-bidh',
    title: 'Puasa Ayyamul Bidh (13, 14, 15 Hijriyah)',
    desc: 'Tiga hari putih pertengahan bulan hijriyah laksana puasa sepanjang masa (HR. Bukhari)',
    badge: 'Ayyamul Bidh',
    scheduleType: 'ayyamul-bidh'
  },
  {
    id: 'puasa-daud',
    title: 'Puasa Sunnah Daud',
    desc: 'Sehari puasa sehari berbuka, puasa sunnah yang paling dicintai Allah (HR. Bukhari)',
    badge: 'Daud',
    scheduleType: 'daud'
  },
  {
    id: 'puasa-qadha',
    title: 'Puasa Qadha Ramadhan / Nazar',
    desc: 'Menunaikan hutang puasa wajib atau menyempurnakan nazar karena Allah',
    badge: 'Wajib',
    scheduleType: 'qadha'
  },
  {
    id: 'puasa-sunnah-lain',
    title: 'Puasa Sunnah Lainnya',
    desc: 'Puasa 6 Hari Syawwal, Asyura (10 Muharram), Arafah (9 Dzulhijjah), dll',
    badge: 'Sunnah',
    scheduleType: 'lainnya'
  }
];

// Default Tasks for Dzikir, Sosial, Jasadiyah, Fikriyah, Berkarya
const DEFAULT_TASKS = [
  // KATEGORI 4: Dzikir
  { id: 'task-dzikir-pagi', title: 'Dzikir Pagi Al-Ma\'tsurat', category: 'Dzikir', desc: 'Setelah shalat Subuh hingga terbit fajar' },
  { id: 'task-dzikir-petang', title: 'Dzikir Petang Al-Ma\'tsurat', category: 'Dzikir', desc: 'Menjelang shalat Maghrib hingga terbenam matahari' },
  { id: 'task-dzikir-istighfar', title: 'Istighfar 100x & Doa Harian', category: 'Dzikir', desc: 'Perbanyak memohon ampunan & shalawat nabi' },
  { id: 'task-dzikir-bada-shalat', title: 'Dzikir Ba\'da Shalat Fardhu & Tasbih', category: 'Dzikir', desc: 'Subhanallah, Alhamdulillah, Allahu Akbar (33x)' },

  // KATEGORI 5: Sosial
  { id: 'task-sosial-sedekah', title: 'Sedekah Subuh / Infaq Harian', category: 'Sosial', desc: 'Ikhlas semampunya untuk berkah hari ini' },
  { id: 'task-sosial-bantu', title: 'Membantu Orang Lain / Amal Kebaikan', category: 'Sosial', desc: 'Meringankan beban sesama mukmin & tetangga' },
  { id: 'task-sosial-silaturahim', title: 'Menjaga Silaturahim (Keluarga & Sahabat)', category: 'Sosial', desc: 'Sapa orang tua, keluarga, atau rekan kebaikan' },
  { id: 'task-sosial-salam', title: 'Menebar Salam & Senyum Ikhlas', category: 'Sosial', desc: 'Sedekah paling mudah yang membahagiakan sesama' },

  // KATEGORI 6: Jasadiyah
  { id: 'task-jasadiyah-olahraga', title: 'Olahraga / Riadhoh Fisik (Min. 15-30 Menit)', category: 'Jasadiyah', desc: 'Jalan kaki, jogging, peregangan, atau push-up' },
  { id: 'task-jasadiyah-makan', title: 'Pola Makan Halalan Thayyiban & Berkah', category: 'Jasadiyah', desc: 'Makan tidak berlebihan, bernutrisi, dan sesuai sunnah' },
  { id: 'task-jasadiyah-tidur', title: 'Istirahat Cukup / Tidur Awal (Sebelum 22.00)', category: 'Jasadiyah', desc: 'Tidur berkualitas agar segar saat qiyamul lail & Subuh' },
  { id: 'task-jasadiyah-air', title: 'Minum Air Putih Cukup (Min. 2 Liter / 8 Gelas)', category: 'Jasadiyah', desc: 'Menjaga hidrasi tubuh dan stamina ibadah' },

  // KATEGORI 7: Fikriyah
  { id: 'task-fikriyah-kajian', title: 'Thalabul \'Ilmi / Mengikuti Kajian Islam', category: 'Fikriyah', desc: 'Kajian offline masjid atau streaming kajian bermanfaat' },
  { id: 'task-fikriyah-buku', title: 'Membaca Buku Bermanfaat (Min. 15 Menit)', category: 'Fikriyah', desc: 'Buku sirah, aqidah, fiqih, atau pengembangan diri' },
  { id: 'task-fikriyah-hadits', title: 'Membaca & Memahami Hadits Harian', category: 'Fikriyah', desc: 'Tadabbur 1-2 hadits Riyadhus Shalihin / Arbain' },
  { id: 'task-fikriyah-muhasabah', title: 'Muhasabah Diri / Evaluasi Harian', category: 'Fikriyah', desc: 'Merenungkan dosa, niat, dan target hari esok' },

  // KATEGORI 8: Berkarya
  { id: 'task-berkarya-amanah', title: 'Menuntaskan Amanah Tugas / Kerja dengan Ihsan', category: 'Berkarya', desc: 'Bekerja atau belajar secara profesional & amanah' },
  { id: 'task-berkarya-karya', title: 'Membuat Karya Bermanfaat / Produktif', category: 'Berkarya', desc: 'Menulis, merancang, atau menyelesaikan proyek kebaikan' },
  { id: 'task-berkarya-dakwah', title: 'Menyebarkan Kebaikan / Dakwah Digital', category: 'Berkarya', desc: 'Berbagi kutipan hikmah, ayat, hadits, atau edukasi' },
  { id: 'task-berkarya-skill', title: 'Mengasah Keahlian / Skill Bermanfaat Baru', category: 'Berkarya', desc: 'Belajar teknologi, bahasa, atau keterampilan bernilai' }
];

const STORAGE_KEY = 'mutabaah_yaumiyah_data_v2';

// Application State
class MutabaahApp {
  constructor() {
    this.state = {
      profile: {
        name: 'Hamba Allah',
        handle: 'mutabaah_warrior',
        bio: "Assalamu'alaykum, halo calon member FIRDAUS. :-) Untuk mulai menggunakan, klik tombol BACKUP kemudian HAPUS SEMUA DATA. Jangan lupa lengkapi data diri.",
        status: 'Istiqomah', // 'Istiqomah', 'Iman lagi naik', 'Iman lagi turun', or custom
        hasCustomAvatar: false,
        hasCustomCover: false,
        avatar: '',
        cover: ''
      },
      theme: {
        color: 'orange', // Key in OPEN_COLOR_PALETTES: Surya Sahara (Default Baru)
        mode: 'light'    // 'light' (Mode Terang Default Baru)
      },
      tasks: [...DEFAULT_TASKS],
      history: {}, // Format: { "YYYY-MM-DD": ["task-id-1", "task-id-2"] }
      selectedDate: this.formatDate(new Date()),
      activeCategory: 'Shalat', // DEFAULT: Shalat (Kategori Pertama)
      firstUseDate: this.formatDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
    };

    this.init();
  }

  // Dynamic Avatar SVG following current theme
  getThemeAvatarSvg(themeKey, mode) {
    const palette = OPEN_COLOR_PALETTES[themeKey] || OPEN_COLOR_PALETTES.green;
    const c = palette.colors;
    const isLight = mode !== 'dark';
    const col1 = isLight ? c[5] : c[8];
    const col2 = isLight ? c[3] : c[6];
    const iconColor = '#ffffff';

    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='${encodeURIComponent(col1)}'/%3E%3Cstop offset='100%25' stop-color='${encodeURIComponent(col2)}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23avatarGrad)'/%3E%3Ccircle cx='50' cy='38' r='20' fill='${encodeURIComponent(iconColor)}' opacity='0.92'/%3E%3Cpath d='M20,86 C20,68 35,62 50,62 C65,62 80,68 80,86 Z' fill='${encodeURIComponent(iconColor)}' opacity='0.92'/%3E%3C/svg%3E`;
  }

  // Dynamic Cover SVG following current theme
  getThemeCoverSvg(themeKey, mode) {
    const palette = OPEN_COLOR_PALETTES[themeKey] || OPEN_COLOR_PALETTES.green;
    const c = palette.colors;
    const isLight = mode !== 'dark';
    const cBg1 = isLight ? c[1] : c[9];
    const cBg2 = isLight ? c[3] : '#0c0e12';
    const cGrid = isLight ? c[5] : c[4];
    const cText = isLight ? c[7] : c[3];
    const opacity = isLight ? '0.25' : '0.2';

    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'%3E%3Cdefs%3E%3ClinearGradient id='coverGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='${encodeURIComponent(cBg1)}'/%3E%3Cstop offset='60%25' stop-color='${encodeURIComponent(cBg2)}'/%3E%3Cstop offset='100%25' stop-color='${encodeURIComponent(cBg1)}'/%3E%3C/linearGradient%3E%3Cpattern id='grid' width='22' height='22' patternUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' fill='none' stroke='${encodeURIComponent(cGrid)}' stroke-width='0.5' stroke-opacity='${opacity}' rx='3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='600' height='200' fill='url(%23coverGrad)'/%3E%3Crect width='600' height='200' fill='url(%23grid)'/%3E%3Ctext x='470' y='38' font-family='monospace' font-size='11' font-weight='700' fill='${encodeURIComponent(cText)}' opacity='0.45'%3E%3C/mutabaah%3E%3C/text%3E%3C/svg%3E`;
  }

  // Sanitization Utility: Mitigate Stored XSS
  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Helper: Format date to YYYY-MM-DD
  formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Parse YYYY-MM-DD safely with local noon to prevent timezone shifts
  parseDate(str) {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d, 12, 0, 0);
  }

  // Convert HEX to RGB string for rgba()
  hexToRgb(hex) {
    let clean = hex.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
  }

  // Islamic (Hijriyah) date calculation via Umm al-Qura Intl API
  getHijriDateParts(dateObj) {
    const hijriMonths = [
      'Muharram', 'Shafar', 'Rabi\'ul Awwal', 'Rabi\'ul Akhir',
      'Jumadil Ula', 'Jumadil Akhir', 'Rajab', 'Sya\'ban',
      'Ramadhan', 'Syawwal', 'Dzulqa\'dah', 'Dzulhijjah'
    ];

    try {
      const parts = new Intl.DateTimeFormat('id-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }).formatToParts(dateObj);

      const day = Number(parts.find(p => p.type === 'day')?.value || 1);
      const month = Number(parts.find(p => p.type === 'month')?.value || 1);
      const year = Number(parts.find(p => p.type === 'year')?.value || 1448);
      const monthName = hijriMonths[(month - 1) % 12] || 'Hijriyah';

      return {
        day,
        month,
        year,
        monthName,
        text: `${day} ${monthName} ${year} H`
      };
    } catch (e) {
      return {
        day: 1,
        month: 1,
        year: 1448,
        monthName: 'Muharram',
        text: '1 Muharram 1448 H'
      };
    }
  }

  // Format Dual Date: Utamakan Hijriyah di atas, Masehi di bawahnya miring non-bold lebih kecil 2 font
  formatDualDate(dateStr, includePrefix = false) {
    const date = this.parseDate(dateStr);
    const todayStr = this.formatDate(new Date());

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = this.formatDate(yesterday);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = this.formatDate(tomorrow);

    const days = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthsMasehi = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayName = days[date.getDay()];
    const hijri = this.getHijriDateParts(date);
    const masehiStr = `${date.getDate()} ${monthsMasehi[date.getMonth()]} ${date.getFullYear()} M`;

    let prefix = '';
    if (includePrefix) {
      if (dateStr === todayStr) prefix = 'Hari Ini, ';
      else if (dateStr === yesterdayStr) prefix = 'Kemarin, ';
      else if (dateStr === tomorrowStr) prefix = 'Besok, ';
    }

    return {
      hijriHeading: `${prefix}${dayName}, ${hijri.text}`,
      masehiSub: masehiStr,
      dayName,
      hijriDay: hijri.day,
      hijriMonthName: hijri.monthName,
      hijriYear: hijri.year,
      fullText: `${dayName}, ${hijri.text} (${masehiStr})`
    };
  }

  // Human readable date string in Indonesian
  formatDisplayDate(dateStr) {
    const dual = this.formatDualDate(dateStr, false);
    return `${dual.dayName}, ${dual.hijriDay} ${dual.hijriMonthName} ${dual.hijriYear} H`;
  }

  // Storage Methods (Local Internal Storage with Quota Guard)
  loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('mutabaah_yaumiyah_data_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) this.state.profile = { ...this.state.profile, ...parsed.profile };
        if (parsed.theme) this.state.theme = { ...this.state.theme, ...parsed.theme };
        if (parsed.firstUseDate) {
          this.state.firstUseDate = parsed.firstUseDate;
        } else {
          const recordedDates = parsed.history ? Object.keys(parsed.history).sort() : [];
          if (recordedDates.length > 0) {
            const earliest = this.parseDate(recordedDates[0]);
            this.state.firstUseDate = this.formatDate(new Date(earliest.getFullYear(), earliest.getMonth(), 1));
          } else {
            const now = new Date();
            this.state.firstUseDate = this.formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
          }
        }
        if (parsed.tasks && Array.isArray(parsed.tasks)) {
          // Check if tasks are from old format or need migration
          const hasOldCategories = parsed.tasks.some(t => 
            ['Wajib', 'Sunnah', 'Al-Qur\'an', 'Ilmu', 'Jasmani'].includes(t.category)
          );
          if (hasOldCategories) {
            const customTasks = parsed.tasks.filter(t => t.id && t.id.startsWith('custom-task-'));
            customTasks.forEach(t => {
              if (t.category === 'Wajib' || t.category === 'Sunnah') t.category = 'Shalat';
              else if (t.category === 'Al-Qur\'an') t.category = 'Tilawah';
              else if (t.category === 'Ilmu') t.category = 'Fikriyah';
              else if (t.category === 'Jasmani') t.category = 'Jasadiyah';
            });
            this.state.tasks = [...DEFAULT_TASKS, ...customTasks];
          } else {
            this.state.tasks = parsed.tasks;
          }
        }
        if (parsed.history) this.state.history = parsed.history;
      } else {
        const now = new Date();
        this.state.firstUseDate = this.formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
        this.seedDemoActivity();
        this.saveToStorage();
      }
      // Ensure default view starts at 'Shalat' (Kategori Pertama)
      this.state.activeCategory = 'Shalat';
    } catch (e) {
      console.error('Error loading data from local storage:', e);
      this.state.activeCategory = 'Shalat';
    }
  }

  saveToStorage() {
    try {
      const dataToSave = {
        version: 2,
        savedAt: new Date().toISOString(),
        firstUseDate: this.state.firstUseDate,
        profile: this.state.profile,
        theme: this.state.theme,
        tasks: this.state.tasks,
        history: this.state.history
      };
      const serialized = JSON.stringify(dataToSave);
      
      // Quota warning: if storage usage exceeds ~3.5MB (approx 3.5M characters)
      if (serialized.length > 3.5 * 1024 * 1024) {
        console.warn('Storage usage is nearing 4MB limit. Consider exporting backup.');
      }
      
      localStorage.setItem(STORAGE_KEY, serialized);
    } catch (e) {
      console.error('Error saving data to local storage:', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        this.showToast('Memori browser penuh! Harap cadangkan dan reset sebagian data.', 'error');
      } else {
        this.showToast('Penyimpanan penuh atau gagal menyimpan data!', 'error');
      }
    }
  }

  // Strict Schema Validation for JSON Backup Import
  validateBackupSchema(imported) {
    if (!imported || typeof imported !== 'object' || Array.isArray(imported)) {
      return { valid: false, message: 'Format data JSON tidak valid (harus berupa objek).' };
    }

    // Validate tasks array if present
    if (imported.tasks) {
      if (!Array.isArray(imported.tasks)) {
        return { valid: false, message: 'Daftar amalan (tasks) harus berupa array.' };
      }
      for (const t of imported.tasks) {
        if (!t || typeof t !== 'object' || !t.id || !t.title || !t.category) {
          return { valid: false, message: 'Item amalan tidak memiliki struktur yang lengkap (id, title, category).' };
        }
        if (typeof t.title !== 'string' || t.title.length > 120) {
          return { valid: false, message: 'Judul amalan melebihi batas panjang yang diizinkan (maks 120 karakter).' };
        }
      }
    }

    // Validate history if present
    if (imported.history) {
      if (typeof imported.history !== 'object' || Array.isArray(imported.history)) {
        return { valid: false, message: 'Riwayat mutabaah (history) harus berupa objek tanggal.' };
      }
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      for (const [dateKey, taskList] of Object.entries(imported.history)) {
        if (!dateRegex.test(dateKey) || !Array.isArray(taskList)) {
          return { valid: false, message: `Format riwayat tanggal "${dateKey}" tidak valid.` };
        }
      }
    }

    // Validate profile if present
    if (imported.profile && typeof imported.profile === 'object') {
      const p = imported.profile;
      if (p.name && (typeof p.name !== 'string' || p.name.length > 80)) {
        return { valid: false, message: 'Nama profil melebihi panjang maksimum.' };
      }
      if (p.handle && (typeof p.handle !== 'string' || p.handle.length > 50)) {
        return { valid: false, message: 'Username handle melebihi panjang maksimum.' };
      }
      if (p.bio && (typeof p.bio !== 'string' || p.bio.length > 250)) {
        return { valid: false, message: 'Bio profil melebihi panjang maksimum.' };
      }
    }

    return { valid: true };
  }

  // Pre-fill realistic activity for demonstration if first-time load
  seedDemoActivity() {
    const today = new Date();
    const rawatibPool = [
      'rawatib-subuh-qabliyah',
      'rawatib-zuhur-qabliyah',
      'rawatib-zuhur-badiyah',
      'rawatib-maghrib-badiyah',
      'rawatib-isya-badiyah'
    ];
    const sunnahPool = [
      'sunnah-qiyamul-lail',
      'sunnah-witir',
      'sunnah-dhuha',
      'sunnah-taubat'
    ];
    const tilawahPool = [
      'tilawah-2-lembar',
      'tilawah-4-lembar',
      'tilawah-1-juz'
    ];
    const tasksPool = this.state.tasks.map(t => t.id);

    // Generate recent days within current month (starting from day 1 up to yesterday)
    const currentDayOfMonth = today.getDate();
    const daysToSeed = Math.min(25, Math.max(0, currentDayOfMonth - 1));

    for (let i = daysToSeed; i >= 1; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateKey = this.formatDate(d);
      const dayPicks = [];

      // Pick 3-5 fardhu prayers with specific modes
      ['subuh', 'zuhur', 'ashar', 'maghrib', 'isya'].forEach(fId => {
        if (Math.random() > 0.15) {
          const modes = ['tepat-waktu', 'jamaah', 'sendiri'];
          const chosenMode = modes[Math.floor(Math.random() * modes.length)];
          dayPicks.push(`fardhu-${fId}-${chosenMode}`);
        }
      });

      // Pick rawatib
      rawatibPool.forEach(rId => {
        if (Math.random() > 0.4) dayPicks.push(rId);
      });

      // Pick sunnah
      sunnahPool.forEach(sId => {
        if (Math.random() > 0.45) dayPicks.push(sId);
      });

      // Pick tilawah
      if (Math.random() > 0.3) {
        dayPicks.push(tilawahPool[Math.floor(Math.random() * tilawahPool.length)]);
      }

      // Pick puasa if Monday, Thursday, or Ayyamul Bidh (13, 14, 15 Hijriyah)
      const dHijri = this.getHijriDateParts(d);
      if (d.getDay() === 1 && Math.random() > 0.35) {
        dayPicks.push('puasa-senin');
      } else if (d.getDay() === 4 && Math.random() > 0.35) {
        dayPicks.push('puasa-kamis');
      } else if ((dHijri.day === 13 || dHijri.day === 14 || dHijri.day === 15) && Math.random() > 0.25) {
        dayPicks.push('puasa-ayyamul-bidh');
      }

      // Pick standard tasks
      tasksPool.forEach(tId => {
        if (Math.random() > 0.35) dayPicks.push(tId);
      });

      this.state.history[dateKey] = dayPicks;
    }

    // For today, check realistic initial items
    const todayKey = this.formatDate(today);
    this.state.history[todayKey] = [
      'fardhu-subuh-tepat-waktu',
      'rawatib-subuh-qabliyah',
      'sunnah-dhuha',
      'tilawah-2-lembar',
      'task-dzikir-pagi',
      'task-sosial-sedekah'
    ];
  }

  // Initialize
  init() {
    this.loadFromStorage();
    this.applyTheme(this.state.theme.color, this.state.theme.mode);
    this.bindEvents();
    this.renderProfile();
    this.renderHeatmap();
    this.renderChecklist();
    this.updateStats();
    this.setupHeatmapScrollGestures();
  }

  // ===================================================================
  // THEMING ENGINE (Open Color & Dark/Light Mode)
  // ===================================================================
  applyTheme(themeKey, mode) {
    const palette = OPEN_COLOR_PALETTES[themeKey] || OPEN_COLOR_PALETTES.green;
    const c = palette.colors;
    const root = document.documentElement;
    const isYellowOrLime = themeKey === 'yellow' || themeKey === 'lime';

    if (mode === 'light') {
      // MODE TERANG STANDARD: Putih / Abu Netral
      root.style.setProperty('--bg-canvas', '#f8f9fa');
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--bg-surface', '#f1f3f5');
      root.style.setProperty('--bg-surface-hover', '#e9ecef');
      root.style.setProperty('--border-default', '#dee2e6');
      root.style.setProperty('--border-muted', '#e9ecef');
      root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.06)');

      root.style.setProperty('--text-primary', '#212529');
      root.style.setProperty('--text-secondary', '#495057');
      root.style.setProperty('--text-muted', '#868e96');
      root.style.setProperty('--text-link', isYellowOrLime ? c[8] : c[6]);

      // Heatmap Levels: Kurang (Level 0) -> Penuh (Level 4)
      root.style.setProperty('--theme-level-0', '#e9ecef');
      root.style.setProperty('--theme-level-0-border', '#dee2e6');
      root.style.setProperty('--theme-level-1', c[1]); // muda
      root.style.setProperty('--theme-level-2', c[3]);
      root.style.setProperty('--theme-level-3', c[5]);
      root.style.setProperty('--theme-level-4', c[7]); // tua/penuh

      root.style.setProperty('--theme-primary', isYellowOrLime ? c[7] : c[6]);
      root.style.setProperty('--theme-btn-text', isYellowOrLime ? '#1c1f24' : '#ffffff');
      root.style.setProperty('--theme-check-icon-color', isYellowOrLime ? '#1c1f24' : '#ffffff');
      root.style.setProperty('--theme-glow', 'rgba(0, 0, 0, 0.08)');

      root.style.setProperty('--theme-checked-bg', c[0]);
      root.style.setProperty('--theme-checked-border', c[3]);

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f8f9fa');
    } else if (mode === 'theme-light') {
      // MODE TERANG TEMA: Background bernuansa tema muda (misal c[2] = #ffd8a8 pada Surya Sahara)
      root.style.setProperty('--bg-canvas', c[2]);
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--bg-surface', c[0]);
      root.style.setProperty('--bg-surface-hover', c[1]);
      root.style.setProperty('--border-default', c[3]);
      root.style.setProperty('--border-muted', c[2]);
      root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.08)');

      root.style.setProperty('--text-primary', '#1e1e1e');
      root.style.setProperty('--text-secondary', '#343a40');
      root.style.setProperty('--text-muted', '#687076');
      root.style.setProperty('--text-link', isYellowOrLime ? c[9] : c[8]);

      root.style.setProperty('--theme-level-0', '#ffffff');
      root.style.setProperty('--theme-level-0-border', c[3]);
      root.style.setProperty('--theme-level-1', c[1]);
      root.style.setProperty('--theme-level-2', c[3]);
      root.style.setProperty('--theme-level-3', c[5]);
      root.style.setProperty('--theme-level-4', c[8]);

      root.style.setProperty('--theme-primary', isYellowOrLime ? c[8] : c[7]);
      root.style.setProperty('--theme-btn-text', '#ffffff');
      root.style.setProperty('--theme-check-icon-color', '#ffffff');
      root.style.setProperty('--theme-glow', `rgba(${this.hexToRgb(c[6])}, 0.2)`);

      root.style.setProperty('--theme-checked-bg', c[1]);
      root.style.setProperty('--theme-checked-border', c[5]);

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', c[2]);
    } else if (mode === 'theme-dark') {
      // MODE GELAP TEMA: Background bernuansa tema sedang yang teduh dan nyaman (misal c[4] = #ffa94d pada Surya Sahara, #ffd43b pada Yellow, #a9e34b pada Lime)
      root.style.setProperty('--bg-canvas', c[4]);
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--bg-surface', c[0] || '#fff4e6');
      root.style.setProperty('--bg-surface-hover', c[1] || '#ffe8cc');
      root.style.setProperty('--border-default', c[5]);
      root.style.setProperty('--border-muted', c[3]);
      root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.08)');

      root.style.setProperty('--text-primary', '#1e1e1e');
      root.style.setProperty('--text-secondary', '#343a40');
      root.style.setProperty('--text-muted', '#5c636a');
      root.style.setProperty('--text-link', isYellowOrLime ? c[9] : c[8]);

      root.style.setProperty('--theme-level-0', '#ffffff');
      root.style.setProperty('--theme-level-0-border', c[3]);
      root.style.setProperty('--theme-level-1', c[1]);
      root.style.setProperty('--theme-level-2', c[3]);
      root.style.setProperty('--theme-level-3', c[5]);
      root.style.setProperty('--theme-level-4', c[8]);

      root.style.setProperty('--theme-primary', isYellowOrLime ? c[9] : c[7]);
      root.style.setProperty('--theme-btn-text', '#ffffff');
      root.style.setProperty('--theme-check-icon-color', '#ffffff');
      root.style.setProperty('--theme-glow', `rgba(${this.hexToRgb(c[6])}, 0.25)`);

      root.style.setProperty('--theme-checked-bg', c[1]);
      root.style.setProperty('--theme-checked-border', c[6]);

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', c[4]);
    } else {
      // MODE GELAP STANDARD: Hitam Elegan (#0c0e12)
      root.style.setProperty('--bg-canvas', '#0c0e12');
      root.style.setProperty('--bg-card', '#15181e');
      root.style.setProperty('--bg-surface', '#1f242c');
      root.style.setProperty('--bg-surface-hover', '#2b313b');
      root.style.setProperty('--border-default', '#2d333b');
      root.style.setProperty('--border-muted', '#1f242c');
      root.style.setProperty('--border-subtle', 'rgba(255, 255, 255, 0.08)');

      root.style.setProperty('--text-primary', '#f8f9fa');
      root.style.setProperty('--text-secondary', '#ced4da');
      root.style.setProperty('--text-muted', '#868e96');
      root.style.setProperty('--text-link', c[4]);

      // Heatmap Levels: Kurang (Level 0) -> Penuh (Level 4)
      root.style.setProperty('--theme-level-0', '#1a1e24');
      root.style.setProperty('--theme-level-0-border', '#272f38');
      root.style.setProperty('--theme-level-1', c[1]); // muda (Kurang)
      root.style.setProperty('--theme-level-2', c[3]);
      root.style.setProperty('--theme-level-3', c[5]);
      root.style.setProperty('--theme-level-4', c[7]); // tua/pekat (Penuh)

      root.style.setProperty('--theme-primary', c[5]);
      root.style.setProperty('--theme-btn-text', isYellowOrLime ? '#15181e' : '#ffffff');
      root.style.setProperty('--theme-check-icon-color', isYellowOrLime ? '#15181e' : '#ffffff');
      root.style.setProperty('--theme-glow', `rgba(${this.hexToRgb(c[4])}, 0.35)`);

      root.style.setProperty('--theme-checked-bg', `rgba(${this.hexToRgb(c[9])}, 0.28)`);
      root.style.setProperty('--theme-checked-border', c[7]);

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0c0e12');
    }

    document.body.className = `theme-${themeKey} mode-${mode}`;

    // Update Avatar & Cover to match theme if not using custom uploaded image
    if (!this.state.profile.hasCustomAvatar || !this.state.profile.avatar || this.state.profile.avatar.startsWith('data:image/svg+xml')) {
      this.state.profile.avatar = this.getThemeAvatarSvg(themeKey, mode);
    }
    if (!this.state.profile.hasCustomCover || !this.state.profile.cover || this.state.profile.cover.startsWith('data:image/svg+xml')) {
      this.state.profile.cover = this.getThemeCoverSvg(themeKey, mode);
    }

    this.state.theme = { color: themeKey, mode: mode };
    this.saveToStorage();
    this.renderProfile();
    this.renderThemeModalUI();
  }

  // Render Theme Selection Cards inside Modal
  renderThemeModalUI() {
    const currentTheme = this.state.theme?.color || 'green';
    const currentMode = this.state.theme?.mode || 'dark';

    // Toggle active state on mode buttons
    const btnLight = document.getElementById('btnModeLight');
    const btnDark = document.getElementById('btnModeDark');
    const btnThemeLight = document.getElementById('btnModeThemeLight');
    const btnThemeDark = document.getElementById('btnModeThemeDark');
    if (btnLight) btnLight.classList.toggle('active', currentMode === 'light');
    if (btnDark) btnDark.classList.toggle('active', currentMode === 'dark');
    if (btnThemeLight) btnThemeLight.classList.toggle('active', currentMode === 'theme-light');
    if (btnThemeDark) btnThemeDark.classList.toggle('active', currentMode === 'theme-dark');

    const grid = document.getElementById('themeCardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.values(OPEN_COLOR_PALETTES).forEach(p => {
      const isActive = p.id === currentTheme;
      const c = p.colors;
      const card = document.createElement('div');
      card.className = `theme-card ${isActive ? 'active' : ''}`;
      
      // Swatch bar disamakan logikanya antara mode terang dan gelap: c[1] -> c[3] -> c[5] -> c[7]
      const s1 = c[1];
      const s2 = c[3];
      const s3 = c[5];
      const s4 = c[7];

      card.innerHTML = `
        <div class="theme-card-left">
          <div class="theme-swatch-bar">
            <div class="theme-swatch-dot" style="background-color: ${s1};"></div>
            <div class="theme-swatch-dot" style="background-color: ${s2};"></div>
            <div class="theme-swatch-dot" style="background-color: ${s3};"></div>
            <div class="theme-swatch-dot" style="background-color: ${s4};"></div>
          </div>
          <div class="theme-card-info">
            <span class="theme-card-name">${p.name}</span>
            <span class="theme-card-sub">${p.sub}</span>
          </div>
        </div>
        <div class="theme-card-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      `;

      card.addEventListener('click', () => {
        this.applyTheme(p.id, this.state.theme.mode);
        this.showToast(`Tema diubah: ${p.name}`);
      });

      grid.appendChild(card);
    });
  }

  // ===================================================================
  // STATUS ISTIQOMAH & IMAN HANDLING
  // ===================================================================
  setStatus(newStatus) {
    if (!newStatus) return;
    this.state.profile.status = newStatus;
    this.saveToStorage();
    this.renderStatus();
    this.closeModal('modalStatusPicker');

    let toastMsg = `Kondisi status: ${newStatus}`;
    if (newStatus === 'Istiqomah') toastMsg = 'Status: Istiqomah. Terus jaga konsistensi! 🌿';
    else if (newStatus === 'Iman lagi naik') toastMsg = 'Status: Iman lagi naik! Optimalkan amalan sunnah 📈';
    else if (newStatus === 'Iman lagi turun') toastMsg = 'Status: Iman lagi turun. Perbanyak istighfar & jaga yang wajib 🌧️';

    this.showToast(toastMsg);
  }

  renderStatus() {
    const status = this.state.profile.status || 'Istiqomah';
    const pill = document.getElementById('userStatusPill');
    const text = document.getElementById('userStatusText');
    const icon = document.getElementById('userStatusIcon');

    if (!pill || !text || !icon) return;

    text.textContent = status;
    pill.className = 'user-status-pill';

    if (status === 'Istiqomah') {
      pill.classList.add('status-istiqomah');
      icon.innerHTML = `
        <svg class="icon-2d-status" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      `;
    } else if (status === 'Iman lagi naik') {
      pill.classList.add('status-iman-naik');
      icon.innerHTML = `
        <svg class="icon-2d-status" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      `;
    } else if (status === 'Iman lagi turun') {
      pill.classList.add('status-iman-turun');
      icon.innerHTML = `
        <svg class="icon-2d-status" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
    } else {
      pill.classList.add('status-istiqomah');
      icon.innerHTML = `
        <svg class="icon-2d-status" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      `;
    }

    // Synchronize modalStatusPicker active card
    document.querySelectorAll('.status-card-item').forEach(card => {
      card.classList.toggle('active', card.dataset.statusVal === status);
    });

    // Synchronize select in edit profile modal
    const sel = document.getElementById('selectProfileStatus');
    const customGroup = document.getElementById('groupCustomStatus');
    const inputCustom = document.getElementById('inputStatus');
    if (sel) {
      if (['Istiqomah', 'Iman lagi naik', 'Iman lagi turun'].includes(status)) {
        sel.value = status;
        if (customGroup) customGroup.style.display = 'none';
      } else {
        sel.value = 'custom';
        if (customGroup) customGroup.style.display = 'block';
        if (inputCustom) inputCustom.value = status;
      }
    }
  }

  // Profile Rendering
  renderProfile() {
    const p = this.state.profile;
    document.getElementById('userName').textContent = p.name || 'Hamba Allah';
    document.getElementById('userHandle').textContent = `@${p.handle || 'mutabaah'}`;
    document.getElementById('userBio').textContent = p.bio || '';
    
    this.renderStatus();

    const avatarImg = document.getElementById('avatarImage');
    if (avatarImg) {
      avatarImg.src = p.avatar || this.getThemeAvatarSvg(this.state.theme.color, this.state.theme.mode);
    }

    const coverImg = document.getElementById('coverImage');
    if (coverImg) {
      const coverUrl = p.cover || this.getThemeCoverSvg(this.state.theme.color, this.state.theme.mode);
      coverImg.style.backgroundImage = `url("${coverUrl}")`;
    }
  }

  // Total baseline target count for percentage calculation
  getTotalAmalanCount() {
    // 5 Fardhu + 5 Rawatib + 4 Sunnah Shalat + 1 Tilawah target + 1 Puasa target
    // + all category tasks in state.tasks
    const baseCount = 5 + 5 + 4 + 1 + 1;
    const taskCount = this.state.tasks.length;
    return Math.max(1, baseCount + taskCount);
  }

  // Get prayer execution mode for specific fardhu and date
  getPrayerMode(fardhuId, dateStr) {
    const list = this.state.history[dateStr] || [];
    if (list.includes(`fardhu-${fardhuId}-tepat-waktu`)) return 'tepat-waktu';
    if (list.includes(`fardhu-${fardhuId}-jamaah`)) return 'jamaah';
    if (list.includes(`fardhu-${fardhuId}-sendiri`)) return 'sendiri';
    return null;
  }

  // Set or toggle prayer execution mode (Sendiri, Jama'ah, Jama'ah Tepat Waktu)
  setPrayerMode(fardhuId, mode, dateStr) {
    if (!this.state.history[dateStr]) {
      this.state.history[dateStr] = [];
    }
    const list = this.state.history[dateStr];
    const allModes = ['sendiri', 'jamaah', 'tepat-waktu'];
    const targetId = `fardhu-${fardhuId}-${mode}`;
    const isAlreadyActive = list.includes(targetId);

    // Remove any existing mode for this prayer
    allModes.forEach(m => {
      const idx = list.indexOf(`fardhu-${fardhuId}-${m}`);
      if (idx > -1) list.splice(idx, 1);
    });

    const prayerName = PRAYERS_CONFIG.find(p => p.id === fardhuId)?.name || 'Shalat';

    if (!isAlreadyActive) {
      list.push(targetId);
      let modeLabel = 'Sendiri';
      if (mode === 'jamaah') modeLabel = 'Berjama\'ah';
      if (mode === 'tepat-waktu') modeLabel = 'Jama\'ah Tepat Waktu';
      this.showToast(`${prayerName}: ${modeLabel} dicatat! 🕌`);
    } else {
      this.showToast(`Pilihan ${prayerName} dibatalkan.`);
    }

    this.saveToStorage();
    this.renderChecklist();
    this.renderHeatmap();
    this.updateStats();
  }

  // Calculate daily progress with specialized prayer weights:
  // Shalat: Sendiri = 1%, Jama'ah = 3%, Jama'ah Tepat Waktu = 5% (5 fardhu max = 25%)
  // Other amalan: distributed evenly across remaining 75%
  calculateDailyProgress(dateStr) {
    const list = this.state.history[dateStr] || [];
    let shalatPercent = 0;
    let shalatDoneCount = 0;

    const fardhuIds = ['subuh', 'zuhur', 'ashar', 'maghrib', 'isya'];
    fardhuIds.forEach(pId => {
      const mode = this.getPrayerMode(pId, dateStr);
      if (mode === 'tepat-waktu') {
        shalatPercent += 5;
        shalatDoneCount++;
      } else if (mode === 'jamaah') {
        shalatPercent += 3;
        shalatDoneCount++;
      } else if (mode === 'sendiri') {
        shalatPercent += 1;
        shalatDoneCount++;
      }
    });

    // Other completed items (not starting with 'fardhu-')
    const otherCompleted = list.filter(id => !id.startsWith('fardhu-'));
    const otherDoneCount = otherCompleted.length;

    // Remaining 75% divided among 5 rawatib + 4 sunnah + 1 tilawah target + 1 puasa target + state.tasks.length (20 default + custom)
    const totalOtherTarget = 5 + 4 + 1 + 1 + this.state.tasks.length;
    const otherWeight = totalOtherTarget > 0 ? (75 / totalOtherTarget) : 0;
    const otherPercent = otherDoneCount * otherWeight;

    const totalPercent = Math.min(100, Math.round(shalatPercent + otherPercent));
    const totalDoneCount = shalatDoneCount + otherDoneCount;
    const totalTargetCount = 5 + totalOtherTarget;

    return {
      percent: totalPercent,
      doneCount: totalDoneCount,
      totalCount: totalTargetCount,
      shalatPercent,
      otherPercent: Math.round(otherPercent)
    };
  }

  // Get Tilawah sheet count for a given date
  getTilawahSheets(dateStr) {
    const list = this.state.history[dateStr] || [];
    for (const item of list) {
      if (typeof item === 'string' && item.startsWith('tilawah-lembar-')) {
        const num = parseInt(item.replace('tilawah-lembar-', ''), 10);
        if (!isNaN(num)) return num;
      }
    }
    // Backward compatibility with legacy pills
    if (list.includes('tilawah-8-lembar')) return 8;
    if (list.includes('tilawah-6-lembar')) return 6;
    if (list.includes('tilawah-4-lembar')) return 4;
    if (list.includes('tilawah-2-lembar')) return 2;
    if (list.includes('tilawah-4-juz')) return 40;
    if (list.includes('tilawah-3-juz')) return 30;
    if (list.includes('tilawah-2-juz')) return 20;
    if (list.includes('tilawah-1-juz')) return 10;
    return 0;
  }

  // Set Tilawah sheet count for a given date
  setTilawahSheets(count, dateStr) {
    if (!this.state.history[dateStr]) {
      this.state.history[dateStr] = [];
    }
    let list = this.state.history[dateStr];
    // Filter out existing tilawah entries
    list = list.filter(item => 
      !item.startsWith('tilawah-lembar-') &&
      !['tilawah-2-lembar', 'tilawah-4-lembar', 'tilawah-6-lembar', 'tilawah-8-lembar',
        'tilawah-1-juz', 'tilawah-2-juz', 'tilawah-3-juz', 'tilawah-4-juz'].includes(item)
    );

    const validCount = Math.max(0, parseInt(count, 10) || 0);
    if (validCount > 0) {
      list.push(`tilawah-lembar-${validCount}`);
    }

    this.state.history[dateStr] = list;
    this.saveToStorage();
    this.renderChecklist();
    this.renderHeatmap();
    this.updateStats();

    if (validCount > 0) {
      this.showToast(`Tilawah ${validCount} Lembar tercatat ✨`);
    } else {
      this.showToast('Catatan tilawah direset');
    }
  }

  // Find human-readable task title for toasts across all configurations
  getTaskTitleById(taskId) {
    if (typeof taskId === 'string' && taskId.startsWith('tilawah-lembar-')) {
      const sheets = taskId.replace('tilawah-lembar-', '');
      return `Tilawah ${sheets} Lembar`;
    }

    // Check in tasks
    const t = this.state.tasks.find(x => x.id === taskId);
    if (t) return t.title;

    // Check in puasa
    const p = PUASA_CONFIG.find(x => x.id === taskId);
    if (p) return p.title;

    // Check in rawatib
    for (const prayer of PRAYERS_CONFIG) {
      const r = prayer.rawatib.find(x => x.id === taskId);
      if (r) return r.title;
    }

    // Check in sunnah shalat
    const s = SUNNAH_SHALAT_CONFIG.find(x => x.id === taskId);
    if (s) return s.title;

    // Check in tilawah lembar
    const tl = TILAWAH_LEMBAR_CONFIG.find(x => x.id === taskId);
    if (tl) return `Tilawah ${tl.label}`;

    // Check in tilawah juz
    const tj = TILAWAH_JUZ_CONFIG.find(x => x.id === taskId);
    if (tj) return `Tilawah ${tj.label}`;

    return 'Amalan';
  }

  // Update Stats: Streak, Today Rate, Total Done
  updateStats() {
    const todayStr = this.formatDate(new Date());
    const history = this.state.history;
    const todayProgress = this.calculateDailyProgress(todayStr);

    // 1. Hari Ini completion rate
    document.getElementById('statTodayRate').textContent = `${todayProgress.percent}%`;

    // 2. Total Amalan all time
    let totalAllTime = 0;
    Object.keys(history).forEach(dateKey => {
      const p = this.calculateDailyProgress(dateKey);
      totalAllTime += p.doneCount;
    });
    document.getElementById('statTotalDone').textContent = totalAllTime.toLocaleString('id-ID');

    // 3. Streak calculation
    let streak = 0;
    let checkDate = new Date();
    
    const hasToday = (history[this.formatDate(checkDate)] || []).length > 0;
    if (!hasToday) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
      const key = this.formatDate(checkDate);
      if (history[key] && history[key].length > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    document.getElementById('statStreak').textContent = streak;
  }

  // ===================================================================
  // ACTIVITY HEATMAP GENERATOR (TAMPILKAN SEMUA & 50% LEBIH BESAR)
  // ===================================================================
  renderHeatmap() {
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const today = new Date();

    // 1. Penanggalan dimulai dari tanggal 1 bulan saat pertama kali menggunakan
    if (!this.state.firstUseDate) {
      this.state.firstUseDate = this.formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }

    const firstUse = this.parseDate(this.state.firstUseDate);
    let startDate = new Date(firstUse.getFullYear(), firstUse.getMonth(), 1);

    // Align startDate to Ahad (Sunday: day 0 - permulaan pekan kalender Islam)
    const ahadOffset = startDate.getDay();
    startDate.setDate(startDate.getDate() - ahadOffset);

    // Current Sabtu (Saturday: day 6 - penutup pekan kalender Islam)
    const todayDay = today.getDay();
    const currentSabtuOffset = 6 - todayDay;
    const currentSabtu = new Date(today);
    currentSabtu.setDate(today.getDate() + currentSabtuOffset);

    // Number of recorded weeks from startDate to current Sabtu
    const diffTime = currentSabtu.getTime() - startDate.getTime();
    const diffDays = Math.round(diffTime / (24 * 3600 * 1000)) + 1;
    const recordedWeeks = Math.max(1, Math.ceil(diffDays / 7));

    // Ensure it completely fills the screen width (now cells are 18px + 4px gap = 22px pitch)
    const wrapper = document.getElementById('heatmapWrapper');
    const wrapperWidth = wrapper && wrapper.clientWidth > 0 ? wrapper.clientWidth : 380;
    const availableWidth = Math.max(240, wrapperWidth - 40);
    const minWeeksToFill = Math.ceil(availableWidth / 22) + 2;

    const totalWeeks = Math.max(recordedWeeks, minWeeksToFill);

    // End date covers totalWeeks
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + (totalWeeks * 7) - 1);

    let totalRecordedAmalan = 0;

    let cur = new Date(startDate);
    const cells = [];

    while (cur <= endDate) {
      const dateStr = this.formatDate(cur);
      const isFuture = cur > today;
      const isToday = dateStr === this.formatDate(today);
      const isSelected = dateStr === this.state.selectedDate;

      const progress = this.calculateDailyProgress(dateStr);
      const count = isFuture ? 0 : progress.doneCount;
      totalRecordedAmalan += count;

      const percentage = isFuture ? 0 : progress.percent;

      let level = 'level-0';
      if (!isFuture && count > 0) {
        if (percentage <= 25) level = 'level-1';
        else if (percentage <= 50) level = 'level-2';
        else if (percentage <= 75) level = 'level-3';
        else level = 'level-4';
      }

      const hijri = this.getHijriDateParts(cur);
      const isAyyamulBidh = (hijri.day === 13 || hijri.day === 14 || hijri.day === 15);

      const cell = document.createElement('div');
      cell.className = `heatmap-cell ${level} ${isSelected ? 'is-selected' : ''} ${isAyyamulBidh ? 'is-ayyamul-bidh' : ''}`;
      cell.dataset.date = dateStr;
      cell.dataset.count = count;
      cell.dataset.percent = percentage;
      cell.dataset.hijriDay = hijri.day;

      const ayyamulBidhNote = isAyyamulBidh ? ` • Ayyamul Bidh (${hijri.day} ${hijri.monthName} H)` : '';
      cell.title = isFuture
        ? `${hijri.day} ${hijri.monthName} ${hijri.year} H (${dateStr}): Hari mendatang${ayyamulBidhNote}`
        : `${hijri.day} ${hijri.monthName} ${hijri.year} H (${dateStr}): ${count} amalan selesai (${percentage}%)${ayyamulBidhNote}`;
      cell.tabIndex = isFuture ? -1 : 0;
      cell.setAttribute('role', isFuture ? 'presentation' : 'button');
      cell.setAttribute('aria-label', cell.title);

      if (isToday) {
        cell.style.borderColor = 'var(--text-primary)';
      }

      // Tambahkan angka 13 14 15 di setiap bulan hijriyah pada kotak grafik, kecil saja
      if (isAyyamulBidh) {
        const badge = document.createElement('span');
        badge.className = 'heatmap-hijri-badge';
        badge.textContent = String(hijri.day);
        cell.appendChild(badge);
      }

      cells.push(cell);
      cur.setDate(cur.getDate() + 1);
    }

    cells.forEach(c => grid.appendChild(c));

    // Scroll smoothly to current week
    setTimeout(() => {
      if (wrapper) {
        const todayCell = grid.querySelector('.heatmap-cell[style*="border-color"]');
        if (todayCell) {
          const offsetLeft = todayCell.offsetLeft - wrapper.clientWidth / 2;
          wrapper.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
        } else {
          wrapper.scrollTo({ left: wrapper.scrollWidth, behavior: 'smooth' });
        }
      }
    }, 60);
  }

  // Horizontal Drag-to-Scroll for smooth desktop & touch experience
  setupHeatmapScrollGestures() {
    const wrapper = document.getElementById('heatmapWrapper');
    if (!wrapper || wrapper.dataset.scrollGestureBound) return;
    wrapper.dataset.scrollGestureBound = 'true';

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    wrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      wrapper.style.cursor = 'grabbing';
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener('mouseleave', () => {
      isDown = false;
      wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mouseup', () => {
      isDown = false;
      wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollLeft - walk;
    });
  }

  // ===================================================================
  // DAILY CHECKLIST RENDERING (7 SPECIALIZED CORE CATEGORIES)
  // ===================================================================
  renderChecklist() {
    const listEl = document.getElementById('todoList');
    listEl.innerHTML = '';

    const selectedDate = this.state.selectedDate;
    const todayStr = this.formatDate(new Date());
    const isToday = selectedDate === todayStr;

    // Update Header Date Text (Utamakan Hijriyah, Masehi di bawahnya miring non-bold lebih kecil 2 font)
    const dualDate = this.formatDualDate(selectedDate, true);
    document.getElementById('selectedDateText').textContent = dualDate.hijriHeading;
    const masehiEl = document.getElementById('selectedDateMasehi');
    if (masehiEl) {
      masehiEl.textContent = dualDate.masehiSub;
    }
    const todayTag = document.getElementById('isTodayTag');
    if (todayTag) {
      todayTag.style.display = isToday ? 'inline-block' : 'none';
    }

    // Synchronize inline calendar picker input
    const datePicker = document.getElementById('datePickerInput');
    datePicker.value = selectedDate;

    // Active category (Default: Shalat)
    const category = this.state.activeCategory || 'Shalat';

    // Toggle "Tambah Target Amalan Baru" button visibility:
    // User tidak bisa menambah atau mengurangi list di kategori shalat, tilawah, dan puasa
    const addTaskBar = document.querySelector('.add-task-bar');
    if (addTaskBar) {
      addTaskBar.style.display = (category === 'Shalat' || category === 'Tilawah' || category === 'Puasa') ? 'none' : 'block';
    }

    // Synchronize Tabs selection
    const tabs = document.querySelectorAll('#categoryTabs .tab-btn');
    tabs.forEach(tab => {
      const isActive = tab.dataset.category === category;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const completedIds = new Set(this.state.history[selectedDate] || []);

    // ---------------------------------------------------------------
    // 1. KATEGORI PERTAMA: SHALAT (5 Fardhu + Pilihan + Rawatib + Sunnah)
    // ---------------------------------------------------------------
    if (category === 'Shalat') {
      let html = '';

      // 5 Shalat Fardhu cards (Tidak ada checklist pada judul nama shalat)
      PRAYERS_CONFIG.forEach(prayer => {
        const currentMode = this.getPrayerMode(prayer.id, selectedDate);

        html += `
          <div class="prayer-card" data-fardhu="${prayer.id}">
            <div class="prayer-card-header">
              <div class="prayer-name-group">
                <span class="prayer-badge">Fardhu</span>
                <span class="prayer-title">${this.escapeHtml(prayer.name)}</span>
              </div>
              <span class="prayer-desc">${this.escapeHtml(prayer.desc)}</span>
            </div>

            <div class="prayer-options-group">
              <div class="prayer-pill-options" role="radiogroup" aria-label="Pelaksanaan ${this.escapeHtml(prayer.name)}">
                <button type="button" class="prayer-pill ${currentMode === 'sendiri' ? 'active' : ''}" data-fardhu="${prayer.id}" data-mode="sendiri" role="radio" aria-checked="${currentMode === 'sendiri'}">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>Sendiri</span>
                </button>
                <button type="button" class="prayer-pill ${currentMode === 'jamaah' ? 'active' : ''}" data-fardhu="${prayer.id}" data-mode="jamaah" role="radio" aria-checked="${currentMode === 'jamaah'}">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <span>Jama'ah</span>
                </button>
                <button type="button" class="prayer-pill ${currentMode === 'tepat-waktu' ? 'active' : ''}" data-fardhu="${prayer.id}" data-mode="tepat-waktu" role="radio" aria-checked="${currentMode === 'tepat-waktu'}">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Jama'ah Tepat Waktu</span>
                </button>
              </div>
            </div>
        `;

        // Checklist Shalat Sunnah Rawatib di dalam list shalat
        if (prayer.rawatib && prayer.rawatib.length > 0) {
          html += `
            <div class="prayer-rawatib-list">
          `;
          prayer.rawatib.forEach(r => {
            const isChecked = completedIds.has(r.id);
            html += `
              <div class="todo-item sub-todo-item ${isChecked ? 'checked' : ''}" data-task-id="${r.id}" tabindex="0" role="checkbox" aria-checked="${isChecked}">
                <div class="todo-left">
                  <div class="custom-checkbox" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div class="todo-content">
                    <span class="todo-title">${this.escapeHtml(r.title)}</span>
                    <span class="task-desc">${this.escapeHtml(r.desc)}</span>
                  </div>
                </div>
              </div>
            `;
          });
          html += `</div>`;
        }

        html += `</div>`;
      });

      // Di Bawah shalat wajib ada checklist shalat sunnah: Qiyamul Lail, Witir, Dhuha, Taubat
      html += `
        <div class="sunnah-divider-card">
          <div class="sunnah-divider-line"></div>
          <span class="sunnah-divider-text">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Shalat Sunnah
          </span>
          <div class="sunnah-divider-line"></div>
        </div>
      `;

      SUNNAH_SHALAT_CONFIG.forEach(s => {
        const isChecked = completedIds.has(s.id);
        html += `
          <div class="todo-item ${isChecked ? 'checked' : ''}" data-task-id="${s.id}" tabindex="0" role="checkbox" aria-checked="${isChecked}">
            <div class="todo-left">
              <div class="custom-checkbox" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="todo-content">
                <span class="todo-title">${this.escapeHtml(s.title)}</span>
                <span class="task-desc">${this.escapeHtml(s.desc)}</span>
              </div>
            </div>
          </div>
        `;
      });

      listEl.innerHTML = html;
      this.updateDailyProgress();
      return;
    }

    // ---------------------------------------------------------------
    // 2. KATEGORI KEDUA: TILAWAH (Jumlah Lembar dengan Stepper - dan +)
    // ---------------------------------------------------------------
    if (category === 'Tilawah') {
      const sheets = this.getTilawahSheets(selectedDate);
      let html = `
        <div class="tilawah-card">
          <div class="tilawah-header">
            <div class="tilawah-header-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div>
              <div class="tilawah-title">Tilawah Al-Qur'an</div>
              <div class="tilawah-subtitle">Catat jumlah lembar bacaan Al-Qur'an hari ini</div>
            </div>
          </div>

          <div class="tilawah-stepper-box">
            <span class="tilawah-stepper-title">Jumlah Lembar</span>
            <div class="tilawah-stepper-row">
              <button type="button" class="tilawah-stepper-btn btn-stepper-minus" id="btnTilawahMinus" aria-label="Kurangi lembar" title="Kurangi 1 lembar">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              
              <div class="tilawah-input-wrap">
                <input type="number" id="tilawahSheetsInput" class="tilawah-number-input" min="0" max="604" value="${sheets}" inputmode="numeric" aria-label="Jumlah lembar tilawah" />
                <span class="tilawah-unit-label">Lembar</span>
              </div>

              <button type="button" class="tilawah-stepper-btn btn-stepper-plus" id="btnTilawahPlus" aria-label="Tambah lembar" title="Tambah 1 lembar">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>

            ${sheets > 0 ? `
              <div class="tilawah-status-note">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Tercatat <strong>${sheets} Lembar</strong> (${sheets * 2} Halaman) pada tanggal ini.</span>
              </div>
            ` : `
              <div class="tilawah-status-note zero">
                <span>Belum ada lembar tilawah yang dicatat hari ini. Gunakan tombol + atau ketik angka.</span>
              </div>
            `}
          </div>
        </div>
      `;

      listEl.innerHTML = html;
      this.updateDailyProgress();
      return;
    }

    // ---------------------------------------------------------------
    // 3. KATEGORI KETIGA: PUASA (Otomatis Senin, Kamis & Ayyamul Bidh 13, 14, 15 Hijriyah)
    // ---------------------------------------------------------------
    if (category === 'Puasa') {
      const selectedDateObj = this.parseDate(selectedDate);
      const dayOfWeek = selectedDateObj.getDay(); // 0: Ahad, 1: Senin, 2: Selasa, 3: Rabu, 4: Kamis, 5: Jumat, 6: Sabtu
      const hijri = this.getHijriDateParts(selectedDateObj);

      const isSenin = (dayOfWeek === 1);
      const isKamis = (dayOfWeek === 4);
      const isAyyamulBidh = (hijri.day === 13 || hijri.day === 14 || hijri.day === 15);
      const hasAutoPuasaToday = isSenin || isKamis || isAyyamulBidh;

      let html = '';

      if (hasAutoPuasaToday) {
        const autoReasons = [];
        if (isSenin) autoReasons.push('Hari Senin (Sunnah Mingguan)');
        if (isKamis) autoReasons.push('Hari Kamis (Sunnah Mingguan)');
        if (isAyyamulBidh) autoReasons.push(`Ayyamul Bidh (${hijri.day} ${hijri.monthName} H)`);

        html += `
          <div class="puasa-auto-banner">
            <div class="puasa-auto-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>Jadwal Puasa Otomatis Hari Ini</span>
            </div>
            <div class="puasa-auto-desc">
              Hari ini bertepatan dengan <strong>${this.escapeHtml(autoReasons.join(' & '))}</strong>. Disunnahkan berpuasa untuk mengharap ridha Allah Ta'ala.
            </div>
          </div>
        `;
      }

      // Sort: items scheduled for today float to the top
      const sortedPuasa = [...PUASA_CONFIG].sort((a, b) => {
        const aIsScheduled = (a.id === 'puasa-senin' && isSenin) ||
                             (a.id === 'puasa-kamis' && isKamis) ||
                             (a.id === 'puasa-ayyamul-bidh' && isAyyamulBidh);
        const bIsScheduled = (b.id === 'puasa-senin' && isSenin) ||
                             (b.id === 'puasa-kamis' && isKamis) ||
                             (b.id === 'puasa-ayyamul-bidh' && isAyyamulBidh);
        if (aIsScheduled && !bIsScheduled) return -1;
        if (!aIsScheduled && bIsScheduled) return 1;
        return 0;
      });

      html += '<div class="puasa-list-grid">';

      sortedPuasa.forEach(item => {
        const isChecked = completedIds.has(item.id);
        const isScheduledToday = (item.id === 'puasa-senin' && isSenin) ||
                                 (item.id === 'puasa-kamis' && isKamis) ||
                                 (item.id === 'puasa-ayyamul-bidh' && isAyyamulBidh);

        html += `
          <div class="todo-item puasa-item ${isChecked ? 'checked' : ''} ${isScheduledToday ? 'is-scheduled-today' : ''}" data-task-id="${item.id}" tabindex="0" role="checkbox" aria-checked="${isChecked}" aria-label="${this.escapeHtml(item.title)}. ${isChecked ? 'Selesai' : 'Belum selesai'}">
            <div class="todo-left">
              <div class="custom-checkbox" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="todo-content">
                <div class="puasa-title-row">
                  <span class="todo-title">${this.escapeHtml(item.title)}</span>
                  ${isScheduledToday ? '<span class="puasa-today-badge">Jadwal Hari Ini</span>' : ''}
                  <span class="puasa-badge">${this.escapeHtml(item.badge)}</span>
                </div>
                <span class="task-desc">${this.escapeHtml(item.desc)}</span>
              </div>
            </div>
          </div>
        `;
      });

      html += '</div>';
      listEl.innerHTML = html;
      this.updateDailyProgress();
      return;
    }

    // ---------------------------------------------------------------
    // 3 - 7. KATEGORI: Dzikir, Sosial, Jasadiyah, Fikriyah, Berkarya & Lainnya
    // ---------------------------------------------------------------
    const filteredTasks = this.state.tasks.filter(t => t.category === category);

    if (filteredTasks.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center; padding: 24px 10px; color: var(--text-muted);">
          <p style="font-size: 0.85rem;">Tidak ada amalan pada kategori "${this.escapeHtml(category)}".</p>
        </div>
      `;
    } else {
      let html = '';
      filteredTasks.forEach(task => {
        const isChecked = completedIds.has(task.id);
        const escapedTitle = this.escapeHtml(task.title);
        const escapedCategory = this.escapeHtml(task.category);
        const escapedDesc = task.desc ? `<span class="task-desc">${this.escapeHtml(task.desc)}</span>` : '';

        let extraButtonsHtml = '';
        if (task.id === 'task-sosial-sedekah') {
          extraButtonsHtml = `
            <div class="sedekah-action-buttons">
              <button type="button" class="btn-sedekah-action btn-qris" data-action="open-qris" title="Apresiasi Creator via QRIS">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Apresiasi Creator</span>
              </button>
              <a href="https://sedekah.id/campaigns/dapurpalestina?ref=tatag-wara-95aw&amp;utm_source=mitra&amp;utm_medium=affiliate&amp;utm_campaign=tatag-wara-95aw" target="_blank" rel="noopener noreferrer" class="btn-sedekah-action btn-palestina" title="Donasi Dapur Umum Palestina">
                <span class="flag-icon">🇵🇸</span>
                <span>Bangun GAZA Palestina</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          `;
        }

        html += `
          <div class="todo-item ${isChecked ? 'checked' : ''} ${task.id === 'task-sosial-sedekah' ? 'todo-item-with-actions' : ''}" data-task-id="${task.id}" tabindex="0" role="checkbox" aria-checked="${isChecked}" aria-label="${escapedTitle}, ${escapedCategory}. ${isChecked ? 'Selesai' : 'Belum selesai'}">
            <div class="todo-left">
              <div class="custom-checkbox" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="todo-content">
                <span class="todo-title">${escapedTitle}</span>
                ${escapedDesc}
                ${extraButtonsHtml}
              </div>
            </div>
            <button class="btn-delete-task" title="Hapus Target" data-id="${task.id}" aria-label="Hapus amalan ${escapedTitle}">
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `;
      });
      listEl.innerHTML = html;
    }

    this.updateDailyProgress();
  }

  updateDailyProgress() {
    const selectedDate = this.state.selectedDate;
    const progress = this.calculateDailyProgress(selectedDate);

    const statusEl = document.getElementById('dailyStatusText');
    const badgeEl = document.getElementById('dailyPercentBadge');
    const barEl = document.getElementById('dailyProgressBar');

    if (statusEl) statusEl.textContent = `${progress.doneCount} dari ${progress.totalCount} amalan selesai`;
    if (badgeEl) badgeEl.textContent = `${progress.percent}%`;
    if (barEl) barEl.style.width = `${progress.percent}%`;
  }

  // Toggle Amalan Checkbox (supports tasks, rawatib, sunnah, and tilawah)
  toggleTask(taskId, dateStr) {
    if (!this.state.history[dateStr]) {
      this.state.history[dateStr] = [];
    }

    const list = this.state.history[dateStr];
    const idx = list.indexOf(taskId);

    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(taskId);
      const title = this.getTaskTitleById(taskId);
      this.showToast(`Alhamdulillah, "${title}" selesai!`);
    }

    this.saveToStorage();
    this.renderChecklist();
    this.renderHeatmap();
    this.updateStats();
  }

  // Add New Custom Task
  addTask(title, category, desc) {
    if (category === 'Shalat' || category === 'Tilawah' || category === 'Puasa') {
      this.showToast('Amalan kategori Shalat, Tilawah, dan Puasa adalah standar dan tidak dapat ditambah.', 'error');
      return;
    }
    const newTask = {
      id: `custom-task-${Date.now()}`,
      title,
      category,
      desc
    };
    this.state.tasks.push(newTask);
    this.saveToStorage();
    this.renderChecklist();
    this.renderHeatmap();
    this.updateStats();
    this.showToast('Target amalan baru berhasil ditambahkan!');
  }

  // Delete Task
  deleteTask(taskId) {
    const task = this.state.tasks.find(t => t.id === taskId);
    if (task && (task.category === 'Shalat' || task.category === 'Tilawah' || task.category === 'Puasa')) {
      this.showToast('Amalan kategori Shalat, Tilawah, dan Puasa tidak dapat dihapus.', 'error');
      return;
    }
    const title = task ? task.title : 'amalan ini';
    
    if (confirm(`Hapus target "${title}" dari daftar harian?`)) {
      this.state.tasks = this.state.tasks.filter(t => t.id !== taskId);
      Object.keys(this.state.history).forEach(date => {
        this.state.history[date] = this.state.history[date].filter(id => id !== taskId);
      });
      this.saveToStorage();
      this.renderChecklist();
      this.renderHeatmap();
      this.updateStats();
      this.showToast('Target amalan telah dihapus.');
    }
  }

  // ===================================================================
  // DEVICE MIGRATION: BACKUP (EXPORT) & IMPORT (RESTORE)
  // ===================================================================
  exportBackup() {
    try {
      const backupData = {
        app: 'Mutabaah Yaumiyah',
        version: 2,
        exportedAt: new Date().toISOString(),
        firstUseDate: this.state.firstUseDate,
        profile: this.state.profile,
        theme: this.state.theme,
        tasks: this.state.tasks,
        history: this.state.history
      };

      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const todayStr = this.formatDate(new Date());
      const a = document.createElement('a');
      a.href = url;
      a.download = `mutabaah-backup-${todayStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      this.showToast('File backup berhasil diunduh!');
    } catch (err) {
      console.error('Export error:', err);
      this.showToast('Gagal membuat file backup.', 'error');
    }
  }

  importBackup(file) {
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert('Ukuran file cadangan terlalu besar (maksimal 10MB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);

        const validation = this.validateBackupSchema(imported);
        if (!validation.valid) {
          alert(`File cadangan ditolak: ${validation.message}`);
          return;
        }

        const daysCount = Object.keys(imported.history || {}).length;
        const confirmMsg = `Ditemukan data cadangan yang valid:\n` +
          `- Pengguna: ${this.escapeHtml(imported.profile?.name) || 'Hamba Allah'}\n` +
          `- Target amalan: ${imported.tasks?.length || 0} item\n` +
          `- Catatan riwayat: ${daysCount} hari\n\n` +
          `Apakah kamu ingin memulihkan data ini ke perangkat sekarang?`;

        if (confirm(confirmMsg)) {
          if (imported.profile) this.state.profile = { ...this.state.profile, ...imported.profile };
          if (imported.theme) this.state.theme = { ...this.state.theme, ...imported.theme };
          if (imported.firstUseDate) this.state.firstUseDate = imported.firstUseDate;
          if (imported.tasks) this.state.tasks = imported.tasks;
          if (imported.history) this.state.history = imported.history;

          this.saveToStorage();
          this.applyTheme(this.state.theme.color, this.state.theme.mode);
          this.renderProfile();
          this.renderHeatmap();
          this.renderChecklist();
          this.updateStats();

          this.closeModal('modalBackup');
          this.showToast('Alhamdulillah, seluruh data berhasil dipulihkan!');
        }
      } catch (err) {
        console.error('Import parse error:', err);
        alert('Gagal membaca file JSON. Pastikan file tidak rusak.');
      }
    };
    reader.readAsText(file);
  }

  resetAllData() {
    if (confirm('PERINGATAN: Seluruh data catatan mutaba\'ah akan dihapus permanen dari browser ini. Lanjutkan?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('mutabaah_yaumiyah_data_v1');
      const now = new Date();
      this.state.firstUseDate = this.formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
      this.state.profile = {
        name: 'Hamba Allah',
        handle: 'mutabaah_warrior',
        bio: "Assalamu'alaykum, halo calon member FIRDAUS. :-) Untuk mulai menggunakan, klik tombol BACKUP kemudian HAPUS SEMUA DATA. Jangan lupa lengkapi data diri.",
        status: 'Istiqomah',
        hasCustomAvatar: false,
        hasCustomCover: false,
        avatar: this.getThemeAvatarSvg('orange', 'light'),
        cover: this.getThemeCoverSvg('orange', 'light')
      };
      this.state.theme = { color: 'orange', mode: 'light' };
      this.state.tasks = [...DEFAULT_TASKS];
      this.state.history = {}; // Benar-benar kosong dari awal
      this.state.selectedDate = this.formatDate(now);
      this.state.activeCategory = 'Shalat';
      this.saveToStorage();
      this.applyTheme('orange', 'light');
      this.renderProfile();
      this.renderHeatmap();
      this.renderChecklist();
      this.updateStats();
      this.closeModal('modalBackup');
      this.showToast('Seluruh data berhasil dihapus. Selamat memulai kembali!', 'success');
    }
  }

  // Handle Image Upload with Canvas Compression & Storage Guard
  handleImageUpload(file, type) {
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      this.showToast('Ukuran foto terlalu besar (maksimal 8MB).', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Optimized dimensions to save LocalStorage quota
        const maxDimension = type === 'cover' ? 600 : 200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Quality 0.72 provides great visual clarity while saving ~60-70% payload size
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.72);

        if (type === 'cover') {
          this.state.profile.cover = compressedDataUrl;
          this.state.profile.hasCustomCover = true;
          this.showToast('Cover sampul berhasil diperbarui!');
        } else {
          this.state.profile.avatar = compressedDataUrl;
          this.state.profile.hasCustomAvatar = true;
          this.showToast('Foto profil berhasil diperbarui!');
        }

        this.saveToStorage();
        this.renderProfile();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Day Detail Modal
  openDayDetail(dateStr) {
    const modal = document.getElementById('modalDayDetail');
    const title = document.getElementById('dayDetailTitle');
    const masehiEl = document.getElementById('dayDetailMasehi');
    const subtitle = document.getElementById('dayDetailSubtitle');
    const body = document.getElementById('dayDetailBody');

    const dual = this.formatDualDate(dateStr, false);
    title.textContent = dual.hijriHeading;
    if (masehiEl) {
      masehiEl.textContent = dual.masehiSub;
    }
    const completedSet = new Set(this.state.history[dateStr] || []);
    const progress = this.calculateDailyProgress(dateStr);

    subtitle.textContent = `Tingkat Capaian: ${progress.percent}% (${progress.doneCount} amalan selesai)`;

    let listHtml = '<div class="day-detail-list">';

    // 1. Shalat Fardhu & Pelaksanaan
    listHtml += '<div class="day-detail-group-title">Shalat Fardhu:</div>';
    PRAYERS_CONFIG.forEach(p => {
      const mode = this.getPrayerMode(p.id, dateStr);
      let modeText = '— Belum dikerjakan';
      let isDone = false;
      if (mode === 'tepat-waktu') { modeText = '✓ Jama\'ah Tepat Waktu'; isDone = true; }
      else if (mode === 'jamaah') { modeText = '✓ Berjama\'ah'; isDone = true; }
      else if (mode === 'sendiri') { modeText = '✓ Sendiri'; isDone = true; }

      listHtml += `
        <div class="day-detail-row">
          <span>Shalat ${this.escapeHtml(p.name)}</span>
          <span style="font-weight:700; color: ${isDone ? 'var(--theme-primary)' : 'var(--text-muted)'};">
            ${modeText}
          </span>
        </div>
      `;
    });

    // 2. Shalat Sunnah Rawatib
    listHtml += '<div class="day-detail-group-title" style="margin-top:10px;">Shalat Sunnah Rawatib:</div>';
    PRAYERS_CONFIG.forEach(p => {
      p.rawatib.forEach(r => {
        const isDone = completedSet.has(r.id);
        listHtml += `
          <div class="day-detail-row">
            <span>${this.escapeHtml(r.title)}</span>
            <span style="font-weight:700; color: ${isDone ? 'var(--theme-primary)' : 'var(--text-muted)'};">
              ${isDone ? '✓ Selesai' : '— Belum'}
            </span>
          </div>
        `;
      });
    });

    // 3. Shalat Sunnah
    listHtml += '<div class="day-detail-group-title" style="margin-top:10px;">Shalat Sunnah:</div>';
    SUNNAH_SHALAT_CONFIG.forEach(s => {
      const isDone = completedSet.has(s.id);
      listHtml += `
        <div class="day-detail-row">
          <span>${this.escapeHtml(s.title)}</span>
          <span style="font-weight:700; color: ${isDone ? 'var(--theme-primary)' : 'var(--text-muted)'};">
            ${isDone ? '✓ Selesai' : '— Belum'}
          </span>
        </div>
      `;
    });

    // 4. Tilawah Al-Qur'an
    const tilawahSheets = this.getTilawahSheets(dateStr);
    if (tilawahSheets > 0) {
      listHtml += '<div class="day-detail-group-title" style="margin-top:10px;">Tilawah Al-Qur\'an:</div>';
      listHtml += `
        <div class="day-detail-row">
          <span>Tilawah: ${tilawahSheets} Lembar (${tilawahSheets * 2} Halaman)</span>
          <span style="font-weight:700; color: var(--theme-primary);">✓ Tercapai</span>
        </div>
      `;
    }

    // 5. Puasa
    const puasaDone = PUASA_CONFIG.filter(item => completedSet.has(item.id));
    if (puasaDone.length > 0) {
      listHtml += '<div class="day-detail-group-title" style="margin-top:10px;">Puasa:</div>';
      puasaDone.forEach(item => {
        listHtml += `
          <div class="day-detail-row">
            <span>${this.escapeHtml(item.title)}</span>
            <span style="font-weight:700; color: var(--theme-primary);">✓ Ditunaikan</span>
          </div>
        `;
      });
    }

    // 6. Target Amalan Lainnya
    listHtml += '<div class="day-detail-group-title" style="margin-top:10px;">Daftar Amalan Harian:</div>';
    this.state.tasks.forEach(t => {
      const isDone = completedSet.has(t.id);
      const escapedTaskTitle = this.escapeHtml(t.title);
      listHtml += `
        <div class="day-detail-row">
          <span>${escapedTaskTitle} <small style="color:var(--text-muted)">(${this.escapeHtml(t.category)})</small></span>
          <span style="font-weight:700; color: ${isDone ? 'var(--theme-primary)' : 'var(--text-muted)'};">
            ${isDone ? '✓ Selesai' : '— Belum'}
          </span>
        </div>
      `;
    });

    listHtml += '</div>';
    body.innerHTML = listHtml;

    const btnGo = document.getElementById('btnGoToDay');
    btnGo.onclick = () => {
      this.state.selectedDate = dateStr;
      this.renderChecklist();
      this.renderHeatmap();
      this.closeModal('modalDayDetail');
      document.querySelector('.checklist-section').scrollIntoView({ behavior: 'smooth' });
    };

    this.openModal('modalDayDetail');
  }

  // Modal Control
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('open');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('open');
  }

  // Toast Notification (Wrapped High-Contrast Notification Card)
  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <div class="toast-wrapper">
        <div class="toast-icon-box" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="toast-content">
          <span class="toast-message">${this.escapeHtml(message)}</span>
        </div>
      </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px) scale(0.95)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 320);
    }, 2800);
  }

  // ===================================================================
  // REVIEW JUJUR 7 HARI (Rangkuman & Narasi Penuh Hikmah Tanpa Menggurui)
  // ===================================================================
  openReviewJujurModal() {
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      days.push(d);
    }

    const startDateStr = this.formatDate(days[0]);
    const endDateStr = this.formatDate(days[6]);

    // Subtitle rentang tanggal (Utamakan Hijriyah, Masehi di bawahnya miring non-bold lebih kecil)
    const subtitleEl = document.getElementById('reviewJujurSubtitle');
    if (subtitleEl) {
      const startHijri = this.getHijriDateParts(days[0]);
      const endHijri = this.getHijriDateParts(days[6]);
      const monthNamesMasehi = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      const startMasehi = `${days[0].getDate()} ${monthNamesMasehi[days[0].getMonth()]}`;
      const endMasehi = `${days[6].getDate()} ${monthNamesMasehi[days[6].getMonth()]} ${days[6].getFullYear()} M`;

      subtitleEl.innerHTML = `
        <span class="review-hijri-range">${startHijri.day} ${startHijri.monthName} – ${endHijri.day} ${endHijri.monthName} ${endHijri.year} H</span>
        <span class="date-masehi-sub">${startMasehi} – ${endMasehi}</span>
      `;
    }

    let totalPercentSum = 0;
    let totalAmalanDone = 0;
    let fardhuTepatWaktu = 0;
    let fardhuJamaah = 0;
    let fardhuSendiri = 0;
    let totalFardhu = 0;
    let rawatibCount = 0;
    let sunnahCount = 0;
    let tilawahCount = 0;
    let tilawahSheetsTotal = 0;
    let puasaCount = 0;
    let dzikirCount = 0;
    let sosialCount = 0;
    let jasadiyahCount = 0;
    let fikriyahCount = 0;
    let berkaryaCount = 0;

    let bestDay = null;
    let bestDayPercent = -1;
    let daysWithActivity = 0;

    days.forEach(dateObj => {
      const dateKey = this.formatDate(dateObj);
      const list = this.state.history[dateKey] || [];
      const progress = this.calculateDailyProgress(dateKey);

      totalPercentSum += progress.percent;
      totalAmalanDone += progress.doneCount;

      if (progress.doneCount > 0) daysWithActivity++;

      if (progress.percent > bestDayPercent) {
        bestDayPercent = progress.percent;
        bestDay = dateKey;
      }

      // Hitung shalat fardhu
      ['subuh', 'zuhur', 'ashar', 'maghrib', 'isya'].forEach(pId => {
        const mode = this.getPrayerMode(pId, dateKey);
        if (mode === 'tepat-waktu') { fardhuTepatWaktu++; totalFardhu++; }
        else if (mode === 'jamaah') { fardhuJamaah++; totalFardhu++; }
        else if (mode === 'sendiri') { fardhuSendiri++; totalFardhu++; }
      });

      // Hitung tilawah sheets
      const sheetsToday = this.getTilawahSheets(dateKey);
      if (sheetsToday > 0) {
        tilawahCount++;
        tilawahSheetsTotal += sheetsToday;
      }

      // Hitung amalan lainnya & puasa
      list.forEach(id => {
        if (id.startsWith('puasa-')) puasaCount++;
        else if (id.startsWith('rawatib-')) rawatibCount++;
        else if (id.startsWith('sunnah-')) sunnahCount++;
        else if (id.startsWith('tilawah-')) {
          // already counted via getTilawahSheets
        } else {
          const task = this.state.tasks.find(t => t.id === id);
          if (task) {
            if (task.category === 'Dzikir') dzikirCount++;
            else if (task.category === 'Sosial') sosialCount++;
            else if (task.category === 'Jasadiyah') jasadiyahCount++;
            else if (task.category === 'Fikriyah') fikriyahCount++;
            else if (task.category === 'Berkarya') berkaryaCount++;
          }
        }
      });
    });

    const avgPercent = Math.round(totalPercentSum / 7);
    const userName = this.state.profile.name || 'Sahabat Fillah';

    const narrative = this.generateReviewNarrative({
      userName,
      avgPercent,
      totalAmalanDone,
      daysWithActivity,
      totalFardhu,
      fardhuTepatWaktu,
      fardhuJamaah,
      fardhuSendiri,
      rawatibCount,
      sunnahCount,
      tilawahCount,
      tilawahSheetsTotal,
      puasaCount,
      dzikirCount,
      sosialCount,
      jasadiyahCount,
      fikriyahCount,
      berkaryaCount,
      bestDay: bestDay ? this.formatDualDate(bestDay).hijriHeading : null,
      bestDayPercent
    });

    this._cachedNarrative = narrative;

    // Generate 7-Day Achievement Table HTML & Text Summary (Fokus: Shalat, Tilawah, Puasa, Capaian)
    const dayNames = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

    const startHijri = this.getHijriDateParts(days[0]);
    const endHijri = this.getHijriDateParts(days[days.length - 1]);
    const hijriYearText = (startHijri.year === endHijri.year) ? `${endHijri.year} H` : `${startHijri.year}-${endHijri.year} H`;
    const startMasehiYear = days[0].getFullYear();
    const endMasehiYear = days[days.length - 1].getFullYear();
    const masehiYearText = (startMasehiYear === endMasehiYear) ? `${endMasehiYear} M` : `${startMasehiYear}-${endMasehiYear} M`;
    const tableTitle = `Tabel Pencapaian 7 Hari (${hijriYearText} / ${masehiYearText})`;

    let tableRowsHtml = '';
    const tableTextLines = [];

    // Cache review data for canvas 4:5 image generation
    this._cachedReviewDaysData = {
      userName,
      tableTitle,
      hijriYearText,
      masehiYearText,
      avgPercent,
      totalAmalanDone,
      fardhuTepatWaktu,
      fardhuJamaah,
      tilawahCount,
      tilawahSheetsTotal,
      puasaCount,
      daysData: []
    };

    days.forEach(dateObj => {
      const dateKey = this.formatDate(dateObj);
      const list = this.state.history[dateKey] || [];
      const progress = this.calculateDailyProgress(dateKey);
      const isToday = dateKey === this.formatDate(today);

      const dName = dayNames[dateObj.getDay()];
      const dNum = dateObj.getDate();
      const mName = monthNames[dateObj.getMonth()];
      const hijri = this.getHijriDateParts(dateObj);

      // 1. Shalat detail (fardhu, rawatib, sunnah)
      let shalatTW = 0;
      let shalatJ = 0;
      let shalatS = 0;
      ['subuh', 'zuhur', 'ashar', 'maghrib', 'isya'].forEach(pId => {
        const mode = this.getPrayerMode(pId, dateKey);
        if (mode === 'tepat-waktu') shalatTW++;
        else if (mode === 'jamaah') shalatJ++;
        else if (mode === 'sendiri') shalatS++;
      });
      const shalatDone = shalatTW + shalatJ + shalatS;
      const rawatibDone = list.filter(id => id.startsWith('rawatib-')).length;
      const sunnahShalatDone = list.filter(id => id.startsWith('sunnah-')).length;

      const fardhuParts = [];
      if (shalatTW + shalatJ > 0) fardhuParts.push(`${shalatTW + shalatJ} Jama'ah`);
      if (shalatS > 0) fardhuParts.push(`${shalatS} Sendiri`);

      // 2. Tilawah
      const tilawahSheets = this.getTilawahSheets(dateKey);
      const tilawahText = tilawahSheets > 0 ? `${tilawahSheets} Lembar` : '';

      // 3. Puasa
      const puasaItems = list.filter(id => id.startsWith('puasa-'));
      let puasaCellHtml = '<span class="text-muted">-</span>';
      let puasaTextSummary = '-';
      if (puasaItems.length > 0) {
        const labels = puasaItems.map(id => {
          const cfg = PUASA_CONFIG.find(c => c.id === id);
          if (id === 'puasa-ayyamul-bidh') return '🌕 Ayyamul Bidh';
          if (id === 'puasa-senin') return '🌾 Puasa Senin';
          if (id === 'puasa-kamis') return '🌾 Puasa Kamis';
          if (id === 'puasa-daud') return '🌾 Puasa Daud';
          if (id === 'puasa-qadha') return '🌾 Puasa Qadha';
          return cfg ? `🌾 ${cfg.badge}` : '🌾 Puasa';
        });
        puasaCellHtml = `<span class="review-puasa-badge">${this.escapeHtml(labels.join(', '))}</span>`;
        puasaTextSummary = labels.join(', ');
      }

      // Badge Pct class
      let pctClass = 'pct-zero';
      if (progress.percent >= 75) pctClass = 'pct-high';
      else if (progress.percent >= 50) pctClass = 'pct-mid';
      else if (progress.percent > 0) pctClass = 'pct-low';

      tableRowsHtml += `
        <tr class="${isToday ? 'is-today-row' : ''}">
          <td>
            <strong>${dName}</strong>
            <span class="review-hijri-date">${hijri.day} ${hijri.monthName}</span>
            <span class="date-masehi-sub">${dNum} ${mName} ${dateObj.getFullYear()} M</span>
            ${isToday ? '<span class="review-today-pill">Hari ini</span>' : ''}
          </td>
          <td>
            <div class="review-shalat-group">
              <div class="review-fardhu-summary">
                <strong>${shalatDone}/5 Fardhu</strong>
                ${shalatDone > 0 ? `<span class="review-sub-info">${fardhuParts.join(', ')}</span>` : '<span class="review-sub-info text-muted">0 waktu</span>'}
              </div>
              <div class="review-sunnah-summary">
                ${rawatibDone > 0 ? `<span class="review-mini-pill">${rawatibDone} Rawatib</span>` : ''}
                ${sunnahShalatDone > 0 ? `<span class="review-mini-pill">${sunnahShalatDone} Sunnah</span>` : ''}
                ${rawatibDone === 0 && sunnahShalatDone === 0 ? '<span class="review-sub-info text-muted">Rawatib/Sunnah: -</span>' : ''}
              </div>
            </div>
          </td>
          <td>
            ${tilawahText ? `<span class="review-tilawah-badge">📖 ${this.escapeHtml(tilawahText)}</span>` : '<span class="text-muted">-</span>'}
          </td>
          <td>
            ${puasaCellHtml}
          </td>
          <td style="text-align: right;">
            <span class="review-badge-pct ${pctClass}">${progress.percent}%</span>
          </td>
        </tr>
      `;

      // Text row for clipboard
      const shalatSummaryTxt = `Fardhu ${shalatDone}/5 (${fardhuParts.length > 0 ? fardhuParts.join(', ') : '0'}), Rawatib: ${rawatibDone}, Sunnah: ${sunnahShalatDone}`;
      tableTextLines.push(`• ${dName}, ${hijri.day} ${hijri.monthName} (${dNum} ${mName} ${dateObj.getFullYear()} M)\n  - Shalat : ${shalatSummaryTxt}\n  - Tilawah: ${tilawahText || '-'}\n  - Puasa  : ${puasaTextSummary}\n  - Capaian: ${progress.percent}%`);

      // Store in canvas cache
      this._cachedReviewDaysData.daysData.push({
        dName,
        hijriStr: `${hijri.day} ${hijri.monthName} H`,
        masehiStr: `${dNum} ${mName} ${dateObj.getFullYear()} M`,
        isToday,
        shalatDone,
        fardhuPartsText: fardhuParts.length > 0 ? fardhuParts.join(', ') : '0 waktu',
        rawatibDone,
        sunnahShalatDone,
        tilawahText: tilawahText || '-',
        puasaText: puasaTextSummary,
        percent: progress.percent
      });
    });

    const tableHeaderTxt = [
      `══════════════════════════════════════════════════`,
      `${tableTitle.toUpperCase()}`,
      `Nama: ${userName} | Rata-rata: ${avgPercent}%`,
      `══════════════════════════════════════════════════`
    ].join('\n');
    const tableFooterTxt = [
      `──────────────────────────────────────────────────`,
      `Rata-rata 7 Hari : ${avgPercent}% (Total ${totalAmalanDone} amalan)`,
      `Shalat Jama'ah/TW: ${fardhuTepatWaktu + fardhuJamaah}x | Tilawah: ${tilawahCount} hari (${tilawahSheetsTotal} Lembar) | Puasa: ${puasaCount} hari`,
      `mastatag.com • Mutaba'ah Yaumiyah`,
      `══════════════════════════════════════════════════`
    ].join('\n');
    this._cachedTableText = `${tableHeaderTxt}\n${tableTextLines.join('\n\n')}\n${tableFooterTxt}`;

    const bodyEl = document.getElementById('reviewJujurBody');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="review-stats-grid">
          <div class="review-stat-card">
            <div class="review-stat-value">${avgPercent}%</div>
            <div class="review-stat-label">Rata-rata Capaian</div>
          </div>
          <div class="review-stat-card">
            <div class="review-stat-value">${totalAmalanDone}</div>
            <div class="review-stat-label">Total Amalan Selesai</div>
          </div>
          <div class="review-stat-card">
            <div class="review-stat-value">${fardhuTepatWaktu + fardhuJamaah}x</div>
            <div class="review-stat-label">Shalat Berjama'ah / TW</div>
          </div>
          <div class="review-stat-card">
            <div class="review-stat-value">${tilawahSheetsTotal > 0 ? `${tilawahSheetsTotal} Lmb` : `${tilawahCount}x`} / ${puasaCount} hari</div>
            <div class="review-stat-label">Tilawah & Puasa</div>
          </div>
        </div>

        <div class="review-narrative-container">
          <div class="review-narrative-header">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Catatan Muhasabah Diri</span>
          </div>
          <div class="review-narrative-text" id="reviewNarrativeText">
            ${narrative.split('\n\n').map(p => {
              const safe = this.escapeHtml(p);
              const withBold = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return `<p>${withBold}</p>`;
            }).join('')}
          </div>
        </div>

        <!-- Tabel Pencapaian Selama 7 Hari (Fokus: Shalat, Tilawah, Puasa, Capaian) -->
        <div class="review-table-container">
          <div class="review-table-header">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <span>${tableTitle}</span>
          </div>
          <div class="review-table-scroll">
            <table class="review-table">
              <thead>
                <tr>
                  <th>Hari / Tgl</th>
                  <th>Shalat (Fardhu &amp; Sunnah)</th>
                  <th>Tilawah</th>
                  <th>Puasa</th>
                  <th style="text-align: right;">Capaian</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    this.openModal('modalReviewJujur');
  }

  // Generate Review Narrative: Condense into exactly 4 paragraphs with rich bold data
  generateReviewNarrative(data) {
    const {
      userName,
      avgPercent,
      totalAmalanDone,
      daysWithActivity,
      totalFardhu,
      fardhuTepatWaktu,
      fardhuJamaah,
      fardhuSendiri,
      rawatibCount,
      sunnahCount,
      tilawahCount,
      tilawahSheetsTotal,
      puasaCount,
      dzikirCount,
      sosialCount,
      jasadiyahCount,
      fikriyahCount,
      berkaryaCount,
      bestDay,
      bestDayPercent
    } = data;

    const paragraphs = [];

    // PARAGRAF 1: Pembuka & Potret Sepekan
    let p1 = `Bismillahirrohmaanirrohiim. Assalamu’alaykum warahmatullah duhai **${userName}**... `;
    p1 += `**7 hari** baru saja bergulir, menjadi saksi bisu atas setiap hembusan nafas, ikhtiar, dan lelah yang kau persembahkan di hadapan Allah. `;
    p1 += `Dalam sepekan ini, rata-rata konsistensi ibadahmu mencapai **${avgPercent}%** dengan total **${totalAmalanDone} amalan kebaikan** yang tertoreh di lembaran catatan amal.`;
    if (bestDay && bestDayPercent > 0) {
      p1 += ` Momentum terindahmu hadir pada hari **${bestDay}** dengan capaian konsistensi menyentuh **${bestDayPercent}%**, membuktikan bahwa jiwamu senantiasa memiliki potensi istiqomah yang luar biasa.`;
    }
    paragraphs.push(p1);

    // PARAGRAF 2: Sujud & Tiang Shalat (Fardhu, Jama'ah, Rawatib, Sunnah)
    let p2 = '';
    const jamaahTotal = fardhuTepatWaktu + fardhuJamaah;
    if (totalFardhu === 0) {
      p2 = `Menatap lembaran shalat sepekan ini yang masih tampak sunyi, barangkali keletihan raga atau himpitan urusan sedang membebani pundakmu. Ketahuilah, sujud bukanlah penambah beban, melainkan oase tempat jiwa bersandar menumpahkan segenap rasa lelah. Mulailah kembali dengan satu waktu shalat terdekat; sambut seruan azan dengan bisikan hati yang tulus: 'Hamba kembali kepada-Mu, ya Rabb.'`;
    } else {
      p2 = `Dari **35 waktu shalat fardhu** sepekan ini, tercatat **${totalFardhu} waktu** berhasil kau tegakkan dengan kesungguhan hati. `;
      if (jamaahTotal > 0) {
        p2 += `Sebanyak **${jamaahTotal} kali** di antaranya kau penuhi dalam indahnya shaf jama'ah dan ketepatan waktu${fardhuSendiri > 0 ? `, sementara **${fardhuSendiri} waktu** tertunaikan sendiri di sela kesibukan` : ''}. `;
      } else {
        p2 += `Walau tertunaikan sendiri (**${fardhuSendiri} waktu**), tegaknya tiang agamamu adalah pondasi yang amat berharga. `;
      }
      if (rawatibCount + sunnahCount > 0) {
        p2 += `Keindahan sujudmu pun disempurnakan oleh **${rawatibCount + sunnahCount} amalan sunnah dan rawatib** yang laksana perhiasan pelengkap shalat fardhumu.`;
      } else {
        p2 += `Semoga di pekan mendatang, bait-bait rawatib dan shalat sunnah dapat turut menghiasi keseharianmu.`;
      }
    }
    paragraphs.push(p2);

    // PARAGRAF 3: Ruhiyah (Tilawah & Puasa) serta Amal Nyata (Sosial, Jasmani, Fikriyah, Berkarya)
    const muamalahTotal = sosialCount + jasadiyahCount + fikriyahCount + berkaryaCount;
    let p3 = '';
    const ruhiyahParts = [];
    if (tilawahSheetsTotal > 0 || tilawahCount > 0) {
      const sheetsText = tilawahSheetsTotal > 0 ? `${tilawahSheetsTotal} lembar` : `${tilawahCount} capaian`;
      ruhiyahParts.push(`bacaan **${sheetsText} Al-Qur'an**`);
    }
    if (dzikirCount > 0) {
      ruhiyahParts.push(`**${dzikirCount} untaian dzikir & doa**`);
    }
    if (puasaCount > 0) {
      ruhiyahParts.push(`**${puasaCount} hari berpuasa**`);
    }

    if (ruhiyahParts.length > 0) {
      p3 += `Lisan dan ragamu yang sempat dihidupkan oleh ${ruhiyahParts.join(', ')} menjadi penyejuk di tengah hiruk-pikuk dunia. `;
    } else {
      p3 += `Bila mushaf, bait dzikir, atau puasa sunnah belum sempat terisi optimal pekan ini, jangan berputus asa; bukalah lembaran mushaf hari ini walau sejenak. `;
    }

    if (muamalahTotal > 0) {
      p3 += `Di luar sajadah, engkau melengkapinya dengan **${muamalahTotal} ikhtiar kebaikan** (sedekah sosial, ikhtiar sehat jasmani, menuntut ilmu fikriyah, dan amanah berkarya). Setiap senyum, peluh nafkah halal, dan kebaikan sosial adalah sedekah berbobot berat di timbangan akhirat.`;
    } else {
      p3 += `Ibadah tak hanya di atas sajadah; niatkan setiap aktivitas keseharianmu sebagai ladang amal yang bernilai pahala.`;
    }
    paragraphs.push(p3);

    // PARAGRAF 4: Nasihat Muhasabah & Doa Penutup
    paragraphs.push(
      `Duhai hamba yang dirahmati Allah... Ingatlah bahwa mutaba'ah ini bukanlah vonis celaan, melainkan cermin kejujuran nurani untuk mengukur langkah kita. Hakikat istiqomah bukanlah kesempurnaan tanpa noda, melainkan ketulusan untuk selalu kembali bersujud tiap kali khilaf menyapa. Mari beristighfar atas kekurangan sepekan lalu, bersyukur atas setiap hidayah-Nya, dan melangkah ke depan dengan bismillah: niat yang lebih murni dan cinta yang lebih mendalam kepada Allah Ta'ala.`
    );

    return paragraphs.join('\n\n');
  }

  // Copy ONLY the table text to clipboard
  copyReviewTableOnly() {
    const tableText = this._cachedTableText || '';
    if (!tableText) {
      this.showToast('Tabel belum siap untuk disalin.', 'error');
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tableText).then(() => {
        this.showToast('Alhamdulillah, tabel pencapaian 7 hari berhasil disalin!');
      }).catch(() => {
        this.fallbackCopyText(tableText, 'Alhamdulillah, tabel pencapaian 7 hari berhasil disalin!');
      });
    } else {
      this.fallbackCopyText(tableText, 'Alhamdulillah, tabel pencapaian 7 hari berhasil disalin!');
    }
  }

  // Download 7-Day Achievement Table as 4:5 Instagram Post (1080x1350 px)
  downloadReviewImage() {
    const data = this._cachedReviewDaysData;
    if (!data || !data.daysData || data.daysData.length === 0) {
      this.showToast('Data tabel 7 hari belum tersedia.', 'error');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    const themeKey = this.state.theme?.color || 'green';
    const mode = this.state.theme?.mode || 'dark';
    const palette = OPEN_COLOR_PALETTES[themeKey] || OPEN_COLOR_PALETTES.green;
    const c = palette.colors;

    const isLightMode = mode !== 'dark';
    const bgCanvas = mode === 'theme-dark' ? c[4] : (mode === 'theme-light' ? c[2] : (mode === 'light' ? '#f8f9fa' : '#0c0e12'));
    const bgCard = (mode === 'dark') ? '#15181e' : '#ffffff';
    const bgSurface = (mode === 'dark') ? '#1f242c' : (mode === 'theme-dark' ? (c[0] || '#fff4e6') : (mode === 'theme-light' ? (c[0] || '#fff4e6') : '#f1f3f5'));
    const textPrimary = (mode === 'dark') ? '#ffffff' : '#1e1e1e';
    const textSecondary = (mode === 'dark') ? '#ced4da' : '#343a40';
    const textMuted = (mode === 'dark') ? '#868e96' : '#687076';
    const borderCol = (mode === 'dark') ? '#2d333b' : (mode === 'theme-dark' ? c[5] : (mode === 'theme-light' ? c[3] : '#dee2e6'));
    const primaryCol = (mode === 'dark') ? c[5] : (themeKey === 'yellow' || themeKey === 'lime' ? c[8] : c[7]);

    // Helper: Rounded Rectangle
    const roundRect = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    // 1. Draw Full Canvas Background
    ctx.fillStyle = bgCanvas;
    ctx.fillRect(0, 0, 1080, 1350);

    // 2. Draw Main White/Dark Card Container
    const cardX = 40;
    const cardY = 40;
    const cardW = 1000;
    const cardH = 1270;
    const cardR = 28;

    roundRect(cardX, cardY, cardW, cardH, cardR);
    ctx.fillStyle = bgCard;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = borderCol;
    ctx.stroke();

    // 3. Top App Header / Badge
    const badgeW = 280;
    const badgeH = 34;
    const badgeX = cardX + (cardW - badgeW) / 2;
    const badgeY = cardY + 30;
    roundRect(badgeX, badgeY, badgeW, badgeH, 17);
    ctx.fillStyle = bgSurface;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderCol;
    ctx.stroke();

    ctx.font = '600 13px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = primaryCol;
    ctx.textAlign = 'center';
    ctx.fillText("MUTABA'AH YAUMIYAH • 7 HARI", badgeX + badgeW / 2, badgeY + 22);

    // Title: Tabel Pencapaian 7 Hari
    ctx.font = '700 32px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = textPrimary;
    ctx.textAlign = 'center';
    ctx.fillText(data.tableTitle || 'Tabel Pencapaian 7 Hari', 540, cardY + 100);

    // Subtitle: User Name & Period
    ctx.font = '500 17px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = textSecondary;
    ctx.fillText(`Muhasabah ${data.userName} • Evaluasi Konsistensi Amalan`, 540, cardY + 130);

    // 4. 4 KPI Stat Cards
    const kpiY = cardY + 158;
    const kpiH = 88;
    const kpiGap = 16;
    const kpiW = (cardW - 60 - (kpiGap * 3)) / 4;
    const kpis = [
      { val: `${data.avgPercent}%`, label: 'Rata-rata Capaian' },
      { val: `${data.totalAmalanDone}`, label: 'Total Amalan' },
      { val: `${data.fardhuTepatWaktu + data.fardhuJamaah}x`, label: "Jama'ah / TW" },
      { val: `${data.tilawahSheetsTotal || data.tilawahCount} Lmb`, label: 'Total Tilawah' }
    ];

    kpis.forEach((kpi, idx) => {
      const kX = cardX + 30 + idx * (kpiW + kpiGap);
      roundRect(kX, kpiY, kpiW, kpiH, 14);
      ctx.fillStyle = bgSurface;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = borderCol;
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.font = '700 24px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = primaryCol;
      ctx.fillText(kpi.val, kX + kpiW / 2, kpiY + 40);

      ctx.font = '500 13px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textSecondary;
      ctx.fillText(kpi.label, kX + kpiW / 2, kpiY + 68);
    });

    // 5. Table Header
    const thY = cardY + 270;
    const thH = 46;
    const tblX = cardX + 30;
    const tblW = cardW - 60;
    roundRect(tblX, thY, tblW, thH, 10);
    ctx.fillStyle = bgSurface;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderCol;
    ctx.stroke();

    ctx.font = '600 14px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = textPrimary;
    ctx.textAlign = 'left';
    ctx.fillText('HARI / TANGGAL', tblX + 20, thY + 29);
    ctx.fillText('SHALAT (FARDHU & SUNNAH)', tblX + 240, thY + 29);
    ctx.fillText('TILAWAH', tblX + 540, thY + 29);
    ctx.fillText('PUASA', tblX + 710, thY + 29);
    ctx.textAlign = 'right';
    ctx.fillText('CAPAIAN', tblX + tblW - 20, thY + 29);

    // 6. 7 Table Rows
    let rowY = thY + thH + 12;
    const rowH = 100;
    const rowGap = 8;

    data.daysData.forEach((day, index) => {
      const isAlt = index % 2 === 1;
      roundRect(tblX, rowY, tblW, rowH, 12);
      ctx.fillStyle = day.isToday ? (isLightMode ? '#e7f5ff' : '#182438') : (isAlt ? bgSurface : bgCard);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = day.isToday ? primaryCol : borderCol;
      ctx.stroke();

      // Col 1: Hari & Tanggal
      ctx.textAlign = 'left';
      ctx.font = '700 17px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textPrimary;
      ctx.fillText(day.dName, tblX + 20, rowY + 32);

      ctx.font = '600 13px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = primaryCol;
      ctx.fillText(day.hijriStr, tblX + 20, rowY + 54);

      ctx.font = 'italic 12px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textMuted;
      ctx.fillText(day.masehiStr, tblX + 20, rowY + 76);

      // Col 2: Shalat
      ctx.font = '700 16px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textPrimary;
      ctx.fillText(`${day.shalatDone}/5 Fardhu`, tblX + 240, rowY + 32);

      ctx.font = '500 12px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textSecondary;
      ctx.fillText(day.fardhuPartsText, tblX + 240, rowY + 54);

      let sunnahTxt = [];
      if (day.rawatibDone > 0) sunnahTxt.push(`${day.rawatibDone} Rawatib`);
      if (day.sunnahShalatDone > 0) sunnahTxt.push(`${day.sunnahShalatDone} Sunnah`);
      ctx.fillStyle = textMuted;
      ctx.fillText(sunnahTxt.length > 0 ? sunnahTxt.join(' • ') : 'Rawatib/Sunnah: -', tblX + 240, rowY + 76);

      // Col 3: Tilawah
      ctx.font = '600 14px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = day.tilawahText !== '-' ? primaryCol : textMuted;
      ctx.fillText(day.tilawahText !== '-' ? `📖 ${day.tilawahText}` : '-', tblX + 540, rowY + 50);

      // Col 4: Puasa
      ctx.font = '600 14px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = day.puasaText !== '-' ? '#2b8a3e' : textMuted;
      ctx.fillText(day.puasaText !== '-' ? `🌾 ${day.puasaText}` : '-', tblX + 710, rowY + 50);

      // Col 5: Capaian Badge Pill
      const pctBadgeW = 86;
      const pctBadgeH = 34;
      const pctBadgeX = tblX + tblW - pctBadgeW - 20;
      const pctBadgeY = rowY + (rowH - pctBadgeH) / 2;
      roundRect(pctBadgeX, pctBadgeY, pctBadgeW, pctBadgeH, 17);

      let pctBg = isLightMode ? '#e9ecef' : '#2b313b';
      let pctColor = textSecondary;
      if (day.percent >= 75) {
        pctBg = isLightMode ? '#d3f9d8' : '#143823';
        pctColor = isLightMode ? '#2b8a3e' : '#51cf66';
      } else if (day.percent >= 50) {
        pctBg = isLightMode ? '#fff3bf' : '#3d3415';
        pctColor = isLightMode ? '#e67700' : '#fcc419';
      }
      ctx.fillStyle = pctBg;
      ctx.fill();

      ctx.font = '700 15px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = pctColor;
      ctx.textAlign = 'center';
      ctx.fillText(`${day.percent}%`, pctBadgeX + pctBadgeW / 2, pctBadgeY + 23);

      rowY += rowH + rowGap;
    });

    // 7. Footer Divider & Branding
    const footerY = cardY + cardH - 85;
    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cardX + 30, footerY);
    ctx.lineTo(cardX + cardW - 30, footerY);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.font = 'italic 13px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = textMuted;
    ctx.fillText('“Amalan yang paling dicintai Allah adalah yang terus-menerus walau sedikit.” (HR. Bukhari)', 540, footerY + 30);

    ctx.font = '600 15px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = primaryCol;
    ctx.fillText('🌐 mastatag.com • Mutaba\'ah Yaumiyah', 540, footerY + 58);

    // 8. Trigger PNG Download
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `mutabaah-7hari-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showToast('Alhamdulillah, gambar tabel 7 hari (Instagram 4:5) berhasil diunduh! 📸');
    } catch (err) {
      console.error('Download error:', err);
      this.showToast('Gagal mengunduh gambar tabel.', 'error');
    }
  }

  fallbackCopyText(text, successMsg = 'Teks berhasil disalin!') {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      this.showToast(successMsg);
    } catch (e) {
      this.showToast('Gagal menyalin teks.', 'error');
    }
    document.body.removeChild(ta);
  }

  // ===================================================================
  // EVENT LISTENERS & BINDINGS
  // ===================================================================
  bindEvents() {
    // Theme Mode Switchers (Light, Dark, Terang Tema, Gelap Tema)
    const btnLight = document.getElementById('btnModeLight');
    const btnDark = document.getElementById('btnModeDark');
    const btnThemeLight = document.getElementById('btnModeThemeLight');
    const btnThemeDark = document.getElementById('btnModeThemeDark');

    btnLight?.addEventListener('click', () => {
      this.applyTheme(this.state.theme.color, 'light');
      this.showToast('Mode Terang diaktifkan');
    });

    btnDark?.addEventListener('click', () => {
      this.applyTheme(this.state.theme.color, 'dark');
      this.showToast('Mode Gelap diaktifkan');
    });

    btnThemeLight?.addEventListener('click', () => {
      this.applyTheme(this.state.theme.color, 'theme-light');
      this.showToast('Mode Terang Tema diaktifkan');
    });

    btnThemeDark?.addEventListener('click', () => {
      this.applyTheme(this.state.theme.color, 'theme-dark');
      this.showToast('Mode Gelap Tema diaktifkan');
    });

    // Theme Modal Triggers
    const openThemeModal = () => {
      this.renderThemeModalUI();
      this.openModal('modalTheme');
    };
    document.getElementById('btnThemeModal')?.addEventListener('click', openThemeModal);
    document.getElementById('navTheme')?.addEventListener('click', openThemeModal);

    // Review Jujur 7 Hari Modal Trigger
    document.getElementById('btnReviewJujur')?.addEventListener('click', () => {
      this.openReviewJujurModal();
    });

    // Copy Review Table Only
    document.getElementById('btnCopyNarrative')?.addEventListener('click', () => {
      this.copyReviewTableOnly();
    });

    // Download Review Table Image (Instagram 4:5)
    document.getElementById('btnDownloadImage')?.addEventListener('click', () => {
      this.downloadReviewImage();
    });

    // Status Pill click -> Open Status Modal
    const statusPill = document.getElementById('userStatusPill');
    statusPill?.addEventListener('click', () => {
      this.openModal('modalStatusPicker');
    });

    // Status Picker Options Click
    document.querySelectorAll('.status-card-item').forEach(card => {
      card.addEventListener('click', () => {
        const val = card.dataset.statusVal;
        this.setStatus(val);
      });
    });

    // Apply custom status button
    document.getElementById('btnApplyCustomStatus')?.addEventListener('click', () => {
      const input = document.getElementById('inputCustomStatus');
      const val = input.value.trim();
      if (val) {
        this.setStatus(val);
        input.value = '';
      }
    });

    // Date Navigation
    document.getElementById('btnPrevDate').addEventListener('click', () => {
      const cur = this.parseDate(this.state.selectedDate);
      cur.setDate(cur.getDate() - 1);
      this.state.selectedDate = this.formatDate(cur);
      this.renderChecklist();
      this.renderHeatmap();
    });

    document.getElementById('btnNextDate').addEventListener('click', () => {
      const cur = this.parseDate(this.state.selectedDate);
      cur.setDate(cur.getDate() + 1);
      this.state.selectedDate = this.formatDate(cur);
      this.renderChecklist();
      this.renderHeatmap();
    });

    // Calendar Input Change
    document.getElementById('datePickerInput').addEventListener('change', (e) => {
      if (e.target.value) {
        this.state.selectedDate = e.target.value;
        this.renderChecklist();
        this.renderHeatmap();
      }
    });

    // Category Tabs Filter Click
    const tabs = document.querySelectorAll('#categoryTabs .tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.state.activeCategory = tab.dataset.category;
        this.renderChecklist();
      });
    });

    // Global Keyboard: Escape key closes any active modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-backdrop.open');
        if (activeModal && activeModal.id) {
          this.closeModal(activeModal.id);
        }
      }
    });

    // Event Delegation: Heatmap Grid (Click & Keyboard Enter/Space)
    const heatmapGrid = document.getElementById('heatmapGrid');
    heatmapGrid?.addEventListener('click', (e) => {
      const cell = e.target.closest('.heatmap-cell');
      if (cell && cell.dataset.date) {
        const curDate = this.parseDate(cell.dataset.date);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        if (curDate <= today) {
          this.openDayDetail(cell.dataset.date);
        }
      }
    });

    heatmapGrid?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const cell = e.target.closest('.heatmap-cell');
        if (cell && cell.dataset.date) {
          e.preventDefault();
          const curDate = this.parseDate(cell.dataset.date);
          const today = new Date();
          today.setHours(23, 59, 59, 999);
          if (curDate <= today) {
            this.openDayDetail(cell.dataset.date);
          }
        }
      }
    });

    // Event Delegation: Daily Checklist (Prayer Pills, Tilawah Stepper, Sedekah Actions, Items, & Delete Task)
    const todoList = document.getElementById('todoList');
    todoList?.addEventListener('click', (e) => {
      // 1. Delete button
      const delBtn = e.target.closest('.btn-delete-task');
      if (delBtn && delBtn.dataset.id) {
        e.stopPropagation();
        this.deleteTask(delBtn.dataset.id);
        return;
      }

      // 2. Sedekah Subuh Actions: Apresiasi Creator (QRIS) & Gaza Link
      const qrisBtn = e.target.closest('[data-action="open-qris"]');
      if (qrisBtn) {
        e.stopPropagation();
        this.openModal('modalQris');
        return;
      }

      const palestinaLink = e.target.closest('.btn-palestina');
      if (palestinaLink) {
        e.stopPropagation();
        return; // Normal link click opens new window/tab
      }

      // 3. Tilawah Stepper Minus
      const btnMinus = e.target.closest('#btnTilawahMinus');
      if (btnMinus) {
        e.stopPropagation();
        const cur = this.getTilawahSheets(this.state.selectedDate);
        if (cur > 0) this.setTilawahSheets(cur - 1, this.state.selectedDate);
        return;
      }

      // 4. Tilawah Stepper Plus
      const btnPlus = e.target.closest('#btnTilawahPlus');
      if (btnPlus) {
        e.stopPropagation();
        const cur = this.getTilawahSheets(this.state.selectedDate);
        this.setTilawahSheets(cur + 1, this.state.selectedDate);
        return;
      }

      // 5. Prayer execution mode pill (Sendiri, Jama'ah, Jama'ah Tepat Waktu)
      const prayerPill = e.target.closest('.prayer-pill');
      if (prayerPill && prayerPill.dataset.fardhu && prayerPill.dataset.mode) {
        this.setPrayerMode(prayerPill.dataset.fardhu, prayerPill.dataset.mode, this.state.selectedDate);
        return;
      }

      // 7. Tilawah milestone pill (legacy compatibility)
      const tilawahPill = e.target.closest('.tilawah-pill');
      if (tilawahPill && tilawahPill.dataset.taskId) {
        this.toggleTask(tilawahPill.dataset.taskId, this.state.selectedDate);
        return;
      }

      // 8. Regular or rawatib checkbox item
      const itemEl = e.target.closest('.todo-item');
      if (itemEl && itemEl.dataset.taskId) {
        this.toggleTask(itemEl.dataset.taskId, this.state.selectedDate);
      }
    });

    // Input/Change event for Tilawah number input
    todoList?.addEventListener('change', (e) => {
      if (e.target && e.target.id === 'tilawahSheetsInput') {
        const val = parseInt(e.target.value, 10);
        this.setTilawahSheets(isNaN(val) ? 0 : val, this.state.selectedDate);
      }
    });

    todoList?.addEventListener('keydown', (e) => {
      if (e.target && e.target.id === 'tilawahSheetsInput') {
        if (e.key === 'Enter') {
          e.preventDefault();
          const val = parseInt(e.target.value, 10);
          this.setTilawahSheets(isNaN(val) ? 0 : val, this.state.selectedDate);
        }
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.btn-delete-task')) return;
        if (e.target.closest('[data-action="open-qris"]')) return;
        if (e.target.closest('.btn-palestina')) return;

        const prayerPill = e.target.closest('.prayer-pill');
        if (prayerPill && prayerPill.dataset.fardhu && prayerPill.dataset.mode) {
          e.preventDefault();
          this.setPrayerMode(prayerPill.dataset.fardhu, prayerPill.dataset.mode, this.state.selectedDate);
          return;
        }

        const tilawahPill = e.target.closest('.tilawah-pill');
        if (tilawahPill && tilawahPill.dataset.taskId) {
          e.preventDefault();
          this.toggleTask(tilawahPill.dataset.taskId, this.state.selectedDate);
          return;
        }

        const itemEl = e.target.closest('.todo-item');
        if (itemEl && itemEl.dataset.taskId) {
          e.preventDefault();
          this.toggleTask(itemEl.dataset.taskId, this.state.selectedDate);
        }
      }
    });

    // Generic Modal Close buttons
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.closeModal(btn.dataset.close);
      });
    });

    // Backdrop click close
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('open');
        }
      });
    });

    // Edit Profile Modal Handling
    document.getElementById('btnEditProfile').addEventListener('click', () => {
      document.getElementById('inputName').value = this.state.profile.name;
      document.getElementById('inputHandle').value = this.state.profile.handle;
      document.getElementById('inputBio').value = this.state.profile.bio;

      const currentStatus = this.state.profile.status || 'Istiqomah';
      const sel = document.getElementById('selectProfileStatus');
      const customGroup = document.getElementById('groupCustomStatus');
      const inputCustom = document.getElementById('inputStatus');

      if (['Istiqomah', 'Iman lagi naik', 'Iman lagi turun'].includes(currentStatus)) {
        sel.value = currentStatus;
        customGroup.style.display = 'none';
      } else {
        sel.value = 'custom';
        customGroup.style.display = 'block';
        inputCustom.value = currentStatus;
      }

      this.openModal('modalEditProfile');
    });

    // Select status dropdown change in edit profile modal
    document.getElementById('selectProfileStatus')?.addEventListener('change', (e) => {
      const customGroup = document.getElementById('groupCustomStatus');
      if (e.target.value === 'custom') {
        customGroup.style.display = 'block';
      } else {
        customGroup.style.display = 'none';
      }
    });

    // Form: Edit Profile Submit
    document.getElementById('formEditProfile').addEventListener('submit', (e) => {
      e.preventDefault();
      this.state.profile.name = document.getElementById('inputName').value.trim();
      this.state.profile.handle = document.getElementById('inputHandle').value.trim();
      this.state.profile.bio = document.getElementById('inputBio').value.trim();

      const selStatus = document.getElementById('selectProfileStatus').value;
      if (selStatus === 'custom') {
        this.state.profile.status = document.getElementById('inputStatus').value.trim() || 'Istiqomah';
      } else {
        this.state.profile.status = selStatus;
      }

      this.saveToStorage();
      this.renderProfile();
      this.closeModal('modalEditProfile');
      this.showToast('Profil berhasil disimpan!');
    });

    // Change Cover Photo
    const coverBtn = document.getElementById('btnChangeCover');
    const coverInput = document.getElementById('coverFileInput');
    coverBtn.addEventListener('click', () => coverInput.click());
    coverInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        this.handleImageUpload(e.target.files[0], 'cover');
      }
    });

    // Change Avatar Photo
    const avatarBtn = document.getElementById('btnChangeAvatar');
    const avatarInput = document.getElementById('avatarFileInput');
    avatarBtn.addEventListener('click', () => avatarInput.click());
    avatarInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        this.handleImageUpload(e.target.files[0], 'avatar');
      }
    });

    // Open Add Task Modal
    document.getElementById('btnOpenAddTask').addEventListener('click', () => {
      document.getElementById('formAddTask').reset();
      this.openModal('modalAddTask');
    });

    // Form: Add Task Submit
    document.getElementById('formAddTask').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('inputTaskTitle').value.trim();
      const category = document.getElementById('selectTaskCategory').value;
      const target = document.getElementById('inputTaskTarget').value.trim();
      if (title) {
        this.addTask(title, category, target);
        this.closeModal('modalAddTask');
      }
    });

    // Open Backup Modal
    const openBackup = () => this.openModal('modalBackup');
    document.getElementById('btnBackupModal')?.addEventListener('click', openBackup);
    document.getElementById('navBackup')?.addEventListener('click', openBackup);

    // Export Data (Backup)
    document.getElementById('btnExportData').addEventListener('click', () => {
      this.exportBackup();
    });

    // Import Data
    const importInput = document.getElementById('importFileInput');
    importInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        this.importBackup(e.target.files[0]);
        importInput.value = '';
      }
    });

    // Reset Data
    document.getElementById('btnResetData').addEventListener('click', () => {
      this.resetAllData();
    });

    // Bottom Navigation Quick Links
    document.getElementById('navHome').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('navHeatmapScroll').addEventListener('click', () => {
      document.querySelector('.github-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Resize event: re-render heatmap so grid dynamically fills screen width if orientation/size changes
    window.addEventListener('resize', () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(() => {
        this.renderHeatmap();
      }, 150);
    });
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.mutabaahApp = new MutabaahApp();
});
