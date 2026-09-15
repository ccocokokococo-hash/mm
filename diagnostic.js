const diagnosticQuestions = [

{
  skill: "danger",
  skillName: "Қауіпті тану",
  category: "АУЫЛ ЖӘНЕ ЖОЛ",
  title: "Қараңғы қысқа жол",
  text: "Үйге қайтатын қысқа жол қараңғы және онда адам аз. Ұзақ жол жарық әрі адамдар жүреді. Бұл жерде қауіп белгісі бар ма?",
  answers: [
    { text: "Жоқ, қысқа болса жеткілікті", score: 0 },
    { text: "Иә, қараңғы және адам аз болуы қауіп белгісі", score: 1 },
    { text: "Тек кешіккенде ғана қауіпті", score: 0 }
  ]
},

{
  skill: "danger",
  skillName: "Қауіпті тану",
  category: "ОНЛАЙН",
  title: "Белгісіз аккаунт",
  text: "Белгісіз аккаунт сенен жеке суретіңді және қай мектепте оқитыныңды сұрады.",
  answers: [
    { text: "Бұл қалыпты танысу", score: 0 },
    { text: "Бұл жеке дерекке қатысты қауіп белгісі", score: 1 },
    { text: "Егер аккаунтта сурет болса, қауіп жоқ", score: 0 }
  ]
},

{
  skill: "danger",
  skillName: "Қауіпті тану",
  category: "ҚАРЫМ-ҚАТЫНАС",
  title: "«Ешкімге айтпа»",
  text: "Бір адам сені қорқытып, болған жағдайды ешкімге айтпауды талап етті.",
  answers: [
    { text: "Бұл маңызды қауіп белгісі", score: 1 },
    { text: "Үндемеген дұрыс", score: 0 },
    { text: "Бұл жай әзіл болуы мүмкін", score: 0 }
  ]
},

{
  skill: "action",
  skillName: "Қауіпсіз әрекет",
  category: "ОНЛАЙН",
  title: "Сынып чатындағы келемеж",
  text: "Сынып чатында бір оқушының суретін мазақтап таратып жатыр. Сенің алғашқы әрекетің?",
  answers: [
    { text: "Суретті әрі қарай жіберу", score: 0 },
    { text: "Таратпау және жауапты ересекке хабарлау", score: 1 },
    { text: "Мазаққа қосылу", score: 0 }
  ]
},

{
  skill: "action",
  skillName: "Қауіпсіз әрекет",
  category: "АУЫЛ ЖӘНЕ ЖОЛ",
  title: "Бейтаныс адам",
  text: "Аялдамада бейтаныс адам көлігіне отыруды ұсынды.",
  answers: [
    { text: "Тез жету үшін отыру", score: 0 },
    { text: "Қауіпсіз жерге барып, сенімді ересекке хабарлау", score: 1 },
    { text: "Алдымен қайда баратынын сұрау", score: 0 }
  ]
},

{
  skill: "action",
  skillName: "Қауіпсіз әрекет",
  category: "ТӨТЕНШЕ ЖАҒДАЙ",
  title: "Электр сымы",
  text: "Жерде үзілген электр сымына ұқсайтын зат жатыр.",
  answers: [
    { text: "Жақындап қарау", score: 0 },
    { text: "Таяқпен жылжыту", score: 0 },
    { text: "Жақындамау және ересекке хабарлау", score: 1 }
  ]
},

{
  skill: "help",
  skillName: "Көмек сұрау",
  category: "ҚАРЫМ-ҚАТЫНАС",
  title: "Буллинг",
  text: "Сыныпта бір оқушыны бірнеше күннен бері қорлап жүр. Көмекті қалай сұраған дұрыс?",
  answers: [
    { text: "«Бірдеңе болып жатыр»", score: 0 },
    { text: "«Бір оқушыны бірнеше күннен бері қорлап жүр. Осы жағдайды тоқтатуға көмектесіңізші»", score: 1 },
    { text: "Ешкімге айтпау", score: 0 }
  ]
},

{
  skill: "help",
  skillName: "Көмек сұрау",
  category: "ОНЛАЙН",
  title: "Қорқынышты хабарлама",
  text: "Белгісіз адам саған қорқынышты хабарлама жіберді. Сенімді ересекке не айтасың?",
  answers: [
    { text: "«Телефонымда бірдеңе бар»", score: 0 },
    { text: "«Белгісіз адам маған қорқынышты хабарлама жіберді. Маған көмектесіңізші»", score: 1 },
    { text: "Айтпаймын", score: 0 }
  ]
},

{
  skill: "help",
  skillName: "Көмек сұрау",
  category: "ТӨТЕНШЕ ЖАҒДАЙ",
  title: "Жарақат алған оқушы",
  text: "Мектеп ауласында оқушы құлап, қатты жарақат алған сияқты.",
  answers: [
    { text: "«Мұғалім, аулада оқушы жарақат алды. Тезірек көмек керек»", score: 1 },
    { text: "Достарыма ғана айтамын", score: 0 },
    { text: "Өзі тұрып кетер деп күтемін", score: 0 }
  ]
}

];

