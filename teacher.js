let selectedTeacherSkill = "all";
let selectedLessonCount = 1;


/* =============================
   SKILL
============================= */

function selectTeacherSkill(skill, button) {

    selectedTeacherSkill = skill;

    document
        .querySelectorAll(".skill-select")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}


/* =============================
   COUNT
============================= */

function selectLessonCount(count, button) {

    selectedLessonCount = count;

    document
        .querySelectorAll(".count-select")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}


/* =============================
   FILTER
============================= */

function matchesTeacherSkill(item) {

    if (selectedTeacherSkill === "all") {
        return true;
    }

    const map = {
        danger: "Қауіпті тану",
        action: "Қауіпсіз әрекет",
        help: "Көмек сұрау"
    };

    return item.skill === map[selectedTeacherSkill];
}


/* =============================
   LESSON GENERATOR
============================= */

function generateLesson() {

    let pool = situations.filter(matchesTeacherSkill);

    pool = [...pool].sort(() => Math.random() - 0.5);

    const selected =
        pool.slice(0, selectedLessonCount);


    const container =
        document.getElementById("generatedSituations");

    container.innerHTML = "";


    selected.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className =
            "generated-situation";

        card.innerHTML = `

            <div class="generated-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="generated-main">

                <span>
                    ${item.categoryName}
                </span>

                <h4>
                    ${item.title}
                </h4>

                <p>
                    ${item.short}
                </p>

            </div>

            <a href="practice.html?id=${item.id}">
                Аш →
            </a>

        `;

        container.appendChild(card);

    });


    const minutes =
        selectedLessonCount * 7;


    document.getElementById(
        "lessonResultTitle"
    ).textContent =
        `${selectedLessonCount} жағдаят · ${minutes} минут`;


    document.getElementById(
        "lessonTimeBadge"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:00`;
}


/* =============================
   RANDOM
============================= */

function openRandomSituation() {

    const id =
        Math.floor(Math.random() * 12) + 1;

    window.location.href =
        `practice.html?id=${id}`;
}


/* =============================
   TABS
============================= */

function openTeacherTab(name, button) {

    document
        .querySelectorAll(".teacher-tab")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelectorAll(".teacher-tab-content")
        .forEach(panel =>
            panel.classList.add("hidden")
        );


    button.classList.add("active");


    document
        .getElementById(`teacher-${name}`)
        .classList.remove("hidden");
}


/* =============================
   TIMER
============================= */

const TIMER_TOTAL = 7 * 60;

let timerSeconds = TIMER_TOTAL;
let timerInterval = null;


function timerStageText(elapsed) {

    if (elapsed < 60) {
        return "1/4 · Жағдаятты оқу";
    }

    if (elapsed < 180) {
        return "2/4 · Үш әрекетті салыстыру";
    }

    if (elapsed < 300) {
        return "3/4 · Таңдауды түсіндіру";
    }

    return "4/4 · Көмек сұрауды жаттықтыру";
}


function updateTeacherTimer() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    document.getElementById(
        "timerDisplay"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    const elapsed =
        TIMER_TOTAL - timerSeconds;


    document.getElementById(
        "timerStage"
    ).textContent =
        timerStageText(elapsed);


    const progress =
        elapsed / TIMER_TOTAL * 100;


    document.getElementById(
        "timerProgressFill"
    ).style.width =
        `${progress}%`;
}


function startTeacherTimer() {

    if (timerInterval) {
        return;
    }


    timerInterval =
        setInterval(() => {

            if (timerSeconds <= 0) {

                clearInterval(timerInterval);

                timerInterval = null;

                document.getElementById(
                    "timerStage"
                ).textContent =
                    "Жаттығу аяқталды ✓";

                return;
            }

            timerSeconds--;

            updateTeacherTimer();

        }, 1000);
}


function pauseTeacherTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
}


function resetTeacherTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds =
        TIMER_TOTAL;

    updateTeacherTimer();
}


updateTeacherTimer();
