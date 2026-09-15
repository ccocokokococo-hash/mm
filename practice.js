let currentSituation = 0;


const params =
new URLSearchParams(window.location.search);


const requestedId =
parseInt(params.get("id"));


if (requestedId) {

const found =
situations.findIndex(
item => item.id === requestedId
);

if (found !== -1) {

currentSituation = found;

}

}


function loadSituation() {

const item =
situations[currentSituation];


document.getElementById(
"practiceCategory"
).textContent =
item.categoryName;


document.getElementById(
"practiceCounter"
).textContent =
`${String(item.id).padStart(2,"0")} / 12`;


document.getElementById(
"practiceTitle"
).textContent =
item.title;


document.getElementById(
"practiceText"
).textContent =
item.text;


const options =
document.getElementById(
"practiceOptions"
);


options.innerHTML = "";


item.options.forEach(
(option, index) => {

const button =
document.createElement("button");


button.className =
"practice-option";


button.innerHTML = `

<span class="option-letter">

${String.fromCharCode(
65 + index
)}

</span>

<span>
${option}
</span>

`;


button.onclick =
() => chooseOption(
index,
button
);


options.appendChild(
button
);

});


document
.getElementById("feedbackBox")
.classList.add("hidden");


document
.getElementById("sayBox")
.classList.add("hidden");


document
.getElementById("nextArea")
.classList.add("hidden");

}


function chooseOption(
selected,
button
) {

const item =
situations[currentSituation];


document
.querySelectorAll(
".practice-option"
)
.forEach(btn => {

btn.disabled = true;

});


const correct =
selected === item.correct;


if (correct) {

button.classList.add(
"correct"
);

document.getElementById(
"feedbackStatus"
).textContent =
"ҚАУІПСІЗ ШЕШІМ";


document.getElementById(
"feedbackTitle"
).textContent =
"Дұрыс бағыт таңдадың";

}

else {

button.classList.add(
"wrong"
);


const buttons =
document.querySelectorAll(
".practice-option"
);


buttons[
item.correct
].classList.add(
"correct"
);


document.getElementById(
"feedbackStatus"
).textContent =
"ҚАЙТА ОЙЛАН";


document.getElementById(
"feedbackTitle"
).textContent =
"Қауіпсіздеу әрекет бар";

}


document.getElementById(
"feedbackText"
).textContent =
item.feedback[selected];


document.getElementById(
"sayText"
).textContent =
item.say;


document
.getElementById("feedbackBox")
.classList.remove("hidden");


document
.getElementById("sayBox")
.classList.remove("hidden");


document
.getElementById("nextArea")
.classList.remove("hidden");


saveCompleted(
item.id
);

}


function nextSituation() {

currentSituation++;


if (
currentSituation >=
situations.length
) {

currentSituation = 0;

}


loadSituation();


window.scrollTo({
top: 0,
behavior: "smooth"
});

}


function saveCompleted(id) {

let completed =
JSON.parse(
localStorage.getItem(
"completedSituations"
)
) || [];


if (
!completed.includes(id)
) {

completed.push(id);

}


localStorage.setItem(
"completedSituations",
JSON.stringify(completed)
);

}


function speakPhrase() {

const text =
document.getElementById(
"sayText"
).textContent;


if (
"speechSynthesis" in window
) {

speechSynthesis.cancel();

const utterance =
new SpeechSynthesisUtterance(
text
);

utterance.lang =
"kk-KZ";


speechSynthesis.speak(
utterance
);

}

}


loadSituation();
