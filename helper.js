const messages =
document.getElementById(
"chatMessages"
);


const actions =
document.getElementById(
"chatActions"
);


function bot(text) {

const div =
document.createElement("div");

div.className =
"message bot-message";

div.textContent =
text;

messages.appendChild(div);

scrollChat();

}


function user(text) {

const div =
document.createElement("div");

div.className =
"message user-message";

div.textContent =
text;

messages.appendChild(div);

scrollChat();

}


function scrollChat() {

messages.scrollTop =
messages.scrollHeight;

}


function directDanger() {

user(
"Иә, қазір қауіп бар"
);


actions.innerHTML = "";


bot(
"Бірінші міндет — қауіпсіз жерге бару. Қауіпті өзің жалғыз тоқтатуға тырыспа."
);


bot(
"Мүмкін болса, жақын жердегі сенімді ересекке дереу хабарла."
);


showPhrase(
"Маған қазір көмек керек. Мен қауіпсіз емес жағдайдамын."
);

}


function chooseProblem() {

user(
"Қазір тікелей қауіп жоқ"
);


bot(
"Жақсы. Қай жағдай саған көбірек ұқсайды?"
);


actions.innerHTML = `

<button
onclick="onlineProblem()">

Онлайнда біреу мазалап жүр

</button>


<button
onclick="bullyingProblem()">

Мектепте мазақтау немесе буллинг

</button>


<button
onclick="strangerProblem()">

Бейтаныс адам алаңдатады

</button>


<button
onclick="secretProblem()">

«Ешкімге айтпа» деп қорқытты

</button>


<button
onclick="otherProblem()">

Басқа жағдай

</button>

`;

}


function onlineProblem() {

user(
"Онлайнда біреу мазалап жүр"
);


actions.innerHTML = "";


bot(
"Жауап беруге асықпа. Жеке ақпарат немесе сурет жіберме."
);


bot(
"Қажет болса хабарламаның дәлелін сақтап, сенімді ересекке көрсет."
);


showPhrase(
"Маған интернетте бір адам мазалап жазып жатыр. Мен жауап бермедім. Осыны бірге қарап беріңізші."
);

}


function bullyingProblem() {

user(
"Мектепте мазақтау немесе буллинг"
);


actions.innerHTML = "";


bot(
"Өзіңді қауіпке салатын жанжалға кірме."
);


bot(
"Не болғанын, қай жерде болғанын және кімге көмек қажет екенін жауапты ересекке нақты айт."
);


showPhrase(
"Мектепте бір оқушыны қайта-қайта мазақтап жүр. Осы жағдайды тоқтатуға көмектесіңізші."
);

}


function strangerProblem() {

user(
"Бейтаныс адам алаңдатады"
);


actions.innerHTML = "";


bot(
"Бейтаныс адамнан арақашықтық сақта және адамдар бар қауіпсіз жерге бар."
);


bot(
"Онымен жалғыз барма және көлігіне отырма."
);


showPhrase(
"Маған бейтаныс адам жақындап, өзімен бірге баруды ұсынды. Маған көмектесіңізші."
);

}


function secretProblem() {

user(
"«Ешкімге айтпа» деп қорқытты"
);


actions.innerHTML = "";


bot(
"Қауіпке қатысты құпияны жалғыз сақтауға міндетті емессің."
);


bot(
"Сенетін ересек адамға болған жағдайды айт."
);


showPhrase(
"Маған бір адам болған жағдайды ешкімге айтпауды айтып, қорқытты. Маған көмек керек."
);

}


function friendHelp() {

user(
"Досыма көмектескім келеді"
);


actions.innerHTML = "";


bot(
"Досыңды тыңда және оны кінәлама."
);


bot(
"Егер жағдай оның қауіпсіздігіне қатысты болса, оны жалғыз шешуге тырыспай, сенімді ересектің көмегіне жүгін."
);


showPhrase(
"Досымның қауіпсіздігіне қатысты жағдай бар. Бізге ересек адамның көмегі керек."
);

}


function otherProblem() {

user(
"Басқа жағдай"
);


actions.innerHTML = "";


bot(
"Егер не істеу керегіне сенімді болмасаң, қауіптен алыстау және сенімді ересекке нақты не болғанын айту — қауіпсіз алғашқы қадам."
);


showPhrase(
"Маған бір жағдай туралы айту керек. Не істеу керегіне сенімді емеспін. Маған көмектесіңізші."
);

}


function showPhrase(text) {

const box =
document.createElement("div");


box.className =
"helper-phrase";


box.innerHTML = `

<span>
ЕРЕСЕККЕ АЙТАТЫН СӨЗ
</span>

<p>
“${text}”
</p>

<button
onclick="restartHelper()">
Басқа жағдайды қарау
</button>

`;


messages.appendChild(box);

scrollChat();

}


function restartHelper() {

messages.innerHTML = `

<div class="message bot-message">

Жаңа жағдайды қарайық.

</div>

<div class="message bot-message">

Қазір саған немесе басқа адамға
тікелей қауіп төніп тұр ма?

</div>

`;


actions.innerHTML = `

<button onclick="directDanger()">
Иә, қазір қауіп бар
</button>

<button onclick="chooseProblem()">
Қазір тікелей қауіп жоқ
</button>

<button onclick="friendHelp()">
Досыма көмектескім келеді
</button>

`;

}
