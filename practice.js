const params =
    new URLSearchParams(window.location.search);

const requestedId =
    Number(params.get("id"));

let currentIndex =
    requestedId
        ? Math.max(
            0,
            situations.findIndex(
                item => item.id === requestedId
            )
        )
        : 0;


function renderPractice() {

    const item =
        situations[currentIndex];


    document.getElementById("practiceCategory").textContent =
        item.categoryName;

    document.getElementById("practiceSkill").textContent =
        item.skill;

    document.getElementById("practiceCurrent").textContent =
        String(item.id).padStart(2, "0");

    document.getElementById("sceneNumber").textContent =
        String(item.id).padStart(2, "0");

    document.getElementById("practiceTitle").textContent =
        item.title;

    document.getElementById("practiceText").textContent =
        item.text;


    const progress =
        item.id / situations.length * 100;

    document.getElementById("practiceProgressFill").style.width =
        `${progress}%`;


    const wrap =
        document.getElementById("practiceOptions");

    wrap.innerHTML = "";


    item.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "practice-choice";

        button.innerHTML = `
            <span class="practice-choice-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span class="practice-choice-text">
                ${option}
            </span>

            <span class="practice-choice-status"></span>
        `;

        button.onclick =
            () => choosePracticeAnswer(
                index,
                button
            );

        wrap.appendChild(button);

    });


    document
        .getElementById("practiceFeedback")
        .classList.add("hidden");

    document
        .getElementById("practicePhrase")
        .classList.add("hidden");

    document
        .getElementById("practiceNext")
        .classList.add("hidden");

}


function choosePracticeAnswer(index, selectedButton) {

    const item =
        situations[currentIndex];

    const buttons =
        document.querySelectorAll(".practice-choice");


    buttons.forEach((button, i) => {

        button.disabled = true;

        if (i === item.correct) {
            button.classList.add("safe-choice");
        }

    });


    const correct =
        index === item.correct;


    if (!correct) {

        selectedButton.classList.add(
            "unsafe-choice"
        );

        document.getElementById("feedbackIcon").textContent =
            "!";

        document.getElementById("feedbackLabel").textContent =
            "ҚАЙТА ОЙЛАН";

        document.getElementById("feedbackHeading").textContent =
            "Қауіпсіздеу әрекет бар";

    } else {

        document.getElementById("feedbackIcon").textContent =
            "✓";

        document.getElementById("feedbackLabel").textContent =
            "ҚАУІПСІЗ ШЕШІМ";

        document.getElementById("feedbackHeading").textContent =
            "Дұрыс бағыт таңдадың";

    }


    document.getElementById("feedbackText").textContent =
        item.feedback[index];

    document.getElementById("phraseText").textContent =
        item.say;


    document
        .getElementById("practiceFeedback")
        .classList.remove("hidden");

    document
        .getElementById("practicePhrase")
        .classList.remove("hidden");

    document
        .getElementById("practiceNext")
        .classList.remove("hidden");


    setTimeout(() => {

        document
            .getElementById("practiceFeedback")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }, 150);

}


function nextSituation() {

    currentIndex++;

    if (currentIndex >= situations.length) {
        currentIndex = 0;
    }

    renderPractice();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function speakPhrase() {

    if (!("speechSynthesis" in window))
        return;

    speechSynthesis.cancel();

    const text =
        document.getElementById("phraseText").textContent;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "kk-KZ";

    speechSynthesis.speak(speech);

}


renderPractice();
