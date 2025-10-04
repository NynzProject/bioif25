function getLastTwoDigits(nim) {
    return nim.slice(-2);
}

const biodataDatabase = {
    "11251001": {
        fullName: "TAUFIQ KAMIL 'AZMI",
        gender: "male",
        photo: `${getLastTwoDigits("11251001")}.jpg`,
        birthPlace: "SAMARINDA",
        birthDate: "27 JULI 2007",
        phone: "082350491716 (KAK ZAKIA)",
        emergencyContact: "085269340040 (AYAH)",
        address: "JK KOS, JL SEI WAIN, NO. 302",
        medicalHistory: ["LEUKOSITOSIS"],
        instagram: "FIXOLOTL_"
    },
    "11251002": {
        fullName: "TRIO FITRADA",
        gender: "male",
        photo: `${getLastTwoDigits("11251002")}.jpg`,
        birthPlace: "MARIDAN",
        birthDate: "16 SEPTEMBER 2006",
        phone: "081349327331 (KAK IRSYAN)",
        emergencyContact: "081341582980 (IBU)",
        address: "PERUMAHAN BUKIT BETUAH, JL.",
        medicalHistory: [],
        instagram: "TRFIOOO"
    },
    "11251003": {
        fullName: "MUHAMMAD FAUZAN HAFIZH",
        gender: "male",
        photo: `${getLastTwoDigits("11251003")}.jpg`,
        birthPlace: "GROGOT",
        birthDate: "20 MARET 2007",
        phone: "085735851440 (BU UNUN)",
        emergencyContact: "085800457713 (AYAH)",
        address: "JL. SEI WAIN, KARANG JOANG (JK",
        medicalHistory: ["ANXIETY"],
        instagram: "EBFCOMRADE"
    },
    "11251004": {
        fullName: "MUHAMMAD RAIHAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251004")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "02 APRIL 2007",
        phone: "085247295543 (KAKAK)",
        emergencyContact: "081255945614 (IBU)",
        address: "JL SUMBER REJO V TANJUNG VI",
        medicalHistory: [],
        instagram: "RAIHANMHD_"
    },
    "11251005": {
        fullName: "MUHAMMAD RIZKY FATHURONY",
        gender: "male",
        photo: `${getLastTwoDigits("11251005")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "24 APRIL 2007",
        phone: "081250929520 (BU RITA PENJAGA",
        emergencyContact: "081253697154 (IBU)",
        address: "JK KOST PUTRA (NO 9), JALAN SEI",
        medicalHistory: [],
        instagram: "RZYFTH_"
    },
    "11251006": {
        fullName: "NAISILA SAPUTRI",
        gender: "female",
        photo: `${getLastTwoDigits("11251006")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "18 SEPTEMBER 2006",
        phone: "085392316193 (IBU)",
        emergencyContact: "087862872782 (AYAH)",
        address: "JLN. PERSATUAN RT.39 NO.68",
        medicalHistory: ["ASAM LAMBUNG", "FLU"],
        instagram: "NAISLSP__"
    },
    "11251007": {
        fullName: "RAZI MAULANA",
        gender: "male",
        photo: `${getLastTwoDigits("11251007")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "15 DESEMBER 2006",
        phone: "085246614071 (BAPAK)",
        emergencyContact: "081250286491 (IBU)",
        address: "JL. SOEKARNO, TAMAN BUKIT SARI",
        medicalHistory: [],
        instagram: "RAZIMAULANA740"
    },
    "11251008": {
        fullName: "GHITHRIF ASYRAF",
        gender: "male",
        photo: `${getLastTwoDigits("11251008")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "8 JULI 2007",
        phone: "085754649873 (BAPAK UMAR",
        emergencyContact: "082250320871 (IBU)",
        address: "VICTORIA KOST, JLN",
        medicalHistory: ["TIPES", "FLEK PARU-PARU", "OCD"],
        instagram: "ASYRAF_GHITHRIF"
    },
    "11251009": {
        fullName: "MUHAMMAD AFDHAL REZKIKASYAH",
        gender: "male",
        photo: `${getLastTwoDigits("11251009")}.jpg`,
        birthPlace: "SAMARINDA",
        birthDate: "2 JANUARI 2007",
        phone: "085845730533 (NENEK)",
        emergencyContact: "085250666104 (IBU)",
        address: "PERUMAHAN BUKIT BATUAH BLOK",
        medicalHistory: ["ALERGI DINGIN", "DEBU", "BUNGA"],
        instagram: "MAFDHALRZ"
    },
    "11251010": {
        fullName: "SYARIFAH MUALIMAH",
        gender: "female",
        photo: `${getLastTwoDigits("11251010")}.jpg`,
        birthPlace: "LOA KULU",
        birthDate: "30 JULI 2007",
        phone: "085161620971 (BIBI YANG",
        emergencyContact: "082155521968 (AYAH)",
        address: "ASRAMA ITK, JL. SEI WAIN KM 15",
        medicalHistory: [],
        instagram: "S.RIFAAA_"
    },
    "11251011": {
        fullName: "AZIZAH ALYA",
        gender: "female",
        photo: `${getLastTwoDigits("11251011")}.jpg`,
        birthPlace: "TANAH GROGOT",
        birthDate: "23 DESEMBER",
        phone: "083153660924 (TANTE)",
        emergencyContact: "081346622725 (AYAH)",
        address: "JL MARKONI DALAM GG DAHLIAH",
        medicalHistory: ["ASMA", "RHINTIS ALERGI"],
        instagram: "ALYA12._"
    },
    "11251012": {
        fullName: "MUHAMMAD AUREL HAYFA PUTRA",
        gender: "male",
        photo: `${getLastTwoDigits("11251012")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "31 JANUARI 2007",
        phone: "08115377998 (AYAH)",
        emergencyContact: "0811545383 (IBU)",
        address: "PERUM WIKA BLOK C.1 NO.4",
        medicalHistory: [],
        instagram: "JUST_HAYFA__"
    },
    "11251013": {
        fullName: "DEO MAHER CRISTIANDRA",
        gender: "male",
        photo: `${getLastTwoDigits("11251013")}.jpg`,
        birthPlace: "TEBING TINGGI",
        birthDate: "18 JANUARI 2007",
        phone: "0821-4073-5269 (KAK EZA)",
        emergencyContact: "082370278342 (KAKAK)",
        address: "JL. LINDUNG KARANG JOANG",
        medicalHistory: [],
        instagram: "DEOMAHERSIHOMBING"
    },
    "11251014": {
        fullName: "GERALDY PADIDI",
        gender: "male",
        photo: `${getLastTwoDigits("11251014")}.jpg`,
        birthPlace: "DEPOK",
        birthDate: "26 OKTOBER 2006",
        phone: "081214828819 (KAKAK)",
        emergencyContact: "081347343725 (IBU)",
        address: "PERUMAHAN TAMAN BUKIT SARI",
        medicalHistory: [],
        instagram: "GERALDYPDD"
    },
    "11251015": {
        fullName: "DESY ADELINA R",
        gender: "female",
        photo: `${getLastTwoDigits("11251015")}.jpg`,
        birthPlace: "BANJARMASIN",
        birthDate: "1 DESEMBER 2006",
        phone: "082158122269 (FIRSTA, TEMEN",
        emergencyContact: "085752041916 (IBU)",
        address: "JL. SEI WEIN KM.15, RT.35, NO.14,",
        medicalHistory: ["ANXIETY DISORDER DAN RIWAYAT"],
        instagram: "DESYADELINE"
    },
    "11251017": {
        fullName: "ANINDYA RIZA AL-FATH",
        gender: "male",
        photo: `${getLastTwoDigits("11251017")}.jpg`,
        birthPlace: "BERAU",
        birthDate: "21 SEPTEMBER 2007",
        phone: "082256661044 (IBU NURUL AINI)",
        emergencyContact: "082158077120 (IBU)",
        address: "JL. SWADAYA KOS BOUGENVILLE",
        medicalHistory: ["HIPERTENSI"],
        instagram: "RIZANYNZ_"
    },
    "11251018": {
        fullName: "MUHAMMAD RAHMAN FAKHRICHI",
        gender: "male",
        photo: `${getLastTwoDigits("11251018")}.jpg`,
        birthPlace: "BANJAR BARU",
        birthDate: "24 JUNI 2007",
        phone: "085845000856 (IBU)",
        emergencyContact: "085845000856 (IBU)",
        address: "KOMP. PELANGI B POINT NO.AA",
        medicalHistory: ["ASMA (SESAK NAFAS)"],
        instagram: "NWRUSHIJIIE"
    },
    "11251020": {
        fullName: "CHRISTIAN RICARDO",
        gender: "male",
        photo: `${getLastTwoDigits("11251020")}.jpg`,
        birthPlace: "BANJARMASIN",
        birthDate: "10 JUNI 2007",
        phone: "081258763719 (BAPAK PENJAGA",
        emergencyContact: "081348336020 (IBU)",
        address: "KOS AR RAYYAN WARNA HIJAU,",
        medicalHistory: [],
        instagram: "D.OR_RE_M.I"
    },
    "11251021": {
        fullName: "ANDRE HERMAWAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251021")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "17 JUNI 2007",
        phone: "085825581271 (OM)",
        emergencyContact: "085387171128 (IBU)",
        address: "JL. SEI WAIN KM 15, GG. BAKTI",
        medicalHistory: ["ASMA"],
        instagram: "ANNDREHRMWN"
    },
    "11251022": {
        fullName: "AHMAD FAIZ AKBAR",
        gender: "male",
        photo: `${getLastTwoDigits("11251022")}.jpg`,
        birthPlace: "SAMARINDA",
        birthDate: "8 AGUSTUS 2006",
        phone: "082155534703 (IBU SAISYAH",
        emergencyContact: "08125364628 (AYAH)",
        address: "JL. KH ACHMAD DAHLAN GG.02",
        medicalHistory: [],
        instagram: "_ZIFAAAA_"
    },
    "11251023": {
        fullName: "APRIAN SYAHRANI",
        gender: "male",
        photo: `${getLastTwoDigits("11251023")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "9 APRIL 2007",
        phone: "081237865300 (SEPUPU)",
        emergencyContact: "081350792013 (IBU)",
        address: "SEI WAIN RT 34",
        medicalHistory: ["INTOLERANSI LAKTOSA"],
        instagram: "APYANSY"
    },
    "11251024": {
        fullName: "ENDRAWAN RADHITYA RAMADHANI",
        gender: "male",
        photo: `${getLastTwoDigits("11251024")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "2 OKTOBER 2006",
        phone: "0819-1723-1199 (MAS GHITHRIF",
        emergencyContact: "082155111007 (IBU)",
        address: "VICTORIA KOST, JL",
        medicalHistory: ["GERD"],
        instagram: "ENDRAWAN.R"
    },
    "11251026": {
        fullName: "M. ARYA SATYA",
        gender: "male",
        photo: `${getLastTwoDigits("11251026")}.jpg`,
        birthPlace: "LAMONGAN",
        birthDate: "6 JANUARI 2007",
        phone: "085654138149 (FAIZ TEMAN",
        emergencyContact: "081253281912 (IBU)",
        address: "RAMOTHY KOS",
        medicalHistory: [],
        instagram: "ARYAS.AE"
    },
    "11251027": {
        fullName: "JONAS GEMILANG TL ROMPAS",
        gender: "male",
        photo: `${getLastTwoDigits("11251027")}.jpg`,
        birthPlace: "RANTEPAO",
        birthDate: "24 MEI 2007",
        phone: "082251023147 (BU ALMIRA,",
        emergencyContact: "08124244284 (AYAH)",
        address: "KOST PUTRA RASYA, JL. LINDUNG",
        medicalHistory: [],
        instagram: "JNS._SCINTILLATING"
    },
    "11251028": {
        fullName: "FAISHAL YUSUF",
        gender: "male",
        photo: `${getLastTwoDigits("11251028")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "13 MARET 2007",
        phone: "082150342772 (MUNAWAR TEMAN",
        emergencyContact: "082141162311 (IBU)",
        address: "KOST.FF, JL. SEI WAIN KM.15",
        medicalHistory: [],
        instagram: "FHSLYF"
    },
    "11251029": {
        fullName: "ANGGIAN AULIA AKBAR S",
        gender: "male",
        photo: `${getLastTwoDigits("11251029")}.jpg`,
        birthPlace: "KOTA BARU",
        birthDate: "22 JUNI 2007",
        phone: "085184982086 (ALIEF TEMAN",
        emergencyContact: "081348784473 (IBU)",
        address: "JL. SEI WAIN. KM 15 RT 33. NO 45.",
        medicalHistory: ["TIPES"],
        instagram: "ANGGIAN_AULIA"
    },
    "11251030": {
        fullName: "MUHAMMAD RAIFAN SYIFA DIEN",
        gender: "male",
        photo: `${getLastTwoDigits("11251030")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "5 MARET 2007",
        phone: "0895382230455 (IBU KOS",
        emergencyContact: "08125351002 (AYAH)",
        address: "JL. SEI WAIN GANG SAWIT NO.6,",
        medicalHistory: [],
        instagram: "IFANITAS"
    },
    "11251031": {
        fullName: "PASYA KHALIQ MIS'AL",
        gender: "male",
        photo: `${getLastTwoDigits("11251031")}.jpg`,
        birthPlace: "BONTANG 1 JUNI 2007",
        phone: "085821405034 (BU HANUM,",
        emergencyContact: "08121693960 (IBU)",
        address: "JALAN SULAWESI NO 1 BLOK L",
        medicalHistory: [],
        instagram: "PASYAKHALIQ"
    },
    "11251032": {
        fullName: "JERYPA RAYA",
        gender: "male",
        photo: `${getLastTwoDigits("11251032")}.jpg`,
        birthPlace: "SAMARINDA",
        birthDate: "15 JANUARI 2007",
        phone: "081348660802 (KAKAK)",
        emergencyContact: "081347889757 (AYAH)",
        address: "JL. SULTAN ALIMUDDIN, SAMARI",
        medicalHistory: ["ASMA", "ALERGI DINGIN DAN DEBU"],
        instagram: "RRAYYAA15"
    },
    "11251033": {
        fullName: "MUHAMMAD KHAYRU RIZKI",
        gender: "male",
        photo: `${getLastTwoDigits("11251033")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "29 JUNI 2006",
        phone: "081256871340 (RIDHO, TEMAN",
        emergencyContact: "082154543030 (IBU)",
        address: "JALAN SEI WAIN, AMAR KOST",
        medicalHistory: ["MAAG", "ALERGI TELUR", "SINUS"],
        instagram: "ACCARE29"
    },
    "11251034": {
        fullName: "DIAH AYU REGNO GUFARRA",
        gender: "female",
        photo: `${getLastTwoDigits("11251034")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "27 MARET 2007",
        phone: "0857-5458-8560 (KAKAK)",
        emergencyContact: "0853-8836-0370 (BAPAK)",
        address: "JALAN TEPO KM.10 GANG SALAM",
        medicalHistory: [],
        instagram: "DHAYRGF"
    },
    "11251035": {
        fullName: "PRADIFTA ALFARIZ",
        gender: "male",
        photo: `${getLastTwoDigits("11251035")}.jpg`,
        birthPlace: "BEKOSO",
        birthDate: "8 JULI 2006",
        phone: "081253779502 (BU WANTINAH,",
        emergencyContact: "081346353053 (IBU)",
        address: "JL. SEI WAIN RT.34, KOS",
        medicalHistory: [],
        instagram: "PRAADIFTA"
    },
    "11251036": {
        fullName: "DIMAS TORIN ARYANTO",
        gender: "male",
        photo: `${getLastTwoDigits("11251036")}.jpg`,
        birthPlace: "JAKARTA",
        birthDate: "29 DESEMBER 2005",
        phone: "081522670168 (ADIK)",
        emergencyContact: "081281842227 (IBU)",
        address: "JL. ADIL MAKMUR NO. 6 RT 17,",
        medicalHistory: [],
        instagram: "DIMAS_TORIN"
    },
    "11251037": {
        fullName: "ABDURRAHMAN ALLIF NAUFAL",
        gender: "male",
        photo: `${getLastTwoDigits("11251037")}.jpg`,
        birthPlace: "BATUKAJANG",
        birthDate: "25 JULI 2007",
        phone: "0895385944245 (MUDJIATI",
        emergencyContact: "085387771627 (IDA",
        address: "JL. TAMAN SARI, KM 6, GANG",
        medicalHistory: ["ADHD TIPE GABUNGAN"],
        instagram: "ABDURAHMAN_ALIF_NAUFAL"
    },
    "11251038": {
        fullName: "ABDUL MUTALIF",
        gender: "male",
        photo: `${getLastTwoDigits("11251038")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "7 JULI 2006",
        phone: "0895370507916 (MY OTHER",
        emergencyContact: "087878307248 (MY SISTER)",
        address: "KOS HAJI SABAR, JL. AMD NO.14",
        medicalHistory: ["SINUSITIS KRONIS POST NASAL"],
        instagram: "VIRUZ4020"
    },
    "11251039": {
        fullName: "KHAIRUL ILHAM",
        gender: "male",
        photo: `${getLastTwoDigits("11251039")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "04 DESEMBER 2005",
        phone: "08981742585 (TANTE SATE)",
        emergencyContact: "081299557002 (AYAH)",
        address: "JL. TERLINDUNG GANG PATTAH",
        medicalHistory: [],
        instagram: "KHAIRULILHAM"
    },
    "11251040": {
        fullName: "MUHAMAD NABIL AIMAN SUMARNA",
        gender: "male",
        photo: `${getLastTwoDigits("11251040")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "04 DESEMBER 2005",
        phone: "085173323655 (ABDUH)",
        emergencyContact: "081251187584 (IBU)",
        address: "JALAN PADAT KARYA NO.23 RT",
        medicalHistory: [],
        instagram: "EN.LLAWRENCE"
    },
    "11251041": {
        fullName: "MUHAMMAD RIZQI RAMADHAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251041")}.jpg`,
        birthPlace: "LONGIKIS",
        birthDate: "25 SEPTEMBER 2006",
        phone: "082352011366 (ANGGIAN AULIA",
        emergencyContact: "085392254510 (IBU)",
        address: "JL. SEI WAIN RT.31, BENGKEL",
        medicalHistory: [],
        instagram: "RICHIKU99"
    },
    "11251042": {
        fullName: "MUHAMMAD FADEL IJLAL",
        gender: "male",
        photo: `${getLastTwoDigits("11251042")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "9 MEI 2007",
        phone: "08121074019 (AYAH)",
        emergencyContact: "085250300578 (IBU)",
        address: "JL. SYARIFUDIN YOES, SEPINGGAN",
        medicalHistory: ["ALERGI OBAT (ASAM MEFENAMAT)"],
        instagram: "MFADELIJLAL"
    },
    "11251043": {
        fullName: "NIKEN QINATA RAHAYU",
        gender: "female",
        photo: `${getLastTwoDigits("11251043")}.jpg`,
        birthPlace: "KEDIRI",
        birthDate: "13 JANUARI 2007",
        phone: "085159938817 (MECCA A.K.A",
        emergencyContact: "081346252295 (IBU)",
        address: "GG MASJID AL QALAM (DEKAT TK",
        medicalHistory: ["TIDAK BISA MENGHIRUP ASAP"],
        instagram: "QINARYUU"
    },
    "11251044": {
        fullName: "MUHAMMAD FADEL FUADI",
        gender: "male",
        photo: `${getLastTwoDigits("11251044")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "9 FEBRUARI 2007",
        phone: "081255805552 (AYAH)",
        emergencyContact: "081255805552 (AYAH)",
        address: "JLN. GAJAH MADA NO.39,",
        medicalHistory: ["ASMA DAN ALERGI PARACETAMOL"],
        instagram: "DELL_WAVEE"
    },
    "11251045": {
        fullName: "EVI JUARSA",
        gender: "female",
        photo: `${getLastTwoDigits("11251045")}.jpg`,
        birthPlace: "MALANGKAIYAN",
        birthDate: "4 AGUSTUS 2007",
        phone: "081350423803 (AYAH)",
        emergencyContact: "081347820979 (IBU)",
        address: "JL. PDAM KM 12 DALAM RT 20",
        medicalHistory: ["ASMA"],
        instagram: "VIVYCEZ"
    },
    "11251046": {
        fullName: "CARENITHA KHAIRUNNISA",
        gender: "female",
        photo: `${getLastTwoDigits("11251046")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "21 MEI 2007",
        phone: "082254423211 (ADEK)",
        emergencyContact: "081347279801 (AYAH)",
        address: "JL. LETKOL POL HM ASNAWI",
        medicalHistory: [],
        instagram: "CAERNLOVY"
    },
    "11251047": {
        fullName: "CHESTA ADABI PUTERA PRATAMA",
        gender: "male",
        photo: `${getLastTwoDigits("11251047")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "25 MARET 2006",
        phone: "081250929520 (JK KOST, IBU",
        emergencyContact: "081345431027 (IBU)",
        address: "JALAN SEI WAIN",
        medicalHistory: ["SINUS – SERING PILEK DAN BATUK"],
        instagram: "CHPTRAAA"
    },
    "11251048": {
        fullName: "AHMAD NUR FARIZI",
        gender: "male",
        photo: `${getLastTwoDigits("11251048")}.jpg`,
        birthPlace: "SAMBOJA",
        birthDate: "13 APRIL 2007",
        phone: "081649615405 (DIMAS RK 25)",
        emergencyContact: "081347987190 (IBU)",
        address: "JL. SEI WAIN, KOST PANDAWA 5",
        medicalHistory: ["ASMA DAN PANIK BERLEBIH"],
        instagram: "FARXOLIF"
    },
    "11251049": {
        fullName: "JHABRYEL JHULYSMAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251049")}.jpg`,
        birthPlace: "SANGATTA",
        birthDate: "23 JULI 2007",
        phone: "082298997504 (KAKAK",
        emergencyContact: "081316783778 (IBU)",
        address: "D'CARJOE A15 (KM 15)",
        medicalHistory: [],
        instagram: "JHABRYEL_MANTAP"
    },
    "11251050": {
        fullName: "MUHAMMAD RASYA SEMARDATU",
        gender: "male",
        photo: `${getLastTwoDigits("11251050")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "19 MARET 2007",
        phone: "085248027181 (BAPAK KOST,",
        emergencyContact: "0811591968 (AYAH)",
        address: "JL. SEI WAIN NO.KM.15,",
        medicalHistory: [],
        instagram: "VOLVO_ACCIPERE_ASSIS"
    },
    "11251051": {
        fullName: "TRIGEES AZARYA MAMAHIT",
        gender: "male",
        photo: `${getLastTwoDigits("11251051")}.jpg`,
        birthPlace: "BARONG TONGKOK",
        birthDate: "28 AGUSTUS",
        phone: "08129930045 (TANTE)",
        emergencyContact: "081298186215 (AYAH)",
        address: "JALAN SYARIFUDDIN YOES,",
        medicalHistory: [],
        instagram: "TRIGEES2006"
    },
    "11251052": {
        fullName: "MUHAMMAD DAFFI PRATAMA PUTRA",
        gender: "male",
        photo: `${getLastTwoDigits("11251052")}.jpg`,
        birthPlace: "SANGATA",
        birthDate: "4 FEBRUARI 2008",
        phone: "085246219285 (TANTE)",
        emergencyContact: "081355771112 (IBU)",
        address: "BATU RATNA",
        medicalHistory: [],
        instagram: "DROLOCKY"
    },
    "11251053": {
        fullName: "MAELINDA SAFIRAAIDAH",
        gender: "female",
        photo: `${getLastTwoDigits("11251053")}.jpg`,
        birthPlace: "JEMBER",
        birthDate: "11 MEI 2007",
        phone: "089601042080 (KAK SATRIA)",
        emergencyContact: "08125881668 (PAPA)",
        address: "JL. TEPO, KM 10 KARANG JOANG",
        medicalHistory: ["ASMA"],
        instagram: "11THMAE"
    },
    "11251054": {
        fullName: "HANIF RIZQY FADHILAH",
        gender: "male",
        photo: `${getLastTwoDigits("11251054")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "11 MARET 2007",
        phone: "085247846065 (PAMAN)",
        emergencyContact: "085245455423 (IBU)",
        address: "SEPINGGAN BARU, GANG CC7, NO",
        medicalHistory: [],
        instagram: "H4NIP_R"
    },
    "11251055": {
        fullName: "MUH. TIRZHA HARYONO",
        gender: "male",
        photo: `${getLastTwoDigits("11251055")}.jpg`,
        birthPlace: "BATANG KALUKU",
        birthDate: "1 DESEMBER",
        phone: "085752252254 (ADEK)",
        emergencyContact: "082158714191 (IBU)",
        address: "PERUM. GRAHA INDAH GANG/JL.",
        medicalHistory: [],
        instagram: "ZZATIRR"
    },
    "11251056": {
        fullName: "INDRATNO PUTRA MEGA NANDA",
        gender: "male",
        photo: `${getLastTwoDigits("11251056")}.jpg`,
        birthPlace: "PPU",
        birthDate: "17 JANUARI 2007",
        phone: "0838-9553-4265 (JIBRAN TEMAN",
        emergencyContact: "0821-5956-4829 (IBU)",
        address: "PERUMAHAN JSB NO.A-10, KM 18",
        medicalHistory: ["ASMA"],
        instagram: "INDRTNO.PUTRA"
    },
    "11251057": {
        fullName: "FANDI NUR SISWANTO",
        gender: "male",
        photo: `${getLastTwoDigits("11251057")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "09 JUNI 2007",
        phone: "085246928001 (BAPAK)",
        emergencyContact: "081322219292 (IBU)",
        address: "JALAN MEKAR SARI, GANG",
        medicalHistory: [],
        instagram: "FNDNRSWNTO"
    },
    "11251058": {
        fullName: "KENZO FAEYZA XAVIER",
        gender: "male",
        photo: `${getLastTwoDigits("11251058")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "10 MEI 2007",
        phone: "081350152101 (FARHAN TEMAN",
        emergencyContact: "0811591661 (IBU)",
        address: "GUNUNG SAMARINDA, JL.",
        medicalHistory: [],
        instagram: "ZONE_FX7"
    },
    "11251059": {
        fullName: "MUHAMMAD REIHAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251059")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "7 FEBRUARI 2007",
        phone: "085754817072 (ATILLA",
        emergencyContact: "08125342396 (IBU)",
        address: "PERUM GRIYA PRIMA LESTARI",
        medicalHistory: ["SESAK NAFAS", "HIPERTENSI", "ASAM"],
        instagram: "HAN.REEII"
    },
    "11251060": {
        fullName: "JUNYTHUS ROMY MIGUEL JODYSS",
        gender: "male",
        photo: `${getLastTwoDigits("11251060")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "5 JUNI 2007",
        phone: "082253044857 (BANG PASYA-",
        emergencyContact: "081346667149 (BAPAK)",
        address: "BALIKPAPAN, JL TELINDUNG BARU",
        medicalHistory: ["ALERGI KRUSTASEA"],
        instagram: "JVNOTEX"
    },
    "11251061": {
        fullName: "MUHAMMAD FATHIR WAHIDIN",
        gender: "male",
        photo: `${getLastTwoDigits("11251061")}.jpg`,
        birthPlace: "BIAK",
        birthDate: "16 DESEMBER 2007",
        phone: "085248049622 (PUGUH TEMAN",
        emergencyContact: "081248513483(IBU)",
        address: "ROYAL RESIDENCE BATU AMPAR",
        medicalHistory: [],
        instagram: "M_FATHIR__"
    },
    "11251062": {
        fullName: "HOLLAND IMANUEL PANGGAU",
        gender: "male",
        photo: `${getLastTwoDigits("11251062")}.jpg`,
        birthPlace: "MARIDAN",
        birthDate: "4 JUNI 2007",
        phone: "081250929520(IBU JK KOST )",
        emergencyContact: "081253922702(IBU)",
        address: "JL. SEI WAIN NO.34",
        medicalHistory: ["ALERGI UDANG", "TANGAN"],
        instagram: "HOLLANDEIMANUEL_"
    },
    "11251063": {
        fullName: "ANDIKA JUSUF JEREMY MUSTARI",
        gender: "male",
        photo: `${getLastTwoDigits("11251063")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "4 JULI 2007",
        phone: "085393889666 (BAPAK)",
        emergencyContact: "081290497275 (IBU)",
        address: "JL. SOEKARNO-HATTA NO 4 RT 44",
        medicalHistory: ["TRIKUSPID REGURGITASI"],
        instagram: "DIKAJEREMY"
    },
    "11251064": {
        fullName: "ANIVAH MU'ATHIYAH",
        gender: "female",
        photo: `${getLastTwoDigits("11251064")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "21 NOVEMBER 2006",
        phone: "085230598435 (IBU)",
        emergencyContact: "085230598435 (IBU)",
        address: "JALAN MARKONI DALAM GANG",
        medicalHistory: [],
        instagram: "NXXVH_"
    },
    "11251065": {
        fullName: "NIZAR NAILENDRA DANGKUA",
        gender: "male",
        photo: `${getLastTwoDigits("11251065")}.jpg`,
        birthPlace: "BERAU",
        birthDate: "24 MEI 2007",
        phone: "085821829100 (KAKAK)",
        emergencyContact: "081350072413 (BAPAK)",
        address: "JL. TELINDUNG, PERUMAHAN",
        medicalHistory: ["EPILEPSY"],
        instagram: "MYBOIE.EXE"
    },
    "11251066": {
        fullName: "MUHAMMAD RIZKY SYAH PUTRA",
        gender: "male",
        photo: `${getLastTwoDigits("11251066")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "4 JUNI 2007",
        phone: "081346615169 (AYAH)",
        emergencyContact: "081346615169 (AYAH)",
        address: "JL MULAWARMAN RT 01 NO 27 GG",
        medicalHistory: [],
        instagram: "SUPERKIYY"
    },
    "11251067": {
        fullName: "RAJIB ADE SETIAWAN",
        gender: "male",
        photo: `${getLastTwoDigits("11251067")}.jpg`,
        birthPlace: "SAMARIDA",
        birthDate: "18 JULI 2006",
        phone: "085162881814 (SEPUPU)",
        emergencyContact: "081254237247 (IBU)",
        address: "JL.PERSATUAN, MANGGAR BARU",
        medicalHistory: ["MAAG", "ASAM LAMBUNG"],
        instagram: "RAJIBADESETIAWAN_"
    },
    "11251068": {
        fullName: "ALFIAN RAMADANI",
        gender: "male",
        photo: `${getLastTwoDigits("11251068")}.jpg`,
        birthPlace: "TENGGARONG",
        birthDate: "07 OKTOBER 2006",
        phone: "0895700424686(REIHAN IF TEMAN",
        emergencyContact: "0895341813016(IBU)",
        address: "JALAN PANDANBARAT RT 15 NO 33",
        medicalHistory: [],
        instagram: "_ALFIANRAMADANI"
    },
    "11251069": {
        fullName: "MUHAMMAD FAHRI",
        gender: "male",
        photo: `${getLastTwoDigits("11251069")}.jpg`,
        birthPlace: "LONG KALI",
        birthDate: "17 JULI 2007",
        phone: "081549307913 (FAIZ TEMEN KOS)",
        emergencyContact: "085705782428 (BAPAK)",
        address: "KOS CAPTAIN HOUSE BANGUN",
        medicalHistory: [],
        instagram: "JUST_FHRII"
    },
    "11251070": {
        fullName: "DZAKY ICKSAN KASTARA",
        gender: "male",
        photo: `${getLastTwoDigits("11251070")}.jpg`,
        birthPlace: "JAKARTA",
        birthDate: "20 SEPTEMBER 2006",
        phone: "081346324167 (AYAH)",
        emergencyContact: "081350861387 (IBU)",
        address: "JL TAMPAK SIRING BLOCK CC-3",
        medicalHistory: [],
        instagram: "DZAKY.I_K"
    },
    "11251071": {
        fullName: "KIRANA MUTHMAINNAH",
        gender: "female",
        photo: `${getLastTwoDigits("11251071")}.jpg`,
        birthPlace: "MANADO.16 AGUSTUS 2006",
        phone: "081332777978 (IBU)",
        emergencyContact: "081332777978 (IBU)",
        address: "JLN.3 GANG PANDEGA NO.45",
        medicalHistory: [],
        instagram: "KIRANAMUTMA"
    },
    "11251072": {
        fullName: "FELIX CHRISTIAN WIJAYA",
        gender: "male",
        photo: `${getLastTwoDigits("11251072")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "6 OKTOBER 2007",
        phone: "088705510338 (ADEK)",
        emergencyContact: "081257336319 (IBU)",
        address: "JL GAJAH MADA RT 26 NO 30",
        medicalHistory: [],
        instagram: "FELIXWJY_"
    },
    "11251073": {
        fullName: "MUHAMMAD ADZIKRIL",
        gender: "male",
        photo: `${getLastTwoDigits("11251073")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "07 AGUSTUS 2006",
        phone: "085247002718 (IBU)",
        emergencyContact: "085269340040 (AYAH)",
        address: "JALAN SWADAYA RT 34 NO. 7",
        medicalHistory: [],
        instagram: "ZIKXS3"
    },
    "11251074": {
        fullName: "ELMA AKFRILLIAH TIPA PASANGA'",
        gender: "female",
        photo: `${getLastTwoDigits("11251074")}.jpg`,
        birthPlace: "BALA",
        birthDate: "26 AGUSTUS 2007",
        phone: "085821425358 (QINA TEMAN",
        emergencyContact: "082188056462 (IBU)",
        address: "JL. SEI WAIN GANG SWADAYA NO.",
        medicalHistory: ["MAAG"],
        instagram: "_VRLLLL"
    },
    "11251076": {
        fullName: "VIOLA ZAHRA NADIFAH",
        gender: "female",
        photo: `${getLastTwoDigits("11251076")}.jpg`,
        birthPlace: "SAMBOJA",
        birthDate: "20 SEPTEMBER 2006",
        phone: "082256661044(IBU",
        emergencyContact: "085246213133(BAPAK)",
        address: "JL. SEI WAIN RT 34 KM 15 KOST",
        medicalHistory: ["MAGH", "GERD", "ASAM LAMBUNG"],
        instagram: "VLZHRND_"
    },
    "11251077": {
        fullName: "NAYLA FITRI",
        gender: "female",
        photo: `${getLastTwoDigits("11251077")}.jpg`,
        birthPlace: "BONTANG 21 NOVEMBER 2006",
        phone: "082154738113 (SALMA, AS TEMEN",
        emergencyContact: "08575008216 (AYAH)",
        address: "JL. SOEKARNO HATTA KM 14 RT",
        medicalHistory: ["ANEMIA"],
        instagram: "NAYY.FTR"
    },
    "11251078": {
        fullName: "REMARSYA FREDERICHA",
        gender: "female",
        photo: `${getLastTwoDigits("11251078")}.jpg`,
        birthPlace: "GERSIK",
        birthDate: "5 MARET 2006",
        phone: "085348090754(BU ATMINI,",
        emergencyContact: "081382499437(IBU)",
        address: "TOKO DUA PUTRA, JL. SOEKARNO",
        medicalHistory: [],
        instagram: "MATCCHAA._"
    },
    "11251079": {
        fullName: "FATI WAHID",
        gender: "male",
        photo: `${getLastTwoDigits("11251079")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "25 DESMBER 2007",
        phone: "0813-4746-0186(IBU KOS ADITH)",
        emergencyContact: "0812-5569-487(AYAH),0821-5581-",
        address: "KOST ADITH JL. SEI WAIN RT 55",
        medicalHistory: [],
        instagram: "FATIWAHID801"
    },
    "11251080": {
        fullName: "AJENG SUKALIS",
        gender: "female",
        photo: `${getLastTwoDigits("11251080")}.jpg`,
        birthPlace: "PAIT",
        birthDate: "12 FEBRUARI 2007",
        phone: "082225509190 (IBU KOS",
        emergencyContact: "081257736832 (IBU)",
        address: "JL SOEKARNO HATTA KM. 14 RT.",
        medicalHistory: ["ALERGI TELUR"],
        instagram: "LYSOWWY"
    },
    "11251082": {
        fullName: "EDWIN KURNIAWAN EKA JULIANDA",
        gender: "male",
        photo: `${getLastTwoDigits("11251082")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "16 JULI 2007",
        phone: "087783119528(ANDI FIRAZ,",
        emergencyContact: "085849407723(IBU)",
        address: "JL SOEKARNO HATTA RUSUNAWA",
        medicalHistory: [],
        instagram: "FANG_SANZ"
    },
    "11251084": {
        fullName: "YUSUF MAULANA",
        gender: "male",
        photo: `${getLastTwoDigits("11251084")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "21 MEI 2007",
        phone: "081349668538 (KAK AUREL",
        emergencyContact: "081350012910 (MAMA)",
        address: "JL.BUKIT NIAGA RT16",
        medicalHistory: ["DBD", "ALERGI KULIT AYAM"],
        instagram: "UCUUPPP15"
    },
    "11251085": {
        fullName: "ABDUH ROBBANI",
        gender: "male",
        photo: `${getLastTwoDigits("11251085")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "31 OKTOBER 2007",
        phone: "0811530275 (IBU)",
        emergencyContact: "0811530275 (IBU)",
        address: "JL INPRES III RT 20 NO11",
        medicalHistory: [],
        instagram: "THINKABOUTDDU"
    },
    "11251086": {
        fullName: "ANDI FIRAZ NADHIR BAIHAQI",
        gender: "male",
        photo: `${getLastTwoDigits("11251086")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "10 JUNI 2007",
        phone: "085754562100 (EDWIN TEMAN 1",
        emergencyContact: "08125864639 (IBU)",
        address: "RT022 RW000 KELURAHAN MUARA",
        medicalHistory: [],
        instagram: "FIRAZANDI"
    },
    "11251087": {
        fullName: "MUHAMMAD RIFQI ARIANTO",
        gender: "male",
        photo: `${getLastTwoDigits("11251087")}.jpg`,
        birthPlace: "TJ REDEP",
        birthDate: "3 DESEMBER 2006",
        phone: "081259896838 (KAKAK HARI)",
        emergencyContact: "081259896838 (KAKAK)",
        address: "PERUM BUMI RENGGANIS BLOK 2B",
        medicalHistory: ["ASMA DAN ACL", "ASMA DAN SAKIT"],
        instagram: "QIYAN_TOO"
    },
    "11251088": {
        fullName: "GHALY YAZID ILMANY",
        gender: "male",
        photo: `${getLastTwoDigits("11251088")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "17 JULI 2007",
        phone: "085654741156 (KAK INTAN)",
        emergencyContact: "082255106116 (IBU)",
        address: "JL. SOEKARNO HATTA KM.11",
        medicalHistory: ["ASMA (SESAK NAFAS JIKA LAMA"],
        instagram: "LOOVENTA"
    },
    "11251089": {
        fullName: "M. LUTHFI HANDAYUDHA",
        gender: "male",
        photo: `${getLastTwoDigits("11251089")}.jpg`,
        birthPlace: "SAMBOJA",
        birthDate: "2 DESEMBER 2006",
        phone: "0812-2256-6463 (WAHID IF TEMAN",
        emergencyContact: "0812-5669-7044 (AYAH)",
        address: "JLN. JEND SUDIRMAN RT 10 TANI",
        medicalHistory: ["MAAG"],
        instagram: "LUTHFII_YU"
    },
    "11251090": {
        fullName: "MUHAMAD ALIF SEPTIAN DWIYANTO",
        gender: "male",
        photo: `${getLastTwoDigits("11251090")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "8 SAEPTEMBER 2007",
        phone: "0811593693 (KAKAK)",
        emergencyContact: "08125410473 (AYAH)",
        address: "JL. AHMAD YANI GG DURIAN RT.18",
        medicalHistory: [],
        instagram: "4LIPPSEP_INFORMATIKA"
    },
    "11251091": {
        fullName: "RAFANDY PUGUH PATRIADI",
        gender: "male",
        photo: `${getLastTwoDigits("11251091")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "21 AGUSTUS 2007",
        phone: "081348694081 (FATHIR WAHIDIN,",
        emergencyContact: "085393307186 (IBU)",
        address: "JL MILONO RT 45 NO 55",
        medicalHistory: ["PATAH TULANG"],
        instagram: "RAFANDY.HERE"
    },
    "11251092": {
        fullName: "DANIEL PHILLIP LIMBHORO",
        gender: "male",
        photo: `${getLastTwoDigits("11251092")}.jpg`,
        birthPlace: "BALIKPAPAN",
        birthDate: "5 DESEMBER 2006",
        phone: "082148041053 (BAPAK)",
        emergencyContact: "081257009959 (IBU)",
        address: "JALAN INDRAKILA GANG ARJUNA",
        medicalHistory: ["ALERGI DINGIN DAN DEBU"],
        instagram: "NIEL.512"
    },
    "11251093": {
        fullName: "MUHAMMAD FATHIR RIZQY",
        gender: "male",
        photo: `${getLastTwoDigits("11251093")}.jpg`,
        birthPlace: "TANAH GROGOT",
        birthDate: "24 JANUARI",
        phone: "087879194284 (MAS NONGKY,",
        emergencyContact: "081384323496 (MAMA)",
        address: "JL GIRI MULYO RT 24",
        medicalHistory: ["DARAH TINGGI"],
        instagram: "FTHIRRI"
    },
    "11251094": {
        fullName: "HUWAIZA AHMAD AZFA",
        gender: "male",
        photo: `${getLastTwoDigits("11251094")}.jpg`,
        birthPlace: "BONTANG",
        birthDate: "7 APRIL 2007",
        phone: "081253777544(IBU)",
        emergencyContact: "081253777544(IBU)",
        address: "JL. SEI WAIN NO.RT.34, KARANG",
        medicalHistory: [],
        instagram: "HUWAIZA2"
    },
    "11251097": {
        fullName: "REYNALDO FARISHA",
        gender: "male",
        photo: `${getLastTwoDigits("11251097")}.jpg`,
        birthPlace: "BERAU",
        birthDate: "05 JANUARI 2006",
        phone: "082352050518 (EPEN, TEMEN",
        emergencyContact: "082157087342 (KAKAK)",
        address: "JALAN SEI WAIN, RT 31,",
        medicalHistory: ["ALERGI UDANG"],
        instagram: "REYN4L__"
    },
    "11251098": {
        fullName: "NURINCE TABUNI",
        gender: "female",
        photo: `${getLastTwoDigits("11251098")}.jpg`,
        birthPlace: "AMUNUME",
        birthDate: "JULI 2007",
        phone: "0821-9767-9877 (KAKAK",
        emergencyContact: "0812-4778-8665 (BAPAK)",
        address: "ASRAMA INSTITUT TEKNOLOGI",
        medicalHistory: [],
        instagram: "NURINCE_TABUNI"
    }
};

const universalPassword = "okelekkuif25";

const loginPage = document.getElementById('loginPage');
const classPage = document.getElementById('classPage');
const biodataPage = document.getElementById('biodataPage');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const logoutBtn = document.getElementById('logoutBtn');
const backBtn = document.getElementById('backBtn');
const copyPhoneBtn = document.getElementById('copyPhoneBtn');

const genderFilter = document.getElementById('genderFilter');
const alphabetButtons = document.querySelectorAll('.alphabet-btn');
const searchInput = document.getElementById('searchInput');
const studentsGrid = document.getElementById('studentsGrid');
const noResults = document.getElementById('noResults');

let currentFilters = {
    gender: 'all',
    alphabet: 'all',
    search: ''
};

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (biodataDatabase.hasOwnProperty(username) && password === universalPassword) {
        errorMessage.style.display = 'none';
        loginPage.style.display = 'none';
        classPage.style.display = 'block';
        renderStudentCards();
    } else {
        errorText.textContent = "Invalid NIM or password. Please try again.";
        errorMessage.style.display = 'block';
    }
});

function renderStudentCards() {
    studentsGrid.innerHTML = '';
    let hasResults = false;
    
    for (const [nim, student] of Object.entries(biodataDatabase)) {
        if (currentFilters.gender !== 'all' && student.gender !== currentFilters.gender) {
            continue;
        }
        
        if (currentFilters.alphabet !== 'all') {
            const firstLetter = student.fullName.charAt(0).toLowerCase();
            if (firstLetter !== currentFilters.alphabet) {
                continue;
            }
        }
        
        if (currentFilters.search !== '') {
            const searchTerm = currentFilters.search.toLowerCase();
            const nameMatch = student.fullName.toLowerCase().includes(searchTerm);
            const nimMatch = nim.includes(searchTerm);
            
            if (!nameMatch && !nimMatch) {
                continue;
            }
        }
        
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <div class="student-card-header">
                <img src="${student.photo}" alt="${student.fullName}" class="student-photo">
                <h3 class="student-name">${student.fullName}</h3>
                <p class="student-nim">${nim}</p>
            </div>
            <div class="student-card-body">
                <div class="student-info">
                    <div class="student-info-item">
                        <i class="fas fa-venus-mars"></i>
                        <span>${student.gender.charAt(0).toUpperCase() + student.gender.slice(1)}</span>
                    </div>
                    <div class="student-info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${student.birthDate}</span>
                    </div>
                    <div class="student-info-item">
                        <i class="fas fa-phone-alt"></i>
                        <span>${student.phone}</span>
                    </div>
                </div>
                <button class="view-details-btn" data-nim="${nim}">
                    <span>View Details</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        studentsGrid.appendChild(card);
        hasResults = true;
    }
    
    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
    
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const nim = this.getAttribute('data-nim');
            displayBiodata(nim);
            classPage.style.display = 'none';
            biodataPage.style.display = 'block';
        });
    });
}

genderFilter.addEventListener('change', function() {
    currentFilters.gender = this.value;
    renderStudentCards();
});

alphabetButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        alphabetButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilters.alphabet = this.getAttribute('data-letter');
        renderStudentCards();
    });
});

searchInput.addEventListener('input', function() {
    currentFilters.search = this.value;
    renderStudentCards();
});

function displayBiodata(nim) {
    const user = biodataDatabase[nim];
    
    document.getElementById('profilePhoto').src = user.photo;
    document.getElementById('profileName').textContent = user.fullName;
    document.getElementById('profileNim').textContent = nim;
    
    document.getElementById('genderInfo').textContent = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
    document.getElementById('birthInfo').textContent = `${user.birthPlace}, ${user.birthDate}`;
    document.getElementById('phoneNumber').innerHTML = `${user.phone} <button class="copy-btn" id="copyPhoneBtn" title="Copy"><i class="fas fa-copy"></i></button>`;
    document.getElementById('emergencyContact').textContent = user.emergencyContact;
    
    const instagramLink = document.getElementById('instagramLink');
    document.getElementById('instagramHandle').textContent = user.instagram || "Not Provided";
    
    if (user.instagram) {
        instagramLink.href = `https://www.instagram.com/${user.instagram}`;
    } else {
        instagramLink.href = "#";
        instagramLink.style.pointerEvents = "none";
        instagramLink.style.opacity = "0.6";
    }
    
    document.getElementById('address').textContent = user.address;
    
    const medicalHistoryList = document.getElementById('medicalHistory');
    medicalHistoryList.innerHTML = '';
    
    if (user.medicalHistory && user.medicalHistory.length > 0) {
        user.medicalHistory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            medicalHistoryList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No medical history provided";
        medicalHistoryList.appendChild(li);
    }
    
    document.getElementById('copyPhoneBtn').addEventListener('click', copyPhoneNumber);
}

function copyPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').textContent.replace(' Copy', '');
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const originalHTML = document.getElementById('copyPhoneBtn').innerHTML;
        document.getElementById('copyPhoneBtn').innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            document.getElementById('copyPhoneBtn').innerHTML = originalHTML;
        }, 2000);
    });
}

backBtn.addEventListener('click', function() {
    biodataPage.style.display = 'none';
    classPage.style.display = 'block';
});

logoutBtn.addEventListener('click', function() {
    biodataPage.style.display = 'none';
    classPage.style.display = 'none';
    loginPage.style.display = 'flex';
    loginForm.reset();
    
    currentFilters = {
        gender: 'all',
        alphabet: 'all',
        search: ''
    };
    
    genderFilter.value = 'all';
    alphabetButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.alphabet-btn[data-letter="all"]').classList.add('active');
    searchInput.value = '';
});