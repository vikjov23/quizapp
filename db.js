const questions = [
  {
    id: 1,
    question: "Bol kod akutnog pankreatitisa se :",
    answers: [
      // [] - niz
      //{} - objekat
      {
        id: 1,
        answer: "siri pojasno u ledja",
      },
      {
        id: 2,
        answer: "lokalizuje ispod desnog rebarnog luka",
      },
      {
        id: 3,
        answer: "siri u prepone",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "kod vecine obolelih od hronicne mijeloidne (granulocitne) leukemije javlja se:",
    answers: [
      {
        id: 1,
        answer: "Filadefijski hromozom",
      },
      {
        id: 2,
        answer: "Promene na X hromozomu",
      },
      {
        id: 3,
        answer: "trizomija 21-og para",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Terapija edema pluca obuhvata davanjem?",
    answers: [
      {
        id: 1,
        answer: "Antibiotika",
      },
      {
        id: 2,
        answer: "Sedativa",
      },
      {
        id: 3,
        answer: "Diuretika",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question:
      "Za postavljanje dijagnoze hronicne opstruktivne bolesti pluca koristi se:",
    answers: [
      {
        id: 1,
        answer: "Ultrazvuk pluca",
      },
      {
        id: 2,
        answer: "Spirometrija",
      },
      {
        id: 3,
        answer: "Radioskopija pluca",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question:
      "Hronicna komplikacija secerne bolesti koja dovodi do gubitka vida je:",
    answers: [
      {
        id: 1,
        answer: "Angiopatija dijabetika",
      },
      {
        id: 2,
        answer: "Retinopatija dijabetika",
      },
      {
        id: 3,
        answer: "Nefropatija dijabetika",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      "Osnovna dijagnosticka metoda kod bolesnika sa ulkusom zeludca je::",
    answers: [
      {
        id: 1,
        answer: "Gastroskopija",
      },
      {
        id: 2,
        answer: "Analiza zeludacnog sadrzaja",
      },
      {
        id: 3,
        answer: "Kolonoskopija",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Akutna komplikacija ulkusne bolesti  je:",
    answers: [
      {
        id: 1,
        answer: "Stenoza pilorusa",
      },
      {
        id: 2,
        answer: "Krvarenje",
      },
      {
        id: 3,
        answer: "Maligna alteracija",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 8,
    question: "U terapiji ulkusne bolesti se koriste:",
    answers: [
      {
        id: 1,
        answer: "Beta blokatori",
      },
      {
        id: 2,
        answer: "Acetil-salicilna kiselina",
      },
      {
        id: 3,
        answer: "Blokatori N-2 receptora",
      },
    ],
    correctAnswer: 3,
  },

  {
    id: 9,
    question: "Za kronovu bolest je karakteristicno da:",
    answers: [
      {
        id: 1,
        answer: "Je akutna zapaljenska bolest",
      },
      {
        id: 2,
        answer: "Zahvata samo rektum",
      },
      {
        id: 3,
        answer: "Zahvata bilo koji deo digestivnog sistema",
      },
    ],
    correctAnswer: 3,
  },

  {
    id: 10,
    question: "Ulcerozni kolitis zahvata:",
    answers: [
      {
        id: 1,
        answer: "Tanko crevo",
      },
      {
        id: 2,
        answer: "Debelo crevo",
      },
      {
        id: 3,
        answer: "Zeludac",
      },
    ],
    correctAnswer: 2,
  },
  //10 pitanja
  {
    id: 11,
    question: "Kod endemske nefropatije bubrezi su :",
    answers: [
      // [] - niz
      //{} - objekat
      {
        id: 1,
        answer: "Veliki policisticni",
      },
      {
        id: 2,
        answer: "Smanjeni stanjenog parenhima",
      },
      {
        id: 3,
        answer: "Hipertroficni",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "Nefrotski sindrom NE karakterise:",
    answers: [
      {
        id: 1,
        answer: "hiperlipidemija",
      },
      {
        id: 2,
        answer: "proteinurija",
      },
      {
        id: 3,
        answer: "hipoproteinemija",
      },
      {
        id: 4,
        answer: "edemi",
      },
      {
        id: 5,
        answer: "hematemeza",
      },
    ],
    correctAnswer: 5,
  },
  {
    id: 13,
    question: "Akutnu bubreznu insuficijenciju karakterise",
    answers: [
      {
        id: 1,
        answer: "anurija",
      },
      {
        id: 2,
        answer: "dizurija",
      },
      {
        id: 3,
        answer: "hematurija",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "Klinicku sliku akutnog pijelonefritisa NE karakterise:",
    answers: [
      {
        id: 1,
        answer: "Povisena temperatura, groznica, jeza, drhtavica",
      },
      {
        id: 2,
        answer: "ucestalo mokrenje",
      },
      {
        id: 3,
        answer: "dizuricne smetnje",
      },
      {
        id: 4,
        answer: "bolovi u slabinama",
      },
      {
        id: 5,
        answer: "obilna hematurija",
      },
    ],
    correctAnswer: 5,
  },
  {
    id: 15,
    question: "Dijabetes insipidus nastaje zbog nedostatka::",
    answers: [
      {
        id: 1,
        answer: "Antidiuretickog hormona",
      },
      {
        id: 2,
        answer: "hormona rasta",
      },
      {
        id: 3,
        answer: "insulina",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    question: "Akromegaliju karakterise:",
    answers: [
      {
        id: 1,
        answer: "pad krvnog pritiska",
      },
      {
        id: 2,
        answer: "smanjenje unutrasnjih organa",
      },
      {
        id: 3,
        answer: "uvecanje saka i stopala",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "Primarni hiperparatireodizam karakterise:",
    answers: [
      {
        id: 1,
        answer: "hiperkalcijemija",
      },
      {
        id: 2,
        answer: "hipokalcijemija",
      },
      {
        id: 3,
        answer: "tetanija",
      },
    ],
    correctAnswer: 1,
  },

  {
    id: 18,
    question: "Diabetes mellitus tip 1 leci se:",
    answers: [
      {
        id: 1,
        answer: "Oralnim antidijabeticima",
      },
      {
        id: 2,
        answer: "insulinskom terapijom",
      },
      {
        id: 3,
        answer:
          "U pocetku insulinskom terapijom, a kasnije oralnim antidijabeticima",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "Diabetes mellitus tip 2 nastaje zbog:",
    answers: [
      {
        id: 1,
        answer: "rezistencije perifernih tkiva na insulin",
      },
      {
        id: 2,
        answer: "autoimunog ostecenja beta celija pankreasa",
      },
      {
        id: 3,
        answer: "Uzrok zavisi od uzrasta bolesnika",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "giht nastaje zbog:",
    answers: [
      {
        id: 1,
        answer: "povecanog stvaranja mokracne kiseline",
      },
      {
        id: 2,
        answer: "smanjenog stvaranja mokracne kiseline",
      },
      {
        id: 3,
        answer: "smanjenog unosa mokracne kiseline",
      },
    ],
    correctAnswer: 1,
  },
  //20 pitanja

  {
    id: 21,
    question: "Aortna stenoza je :",
    answers: [
      // [] - niz
      //{} - objekat
      {
        id: 1,
        answer: "poviseni krvni pritisak",
      },
      {
        id: 2,
        answer: "srcana mana aortnog zalistka",
      },
      {
        id: 3,
        answer: "dilatacija aorte",
      },
      {
        id: 4,
        answer: "tromboza aorte aorte",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 22,
    question: "Za bronhijalnu astmu je tipican:",
    answers: [
      {
        id: 1,
        answer: "produzen inspirijum",
      },
      {
        id: 2,
        answer: "produzen ekspirijum",
      },
      {
        id: 3,
        answer: "produzeni su i inspirijum i ekspirijum",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question:
      "Dijagnosticka metoda koja se NE koristi u postavljanju dijagnoze plucne tuberkuloze je:",
    answers: [
      {
        id: 1,
        answer: "ultrazvuk",
      },
      {
        id: 2,
        answer: "rendgenografija sa tomografijom",
      },
      {
        id: 3,
        answer: "direktni mikroskopski pregled sputuma",
      },
      {
        id: 4,
        answer: "bronhoskopija",
      },
      {
        id: 5,
        answer: "biopsija",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "Invazivna dijagnosticka metoda u kardiologiji je:",
    answers: [
      {
        id: 1,
        answer: "Test opterecenja",
      },
      {
        id: 2,
        answer: "elektrokardiografija",
      },
      {
        id: 3,
        answer: "koronarografija",
      },
      {
        id: 4,
        answer: "ehokardiografija",
      },
      {
        id: 5,
        answer: "24casovno elektrokardiografsko holter pracenje",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "Kod mitralne stenoze, na pocetku bolesti, uvecana je:",
    answers: [
      {
        id: 1,
        answer: "Leva pretkomora",
      },
      {
        id: 2,
        answer: "leva komora",
      },
      {
        id: 3,
        answer: "desna pretkomora",
      },
      {
        id: 3,
        answer: "desna komora",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "Anemiju karakterise:",
    answers: [
      {
        id: 1,
        answer: "smanjen broj leukocita i eritrocita",
      },
      {
        id: 2,
        answer: "smanjen broj eritrocita",
      },
      {
        id: 3,
        answer: "smanjen broj trombocita i leukocita",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 27,
    question: "Ortopneja je znak:",
    answers: [
      {
        id: 1,
        answer: "popustanja desnog srca",
      },
      {
        id: 2,
        answer: "popustanja levog srca",
      },
      {
        id: 3,
        answer: "bronhiektazija",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 28,
    question:
      "Hemokultura je osnovni dijagnosticki postupak za postavljanje dijagnoze infektivnog endokarditisa. Prilikom sumnje na ovu bolest potrebno je prvog dana uraditi:",
    answers: [
      {
        id: 1,
        answer: "tri hemokulture",
      },
      {
        id: 2,
        answer: "cetiri hemokulture",
      },
      {
        id: 3,
        answer: "sest i vise hemokultura",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 29,
    question: "Obolelima od miokarditisa savetuje se:",
    answers: [
      {
        id: 1,
        answer: "fizicka aktivnost",
      },
      {
        id: 2,
        answer: "antibiotici",
      },
      {
        id: 3,
        answer: "mirovanje",
      },
      {
        id: 4,
        answer: "kardiotonici",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "Normalni zivotni vek eritrocita je:",
    answers: [
      {
        id: 1,
        answer: "80 dana",
      },
      {
        id: 2,
        answer: "50 dana",
      },
      {
        id: 3,
        answer: "120 dana",
      },
      {
        id: 4,
        answer: "200 dana",
      },
    ],
    correctAnswer: 3,
  },

  //30 pitanja

  {
    id: 31,
    question: "Lecenje akutne limfoblastne leukemije uspesnije je kod :",
    answers: [
      // [] - niz
      //{} - objekat
      {
        id: 1,
        answer: "dece",
      },
      {
        id: 2,
        answer: "odraslih muskaraca",
      },
      {
        id: 3,
        answer: "odraslih zena",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question:
      "Bolesnici koji boluju od malignih promena multiplog mijeloma zael se na bolove u:",
    answers: [
      {
        id: 1,
        answer: "glavi",
      },
      {
        id: 2,
        answer: "kicmenom stubu",
      },
      {
        id: 3,
        answer: "misicima",
      },
      {
        id: 4,
        answer: "grudima",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 33,
    question: "Grejvs-Bazedovljeva bolest je:",
    answers: [
      {
        id: 1,
        answer: "izazvana virusima",
      },
      {
        id: 2,
        answer: "izazvana bakterijama",
      },
      {
        id: 3,
        answer: "autoimuna bolset",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 34,
    question:
      "Vazopresin se u cilju lecenja insipidnog dijabetesa u organizam unosi:",
    answers: [
      {
        id: 1,
        answer: "oralnim putem",
      },
      {
        id: 2,
        answer: "intravenskim putem",
      },
      {
        id: 3,
        answer: "usmrkavanjem",
      },
      {
        id: 4,
        answer: "intramuskularnim putem",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 35,
    question: "Hipoglikemija je:",
    answers: [
      {
        id: 1,
        answer: "akutna komplikacija Diabetis mellitus-a",
      },
      {
        id: 2,
        answer: "hronicna komplikacija ateroskleroze",
      },
      {
        id: 3,
        answer: "komplikacija Grejvs-Bazedovljeve bolesti",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 36,
    question: "Gorusica je simptom koji karakterise:",
    answers: [
      {
        id: 1,
        answer: "osecaj pecenja iza grudne kosti",
      },
      {
        id: 2,
        answer: "otezan prolaz hrane",
      },
      {
        id: 3,
        answer: "stucanje",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 37,
    question:
      "Nasledna bolest koja izaziva hronicnu isuficijenciju bubrega je:",
    answers: [
      {
        id: 1,
        answer: "policisticna bolest bubrega",
      },
      {
        id: 2,
        answer: "hronicni glomerulonefritis",
      },
      {
        id: 3,
        answer: "nefrotski sindrom",
      },
    ],
    correctAnswer: 1,
  },

  {
    id: 38,
    question: "Sezonsko javljanje ulkusnog bola nastaje u:",
    answers: [
      {
        id: 1,
        answer: "zimu i prolece",
      },
      {
        id: 2,
        answer: "prolece i jesen",
      },
      {
        id: 3,
        answer: "leto i jesen",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 39,
    question: "Inkontinencija urina je:",
    answers: [
      {
        id: 1,
        answer: "nevoljno mokrenje nocu",
      },
      {
        id: 2,
        answer: "ucestalo mokrenje",
      },
      {
        id: 3,
        answer: "nesposobnost zadrzavanja mokrace u besici",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 40,
    question: "Ukoliko se dnevno stvori do 500ml mokrace, pojava se naziva:",
    answers: [
      {
        id: 1,
        answer: "poliurija",
      },
      {
        id: 2,
        answer: "dizurija",
      },
      {
        id: 3,
        answer: "oligurija",
      },
    ],
    correctAnswer: 3,
  },

  //40 pitanja

  {
    id: 41,
    question: "Ciroza jetre dovodi do :",
    answers: [
      // [] - niz
      //{} - objekat
      {
        id: 1,
        answer: "varikoziteta jednjaka",
      },
      {
        id: 2,
        answer: "ulkusne bolesti",
      },
      {
        id: 3,
        answer: "infarkta srca",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 42,
    question: "kod akutne bubrezne insuficijencije je:",
    answers: [
      {
        id: 1,
        answer: "povisen  kalijum u krvi",
      },
      {
        id: 2,
        answer: "povisen kalcijum u krvi",
      },
      {
        id: 3,
        answer: "poviseni bikarbonati u krvi",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 43,
    question:
      "U klinickoj slici kod Secerne bolesti tip 1 ne javlja se sledeci znak:",
    answers: [
      {
        id: 1,
        answer: "poliurija",
      },
      {
        id: 2,
        answer: "polidipsija",
      },
      {
        id: 3,
        answer: "hematurija",
      },
      {
        id: 4,
        answer: "polifagija",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 44,
    question: "Dijagnoza akutnog infarkta miokarda postavlja se na osnovu:",
    answers: [
      {
        id: 1,
        answer: "testa opterecenja",
      },
      {
        id: 2,
        answer: "Biohemijske analize",
      },
      {
        id: 3,
        answer: "Holtera Ekg",
      },
      {
        id: 4,
        answer: "Ekg",
      },
    ],
    correctAnswer: 3,
    correctAnswer: 4,
  },
  {
    id: 45,
    question: "Karakteristicni simptomi bronhijalne astme su :",
    answers: [
      {
        id: 1,
        answer: "bol u grudima",
      },
      {
        id: 2,
        answer: "hemoptizije",
      },
      {
        id: 3,
        answer: "napad gusenja",
      },
      {
        id: 4,
        answer: "sviranje u grudima",
      },
    ],
    correctAnswer: 3,
    correctAnswer: 4,
  },
  {
    id: 46,
    question: "Kod Reumatske groznice promene se ne javljaju na:",
    answers: [
      {
        id: 1,
        answer: "na kozi",
      },
      {
        id: 2,
        answer: "na srcu",
      },
      {
        id: 3,
        answer: "na jetri i slezini",
      },
      {
        id: 4,
        answer: "na zglobovima",
      },
      {
        id: 5,
        answer: "na plucima",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 47,
    question: "Za bakterijsku pneumoniju karakteristicni simptomi su:",
    answers: [
      {
        id: 1,
        answer: "stalna subfebrilna temperatura",
      },
      {
        id: 2,
        answer: "kasalj",
      },
      {
        id: 3,
        answer: "bolovi u misicima i zglobovima",
      },
      {
        id: 4,
        answer: "dispnea",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 48,
    question: "Invazivna dijagnosticka metoda je:",
    answers: [
      {
        id: 1,
        answer: "nativna radiografija",
      },
      {
        id: 2,
        answer: "elektrokardiografija",
      },
      {
        id: 3,
        answer: "abdominalna punkcija",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 49,
    question: "Privremena metoda hemostaze je:",
    answers: [
      {
        id: 1,
        answer: "elektrokoagulacija",
      },
      {
        id: 2,
        answer: "sutura krvnog suda",
      },
      {
        id: 3,
        answer: "digitalna kompresija",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 50,
    question:
      "D-aglutinogen ili rezus-faktor svojim prisustvom na membrani eritrocita oznacava da je osoba:",
    answers: [
      {
        id: 1,
        answer: "Rh-negativna",
      },
      {
        id: 2,
        answer: "AB-pozitivna",
      },
      {
        id: 3,
        answer: "AB-negativna",
      },
      {
        id: 4,
        answer: "Rh-pozitivna",
      },
    ],
    correctAnswer: 4,
  },

  //50 pitanja

  {
    id: 51,
    question:
      "Sterilizacija koja se sprovodi po principu delovanja vodene pare pod pritiskom naziva se :",
    answers: [
      {
        id: 1,
        answer: "suva sterilizacija",
      },
      {
        id: 2,
        answer: "sterilizacija radijacijom",
      },
      {
        id: 3,
        answer: "sterilizacija autoklavom",
      },
      {
        id: 4,
        answer: "sterilizacija kuvanjem",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 52,
    question: "neinvazivna dijagnosticka metoda je:",
    answers: [
      {
        id: 1,
        answer: "gastroskopija",
      },
      {
        id: 2,
        answer: "lumbalna punkcija",
      },
      {
        id: 3,
        answer: "ultrazvucno snimanje",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 53,
    question: "U metode regionalne anestezije spada:",
    answers: [
      {
        id: 1,
        answer: "lumbalna punkcija",
      },
      {
        id: 2,
        answer: "inhalaciona anestezija",
      },
      {
        id: 3,
        answer: "spinalna anestezija",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 54,
    question: "U zatvorene povrede spada:",
    answers: [
      {
        id: 1,
        answer: "dystorsio",
      },
      {
        id: 2,
        answer: "vulnus scissum",
      },
      {
        id: 3,
        answer: "vulnus lacero - contusum",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 55,
    question: "U otvorene povrede spada :",
    answers: [
      {
        id: 1,
        answer: "vulnus lacero - contusum",
      },
      {
        id: 2,
        answer: "contusio",
      },
      {
        id: 3,
        answer: "compresio",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 56,
    question: "Rana naneta ujedom zivotinja je:",
    answers: [
      {
        id: 1,
        answer: "vulnus puctum",
      },
      {
        id: 2,
        answer: "vulnus sclopetarium",
      },
      {
        id: 3,
        answer: "vulnus morsum",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 57,
    question: "Primarna hirurska obrada otvorene, inficirane rane podrazumeva:",
    answers: [
      {
        id: 1,
        answer: "usivanje primarnim savom",
      },
      {
        id: 2,
        answer: "ciscenje i previjanje, a potom usivanje savom",
      },
      {
        id: 3,
        answer: "samo ciscenje i previjanje",
      },
    ],
    correctAnswer: 3,
  },

  {
    id: 58,
    question: "Kod prekida kicmene mozdine na nivou cervikalne kicme nastaje:",
    answers: [
      {
        id: 1,
        answer: "hemipareza",
      },
      {
        id: 2,
        answer: "kvadriplegija",
      },
      {
        id: 3,
        answer: "paraplegija",
      },
      {
        id: 4,
        answer: "oduzetost samo gornjih ekstremiteta",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 59,
    question: "Pojava krvi u pleuralnom prostoru naziva se:",
    answers: [
      {
        id: 1,
        answer: "pneumotoraks",
      },
      {
        id: 2,
        answer: "hematotoraks",
      },
      {
        id: 3,
        answer: "hidrotoraks",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 60,
    question: "Pojava vazduha u pleuralnom prostoru naziva se:",
    answers: [
      {
        id: 1,
        answer: "pneumotoraks",
      },
      {
        id: 2,
        answer: "hematotoraks",
      },
      {
        id: 3,
        answer: "hidrotoraks",
      },
    ],
    correctAnswer: 1,
  },

  //60 pitanja

  {
    id: 61,
    question:
      "Hirursko lecenje koje podrazumeva kompletno odstranjenje dojke naziva se :",
    answers: [
      {
        id: 1,
        answer: "mastektomija",
      },
      {
        id: 2,
        answer: "mamografija",
      },
      {
        id: 3,
        answer: "mastodinija",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 62,
    question:
      "Povrede kod kojih dolazi do komunikacije izmedju spoljasnje sredine i neke od telesnih duplji zovu se:",
    answers: [
      {
        id: 1,
        answer: "perforantne",
      },
      {
        id: 2,
        answer: "penetrantne",
      },
      {
        id: 3,
        answer: "superficijalne",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 63,
    question: "Kod svih povreda trbuha, prva pomoc podrazumeva:",
    answers: [
      {
        id: 1,
        answer: "zabranu unosenja hrane i tecnosti",
      },
      {
        id: 2,
        answer: "davanje analgetika",
      },
      {
        id: 3,
        answer: "postavljanje bolesnika potrbuske",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 64,
    question: "Ruptura slezine usred povrede, hirurski se zbrinjava:",
    answers: [
      {
        id: 1,
        answer: "usivanjem slezine",
      },
      {
        id: 2,
        answer: "potpunim uklanjanjem slezine",
      },
      {
        id: 3,
        answer: "uklanjanjem povredjenih delova slezine",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 65,
    question: "Bol kod perforacije zeludacnog ulkusa se opisuje kao:",
    answers: [
      {
        id: 1,
        answer: "'tistanje i pecenje u predelu zeludca' ",
      },
      {
        id: 2,
        answer: "'ubod nozem u predelu pupka sa sirenjem prema kljucnoj kosti'",
      },
      {
        id: 3,
        answer: "'bol u desnoj strani trbuha sa sirenjem u desnu nogu'",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 66,
    question:
      "Karakteristican nalaz za ileus na nativnoj radiografiji trbuha je:",
    answers: [
      {
        id: 1,
        answer: "prisustvo vazdusnog srpa ispod dijafragme",
      },
      {
        id: 2,
        answer: "prisustvo aero-hidricnih nivoa u crevima",
      },
      {
        id: 3,
        answer: "'mecava' u trbuhu",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 67,
    question: "Femoralna kila se cesce javlja kod:",
    answers: [
      {
        id: 1,
        answer: "muskaraca",
      },
      {
        id: 2,
        answer: "zena",
      },
      {
        id: 3,
        answer: "kod oba pola podjednako",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 68,
    question:
      "Flebotromboza podrazumeva stvaranje tromba u dubokim venama najcesce:",
    answers: [
      {
        id: 1,
        answer: "nogu",
      },
      {
        id: 2,
        answer: "ruku",
      },
      {
        id: 3,
        answer: "glave",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 69,
    question: "Artroskopija je invazivna metoda pregleda:",
    answers: [
      {
        id: 1,
        answer: "medijastinuma",
      },
      {
        id: 2,
        answer: "velikih zglobova",
      },
      {
        id: 3,
        answer: "krvnih sudova",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 70,
    question: "metroragija je:",
    answers: [
      {
        id: 1,
        answer: "krvarenje iz materice",
      },
      {
        id: 2,
        answer: "krvarenje iz bubrega",
      },
      {
        id: 3,
        answer: "krvarenje iz nosa",
      },
    ],
    correctAnswer: 1,
  },

  //70 pitanja

  {
    id: 71,
    question: "Povrede izazvane kiselinama daju:",
    answers: [
      {
        id: 1,
        answer: "koagulacionu (suvu) nekrozu",
      },
      {
        id: 2,
        answer: "kolikvacionu (vlaznu) nekrozu",
      },
      {
        id: 3,
        answer: "kazeoznu nekrozu",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 72,
    question: "Duglasov prostor je najnizi prostor u:",
    answers: [
      {
        id: 1,
        answer: "grudnom kosu",
      },
      {
        id: 2,
        answer: "trbuhu",
      },
      {
        id: 3,
        answer: "usnoj duplji",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 73,
    question: "Imobilizacija kod povrede vratne kicme obavlja se pomocu:",
    answers: [
      {
        id: 1,
        answer: "Sancove kragne",
      },
      {
        id: 2,
        answer: "Kramerove sine",
      },
      {
        id: 3,
        answer: "spoljnjeg fiksatora",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 74,
    question: "Fibroadenom dojke je:",
    answers: [
      {
        id: 1,
        answer: "maligni tumor",
      },
      {
        id: 2,
        answer: "benigni tumor",
      },
      {
        id: 3,
        answer: "metastaticki tumor",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 75,
    question:
      "Bol ispod desnog rebarnog luka koji zraci ispod desne lopatice karakteristican je za:",
    answers: [
      {
        id: 1,
        answer: "ahalazija ",
      },
      {
        id: 2,
        answer: "cir na dvanaestopalacnom crevu",
      },
      {
        id: 3,
        answer: "kamen u zucnoj kesici",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 76,
    question:
      "Usled perforacije na zelucu kao komplikacije ulkusne bolesti stvara se otvor kroz koji se zeludacni sadrzaj izliva u trbusnu supljinu izazivajuci akutni:",
    answers: [
      {
        id: 1,
        answer: "hepatitis",
      },
      {
        id: 2,
        answer: "cistitis",
      },
      {
        id: 3,
        answer: "peritonitis",
      },
      {
        id: 4,
        answer: "meningitis",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 77,
    question: "Za renalne kolike nije karakteristicno:",
    answers: [
      {
        id: 1,
        answer: "nagli pocetak sa jakim bolom u slabinskom predelu",
      },
      {
        id: 2,
        answer: "zastoj vetrova, stolice meteorizam",
      },
      {
        id: 3,
        answer: "bol koji se siri ka unutrasnjoj strani butine",
      },
      {
        id: 4,
        answer: "bol pracen mukom, gadjenjem, i povracanjem",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 78,
    question:
      "Kod oboljenja perifernih krvnih sudova karakteristicno je da se javlja:",
    answers: [
      {
        id: 1,
        answer: "krepitacija",
      },
      {
        id: 2,
        answer: "regurgitacija",
      },
      {
        id: 3,
        answer: "claudicatio intermitens",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 79,
    question:
      "povreda zgloba pracena dislokacijom zglobnih povrsina naziva se:",
    answers: [
      {
        id: 1,
        answer: "iscasenje",
      },
      {
        id: 2,
        answer: "uganuce",
      },
      {
        id: 3,
        answer: "fraktura",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 80,
    question: "Prelom radijusa na tipicnom mestu najcesce nastaje:",
    answers: [
      {
        id: 1,
        answer: "kod starijih ljudi, usled pada na ispruzene sake",
      },
      {
        id: 2,
        answer: "kod dece, usled pada na ispruzene sake",
      },
      {
        id: 3,
        answer: "tokom velikog epilepticnog napada",
      },
    ],
    correctAnswer: 2,
  },

  //80 pitanja

  {
    id: 81,
    question:
      "Akutno hirursko oboljenje koje karakterise zastoj stolice i vetrova zbog nemogucnosti prolaska crevnog sadrzaja kroz tanko ili debelo crevo zove se:",
    answers: [
      {
        id: 1,
        answer: "akutni abdomen",
      },
      {
        id: 2,
        answer: "ileus",
      },
      {
        id: 3,
        answer: "akutni pankreatitis",
      },
      {
        id: 3,
        answer: "holecistitis",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 82,
    question:
      "Oboljenje prostate koje nastaje usled proliferacije fibroznog i misicnog tkiva prostate u starijih muskaraca naziva se:",
    answers: [
      {
        id: 1,
        answer: "adenokarcinom prostate",
      },
      {
        id: 2,
        answer: "hronicni prostatitis",
      },
      {
        id: 3,
        answer: "benigna hiperplazija prostate",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 83,
    question:
      "Ukoliko u klinickoj slici bolesnika dominiraju lokalni znaci upale, otok, bol, crvenilo i toplota u projekciji zahvacene povrsne vene on najverovatnije boluje od:",
    answers: [
      {
        id: 1,
        answer: "flebotromboze",
      },
      {
        id: 2,
        answer: "tromboflebitisa",
      },
      {
        id: 3,
        answer: "arteritisa",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 84,
    question:
      "Medju ponudjenim odgovorima izdvojite onaj koji ne predstavlja opsti uzrok epistakse:",
    answers: [
      {
        id: 1,
        answer: "infektivne bolesti(sarlah, difterija itd.)",
      },
      {
        id: 2,
        answer: "hematoloski poremecaj",
      },
      {
        id: 3,
        answer: "strana tela u nosu",
      },
      {
        id: 3,
        answer: "hipertenzija",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 85,
    question: "Kod preloma kljucne kosti, lecenje je najcesce konzervativno:",
    answers: [
      {
        id: 1,
        answer: "plasiranjem medularnog klina",
      },
      {
        id: 2,
        answer: "gips longetom",
      },
      {
        id: 3,
        answer: "zavojem u obliku osmice",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 86,
    question: "Limfagitis je lokalno zapaljenje:",
    answers: [
      {
        id: 1,
        answer: "limfne zlezde",
      },
      {
        id: 2,
        answer: "lojne zlezde",
      },
      {
        id: 3,
        answer: "limfnog suda",
      },
      {
        id: 4,
        answer: "limfoma",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 87,
    question: "Limfangitis je lokalno zapaljenje:",
    answers: [
      {
        id: 1,
        answer: "limfne zlezde",
      },
      {
        id: 2,
        answer: "lojne zlezde",
      },
      {
        id: 3,
        answer: "limfnog suda",
      },
      {
        id: 4,
        answer: "limfoma",
      },
    ],
    correctAnswer: 3,
  },

  {
    id: 88,
    question:
      "Uzrocnik tetanusa koji dospeva u zemlju u obliku spora preko zivotinjskog izmeta naziva se:",
    answers: [
      {
        id: 1,
        answer: "Clostridium perfrigens",
      },
      {
        id: 2,
        answer: "Clostridium tetani",
      },
      {
        id: 3,
        answer: "Clostridium botulinum",
      },
      {
        id: 4,
        answer: "Clostridium vulgaris",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 89,
    question: "U dijagnostici preloma najcesce koristimo:",
    answers: [
      {
        id: 1,
        answer: "UZ dijagnostiku",
      },
      {
        id: 2,
        answer: "CT dijagnostiku",
      },
      {
        id: 3,
        answer: "RTG dijagnostiku",
      },
      {
        id: 4,
        answer: "MR dijagnostiku",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 90,
    question:
      "Definitivnu dijagnozu primarnog malignog tumora pluca postavljamo pomocu:",
    answers: [
      {
        id: 1,
        answer: "Gastroskopije sa biopsijom",
      },
      {
        id: 2,
        answer: "Ezofagoskopije sa bijopsijom",
      },
      {
        id: 3,
        answer: "Bronhoskopije sa bijopsijom",
      },
      {
        id: 4,
        answer: "Kolonoskopije sa bijopsijom",
      },
    ],
    correctAnswer: 3,
  },

  //90 pitanja

  {
    id: 91,
    question: "Tromboembolijska komplikacija dubokih vena karlice je:",
    answers: [
      {
        id: 1,
        answer: "mozdani udar",
      },
      {
        id: 2,
        answer: "dijabetes melitus",
      },
      {
        id: 3,
        answer: "infarkt miokarda",
      },
      {
        id: 4,
        answer: "plucna embolija",
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 92,
    question: "Osnovni ciljevi opste anestezije su postizanje:",
    answers: [
      {
        id: 1,
        answer: "analgezije",
      },
      {
        id: 2,
        answer: "parestezije",
      },
      {
        id: 3,
        answer: "arefleksije",
      },

      {
        id: 4,
        answer: "misicne ekstenzije",
      },
      {
        id: 5,
        answer: "misicne relaksacije",
      },
      {
        id: 6,
        answer: "depresije disanja",
      },
    ],
    correctAnswer: 1,
    correctAnswer: 3,
    correctAnswer: 5,
  },
  {
    id: 93,
    question: "Borelioza (Lajmska bolest) je sistematska bolest koju izaziva:",
    answers: [
      {
        id: 1,
        answer: "bleda spiroheta",
      },
      {
        id: 2,
        answer: "Borelia burgdoferi",
      },
      {
        id: 3,
        answer: "Bacil tuberkuloze",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 94,
    question: "Nacin na koji se NE prenosi virus gripe:",
    answers: [
      {
        id: 1,
        answer: "kapljicnim putem",
      },
      {
        id: 2,
        answer: "direktan kontakt ruku ili pomocu kontaminiranih predmeta",
      },
      {
        id: 3,
        answer: "polnim putem",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 95,
    question:
      "Labaratorijska dijagnoza salmoneloze postize se na osnovu pozitivnog nalaza:",
    answers: [
      {
        id: 1,
        answer: "brisa zdrela",
      },
      {
        id: 2,
        answer: "hemokulture",
      },
      {
        id: 3,
        answer: "koprokulture",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 96,
    question: "Malariju prenose:",
    answers: [
      {
        id: 1,
        answer: "Covecija vas tela - Pediculus vestimenti",
      },
      {
        id: 2,
        answer: "Komarci iz roda Anopheles",
      },
      {
        id: 3,
        answer: "krpelj - Ixodes ricinus",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 97,
    question: "Herpes zoster je :",
    answers: [
      {
        id: 1,
        answer: "komplikacija u toku varicele",
      },
      {
        id: 2,
        answer: "pozni recidiv u bolesnika koji je prelezao varicelu",
      },
      {
        id: 3,
        answer: "posebna bolest",
      },
    ],
    correctAnswer: 2,
  },

  {
    id: 98,
    question: "Decja paraliza (poliomyelitis anterior acuta) se svrstava  u:",
    answers: [
      {
        id: 1,
        answer: "transmisivne bolesti",
      },
      {
        id: 2,
        answer: "bolesti prljavih ruku",
      },
      {
        id: 3,
        answer: "zoonoze",
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 99,
    question: "Oboljenje ciji je uzrocnik bakterija je:",
    answers: [
      {
        id: 1,
        answer: "morbili",
      },
      {
        id: 2,
        answer: "rubella",
      },
      {
        id: 3,
        answer: "varicella",
      },
      {
        id: 4,
        answer: "scarlatina",
      },
      {
        id: 5,
        answer: "variolla",
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 100,
    question: "Izvor zaraze za virusni hepatitis B je:",
    answers: [
      {
        id: 1,
        answer: "zivotinje",
      },
      {
        id: 2,
        answer: "komarci, artropode",
      },
      {
        id: 3,
        answer: "covek sa akutnom ili hronicnom bolescu",
      },
    ],
    correctAnswer: 3,
  },

  //100 pitanja
];
