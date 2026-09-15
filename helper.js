const messageArea =
    document.getElementById("helperMessages");

const actionArea =
    document.getElementById("helperActions");

const typingIndicator =
    document.getElementById("typingIndicator");


function addBot(text) {

    const message =
        document.createElement("div");

    message.className =
        "helper-message helper-bot";

    message.textContent =
        text;

    messageArea.appendChild(message);

    scrollHelper();
}


function addUser(text) {

    const message =
        document.createElement("div");

    message.className =
        "helper-message helper-user";

    message.textContent =
        text;

    messageArea.appendChild(message);

    scrollHelper();
}


function scrollHelper() {

    messageArea.scrollTop =
        messageArea.scrollHeight;
}


function botTyping(callback) {

    typingIndicator.classList.remove("hidden");

    setTimeout(() => {

        typingIndicator.classList.add("hidden");

        callback();

    }, 650);
}


function setHelperActions(items) {

    actionArea.innerHTML = "";


    items.forEach(item => {

        const button =
            document.createElement("button");

        button.className =
            "helper-action-button";

        button.textContent =
            item.label;


        button.onclick = () => {

            addUser(item.label);

            actionArea.innerHTML = "";

            botTyping(item.run);
        };


        actionArea.appendChild(button);

    });
}


/* =================================
   PLAN
================================= */

function setSafetyPlan(
    title,
    step1,
    step2,
    step3,
    phrase,
    urgent = false
) {

    document
        .getElementById("planEmpty")
        .classList.add("hidden");


    document
        .getElementById("planContent")
        .classList.remove("hidden");


    document.getElementById(
        "planTitle"
    ).textContent = title;


    document.getElementById(
        "planStep1"
    ).textContent = step1;


    document.getElementById(
        "planStep2"
    ).textContent = step2;


    document.getElementById(
        "planStep3"
    ).textContent = step3;


    document.getElementById(
        "planPhrase"
    ).textContent = `“${phrase}”`;


    const status =
        document.getElementById("planStatus");


    status.textContent =
        urgent ? "шұғыл" : "дайын";


    status.classList.toggle(
        "urgent",
        urgent
    );
}


/* =================================
   START
================================= */

function startHelper() {

    messageArea.innerHTML = "";

    document
        .getElementById("planContent")
        .classList.add("hidden");


    document
        .getElementById("planEmpty")
        .classList.remove("hidden");


    document.getElementById(
        "planStatus"
    ).textContent = "күтілуде";


    addBot(
        "Сәлем! Мен саған қауіпсіз келесі қадамды таңдауға көмектесемін."
    );


    setTimeout(() => {

        addBot(
            "Алдымен ең маңызды сұрақ: дәл қазір саған немесе басқа адамға тікелей қауіп төніп тұр ма?"
        );


        setHelperActions([

            {
                label: "Иә, қазір қауіп бар",
                run: immediateDanger
            },

            {
                label: "Қазір тікелей қауіп жоқ",
                run: chooseSituation
            },

            {
                label: "Досыма көмектескім келеді",
                run: friendHelp
            }

        ]);

    }, 400);
}


/* =================================
   URGENT
================================= */

function immediateDanger() {

    addBot(
        "Ең бастысы — жағдайды өзің жалғыз тоқтатуға тырыспау."
    );


    setTimeout(() => {

        addBot(
            "Адамдар бар қауіпсіз жерге бар және сенімді ересекке дереу хабарла."
        );


        setSafetyPlan(
            "Қазір қауіп бар",
            "Қауіптен алыста және қауіпсіз жерге бар.",
            "Жақын сенімді ересекке дереу хабарла.",
            "Төтенше қауіп болса, ересекпен бірге жедел көмекке жүгін.",
            "Маған қазір көмек керек. Мен қауіпсіз емес жағдайдамын.",
            true
        );

    }, 450);
}


/* =================================
   CATEGORY
================================= */

function chooseSituation() {

    addBot(
        "Қай жағдай саған көбірек ұқсайды?"
    );


    setHelperActions([

        {
            label: "Онлайнда біреу мазалап жүр",
            run: onlineHelp
        },

        {
            label: "Буллинг немесе мазақтау",
            run: bullyingHelp
        },

        {
            label: "Бейтаныс адам",
            run: strangerHelp
        },

        {
            label: "«Ешкімге айтпа» деді",
            run: secretHelp
        },

        {
            label: "Не істерімді білмеймін",
            run: unknownHelp
        }

    ]);
}


/* ONLINE */

