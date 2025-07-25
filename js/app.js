
const members = [
    {
        name: "Jane Smith",
        party: "Party A",
        electorate: "Electorate X",
        image: "https://via.placeholder.com/300x200?text=Jane+Smith"
    },
    {
        name: "John Doe",
        party: "Party B",
        electorate: "Electorate Y",
        image: "https://via.placeholder.com/300x200?text=John+Doe"
    }
];

let currentIndex = 0;
let quizIndex = 0;

function startFlashcards() {
    document.getElementById("mode-selector").classList.add("hidden");
    document.getElementById("flashcard").classList.remove("hidden");
    showFlashcard();
}

function showFlashcard() {
    const member = members[currentIndex];
    document.getElementById("flashcard-image").src = member.image;
    document.getElementById("flashcard-info").innerText = `${member.name}\n${member.party}\n${member.electorate}`;
}

function nextFlashcard() {
    currentIndex = (currentIndex + 1) % members.length;
    showFlashcard();
}

function startQuiz() {
    document.getElementById("mode-selector").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuiz();
}

function showQuiz() {
    const member = members[quizIndex];
    document.getElementById("quiz-image").src = member.image;
    document.getElementById("quiz-feedback").innerText = "";
    document.getElementById("quiz-form").reset();
}

function checkAnswer() {
    const member = members[quizIndex];
    const name = document.getElementById("name").value.trim();
    const party = document.getElementById("party").value.trim();
    const electorate = document.getElementById("electorate").value.trim();
    let feedback = "";

    if (name.toLowerCase() === member.name.toLowerCase() &&
        party.toLowerCase() === member.party.toLowerCase() &&
        electorate.toLowerCase() === member.electorate.toLowerCase()) {
        feedback = "✅ Correct!";
    } else {
        feedback = `❌ Incorrect. Correct answer:\n${member.name}, ${member.party}, ${member.electorate}`;
    }

    document.getElementById("quiz-feedback").innerText = feedback;
    return false;
}

function nextQuiz() {
    quizIndex = (quizIndex + 1) % members.length;
    showQuiz();
}