let currentQuestion = 0;

let scores = {
  danger: 0,
  action: 0,
  help: 0
};

let totals = {
  danger: 0,
  action: 0,
  help: 0
};


function startDiagnostic() {

  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  showQuestion();

}


function showQuestion() {

  const q = diagnosticQuestions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `${currentQuestion + 1} / ${diagnosticQuestions.length}`;

  document.getElementById("skillLabel").textContent = q.skillName;

  document.getElementById("questionCategory").textContent =
    q.category;

  document.getElementById("questionTitle").textContent =
    q.title;

  document.getElementById("questionText").textContent =
    q.text;

  const progress =
    ((currentQuestion + 1) / diagnosticQuestions.length) * 100;

  document.getElementById("progressBar").style.width =
    progress + "%";


  const answers = document.getElementById("answers");

  answers.innerHTML = "";


  q.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "diagnostic-answer";

    button.innerHTML = `
      <span>${String.fromCharCode(65 + index)}</span>
      ${answer.text}
    `;

    button.onclick = () => selectAnswer(answer);

    answers.appendChild(button);

  });

}


function selectAnswer(answer) {

  const q = diagnosticQuestions[currentQuestion];

  totals[q.skill]++;

  scores[q.skill] += answer.score;

  currentQuestion++;

  if (currentQuestion < diagnosticQuestions.length) {

    showQuestion();

  } else {

    showResults();

  }

}


function percentage(skill) {

  if (!totals[skill]) return 0;

  return Math.round(
    scores[skill] / totals[skill] * 100
  );

}


function showResults() {

  document.getElementById("quiz").classList.add("hidden");

  document.getElementById("results").classList.remove("hidden");


  const results = {

    danger: percentage("danger"),
    action: percentage("action"),
    help: percentage("help")

  };


  setResult(
    "danger",
    results.danger
  );

  setResult(
    "action",
    results.action
  );

  setResult(
    "help",
    results.help
  );


  const skillNames = {

    danger: "Қауіпті тану",
    action: "Қауіпсіз әрекетті таңдау",
    help: "Көмек сұрау"

  };


  const weakest = Object.keys(results).reduce(
    (a, b) => results[a] <= results[b] ? a : b
  );


  document.getElementById("weakSkill").textContent =
    skillNames[weakest];


  const recommendations = {

    danger:
      "Жағдаяттағы қауіп белгілерін байқауға арналған карталардан баста.",

    action:
      "Бірнеше әрекетті салыстырып, ең қауіпсіз алғашқы қадамды таңдауды жаттықтыр.",

    help:
      "Сенімді ересекке болған жағдайды қысқа әрі нақты сөйлеммен айтуды жаттықтыр."

  };


  document.getElementById("recommendationText").textContent =
    recommendations[weakest];


  localStorage.setItem(
    "weakSkill",
    weakest
  );

  localStorage.setItem(
    "diagnosticResults",
    JSON.stringify(results)
  );

}


function setResult(skill, value) {

  const percent =
    document.getElementById(skill + "Percent");

  const bar =
    document.getElementById(skill + "Bar");

  const text =
    document.getElementById(skill + "Text");


  percent.textContent =
    value + "%";

  setTimeout(() => {
    bar.style.width = value + "%";
  }, 100);


  if (value >= 80) {

    text.textContent =
      "Бұл дағды жақсы қалыптасқан.";

  }

  else if (value >= 50) {

    text.textContent =
      "Дағды бар, бірақ бірнеше жағдаятпен тағы жаттықтыру пайдалы.";

  }

  else {

    text.textContent =
      "Бұл бағытқа көбірек назар аудару қажет.";

  }

}


function restartDiagnostic() {

  currentQuestion = 0;

  scores = {
    danger: 0,
    action: 0,
    help: 0
  };

  totals = {
    danger: 0,
    action: 0,
    help: 0
  };

  document.getElementById("results").classList.add("hidden");

  document.getElementById("intro").classList.remove("hidden");

}
