import { Ending, PathKey, Scene } from './types';

export const SCENES: Scene[] = [
  {
    id: 'babak_1',
    chapterNumber: 1,
    totalChapters: 6,
    dayLabel: 'Hari 01',
    timeLocation: '23.15 WIB · Kamar Kos Usai Sidang',
    title: 'Senyap Setelah Tepuk Tangan',
    illustrationId: 'post_defense',
    paragraphs: [
      'Selempang "S.Kom" masih tergantung di punggung kursi. Tadi siang ruang sidang penuh senyum, bunga kertas, dan ucapan selamat yang bertubi-tubi. Sekarang, yang tersisa di kamar kos hanya suara kipas angin dan tumpukan draf revisi yang belum sempat kamu sentuh.',
      'Kamu membuka ponsel. Di beranda, Nadia mengunggah surat penerimaan (LoA) S2 di luar negeri dengan takarir penuh syukur. Dua geseran ke bawah, Dimas sudah memajang kartu akses kantor barunya di kawasan SCBD. Di grup keluarga, Tante Rina ikut berkomentar: "Alhamdulillah lulus! Habis ini langsung kerja atau lanjut S2 nih?"',
      'Jempolmu berhenti di atas layar yang masih menyala. Euforia siang tadi mendadak berubah menjadi satu pertanyaan yang belum punya jawaban pasti.',
    ],
    promptQuestion: 'Malam ini, bagaimana kamu merespons riuh ekspektasi di layar ponselmu?',
    choices: [
      {
        id: 'b1_c1',
        keyLabel: 'A',
        label: 'Tutup media sosial, lalu buka catatan pengeluaran pribadi',
        sublabel: 'Menghitung realistis berapa bulan tabunganmu bisa bertahan tanpa kiriman orang tua.',
        effects: { finansial: 10, mental: 5, tujuan: 8 },
        pathAffinity: 'karier',
        pathWeight: 2,
        reactionText:
          'Kamu meletakkan ponsel telungkup di meja dan membuka buku kas kecil. Melihat angka riil ternyata sedikit menenangkan—setidaknya kamu tahu di mana pijakanmu malam ini.',
        journalNote: 'Memilih menenangkan diri dengan melihat realitas finansial daripada membandingkan linimasa.',
        nextSceneId: 'babak_2',
      },
      {
        id: 'b1_c2',
        keyLabel: 'B',
        label: 'Balas pesan Tante dengan sopan, lalu cari info riset & beasiswa S2',
        sublabel: 'Membandingkan syarat kampus tujuan dan mengingat topik skripsi yang masih bikin penasaran.',
        effects: { finansial: -2, mental: -4, tujuan: 12 },
        pathAffinity: 'akademik',
        pathWeight: 2,
        reactionText:
          'Kamu membuka belasan tab laman beasiswa hingga mata perih. Lelah, tapi ada percikan rasa ingin tahu yang terasa akrab saat membaca silabus riset.',
        journalNote: 'Mulai memetakan jalur studi lanjut dan mencari tahu apakah rasa ingin tahumu masih menyala.',
        nextSceneId: 'babak_2',
      },
      {
        id: 'b1_c3',
        keyLabel: 'C',
        label: 'Matikan notifikasi, seduh teh hangat, dan akui bahwa kamu butuh jeda',
        sublabel: 'Memberi ruang untuk bernapas setelah berbulan-bulan dikejar tenggat tugas akhir.',
        effects: { finansial: 0, mental: 14, tujuan: 5 },
        pathAffinity: 'eksplorasi',
        pathWeight: 2,
        reactionText:
          'Uap teh melati naik pelan. Untuk pertama kalinya dalam enam bulan, kamu mengizinkan dirimu merasa selesai tanpa harus langsung berlari lagi malam ini.',
        journalNote: 'Mengizinkan diri berhenti sejenak pasca-sidang sebelum memaksakan keputusan besar.',
        nextSceneId: 'babak_2',
      },
    ],
  },
  {
    id: 'babak_2',
    chapterNumber: 2,
    totalChapters: 6,
    dayLabel: 'Hari 03',
    timeLocation: '08.10 WIB · Meja Makan Rumah',
    title: 'Dua Harapan di Atas Piring Sarapan',
    illustrationId: 'dining_table',
    getDynamicLead: ({ stats }) => {
      if (stats.mental >= 62) {
        return 'Tidur yang cukup semalam membuat kepalamu lebih jernih saat pulang ke rumah pagi ini.';
      }
      if (stats.tujuan >= 55) {
        return 'Catatan kecil yang kamu buat kemarin masih tersimpan rapi di saku jaketmu.';
      }
      return 'Perjalanan pulang ke rumah terasa agak berat karena pertanyaan di kepalamu ikut terbawa dalam tas ransel.';
    },
    paragraphs: [
      'Aroma nasi goreng buatan Ibu memenuhi ruang makan. Ayah meletakkan koran pagi, menatapmu dengan bangga sekaligus cemas yang berusaha ia sembunyikan di balik nada santai.',
      '"Kemarin om kamu cerita di kantornya lagi butuh staf junior, gajinya lumayan buat pengalaman pertama," kata Ayah pelan sambil menyendok lauk. Ibu langsung menimpali lembut, "Tapi kalau kamu masih kuat belajar, Ibu dukung kok kalau mau langsung daftar S2. Mumpung otak masih panas dan belum terikat tanggungan."',
      'Keduanya tidak memaksa, justru itulah yang membuat dadamu terasa penuh. Mereka menginginkan yang terbaik—hanya saja definisi "terbaik" versi mereka berjalan ke dua arah yang berseberangan.',
    ],
    promptQuestion: 'Bagaimana kamu membuka obrolan jujur di meja makan pagi ini?',
    choices: [
      {
        id: 'b2_c1',
        keyLabel: 'A',
        label: '"Aku ingin coba mandiri dulu, Yah. Biar paham medan kerja sebelum mikir kuliah lagi."',
        sublabel: 'Menyambut peluang kerja dari kenalan Ayah dengan tetap menjaga batas waktu evaluasi diri.',
        effects: { finansial: 14, mental: -2, tujuan: 10 },
        pathAffinity: 'karier',
        pathWeight: 2,
        reactionText:
          'Ayah mengangguk pelan, bahunya tampak sedikit lega. Ibu tersenyum sambil menambah lauk ke piringmu, meski tetap mengingatkan untuk tidak lupa mimpi belajarmu.',
        journalNote: 'Menyatakan niat untuk mengejar kemandirian finansial dan pengalaman lapangan terlebih dahulu.',
        nextSceneId: 'babak_3',
      },
      {
        id: 'b2_c2',
        keyLabel: 'B',
        label: '"Bu, aku kepikiran lanjut S2—tapi aku cuma mau jalan kalau dapat beasiswa penuh."',
        sublabel: 'Menunjukkan keseriusan riset sekaligus komitmen agar tidak membebani keuangan keluarga.',
        effects: { finansial: 4, mental: -4, tujuan: 12 },
        pathAffinity: 'akademik',
        pathWeight: 2,
        reactionText:
          'Mata Ibu berbinar mendengar syarat beasiswa itu. Ayah sempat terdiam sejenak, lalu berkata, "Kalau memang lewat beasiswa dan kamu serius, Ayah ikut doakan."',
        journalNote: 'Menegaskan komitmen studi lanjut dengan prinsip tanggung jawab finansial melalui beasiswa.',
        nextSceneId: 'babak_3',
      },
      {
        id: 'b2_c3',
        keyLabel: 'C',
        label: '"Aku minta waktu 3 bulan ini buat riset dua-duanya sambil kerja lepas, boleh ya?"',
        sublabel: 'Mengajak orang tua melihat masa transisi sebagai proses menyusun kompas yang matang.',
        effects: { finansial: 6, mental: 8, tujuan: 8 },
        pathAffinity: 'eksplorasi',
        pathWeight: 2,
        reactionText:
          'Meja makan sempat hening tiga detik, lalu Ayah tersenyum tipis. "Asal kamu punya rencana mingguan yang jelas dan nggak cuma bengong di kamar, Ayah dan Ibu percaya sama kamu."',
        journalNote: 'Meminta ruang transisi 3 bulan kepada orang tua untuk menguji opsi tanpa tergesa-gesa.',
        nextSceneId: 'babak_3',
      },
    ],
  },
  {
    id: 'babak_3',
    chapterNumber: 3,
    totalChapters: 6,
    dayLabel: 'Hari 07',
    timeLocation: '10.04 WIB · Dua Notifikasi di Hari Selasa',
    title: 'Persimpangan di Kotak Masuk',
    illustrationId: 'two_emails',
    getDynamicLead: ({ pathScores }) => {
      if (pathScores.karier > pathScores.akademik) {
        return 'Seminggu terakhir kamu banyak memoles CV dan portofolio proyek kuliahmu.';
      }
      if (pathScores.akademik > pathScores.karier) {
        return 'Seminggu terakhir kamu sibuk merapikan transkrip nilai dan menghubungi dosen pembimbing untuk surat rekomendasi.';
      }
      return 'Seminggu terakhir kamu mencoba menjaga ritme harian antara mencari lowongan paruh waktu dan membaca jurnal.';
    },
    paragraphs: [
      'Selasa pagi itu datang dengan dua surel yang masuk hanya berselisih dua belas menit. Pertama, undangan wawancara user dari sebuah perusahaan rintisan teknologi untuk posisi Junior Analyst—dijadwalkan Kamis pagi, dengan skema kerja hibrida dan gaji awal yang sangat layak.',
      'Kedua, surel dari panitia beasiswa S2: berkas administrasimu dinyatakan lolos, tetapi kamu harus mengirimkan proposal riset dan esai motivasi final paling lambat Kamis malam pukul 23.59.',
      'Keduanya menuntut fokus penuh di minggu yang sama. Menyiapkan studi kasus wawancara sambil menyusun proposal riset akademik yang solid rasanya nyaris mustahil tanpa mengorbankan kualitas tidurmu.',
    ],
    promptQuestion: 'Di persimpangan minggu ini, ke mana kamu menaruh energimu?',
    choices: [
      {
        id: 'b3_c1',
        keyLabel: 'A',
        label: 'Fokus total mempersiapkan studi kasus & wawancara kerja Kamis pagi',
        sublabel: 'Melepas tenggat beasiswa gelombang ini agar bisa tampil maksimal di hadapan user.',
        effects: { finansial: 16, mental: -5, tujuan: 12 },
        pathAffinity: 'karier',
        pathWeight: 3,
        reactionText:
          'Kamu menutup tab draf proposal riset dan mulai membedah produk perusahaan tersebut seharian penuh. Ada rasa gentar, tapi juga kelegaan karena memilih satu fokus yang konkret.',
        journalNote: 'Memprioritaskan persiapan wawancara kerja penuh waktu daripada mengejar dua tenggat sekaligus.',
        nextSceneId: 'babak_4',
      },
      {
        id: 'b3_c2',
        keyLabel: 'B',
        label: 'All-in menyusun proposal riset S2, dan minta penjadwalan ulang wawancara',
        sublabel: 'Mengakui dengan jujur kapasitasmu minggu ini demi peluang beasiswa yang jarang datang.',
        effects: { finansial: -5, mental: -6, tujuan: 15 },
        pathAffinity: 'akademik',
        pathWeight: 3,
        reactionText:
          'Pihak HR membalas bahwa jadwal wawancara sulit digeser ke minggu depan. Dadamu sempat mencelos, namun ketika kembali menatap halaman kosong proposal riset, kalimat pertamamu mengalir jauh lebih jernih.',
        journalNote: 'Mempertaruhkan kesempatan wawancara demi merampungkan proposal riset beasiswa S2.',
        nextSceneId: 'babak_4',
      },
      {
        id: 'b3_c3',
        keyLabel: 'C',
        label: 'Hadiri wawancara sebagai latihan, dan kerjakan esai sebisanya tanpa memaksa sempurna',
        sublabel: 'Menjadikan minggu ini eksperimen untuk merasakan mana yang paling membuatmu hidup.',
        effects: { finansial: 8, mental: -3, tujuan: 9 },
        pathAffinity: 'eksplorasi',
        pathWeight: 3,
        reactionText:
          'Minggu itu terasa padat, tetapi kamu berhasil melewati keduanya dengan kepala dingin. Menariknya, tubuhmu sendiri yang memberi sinyal jelas kegiatan mana yang bikin matamu berbinar.',
        journalNote: 'Menguji kedua pintu secara realistis sebagai bahan observasi diri tanpa perfeksionisme berlebihan.',
        nextSceneId: 'babak_4',
      },
    ],
  },
  {
    id: 'babak_4',
    chapterNumber: 4,
    totalChapters: 6,
    dayLabel: 'Hari 11',
    timeLocation: '16.40 WIB · Kedai Kopi Dekat Kampus',
    title: 'Cerita yang Tidak Muncul di LinkedIn',
    illustrationId: 'coffee_talk',
    paragraphs: [
      'Kamu bertemu Kak Raka, kakak tingkat yang lulus tiga tahun lalu. Dulu dia mahasiswa teladan yang langsung bekerja di perusahaan multinasional, lalu dua tahun kemudian banting setir mengambil S2 riset.',
      '"Jujur ya," kata Kak Raka sambil mengaduk es kopi susunya, "waktu awal kerja aku sering minder lihat teman yang udah lanjut S2 ke luar negeri. Giliran aku masuk S2, aku malah kangen punya penghasilan tetap dan ritme tim yang jelas."',
      'Ia tertawa kecil sebelum melanjutkan, "Yang jarang diceritakan orang di media sosial adalah: baik kerja maupun S2, dua-duanya punya fase kesepiannya masing-masing. Bedanya cuma satu—kamu pilih jalur yang alasannya milikmu sendiri, atau cuma ikut lari biar kelihatan keren?"',
    ],
    promptQuestion: 'Setelah mendengar cerita Kak Raka, pertanyaan apa yang paling mengena buatmu?',
    choices: [
      {
        id: 'b4_c1',
        keyLabel: 'A',
        label: '"Kak, gimana rasanya belajar langsung dari masalah nyata di kantor?"',
        sublabel: 'Merasakan bahwa dirimu haus praktik lapangan, kolaborasi tim, dan dampak cepat.',
        effects: { finansial: 8, mental: 6, tujuan: 12 },
        pathAffinity: 'karier',
        pathWeight: 2,
        reactionText:
          'Kak Raka bercerita bagaimana gaji pertama dan rapat klien pertama melatih mentalnya lebih cepat daripada sepuluh buku teks. Kamu mencatat poin itu diam-diam.',
        journalNote: 'Menyadari ketertarikan kuat pada pembelajaran praktis dan dinamika dunia profesional.',
        nextSceneId: 'babak_5',
      },
      {
        id: 'b4_c2',
        keyLabel: 'B',
        label: '"Kak, apa yang bikin Kakak akhirnya berani balik ke kampus lagi buat riset?"',
        sublabel: 'Mencari validasi atas kerinduanmu menggali satu topik secara mendalam.',
        effects: { finansial: 0, mental: 8, tujuan: 12 },
        pathAffinity: 'akademik',
        pathWeight: 2,
        reactionText:
          '"Karena di dunia kerja, aku sering ketemu pertanyaan \'kenapa\' yang nggak sempat dijawab," jawab Kak Raka. Kalimat itu menempel kuat di kepalamu sepanjang jalan pulang.',
        journalNote: 'Menemukan kesamaan keresahan intelektual yang mendorong minat pada studi lanjut.',
        nextSceneId: 'babak_5',
      },
      {
        id: 'b4_c3',
        keyLabel: 'C',
        label: '"Kak, telat nggak sih kalau aku ambil jeda setahun kerja lepas sambil cari arah?"',
        sublabel: 'Menanyakan kejujuran soal stigma "tertinggal" dibanding teman seangkatan.',
        effects: { finansial: 5, mental: 14, tujuan: 10 },
        pathAffinity: 'eksplorasi',
        pathWeight: 3,
        reactionText:
          'Kak Raka menggeleng mantap. "Di umur 25 nanti, nggak ada yang peduli kamu start tiga bulan lebih lambat atau cepat. Yang penting pas lari, bensinmu belum habis."',
        journalNote: 'Mendapatkan perspektif baru bahwa jeda terencana bukan kemunduran, melainkan strategi.',
        nextSceneId: 'babak_5',
      },
    ],
  },
  {
    id: 'babak_5',
    chapterNumber: 5,
    totalChapters: 6,
    dayLabel: 'Hari 14',
    timeLocation: '02.07 WIB · Meja Belajar Tengah Malam',
    title: 'Suara Paling Jujur Saat Lampu Kamar Diredupkan',
    illustrationId: 'midnight_desk',
    getDynamicLead: ({ stats }) => {
      if (stats.mental < 45) {
        return 'Kelopak matamu terasa berat dan dadamu agak sesak; beberapa minggu terakhir menguras energimu lebih dari yang kamu kira.';
      }
      return 'Malam ini suasana kos sangat tenang. Hanya ada cahaya lampu meja dan bunyi detak jam dinding.';
    },
    paragraphs: [
      'Di layar laptop, tab kiri menampilkan draf kontrak penawaran kerja atau surat panggilan lanjutan; tab kanan menampilkan formulir finalisasi aplikasi beasiswa dan kalender akademik. Di samping laptop, buku jurnalmu terbuka pada halaman kosong.',
      'Kamu teringat semua ketakutan yang selama ini berputar di kepala: takut salah pilih lalu menyesal di usia tiga puluh, takut mengecewakan orang tua yang sudah membiayai kuliah, dan takut melihat teman-teman melaju sementara kamu masih meraba arah.',
      'Tapi malam ini tidak ada penonton. Tidak ada dosen penguji, tidak ada komentar grup keluarga, dan tidak ada algoritma media sosial. Hanya ada kamu, versi dirimu yang paling lelah sekaligus paling jujur.',
    ],
    promptQuestion: 'Apa satu kejujuran yang akhirnya kamu tulis di halaman jurnal malam ini?',
    choices: [
      {
        id: 'b5_c1',
        keyLabel: 'A',
        label: '"Aku siap turun ke lapangan, belajar mandiri, dan berdiri di atas kakiku sendiri."',
        sublabel: 'Mengakui kebutuhan untuk berdaya secara ekonomi dan belajar lewat pengalaman nyata.',
        effects: { finansial: 12, mental: 8, tujuan: 14 },
        pathAffinity: 'karier',
        pathWeight: 3,
        reactionText:
          'Begitu kalimat itu selesai ditulis, napasmu terasa lebih panjang. Ketakutan soal ijazah yang "terhenti di S1" perlahan digantikan rasa antusias menyambut bab baru.',
        journalNote: 'Menuliskan keyakinan untuk membangun fondasi karier dan kemandirian lebih dulu.',
        nextSceneId: 'babak_6',
      },
      {
        id: 'b5_c2',
        keyLabel: 'B',
        label: '"Aku masih punya rasa penasaran yang belum selesai—aku mau memberi diriku ruang studi."',
        sublabel: 'Memilih studi lanjut bukan karena takut bekerja, melainkan karena cinta pada proses belajar.',
        effects: { finansial: 2, mental: 8, tujuan: 14 },
        pathAffinity: 'akademik',
        pathWeight: 3,
        reactionText:
          'Kamu menutup laptop dengan tenang. Keraguan soal "terlambat mencari uang" kini terasa lebih proporsional karena kamu tahu apa yang sedang kamu investasikan.',
        journalNote: 'Memantapkan niat studi lanjut atas dasar keingintahuan yang otentik, bukan pelarian.',
        nextSceneId: 'babak_6',
      },
      {
        id: 'b5_c3',
        keyLabel: 'C',
        label: '"Aku tidak harus memutuskan nasib 10 tahun ke depan malam ini—aku perlu ritme yang sehat."',
        sublabel: 'Berani mengambil jalur jeda terstruktur: kerja paruh waktu/magang sambil merawat mental.',
        effects: { finansial: 6, mental: 16, tujuan: 12 },
        pathAffinity: 'eksplorasi',
        pathWeight: 3,
        reactionText:
          'Beban di pundakmu seakan turun separuh. Kamu sadar bahwa menunda langkah besar demi menyiapkan bekal yang utuh adalah bentuk kedewasaan, bukan kelemahan.',
        journalNote: 'Memilih memulihkan ritme hidup dan menyusun rencana eksplorasi 6–12 bulan ke depan.',
        nextSceneId: 'babak_6',
      },
    ],
  },
  {
    id: 'babak_6',
    chapterNumber: 6,
    totalChapters: 6,
    dayLabel: 'Hari 18',
    timeLocation: '07.30 WIB · Pagi Setelah Wisuda',
    title: 'Langkah Pertama Setelah Toga Dilepas',
    illustrationId: 'graduation_morning',
    getDynamicLead: ({ stats }) => {
      return `Dengan kondisi tabungan dan kesiapanmu di angka ${stats.finansial}%, energi mental ${stats.mental}%, serta kejelasan tujuan ${stats.tujuan}%, pagi ini terasa berbeda dari malam pertama usai sidang.`;
    },
    paragraphs: [
      'Toga sudah terlipat rapi di dalam kardus. Matahari pagi masuk lewat jendela kamar, menyinari sepatu yang sudah kamu siapkan di dekat pintu. Wisuda kemarin menjadi garis finish untuk satu bab—sekaligus garis start yang bentuknya boleh kamu gambar sendiri.',
      'Ponselmu bergetar sekali: sebuah pengingat kalender yang kamu buat sendiri seminggu lalu. Di luar sana, dunia tetap berjalan dengan kecepatannya masing-masing, tetapi hari ini kamu tidak lagi sekadar bereaksi terhadap langkah orang lain.',
      'Kamu menarik napas dalam, mengunci pintu kamar, dan menentukan tindakan nyata pertamamu hari ini.',
    ],
    promptQuestion: 'Keputusan final apa yang kamu ambil pagi ini?',
    choices: [
      {
        id: 'b6_c1',
        keyLabel: 'A',
        label: 'Konfirmasi tawaran kerja pertama dan mulai bab profesionalmu',
        sublabel: 'Melangkah ke dunia kerja dengan pikiran terbuka, siap belajar dari nol dan mandiri.',
        effects: { finansial: 15, mental: 5, tujuan: 12 },
        pathAffinity: 'karier',
        pathWeight: 4,
        reactionText: 'Balasan email terkirim. Kamu tersenyum kecil—akhirnya kakimu melangkah.',
        journalNote: 'Mengambil langkah resmi memasuki dunia kerja profesional.',
        nextSceneId: 'ENDING',
      },
      {
        id: 'b6_c2',
        keyLabel: 'B',
        label: 'Kirim aplikasi final S2 & susun jadwal persiapan akademik yang matang',
        sublabel: 'Melangkah ke jalur studi lanjut dengan niat riset yang jernih dan rencana pembiayaan.',
        effects: { finansial: 0, mental: 5, tujuan: 15 },
        pathAffinity: 'akademik',
        pathWeight: 4,
        reactionText: 'Berkas terkirim tepat waktu. Kamu menatap layar dengan hati yang lapang dan siap bertumbuh.',
        journalNote: 'Mengunci komitmen untuk melanjutkan studi S2 dan mendalami riset.',
        nextSceneId: 'ENDING',
      },
      {
        id: 'b6_c3',
        keyLabel: 'C',
        label: 'Mulai program Gap Year terencana: magang/freelance sambil susun kompas diri',
        sublabel: 'Mengambil jeda 6–12 bulan yang produktif tanpa kehilangan kehangatan pada diri sendiri.',
        effects: { finansial: 8, mental: 15, tujuan: 12 },
        pathAffinity: 'eksplorasi',
        pathWeight: 4,
        reactionText: 'Kamu membuka lembar jadwal mingguan baru. Pelan, terukur, dan sepenuhnya milikmu.',
        journalNote: 'Memilih jalur Gap Year terencana untuk menabung, bereksplorasi, dan menjaga kewarasan.',
        nextSceneId: 'ENDING',
      },
    ],
  },
];

