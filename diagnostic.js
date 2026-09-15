const questions = [
    {
        category: "АУЫЛ ЖӘНЕ ЖОЛ",
        skill: "danger",
        skillName: "Қауіпті тану",
        title: "Қараңғы қысқа жол",
        text: "Үйге баратын қысқа жол қараңғы және адам аз. Ұзағырақ жол жарық әрі адамдар жүреді. Қауіп белгісі қайсы?",
        answers: [
            { text: "Қысқа жолдың өзі қауіпсіз", score: 0 },
            { text: "Қараңғы әрі адам аз болуы — қауіп белгісі", score: 1 },
            { text: "Тек кешіксем ғана қауіпті", score: 0 }
        ]
    },

    {
        category: "ОНЛАЙН",
        skill: "danger",
        skillName: "Қауіпті тану",
        title: "Белгісіз аккаунт",
        text: "Белгісіз аккаунт сенен суретіңді, мектебіңді және қай жерде тұратыныңды сұрады.",
        answers: [
            { text: "Бұл жай танысу", score: 0 },
            { text: "Бұл жеке дерекке қатысты қауіп белгісі", score: 1 },
            { text: "Аккаунтта сурет болса, қауіп жоқ", score: 0 }
        ]
    },

    {
        category: "ҚАРЫМ-ҚАТЫНАС",
        skill: "danger",
        skillName: "Қауіпті тану",
        title: "«Ешкімге айтпа»",
        text: "Бір адам сені қорқытып, болған жағдай туралы ешкімге айтпауды талап етті.",
        answers: [
            { text: "Бұл маңызды қауіп белгісі", score: 1 },
            { text: "Үндемеген дұрыс", score: 0 },
            { text: "Мүмкін жай әзіл шығар", score: 0 }
        ]
    },

    {
        category: "ОНЛАЙН",
        skill: "action",
        skillName: "Қауіпсіз әрекет",
        title: "Сынып чатындағы сурет",
        text: "Бір оқушының суретін мазақтап таратып жатыр. Сенің алғашқы әрекетің?",
        answers: [
            { text: "Басқа чатқа да жіберемін", score: 0 },
            { text: "Таратпаймын және жауапты ересекке хабарлаймын", score: 1 },
            { text: "Мазаққа эмодзи қоямын", score: 0 }
        ]
    },

    {
        category: "АУЫЛ ЖӘНЕ ЖОЛ",
        skill: "action",
        skillName: "Қауіпсіз әрекет",
        title: "Аялдамадағы бейтаныс адам",
        text: "Бейтаныс адам сені көлікпен үйге жеткізіп салуды ұсынды.",
        answers: [
            { text: "Көлікке отырамын", score: 0 },
            { text: "Бас тартып, адамдар бар жерге барамын", score: 1 },
            { text: "Алдымен қайда баратынын сұраймын", score: 0 }
        ]
    },

    {
        category: "ТӨТЕНШЕ ЖАҒДАЙ",
        skill: "action",
        skillName: "Қауіпсіз әрекет",
        title: "Үзілген электр сымы",
        text: "Жерде үзілген электр сымына ұқсайтын зат жатыр.",
        answers: [
            { text: "Таяқпен қозғап көремін", score: 0 },
            { text: "Қолмен шетке аламын", score: 0 },
            { text: "Жақындамай, ересекке хабарлаймын", score: 1 }
        ]
    },

    {
        category: "ҚАРЫМ-ҚАТЫНАС",
        skill: "help",
        skillName: "Көмек сұрау",
        title: "Буллинг",
        text: "Бір оқушыны бірнеше күннен бері мазақтап жүр. Қалай дұрыс көмек сұрайсың?",
        answers: [
            { text: "«Бірдеңе болып жатыр»", score: 0 },
            { text: "«Бір оқушыны бірнеше күннен бері қорлап жүр. Көмектесіңізші»", score: 1 },
            { text: "Ешкімге айтпаймын", score: 0 }
        ]
    },

    {
        category: "ОНЛАЙН",
        skill: "help",
        skillName: "Көмек сұрау",
        title: "Қорқынышты хабарлама",
        text: "Белгісіз адам саған қорқынышты хабарламалар жіберді.",
        answers: [
            { text: "«Телефонымда бірдеңе бар»", score: 0 },
            { text: "«Белгісіз адам маған қорқынышты хабарлама жіберіп жатыр. Маған көмектесіңізші»", score: 1 },
            { text: "Айтпаймын", score: 0 }
        ]
    },

    {
        category: "ТӨТЕНШЕ ЖАҒДАЙ",
        skill: "help",
        skillName: "Көмек сұрау",
        title: "Жарақат алған оқушы",
        text: "Мектеп ауласында оқушы қатты құлап, орнынан тұра алмай жатыр.",
        answers: [
            { text: "«Мұғалім, аулада оқушы құлап қалды. Тез көмек керек»", score: 1 },
            { text: "Тек достарыма айтамын", score: 0 },
            { text: "Өзі тұрады деп күтемін", score: 0 }
        ]
    }
];


let current = 0;

let selectedAnswer = null;