function onlineHelp() {

    addBot(
        "Жеке ақпарат, сурет немесе құпиясөз жіберме."
    );


    setTimeout(() => {

        addBot(
            "Хабарламаны өшіріп тастауға асықпай, сенімді ересекке көрсет."
        );


        setSafetyPlan(
            "Онлайн қысым",
            "Жауап беруге асықпа.",
            "Жеке дерек пен сурет жіберме.",
            "Хабарламаны сенімді ересекке көрсет.",
            "Маған интернетте бір адам мазалап жазып жатыр. Осыны бірге қарап беріңізші."
        );

    }, 450);
}


/* BULLYING */

function bullyingHelp() {

    addBot(
        "Жанжалға өзің жалғыз кірме."
    );


    setTimeout(() => {

        addBot(
            "Не болғанын және кімге көмек керек екенін жауапты ересекке нақты айт."
        );


        setSafetyPlan(
            "Буллинг немесе мазақтау",
            "Өзіңді қосымша қауіпке салма.",
            "Мазақты таратпа және қолдама.",
            "Жауапты ересекке нақты хабарла.",
            "Бір оқушыны қайта-қайта мазақтап жүр. Осы жағдайды тоқтатуға көмектесіңізші."
        );

    }, 450);
}


/* STRANGER */

function strangerHelp() {

    addBot(
        "Бейтаныс адамнан арақашықтық сақта."
    );


    setTimeout(() => {

        addBot(
            "Онымен жалғыз барма және көлігіне отырма."
        );


        setSafetyPlan(
            "Бейтаныс адам",
            "Арақашықтық сақта.",
            "Адамдар бар қауіпсіз жерге бар.",
            "Сенімді ересекке хабарла.",
            "Маған бейтаныс адам жақындады. Мен қауіпсіз жерге келдім. Маған көмектесіңізші."
        );

    }, 450);
}


/* SECRET */

function secretHelp() {

    addBot(
        "Қауіпсіздікке қатысты құпияны сақтауға міндетті емессің."
    );


    setTimeout(() => {

        addBot(
            "Бұл туралы сенетін ересекке айтуға болады."
        );


        setSafetyPlan(
            "Қорқыту немесе қауіпті құпия",
            "Қорқытуға жалғыз жауап берме.",
            "Қауіпсіз жерге бар.",
            "Сенімді ересекке болған жағдайды айт.",
            "Маған бір адам бұл туралы ешкімге айтпауды айтып, қорқытты. Маған көмек керек."
        );

    }, 450);
}


/* FRIEND */

function friendHelp() {

    addBot(
        "Досыңды тыңдау маңызды, бірақ оның қауіпсіздігіне қатысты мәселені екеуің ғана шешуге міндетті емессіңдер."
    );


    setTimeout(() => {

        addBot(
            "Сенімді ересектің көмегіне бірге жүгініңдер."
        );


        setSafetyPlan(
            "Досыма көмектесу",
            "Досыңды тыңда және мазақтама.",
            "Қауіпті өзің жалғыз шешуге тырыспа.",
            "Сенімді ересектен бірге көмек сұра.",
            "Досымның қауіпсіздігіне қатысты жағдай бар. Бізге ересек адамның көмегі керек."
        );

    }, 450);
}


/* UNKNOWN */

function unknownHelp() {

    addBot(
        "Не істеу керегін білмеу — көмек сұрауға жеткілікті себеп."
    );


    setTimeout(() => {

        addBot(
            "Алдымен қауіпсіз жерде екеніңді тексер, кейін сенімді ересекке болған жағдайды айт."
        );


        setSafetyPlan(
            "Келесі қауіпсіз қадам",
            "Қауіп бар-жоғын анықта.",
            "Қажет болса қауіпсіз жерге бар.",
            "Сенімді ересекке жағдайды түсіндір.",
            "Маған бір жағдай туралы айту керек. Не істеу керегіне сенімді емеспін. Маған көмектесіңізші."
        );

    }, 450);
}


/* =================================
   COPY
================================= */

async function copyPlanPhrase() {

    const phrase =
        document.getElementById(
            "planPhrase"
        ).textContent;


    try {

        await navigator.clipboard.writeText(
            phrase.replaceAll("“", "").replaceAll("”", "")
        );


        const button =
            document.getElementById(
                "copyPhraseButton"
            );


        button.textContent =
            "Көшірілді ✓";


        setTimeout(() => {

            button.textContent =
                "Көшіру";

        }, 1600);

    } catch {

        alert(
            "Сөйлем: " + phrase
        );
    }
}


function restartHelper() {

    startHelper();
}


startHelper();