export const ENDINGS: Record<PathKey, Ending> = {
  karier: {
    id: 'karier',
    badgeLabel: 'Jalur Karier & Kemandirian',
    title: 'Melangkah ke Dunia Nyata',
    subtitle: 'Belajar di ruang praktik, membangun pijakan sendiri.',
    illustrationId: 'ending_karier',
    paragraphs: [
      'Kamu memilih untuk langsung bekerja—bukan karena menyerah pada mimpi akademik, melainkan karena kamu ingin mengenal medan nyata lebih dulu. Di minggu-minggu awal, kamu akan belajar banyak hal yang tidak pernah tertulis di silabus: cara bernegosiasi, menerima masukan keras, mengelola gaji pertama, dan menemukan ritme hidup dewasa.',
      'Suatu hari nanti, jika rasa ingin tahumu memanggil kembali ke ruang kelas S2, kamu akan datang sebagai seseorang yang sudah tahu masalah nyata apa yang ingin kamu pecahkan. Pengalaman kerjamu tidak menjauhkanmu dari ilmu; ia justru memberi makna pada setiap teori.',
    ],
    getMentalNuance: (stats) => {
      if (stats.mental < 50) {
        return 'Catatan kecil untukmu: semangatmu mengejar kemandirian sangat kuat, namun pastikan kamu juga menyisihkan akhir pekan untuk beristirahat. Karier adalah maraton panjang, bukan lari cepat satu semester.';
      }
      if (stats.finansial >= 75) {
        return 'Modal kesiapan finansial dan ketenanganmu sudah sangat baik. Gunakan stabilitas awal ini untuk membangun dana darurat dan menjaga ruang aman bagi kesehatan mentalmu.';
      }
      return 'Keseimbangan antara kesiapan finansial dan tujuanmu memberi awal yang sehat. Jangan takut merasa kikuk di bulan pertama—setiap profesional hebat pernah menjadi anak baru yang banyak bertanya.';
    },
    reflectiveQuote:
      'Memilih bekerja lebih dulu tidak membuatmu tertinggal dari mereka yang langsung kuliah lagi. Setiap orang punya musim mekar yang berbeda, dan langkah pertamamu hari ini sudah cukup berani.',
    quoteAuthorNote: 'Catatan Jurnal · Babak Baru Setelah Toga',
    actionReminder: 'Berani mulai dari nol adalah bentuk kecerdasan yang sering diremehkan.',
  },
  akademik: {
    id: 'akademik',
    badgeLabel: 'Jalur Akademisi & Studi Lanjut',
    title: 'Menekuni Kedalaman Ilmu',
    subtitle: 'Menjaga nyala tanya, bertumbuh lewat riset dan refleksi.',
    illustrationId: 'ending_akademik',
    paragraphs: [
      'Kamu memutuskan melanjutkan studi S2 dengan alasan yang lahir dari kejujuranmu sendiri—bukan sekadar takut menghadapi pasar kerja atau mengejar gelar di belakang nama. Kamu tahu akan ada malam-malam panjang bersama jurnal, revisi, dan keraguan apakah risetmu cukup berdampak.',
      'Tapi kali ini kamu melangkah dengan kesadaran penuh. Kamu juga berkomitmen menjaga kemandirian lewat beasiswa atau kerja paruh waktu riset agar tidak merasa berutang budi secara berlebihan. Dunia selalu membutuhkan orang-orang yang sabar menggali pertanyaan hingga ke akarnya.',
    ],
    getMentalNuance: (stats) => {
      if (stats.mental < 50) {
        return 'Catatan kecil untukmu: antusiasme belajarmu luar biasa, tetapi jangan biarkan ambisi akademik menggerus tidur dan kesehatanmu. Nilai dan publikasi terbaik lahir dari pikiran yang terawat.';
      }
      if (stats.finansial < 45) {
        return 'Catatan kecil untukmu: tetap realistis dengan rencana anggaran selama studi nanti. Mencari asisten riset atau beasiswa pendamping akan membuat fokus belajarmu jauh lebih tenang.';
      }
      return 'Kejelasan tujuanmu terasa sangat kokoh. Jadikan masa studi nanti bukan hanya ruang mengejar IPK, melainkan ruang bertumbuh bersama mentor dan komunitas yang sehat.';
    },
    reflectiveQuote:
      'Tidak ada yang sia-sia dari waktu yang kamu pakai untuk memperdalam ilmu. Selama kamu melakukannya dengan jujur pada dirimu sendiri, jalur akademik adalah pilihan yang sama terhormatnya dengan langsung berkarier.',
    quoteAuthorNote: 'Catatan Jurnal · Babak Baru Setelah Toga',
    actionReminder: 'Menjadi pembelajar yang sabar juga merupakan bentuk kontribusi nyata.',
  },
  eksplorasi: {
    id: 'eksplorasi',
    badgeLabel: 'Jalur Eksplorasi & Gap Year Terencana',
    title: 'Jeda yang Berani dan Terukur',
    subtitle: 'Mengambil napas, menguji arah, lalu melangkah mantap.',
    illustrationId: 'ending_eksplorasi',
    paragraphs: [
      'Di tengah budaya yang memuja siapa paling cepat mendapat pekerjaan atau surat penerimaan kampus, kamu memilih sesuatu yang sering disalahpahami: mengambil jeda yang terencana. Bukan untuk berdiam diri tanpa arah, melainkan untuk bekerja lepas, magang, menabung, dan memulihkan diri setelah marathon kuliah.',
      'Selama beberapa bulan ke depan, kamu memberi dirimu hak untuk mencoba sebelum mengikatkan diri pada komitmen jangka panjang. Kamu sedang menyusun kompas yang benar-benar cocok dengan nilai hidupmu—bukan meminjam peta milik orang lain.',
    ],
    getMentalNuance: (stats) => {
      if (stats.mental >= 70) {
        return 'Energi mentalmu terjaga dengan sangat baik. Manfaatkan kejernihan ini untuk membuat target kecil bulanan—misalnya satu proyek portofolio atau dua wawancara eksplorasi—agar jedamu tetap terasa bertumbuh.';
      }
      return 'Memilih jeda setelah fase sidang yang melelahkan adalah keputusan yang bijak. Buat struktur harian yang lembut namun konsisten agar kamu tetap merasa punya pijakan setiap minggunya.';
    },
    reflectiveQuote:
      'Hidup bukan lomba lari yang garis finisnya sama untuk semua orang. Tidak ada pilihan yang mutlak salah; berhenti sejenak untuk mengenal dirimu sendiri justru memastikan kamu tidak berlari ke arah yang keliru.',
    quoteAuthorNote: 'Catatan Jurnal · Babak Baru Setelah Toga',
    actionReminder: 'Pelan bukan berarti tertinggal—sering kali itu tanda kamu sedang merawat arah.',
  },
};
