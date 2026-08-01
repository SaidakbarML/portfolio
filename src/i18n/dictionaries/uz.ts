import type { Dictionary } from "./en";

export const uz: Dictionary = {
  meta: {
    title: "Saidakbar Usmonov — Machine Learning va Data muhandisi",
    description:
      "3 yildan ortiq produksiya tajribasiga ega Machine Learning muhandisi. OFB Bank va OTP Bankda ishlayotgan ASINT baholash platformasiga rahbarlik qilaman va uning ortidagi ma’lumot quvurlari, modellar hamda bulut infratuzilmasini quraman.",
  },

  a11y: {
    skipToContent: "Asosiy qismga o‘tish",
    pipelineStages: "Pipeline bosqichlari",
    backToTop: "Yuqoriga qaytish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    openPalette: "Buyruqlar panelini ochish",
    closeDialog: "Oynani yopish",
    changeLanguage: "Tilni o‘zgartirish",
    home: "bosh sahifa",
    proficiency: "daraja",
  },

  nav: {
    home: "Bosh sahifa",
    about: "Men haqimda",
    experience: "Tajriba",
    projects: "Loyihalar",
    skills: "Ko‘nikmalar",
    education: "Ta’lim",
    certificates: "Sertifikatlar",
    contact: "Aloqa",
  },

  tasks: {
    home: "ingest",
    about: "profile",
    experience: "transform",
    projects: "build",
    skills: "stack",
    education: "train",
    certificates: "validate",
    contact: "deploy",
  },

  topbar: {
    openToWork: "ish takliflariga ochiq",
    hireMe: "Ishga taklif qiling",
  },

  preloader: {
    lines: ["pipeline’ga ulanmoqda…", "00–07 bosqichlari yuklanmoqda", "tayyor"],
  },

  hero: {
    headline: "Machine Learning muhandisi · Data muhandisi",
    stage: "bosqich 00 / ingest",
    location: "Toshkent, O‘zbekiston",
    availability: "ML / Data Engineering ish o‘rinlariga ochiq",
    roleLabel: "rol =",
    roles: [
      "Machine Learning muhandisi",
      "Data muhandisi",
      "MLOps muhandisi",
      "AI tizimlari quruvchisi",
      "Produksiya AI mutaxassisi",
    ],
    intro:
      "3 yil davomida modellar, ma’lumot quvurlari va bulut infratuzilmasini ishga tushiraman. ASINT’ga rahbarlik qilaman — OFB Bank va OTP Bankda ishlayotgan aktivlarni baholash platformasi.",
    downloadCv: "CV yuklab olish",
    seeWork: "Ishlarni ko‘rish",
    scroll: "pastga",
    photoLabel: "Profil rasmi",
    stats: {
      years: "yil produksiyada",
      records: "yozuv modellashtirilgan",
      orgs: "tashkilot foydalanadi",
      banks: "bank ishlatmoqda",
    },
  },

  about: {
    query: "SELECT * FROM engineer WHERE ships = true",
    meta: "1 qator · 12ms",
    title: "Men produksiyada",
    accent: "yashaydigan ML quraman.",
    paragraphs: [
      "Men ML va uni tirik saqlaydigan tizimlar kesishgan joyda ishlayman. Muammo odatda tayyor, toza ma’lumotlar to‘plamisiz keladi: bu mashina qancha turadi, bu kvartira qancha turadi, 5 million yig‘ilgan yozuvning qaysilariga ishonish mumkin.",
      "Men uni boshidan oxirigacha o‘zim olib boraman — ma’lumotni modellashtiraman, modelni o‘qitaman, uni API’ga o‘rayman va dushanba kuni ertalab to‘g‘ri javob berishi shart bo‘lgan serverga chiqaraman.",
      "Link Data’da ASINT’ga rahbarlik qilaman. 3M+ avtomobil e’loni va 2.3M+ ko‘chmas mulk yozuvi bitta BigQuery qatlamiga jamlangan, Airflow ularni yangilab, modellarni qayta o‘qitib turadi. Uchta tashkilot foydalanadi. Ikkitasi — bank.",
      "Bundan tashqari: EfaHub bir oyda 1 000+ foydalanuvchiga yetdi, 20+ xodimni ML va Git bo‘yicha o‘qitdim, kompyuter ko‘rish xakatonida 2-o‘rinni egalladim.",
    ],
    recordLabel: "yozuv",
    facts: {
      basedIn: { label: "Joylashuv", value: "Toshkent, O‘zbekiston" },
      focus: { label: "Yo‘nalish", value: "Produksiya ML · Data Engineering" },
      currently: { label: "Hozir", value: "Loyiha rahbari, ASINT @ Link Data" },
      experience: { label: "Tajriba", value: "3+ yil produksiyada" },
      studying: { label: "Ta’lim", value: "Bakalavr, Toshkent Davlat Iqtisodiyot Universiteti" },
      status: { label: "Holat", value: "ML / Data Engineering ish o‘rinlariga ochiq" },
    },
    principlesLabel: "ish tamoyillari",
    principles: {
      ship: {
        title: "Avval ishga tushir, keyin o‘lchа",
        body: "Real trafikka javob bermayotgan model hali baholanmagan.",
      },
      data: {
        title: "Ma’lumot qatlami — bu mahsulot",
        body: "Model muammolarining ko‘pchiligi aslida ma’lumot muammosi. Avval omborni tuzat.",
      },
      automate: {
        title: "Zerikarli ishni avtomatlashtir",
        body: "Yig‘ish, yuklash, qayta o‘qitish, deploy — jadval bo‘yicha, mensiz.",
      },
      stack: {
        title: "Butun stekni o‘zing boshqar",
        body: "Model, API, konteyner, server. Butun yo‘lni kuzata olsang, xatoni tez topasan.",
      },
    },
  },

  stats: {
    title: "Raqamlarda",
    metricsCount: "ko‘rsatkich",
    items: {
      years: { label: "Yil produksiyada", description: "ML · data engineering · MLOps" },
      vehicles: { label: "Avtomobil yozuvlari", description: "ko‘p manba, bitta qatlam" },
      properties: { label: "Ko‘chmas mulk yozuvlari", description: "ASINT-Home asosi" },
      dashboards: { label: "Dashboardlardagi yozuvlar", description: "Power BI monitoring qatlami" },
      users: { label: "EfaHub foydalanuvchilari, 1-oy", description: "yakka loyiha, organik o‘sish" },
      staff: { label: "O‘qitilgan xodimlar", description: "yordamchi o‘qituvchi, ISLAB" },
      orgs: { label: "ASINT’dan foydalanuvchi tashkilotlar", description: "shu jumladan OFB Bank, OTP Bank" },
      hackathon: { label: "Xakaton o‘rni", description: "kompyuter ko‘rish xakatoni" },
    },
  },

  experience: {
    query: "SELECT role, impact FROM experience ORDER BY start DESC",
    meta: "qator · 8ms",
    title: "Amaliyotchidan",
    accent: "loyiha rahbarigacha.",
    lede: "Birinchi ish kunidan kompaniyaning asosiy platformasiga egalik qilishgacha — o‘n sakkiz oy.",
    progressionLabel: "O‘sish yo‘li",
    impactLabel: "natija",
    stackLabel: "stek",
    roles: {
      "link-data": {
        role: "Data Scientist / ML muhandisi",
        employmentType: "Loyiha rahbari — ASINT",
        period: "2024-yil iyul — hozirgacha",
        location: "Toshkent, O‘zbekiston",
        summary:
          "Amaliyotchi sifatida kelib, kompaniyaning asosiy mahsuloti bo‘yicha texnik rahbarga aylandim. ASINT’ni to‘liq o‘zim olib boraman — ombor, modellar va uchta mijoz tashkilotiga xizmat qiluvchi infratuzilma.",
        progression: {
          intern: "Amaliyotchi",
          partTime: "Yarim stavka",
          fullTime: "To‘liq stavka",
          lead: "Loyiha rahbari",
        },
        achievements: [
          "ASINT’ga rahbarlik qilaman — OFB Bank va OTP Bank kabi uchta tashkilotda ishlayapti.",
          "ASINT va GeoScore ortidagi ma’lumotlar omborini loyihalashtirdim — ko‘p manba, bitta modellashtirilgan qatlam.",
          "BigQuery’ga yuklaydigan va shu jadvalda modellarni qayta o‘qitadigan Airflow quvurlarini qurdim.",
          "AWS, Hetzner va eCompute’da Docker hamda Nginx ortida FastAPI model-serving API’larini ishga tushiraman.",
          "Produksiyadagi ASINT-Auto va ASINT-Home baholash modellarini yaxshiladim.",
          "10 kishilik jamoada ML, data engineering va MLOps yo‘nalishlarida ishlayman.",
        ],
        metrics: {
          orgs: "Produksiyadagi tashkilotlar",
          vehicles: "Avtomobil yozuvlari",
          properties: "Ko‘chmas mulk yozuvlari",
          team: "Jamoa hajmi",
        },
      },
      islab: {
        role: "Yordamchi o‘qituvchi",
        employmentType: "Yarim stavka · 1 yil",
        period: "2026-yil avgust — 2027-yil avgust",
        location: "Toshkent, O‘zbekiston",
        summary:
          "Mutaxassis bo‘lmaganlarga amaliy AI’ni o‘rgatdim — biror narsani haqiqatan tushunganingni bilishning eng tez yo‘li.",
        progression: {},
        achievements: [
          "20+ xodimni AI vositalari, ML asoslari va Git bo‘yicha o‘qitdim.",
          "Dasturning barcha mavzulari bo‘yicha asosiy yordamchi o‘qituvchi bo‘ldim.",
          "Produksiya ML tushunchalarini muhandis bo‘lmaganlar qo‘llay oladigan shaklga o‘girdim.",
        ],
        metrics: {
          staff: "O‘qitilgan xodimlar",
        },
      },
    },
  },

  projects: {
    query: "SELECT * FROM projects WHERE users > 0",
    meta: "qator · 14ms",
    title: "Produksiyadagi tizimlar,",
    accent: "notebook emas.",
    lede: "Banklar, marketpleyslar va call-markazlar. Arxitektura va nimani o‘zgartirgan bo‘lardim — case study’ni oching.",
    moreWork: "yana ishlar",
    deckTitle: "Kartalar",
    deckAccent: "yon tomonga siljiydi",
    projectsCount: "loyiha",
    swipeHint: "suring → yana ishlar",
    caseStudy: "Case study",
    readCaseStudy: "Case study’ni o‘qish",
    live: "Sayt",
    demo: "Demo",
    github: "GitHub",
    flagship: "asosiy loyiha",
    systemBreakdown: "tizim tahlili",
    breakdownTitle: "Tarqoq bozor bitta",
    breakdownAccent: "baholovchi API’ga aylandi",
    challengesLabel: "muhandislik muammolari",
    architectureDiagram: "Arxitektura diagrammasi",
    screenshot: "Skrinshot",
    statuses: {
      Production: "Produksiyada",
      "Open source": "Ochiq kodli",
      Archived: "Arxivda",
      Deployed: "Ishga tushirilgan",
    },
    stages: {
      problem: "Muammo",
      solution: "Yechim",
      architecture: "Tizim dizayni",
      deployment: "Ishga tushirish",
      impact: "Natija",
    },
    blocks: {
      overview: "Umumiy ma’lumot",
      problem: "Muammo",
      solution: "Yechim",
      architecture: "Arxitektura",
      stack: "Texnologiyalar steki",
      challenges: "Muammolar va yechimlar",
      deployment: "Produksiyaga chiqarish",
      scalability: "Masshtablanuvchanlik",
      impact: "Natija",
      screenshots: "Skrinshotlar",
      lessons: "Olingan saboqlar",
      future: "Kelajakdagi yaxshilanishlar",
    },
    items: {
      asint: {
        name: "ASINT",
        tagline: "O‘zbekiston avtomobil va ko‘chmas mulk bozori uchun aktivlarni baholash",
        category: "Produksiya ML platformasi",
        summary:
          "Link Data’ning asosiy mahsuloti. 5.3M+ bozor yozuvi asosida avtomobil va ko‘chmas mulkni baholaydi. Uchta tashkilotda, jumladan OFB Bank va OTP Bankda ishlaydi — baholar kredit qarorlariga asos bo‘ladi.",
        problem:
          "Baholash qo‘lda va bir xil emas edi. Narxlar o‘nlab e’lon saytlarida yagona identifikatorsiz tarqalgan edi. Ikki baholovchi butunlay boshqa raqamga kelishi mumkin edi, banklarda esa garov qiymati uchun asoslangan manba yo‘q edi.",
        solution:
          "Skreperlar ko‘plab manbalardan e’lonlarni yig‘adi. Airflow ularni tozalaydi, takrorlarni olib tashlaydi va BigQuery qatlamiga moslashtiradi. Ikki model oilasi — ASINT-Auto va ASINT-Home — shu qatlamda o‘qiydi va FastAPI orqali xizmat qiladi. Power BI dashboardlari natijani tushunarli qiladi.",
        architecture:
          "Yig‘ish → staging → modellashtirilgan ombor → o‘qitish → xizmat ko‘rsatish. Xom ma’lumot o‘zgartirilmasdan saqlanadi, shuning uchun parsing xatolarini qayta o‘tkazish mumkin. Airflow jadval va qayta urinishlarni boshqaradi. BigQuery ML o‘qitishni joyida bajaradi — ma’lumot ombordan chiqmaydi. Holatsiz FastAPI konteynerlari Nginx ortida ishlaydi.",
        impact:
          "Uchta tashkilot produksiyada, ikkitasi bank. Ilgari soatlab vaqt olgan baholash endi API orqali real vaqtda, izchil va tekshirib bo‘ladigan asosda qaytadi.",
        scalability:
          "BigQuery yozuvlar o‘sishini arxitekturani qayta qurmasdan hazm qiladi, o‘qitish esa ma’lumot turgan joyda bajariladi. Yangi manba — bu yangi ekstraktor, model o‘zgarishi emas. Xizmat gorizontal masshtablanadi: barcha holat omborda.",
        deployment:
          "AWS, Hetzner va eCompute’da Nginx ortidagi konteynerlashgan servislar. Qayta urinish va ogohlantirishga ega Airflow DAG’lari; qayta o‘qitish ma’lumot yangilanishi bilan bir jadvalda ishlaydi.",
        challenges: [
          {
            heading: "Ko‘p manbali obyektlarni birlashtirish",
            body: "Bitta mashina beshta saytda beshta xil yozuvda uchraydi. Birlashtirmasangiz, model takrorlarni mustaqil dalil deb hisoblaydi. Moslashtirilgan o‘lchamlar loyihadagi eng katta samara bergan ish bo‘ldi.",
          },
          {
            heading: "Beqaror tashqi manbalar",
            body: "Manba o‘z HTML’ini o‘zgartirsa, skreper ishlamay qoladi. Nol qator bilan “muvaffaqiyatli” tugagan DAG modelni jimgina ochlikka mahkum etadi, shuning uchun yig‘ish bosqichi qatorlar sonini tekshirmaguncha hech narsa keyingi bosqichga o‘tmaydi.",
          },
          {
            heading: "E’lon narxi ≠ bozor narxi",
            body: "E’londagi narx — bu so‘ralgan narx; u hudud, mavsum va sotilmay turgan vaqtga qarab og‘adi. Bu farqni halol hisobga olish aniqlik uchun model tanlashdan ko‘ra muhimroq bo‘ldi.",
          },
          {
            heading: "Bank darajasidagi talablar",
            body: "Bank biror raqamga tayanganidan keyin uni o‘zgartirish boshqaruv masalasiga aylanadi. Shu sabab dizayn tasodifiy yaxshilanishlar emas, versiyalangan va jadvalli qayta o‘qitish tomon yo‘naldi.",
          },
        ],
        lessons: [
          "Ombor sxemasi aniqlik chegarasini modeldan oldin belgilaydi.",
          "Har bir quvurga “nol qator bilan muvaffaqiyatli”dan balandroq xato signali kerak.",
          "Ombor ichida o‘qitish ma’lumot ko‘chirish bilan bog‘liq butun bir xatolar sinfini yo‘q qiladi.",
          "Mijoz bank bo‘lsa, takrorlanuvchanlik ozgina aniqlik yutug‘idan muhimroq.",
        ],
        future: [
          "Kirish taqsimotlari va bashorat qoldiqlari bo‘yicha drift aniqlash.",
          "Feature store — ikkala model oilasi geografiya belgilarini qayta hisoblamasligi uchun.",
          "API orqali har bir bashorat uchun ishonch oralig‘ini berish.",
          "Yangi versiyalarni produksiya trafigiga qo‘yishdan oldin shadow deployment.",
        ],
        metrics: {
          vehicles: "Avtomobil e’lonlari",
          properties: "Ko‘chmas mulk yozuvlari",
          dashboards: "Dashboardlardagi yozuvlar",
          orgs: "Produksiyadagi tashkilotlar",
        },
        links: { live: "ASINT saytiga o‘tish" },
      },
      "asint-dwh": {
        name: "ASINT ma’lumotlar ombori",
        tagline: "Har bir ASINT modeli va dashboardi o‘qiydigan modellashtirilgan qatlam",
        category: "Data Engineering",
        summary:
          "ASINT va GeoScore ortidagi ombor. Ko‘plab bog‘lanmagan manbalar, BigQuery’da bitta modellashtirilgan qatlam; Airflow yuklash va ombor ichidagi qayta o‘qitishni boshqaradi.",
        problem:
          "Har bir model va dashboard o‘z ma’lumotini o‘zi olardi. Bitta savol ikki xil javob berardi, yangi manba qo‘shish har bir iste’molchini o‘zgartirishni talab qilardi va raqam qayerdan kelganini hech kim ayta olmasdi.",
        solution:
          "Bitta modellashtirilgan qatlam, bitta moslashtirilgan o‘lchamlar to‘plami, ta’rifni tuzatish uchun bitta joy. Xom ma’lumot o‘zgarmas holda saqlanadi; transformatsiyalar versiyalangan va idempotent. Qayta o‘qitish shu DAG grafida rejalashtiriladi, shuning uchun ma’lumot va model yangiligi hech qachon ajralib ketmaydi.",
        architecture:
          "Airflow DAG’lari ma’lumotni landing zonaga yig‘adi, staging’da moslashtiradi va takrorlarni olib tashlaydi, so‘ng BigQuery’da o‘lchamli qatlamni quradi. Yakuniy guruh BigQuery ML o‘qitishini ishga tushiradi. Bog‘liqliklar aniq e’lon qilinadi, shuning uchun bitta muvaffaqiyatsiz yig‘ish boshqa modelning kirishini buzmaydi.",
        impact:
          "Bitta ishonchli qatlamda 5.3M+ yozuv. Qayta o‘qitish nazoratsiz bajariladigan bo‘ldi, yangi manba qo‘shish esa alohida o‘zgarishga aylandi.",
        scalability:
          "Inkremental, partitsiyani hisobga oluvchi yuklash xarajatni umumiy hajmga emas, yangi ma’lumotga mutanosib saqlaydi. Idempotent transformatsiyalar tufayli backfill oddiy ishga tushirish bilan bir xil kod yo‘lidan boradi — tiklanish zerikarli bo‘ladi, maqsad ham shu.",
        deployment:
          "Boshqariladigan VPS infratuzilmasidagi Airflow scheduler va workerlar; BigQuery ham ombor, ham o‘qitish muhiti sifatida.",
        challenges: [
          {
            heading: "Qayta urinishlarda idempotentlik",
            body: "Qayta urinishi mumkin bo‘lgan har qanday vazifa, odatda yuklash o‘rtasida, qayta uriniladi. Har bir yozuv ko‘r-ko‘rona qo‘shish emas, partitsiya doirasida bajariladi — aks holda takrorlar biror ko‘rsatkich siljiguncha to‘planib boradi.",
          },
          {
            heading: "Sxema o‘zgarishi",
            body: "Manbalar maydon qo‘shadi, nomini o‘zgartiradi va turini jimgina almashtiradi. Xom ma’lumotni saqlash bu o‘zgarishni oylar o‘tib o‘qitish to‘plamidagi bo‘shliq sifatida emas, darhol aniqlab qayta o‘tkazish imkonini beradi.",
          },
          {
            heading: "BigQuery xarajatini nazorat qilish",
            body: "Hamma savolga javob berish oson; arzon javob berish partitsiyalash, klasterlash va nimani materializatsiya qilib, nimani view qoldirishda intizom talab qiladi.",
          },
        ],
        lessons: [
          "O‘zgarmas xom ma’lumot — data engineering’dagi eng arzon sug‘urta.",
          "Idempotent vazifalar inqirozni tergovga emas, qayta ishga tushirishga aylantiradi.",
          "Bog‘liqliklarni hech kim o‘qimaydigan wiki’da emas, DAG’da e’lon qiling.",
        ],
        future: [
          "Ma’lumot sifati testlari — qattiq to‘siqli, to‘laqonli DAG vazifalari sifatida.",
          "Manba maydonidan model belgisigacha ustun darajasidagi lineage.",
          "Takroriy hisoblashlarni yo‘q qilish uchun umumiy feature qatlami.",
        ],
        metrics: {
          records: "Jamlangan yozuvlar",
          consumers: "Quyi oqim iste’molchilari",
          manual: "Qo‘lda yangilash bosqichlari",
        },
        links: {},
      },
      efahub: {
        name: "EfaHub",
        tagline: "eFootball akkauntlari uchun marketpleys — bir oyda 1 000+ foydalanuvchi",
        category: "Yakka mahsulot",
        summary:
          "Boshidan oxirigacha yakka o‘zim qurdim. Skreperlar Telegram’dan jonli e’lonlarni olib, qidiriladigan marketpleysga chiqaradi; kompyuter ko‘rish modeli yuzlarni vektor indeksiga solishtirib o‘yinchilarni aniqlaydi.",
        problem:
          "Savdo faqat Telegram’da bo‘lardi — qidiruvsiz va taqqoslash imkonisiz cheksiz tuzilmasiz postlar oqimi. Tarkib sifati skrinshotlarda ko‘rsatilardi, ya’ni bu ma’lumot emas edi.",
        solution:
          "Tartibsizlikni tuzilmaga soladigan marketpleys. Skreperlar e’lonlarni yig‘adi, normallashtiradi va qidiruv hamda filtrlash bilan chiqaradi. Deep learning komponenti rasmlardagi o‘yinchi yuzlarini aniqlab, indekslangan vektor bazasiga solishtiradi — shunday qilib rasm qidiriladigan tarkibga aylanadi.",
        architecture:
          "Jadvalli skreperlar → normallashtirish → ilova bazasi → veb interfeys. Kompyuter ko‘rish yo‘li alohida ishlaydi: rasmlardan yuzlar ajratiladi, embedding olinadi va oldindan tayyorlangan o‘yinchi indeksiga eng yaqin qo‘shni qidiruvi orqali solishtiriladi.",
        impact:
          "Birinchi oyda organik o‘sish bilan 1 000+ foydalanuvchi. Monetizatsiya Konami foydalanish shartlariga zid kelgani uchun to‘xtatildi, so‘ng demo video bilan ochiq kodga chiqarildi.",
        scalability:
          "Skreping va kompyuter ko‘rish xizmat ko‘rsatishdan alohida, asinxron ishlaydi — shuning uchun yig‘ish cho‘qqilari sahifa tezligiga ta’sir qilmaydi. E’lonlar ko‘paysa ham solishtirish tez qoladi, chunki indeks hajmi e’lonlar soniga emas, o‘yinchilar soniga bog‘liq.",
        deployment:
          "Nginx bilan VPS infratuzilmasi, jadvalli skreping vazifalari, ilova yonida ishlaydigan kompyuter ko‘rish modeli.",
        challenges: [
          {
            heading: "Tuzilmasiz manba ma’lumoti",
            body: "Telegram postlarida hech qanday sxema yo‘q. Narx, tarkib va aloqa ma’lumoti istalgan tartibda, bir necha tilda, ko‘pincha rasm ko‘rinishida keladi. Undan tuzilma ajratib olish ishning asosiy qismi bo‘ldi.",
          },
          {
            heading: "O‘yin renderlaridagi yuzlar",
            body: "O‘yin ichidagi yuzlar stilizatsiya qilingan, past sifatli va turli sifatdagi skrinshotlardan kesilgan. Foydali embedding olish uchun puxta oldindan ishlov berish va majburiy moslik emas, ishonch chegarasi kerak bo‘ldi.",
          },
          {
            heading: "Qachon to‘xtashni bilish",
            body: "Loyiha ishlayotgan va o‘sayotgan edi, lekin monetizatsiya Konami shartlariga zid keldi. Uni yopish to‘g‘ri qaror bo‘ldi — buning o‘rniga kodni ochiq qildim.",
          },
        ],
        lessons: [
          "Eng qiyin muammo odatda model emas, ma’lumot yig‘ish bo‘ladi.",
          "Odamlarda allaqachon bor ma’lumotni tartibga solish yangi narsa o‘ylab topishdan samaraliroq.",
          "To‘lov oqimini qurishdan oldin foydalanish shartlarini o‘qing.",
        ],
        future: [
          "Skreping va solishtirish komponentlari boshqa e’lon marketpleyslariga ham mos keladi.",
          "Maxsus o‘qitilgan detektor moslik ishonchini oshirgan bo‘lardi.",
        ],
        metrics: {
          users: "Birinchi oydagi foydalanuvchilar",
          builtBy: "Quruvchi",
        },
        links: { github: "Manba kodi" },
      },
      "ai-call-operator": {
        name: "AI qo‘ng‘iroq operatori",
        tagline: "NLP, TTS va STT modellari AWS’ga chiqarilib, jonli telekom platformasiga ulandi",
        category: "Deployment · MLOps",
        summary:
          "Hamkasbimning tadqiqot modellarini real foydalanishga olib chiqdim — AWS’ga joylashtirdim va ITV platformasiga integratsiya qildim.",
        problem:
          "Ishlayotgan NLP, TTS va STT modellari hali ishlaydigan qo‘ng‘iroq operatori emas. Farq — bu deployment: kechikish byudjeti, servislarni boshqarish, telefoniya integratsiyasi va uzluksiz ishlash.",
        solution:
          "Infratuzilmani tayyorladim, model servislarini konteynerlashtirdim, speech-to-text → intent → text-to-speech yo‘lini ITV qo‘ng‘iroq oqimiga uladim va uni real qo‘ng‘iroqlar uchun barqaror holatga keltirdim. Modellar hamkasbim Ibrat Usmanov tomonidan ishlab chiqilgan.",
        architecture:
          "Kiruvchi qo‘ng‘iroq → STT → intent ishlovi → javob → TTS → chiquvchi audio. Har bir model alohida konteynerda, shuning uchun eng sekin bosqich mustaqil masshtablanadi.",
        impact:
          "Tadqiqot bosqichidagi tizimni real mijoz qo‘ng‘iroqlarini qabul qiladigan jonli ishga o‘tkazdim.",
        scalability:
          "Bosqichlarni ajratish quvurni butun stekni takrorlash o‘rniga tor joyida masshtablash imkonini beradi. Model servislari holatsiz, shuning uchun quvvat gorizontal oshiriladi.",
        deployment:
          "AWS’da konteynerlashgan model servislari, ITV’ning mavjud qo‘ng‘iroq tizimiga integratsiya qilingan.",
        challenges: [
          {
            heading: "Kechikish — bu mahsulotning o‘zi",
            body: "Ovozli interfeysda pauza xato sifatida qabul qilinadi. Uchta model bosqichi bo‘yicha byudjet juda qattiq, shu sabab servis arxitekturasi deploydan keyingi ish emas, dizayn muammosiga aylanadi.",
          },
          {
            heading: "O‘zimga tegishli bo‘lmagan tizimga ulanish",
            body: "ITV’ning o‘z qo‘ng‘iroq shartnomasi bor edi. Deployment ishi ko‘pincha integratsiya ishi bo‘ladi — ideal interfeys loyihalash emas, mavjudiga moslashish.",
          },
          {
            heading: "Muhandislar o‘rtasidagi topshiriq",
            body: "Boshqa birovning modellarini produksiyaga chiqarish format, sempllash chastotasi va oldindan ishlov berish bo‘yicha uning taxminlarini yuklama ostida saqlab qolish darajasida tushunishni talab qiladi.",
          },
        ],
        lessons: [
          "Modelning haqiqiy cheklovlari aynan deployment’da ko‘rinadi.",
          "Ovozli tizimlar — tarkibida ML bo‘lgan kechikish tizimlari.",
          "Model muallifi va uni chiqaruvchi o‘rtasidagi aniq interfeys shartnomasi bir necha kunni tejaydi.",
        ],
        future: [
          "Transkripsiya va javob generatsiyasini ustma-ust qo‘yish uchun streaming inference.",
          "Foydalanuvchilar shikoyat qilishidan oldin sifat pasayishini ko‘rish uchun telemetriya.",
        ],
        metrics: {
          stages: "Boshqarilgan model bosqichlari",
          integrations: "Jonli platforma integratsiyalari",
        },
        links: { live: "ITV platformasi" },
      },
      "face-attendance": {
        name: "Yuz bo‘yicha davomat",
        tagline: "Kompyuter ko‘rish asosidagi davomat tizimi — xakatonda 2-o‘rin",
        category: "Kompyuter ko‘rish",
        summary:
          "Xakaton vaqt bosimi ostida deep learning va kompyuter ko‘rish bilan qurilgan avtomatik davomat tizimi. 2-o‘rinni egalladi.",
        problem:
          "Ro‘yxatga olish sekin, aldash oson va natijada ma’lumot emas, bir varaq qog‘oz qoladi. U odamlar soniga chiziqli bog‘liq ravishda o‘sadi.",
        solution:
          "Kameraga asoslangan tizim yuzlarni aniqlaydi, ularni ro‘yxatdan o‘tgan encoding’lar bilan solishtiradi va davomatni avtomatik yozadi. Navbat yo‘q, imzo varag‘i yo‘q, boshqa odam uchun belgilash yo‘q.",
        architecture:
          "Kadr olish → OpenCV bilan yuzni aniqlash → encoding → ro‘yxatdagi to‘plam bilan solishtirish → ishonchli moslikda yozuv qo‘shish. Mos kelmagan yuzlar tashlanmaydi, jurnalga yoziladi.",
        impact:
          "2-o‘rin. Undan muhimi — yorug‘lik, burchak va chegara tanlash muammolari nazariy bo‘lishdan to‘xtagan loyiha.",
        scalability:
          "Ro‘yxat kattalashgani sari encoding’larni solishtirish tor joyga aylanadi. Keyingi qadam — indekslangan vektor qidiruvi; keyinchalik EfaHub’da aynan shu yondashuvni to‘g‘ri qo‘lladim.",
        deployment:
          "Kamera oqimiga ulangan lokal deployment, xakaton doirasida qurilgan va namoyish qilingan.",
        challenges: [
          {
            heading: "Real yorug‘lik sharoiti",
            body: "Namoyish xonasidagi aniqlik koridordagi aniqlik emas. Ro‘yxat rasmlarida mukammal ko‘ringan chegaralar odam boshini burishi bilanoq ishlamay qoldi.",
          },
          {
            heading: "Chegara tanlash muvozanati",
            body: "Yolg‘on ijobiy natija noto‘g‘ri odamni bor deb belgilaydi; yolg‘on salbiy natija to‘g‘ri odamni bezovta qiladi. Bu nuqtani tanlash — giperparametr niqobidagi mahsulot qarori.",
          },
          {
            heading: "Xakaton vaqtida yetkazib berish",
            body: "Qamrov intizomi. Vaqt asosiy cheklov bo‘lganda, ishlaydigan tor tizim ishlamaydigan ulug‘vor tizimdan afzal.",
          },
        ],
        lessons: [
          "Kompyuter ko‘rish modellari ma’lumot yig‘ilmagan sharoitlarda ishlamay qoladi.",
          "Ishonch chegarasini tanlash — kimga noqulaylik tug‘dirishni tanlash.",
          "Chiziqli o‘xshashlik qidiruvi bir kun kelib to‘satdan yetarli bo‘lmay qoladi.",
        ],
        future: [
          "Chiziqli solishtirish o‘rniga vektor bazasi indeksatsiyasi.",
          "Rasm bilan aldashning oldini olish uchun liveness detection.",
        ],
        metrics: {
          placement: "Xakaton o‘rni",
          stages: "Tanib olish bosqichlari",
        },
        links: { github: "Manba kodi" },
      },
    },
  },

  skills: {
    query: "SELECT skill, level FROM stack GROUP BY domain",
    metaRows: "qator",
    metaGroups: "guruh",
    title: "Haqiqatan ishlatganlarim",
    accent: "bo‘yicha baholangan.",
    lede: "Daraja ko‘rilgan darsliklarni emas, produksiyadagi tajribani aks ettiradi.",
    groups: {
      programming: {
        title: "Dasturlash",
        blurb: "Modellashtirish, quvurlar va bog‘lovchi kod uchun kundalik vositalar.",
        notes: {
          Python: "Asosiy til",
          SQL: "Analitika + ombor modellashtirish",
          Bash: "Server avtomatizatsiyasi",
          R: "Statistik tahlil",
        },
      },
      "machine-learning": {
        title: "Machine Learning",
        blurb: "Produksiyada ishlayotgan regressiya va baholash modellari.",
        notes: { "BigQuery ML": "Ombor ichida o‘qitish" },
      },
      "deep-learning": {
        title: "Deep Learning",
        blurb: "Kompyuter ko‘rish va embedding uchun amaliy neyron tarmoqlar.",
        notes: { TensorFlow: "Ishchi daraja", PyTorch: "Ishchi daraja" },
      },
      "computer-vision": {
        title: "Kompyuter ko‘rish",
        blurb: "Foydalanuvchilarga yetkazilgan yuzni tanish va rasm quvurlari.",
        notes: {},
      },
      "data-engineering": {
        title: "Data Engineering",
        blurb: "Millionlab yozuv, ko‘p manba, bitta modellashtirilgan qatlam.",
        notes: { "Apache Airflow": "Katta hajmda orkestratsiya" },
      },
      cloud: {
        title: "Bulut va deployment",
        blurb: "O‘qitilgan artefaktdan ochiq endpoint’gacha.",
        notes: { "VPS Administration": "Hetzner · eCompute" },
      },
      databases: {
        title: "Ma’lumotlar bazalari",
        blurb: "Tranzaksion saqlash va analitik omborlar.",
        notes: {},
      },
      mlops: {
        title: "MLOps va Backend",
        blurb: "Modellarni xizmatga qo‘yish, konteynerlash va rejalashtirish.",
        notes: { FastAPI: "Model-serving API’lari" },
      },
      visualization: {
        title: "Vizualizatsiya",
        blurb: "Model natijasini texnik bo‘lmagan tomonlar uchun tushunarli qilish.",
        notes: { "Power BI": "1M+ yozuvli dashboardlar" },
      },
      tools: {
        title: "Vositalar va amaliyot",
        blurb: "Ish aslida qanday yetkazib beriladi.",
        notes: { "Technical Mentoring": "20+ xodim o‘qitilgan" },
      },
    },
    names: {
      "Feature Engineering": "Feature Engineering",
      "Model Evaluation": "Modelni baholash",
      "Embeddings & Vector Search": "Embedding va vektor qidiruv",
      "LLM Integration": "LLM integratsiyasi",
      "Face Recognition": "Yuzni tanish",
      "Image Preprocessing": "Rasmga oldindan ishlov berish",
      "Vector Databases": "Vektor bazalari",
      "ETL / ELT": "ETL / ELT",
      "Data Warehousing": "Ma’lumotlar ombori",
      "Data Modeling": "Ma’lumot modellashtirish",
      "Web Scraping": "Veb skreping",
      "VPS Administration": "VPS administratsiyasi",
      "Query Optimisation": "So‘rovlarni optimallashtirish",
      "Scheduled Retraining": "Jadvalli qayta o‘qitish",
      "REST API Design": "REST API dizayni",
      "Code Review": "Kod ko‘rigi",
      "Technical Mentoring": "Texnik mentorlik",
      "Agile Delivery": "Agile yetkazib berish",
    },
  },

  achievements: {
    query: "SELECT outcome FROM work WHERE shipped = true",
    meta: "qator · 6ms",
    title: "Ish nima",
    accent: "natija berdi.",
    items: {
      "production-banks": {
        title: "Banklar mening kodimni ishlatadi",
        description:
          "ASINT uchta tashkilotda, jumladan OFB Bank va OTP Bankda ishlaydi — baholar real kredit qarorlariga asos bo‘ladi.",
        metric: "Produksiyadagi tashkilotlar",
      },
      "project-lead": {
        title: "Amaliyotchidan loyiha rahbarigacha",
        description:
          "2024-yil iyulda amaliyotchi, endi ASINT rahbari va kompaniyaning asosiy platformasining katta qismiga javobgarman.",
        metric: "Rahbargacha oylar",
      },
      "data-scale": {
        title: "5.3M+ yozuv, bitta qatlam",
        description:
          "3M+ avtomobil va 2.3M+ ko‘chmas mulk yozuvini bitta ishonchli manbaga jamlagan omborni loyihalashtirdim.",
        metric: "Jamlangan yozuvlar",
      },
      automation: {
        title: "Qo‘lda hech qanday bosqich yo‘q",
        description:
          "Airflow BigQuery’ga yuklaydi va shu jadvalda qayta o‘qitishni ishga tushiradi. Hech kim aralashmaydi.",
        metric: "Qo‘lda yangilash bosqichlari",
      },
      cloud: {
        title: "Ko‘p bulutli deploymentlar",
        description:
          "Model servislari va veb platformalar AWS, Hetzner va eCompute’da — Nginx ortidagi Docker.",
        metric: "Bulut va VPS provayderlari",
      },
      dashboards: {
        title: "1M+ yozuv vizualizatsiya qilingan",
        description:
          "1M+ yozuv ustidagi Power BI dashboardlari — model natijasi yopiq emas, kuzatiladigan bo‘ldi.",
        metric: "Vizualizatsiya qilingan yozuvlar",
      },
      efahub: {
        title: "Bir oyda 1 000+ foydalanuvchi",
        description:
          "Yakka o‘zim qurdim. Telegram’dagi qo‘lda savdoni qidiriladigan e’lonlar bilan almashtirdim, so‘ng ochiq kodga chiqardim.",
        metric: "Birinchi oydagi foydalanuvchilar",
      },
      hackathon: {
        title: "Xakatonda 2-o‘rin",
        description:
          "Qattiq muddat ostida TensorFlow, OpenCV va yuzni tanish bilan davomat tizimi.",
        metric: "O‘rin",
      },
      teaching: {
        title: "20+ kishi o‘qitildi",
        description:
          "ISLAB’da yordamchi o‘qituvchi sifatida AI vositalari, ML asoslari va Git’ni o‘rgatdim.",
        metric: "O‘qitilgan odamlar",
      },
    },
  },

  education: {
    query: "SELECT * FROM education",
    meta: "qator · 4ms",
    title: "O‘qish va ishlab chiqarish —",
    accent: "bir vaqtda.",
    languagesLabel: "tillar",
    items: {
      tsue: {
        institution: "Toshkent Davlat Iqtisodiyot Universiteti",
        credential: "Bakalavr",
        field: "Iqtisodiyot",
        period: "2023-yil sentabr — 2027-yil may",
        detail: "GPA 4.3 / 5.0",
        highlights: [
          "Ishdagi baholash modellariga bevosita qo‘llanadigan miqdoriy va statistik poydevor.",
          "To‘liq stavkadagi muhandislik bilan birga o‘qish — darslar va produksiya parallel ketadi.",
          "Mustaqil ravishda “Mathematics for Machine Learning” (Deisenroth, Faisal & Ong) kitobini o‘rganish.",
        ],
      },
    },
    languages: {
      uzbek: { name: "O‘zbek tili", level: "Ona tili" },
      english: { name: "Ingliz tili", level: "Professional" },
      russian: { name: "Rus tili", level: "B1" },
    },
  },

  certificates: {
    query: "SELECT name, issuer FROM certificates",
    meta: "qator · 3ms",
    title: "Ta’lim — darhol",
    accent: "amalda qo‘llangan.",
    items: {
      "ibm-data-science": {
        name: "IBM Data Science Professional Certificate",
        skills: ["Python", "SQL", "Ma’lumot tahlili", "Vizualizatsiya"],
      },
      "math-for-ml": {
        name: "Mathematics for Machine Learning and Data Science",
        skills: ["Chiziqli algebra", "Matematik analiz", "Ehtimollik", "Statistika"],
      },
      datacamp: {
        name: "Power BI, SQL, Dash & Plotly kurslari",
        skills: ["Power BI", "SQL", "Dash", "Plotly"],
      },
    },
  },

  contact: {
    query: "INSERT INTO inbox (message) VALUES (…)",
    meta: "kiritishni kutmoqda",
    title: "Nima qurayotganingiz haqida",
    accent: "gaplashaylik.",
    lede: "ML / Data Engineering ish o‘rinlariga ochiq",
    directLabel: "to‘g‘ridan-to‘g‘ri",
    profilesLabel: "profillar",
    copyEmail: "Email manzilini nusxalash",
    phone: "Telefon",
    location: "Joylashuv",
    locationValue: "Toshkent, O‘zbekiston",
    timezone: "Vaqt mintaqasi",
    form: {
      name: "Ism",
      email: "Email",
      subject: "Mavzu",
      message: "Xabar",
      optional: "(ixtiyoriy)",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "ism@kompaniya.com",
      subjectPlaceholder: "ML muhandisi lavozimi …",
      messagePlaceholder: "Jamoangiz va muammo haqida yozing.",
      send: "Xabar yuborish",
      sent: "Pochta ilovasi ochildi — yuborishni bosing.",
      disclaimer:
        "Xabar oldindan to‘ldirilgan holda pochta ilovangizni ochadi. Server yo‘q, kuzatuv yo‘q.",
      defaultSubject: "Portfoliodan murojaat —",
      errors: {
        required: "Majburiy.",
        invalidEmail: "Email noto‘g‘ri.",
      },
    },
  },

  footer: {
    blurb:
      "Machine Learning muhandisi — produksiya ML tizimlari va ular ostidagi infratuzilmani quraman.",
    builtWith: "quruvchi vositalar",
    elsewhere: "boshqa joylarda",
  },

  palette: {
    placeholder: "Bo‘limlar, loyihalar va havolalarni qidirish…",
    noResults: "Natija topilmadi:",
    groups: {
      navigate: "O‘tish",
      projects: "Loyihalar",
      actions: "Amallar",
      links: "Havolalar",
      language: "Til",
    },
    downloadCv: "CV yuklab olish",
    email: "Email",
  },
};