const score = {
    danger: 0,
    action: 0,
    help: 0
};


function initDiagnostic() {
    createSteps();
    renderQuestion();
}


function createSteps() {

    const wrapper =
        document.getElementById("stepList");

    wrapper.innerHTML = "";

    questions.forEach((q, index) => {

        const item =
            document.createElement("div");

        item.className =
            "diag-step-dot";

        item.id =
            `step-${index}`;

        item.innerHTML = `
            <span>${index + 1}</span>
            <small>${q.skillName}</small>
        `;

        wrapper.appendChild(item);

    });

}


function renderQuestion() {

    const q =
        questions[current];

    selectedAnswer = null;

    document.getElementById("diagCategory").textContent =
        q.category;

    document.getElementById("diagSkill").textContent =
        q.skillName;

    document.getElementById("diagCounter").textContent =
        `${current + 1} / ${questions.length}`;

    document.getElementById("diagNumber").textContent =
        String(current + 1).padStart(2, "0");

    document.getElementById("diagTitle").textContent =
        q.title;

    document.getElementById("diagText").textContent =
        q.text;


    const progress =
        ((current + 1) / questions.length) * 100;

    document.getElementById("diagProgressFill").style.width =
        `${progress}%`;


    document
        .querySelectorAll(".diag-step-dot")
        .forEach((step, index) => {

            step.classList.remove(
                "active",
                "done"
            );

            if (index < current) {
                step.classList.add("done");
            }

            if (index === current) {
                step.classList.add("active");
            }

        });


    const answerWrap =
        document.getElementById("diagAnswers");

    answerWrap.innerHTML = "";


    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "diag-answer-card";

        button.innerHTML = `
            <span class="diag-answer-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span class="diag-answer-text">
                ${answer.text}
            </span>

            <span class="diag-answer-check">
                ✓
            </span>
        `;

        button.onclick =
            () => selectAnswer(index, button);

        answerWrap.appendChild(button);

    });


    const nextBtn =
        document.getElementById("nextQuestionBtn");

    nextBtn.disabled = true;

}


function selectAnswer(index, button) {

    selectedAnswer = index;

    document
        .querySelectorAll(".diag-answer-card")
        .forEach(item =>
            item.classList.remove("selected")
        );

    button.classList.add("selected");

    document.getElementById("nextQuestionBtn").disabled =
        false;

}


function goNextQuestion() {

    if (selectedAnswer === null) return;

    const q =
        questions[current];

    score[q.skill] +=
        q.answers[selectedAnswer].score;


    current++;


    if (current < questions.length) {

        renderQuestion();

        document
            .querySelector(".diagnostic-stage")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    } else {

        showResults();

    }

}


function showResults() {

    document
        .getElementById("quizScreen")
        .classList.add("hidden");

    document
        .getElementById("resultScreen")
        .classList.remove("hidden");


    const values = {
        danger: Math.round(score.danger / 3 * 100),
        action: Math.round(score.action / 3 * 100),
        help: Math.round(score.help / 3 * 100)
    };


    setResult("danger", values.danger);
    setResult("action", values.action);
    setResult("help", values.help);


    const weakest =
        Object.keys(values)
            .reduce((a, b) =>
                values[a] <= values[b] ? a : b
            );


    const route = {
        danger: {
            title: "Қауіпті белгіні байқауды жаттықтыр",
            text: "Алдымен қауіп белгілері анық көрінбейтін жағдаяттармен жұмыс істе."
        },

        action: {
            title: "Алғашқы қауіпсіз қадамға назар аудар",
            text: "Бірнеше әрекетті салыстырып, қауіпсіз нұсқаны таңдауды көбірек жаттықтыр."
        },

        help: {
            title: "Көмек сұрау сөйлемдерін жаттықтыр",
            text: "Жағдайды ересекке қысқа әрі нақты айтуды қайталау пайдалы."
        }
    };


    document.getElementById("routeTitle").textContent =
        route[weakest].title;

    document.getElementById("routeText").textContent =
        route[weakest].text;


    localStorage.setItem(
        "weakSkill",
        weakest
    );

}


function setResult(skill, value) {

    document.getElementById(`${skill}Score`).textContent =
        `${value}%`;

    document.getElementById(`${skill}Ring`).style.background =
        `conic-gradient(
            #078d83 ${value}%,
            #e6eeee ${value}% 100%
        )`;


    let text = "";

    if (value >= 80) {
        text = "Бұл дағды сенімді қалыптасқан.";
    }

    else if (value >= 50) {
        text = "Дағды бар, бірақ тағы бірнеше жаттығу пайдалы.";
    }

    else {
        text = "Бұл бағытқа көбірек жаттығу қажет.";
    }


    document.getElementById(
        `${skill}Description`
    ).textContent = text;

}


function restartDiagnostic() {

    current = 0;

    selectedAnswer = null;

    score.danger = 0;
    score.action = 0;
    score.help = 0;


    document
        .getElementById("resultScreen")
        .classList.add("hidden");

    document
        .getElementById("quizScreen")
        .classList.remove("hidden");

    renderQuestion();

}


initDiagnostic();
