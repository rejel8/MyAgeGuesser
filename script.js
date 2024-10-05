function guessAge() {
    const name = document.getElementById('name').value;
    const ageQuestion = document.getElementById('ageQuestion').value;
    let guessedAge;

    if (ageQuestion === "Yes") {
        guessedAge = "above 30";
    } else if (ageQuestion === "No") {
        guessedAge = "below 30";
    } else {
        guessedAge = "unknown";
    }

    if (name && ageQuestion) {
        document.getElementById('result').innerText = `${name}, I guess you are ${guessedAge} years old!`;
    } else {
        document.getElementById('result').innerText = 'Please enter your name and answer the question.';
    }
}
