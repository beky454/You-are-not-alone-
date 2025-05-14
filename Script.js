document.addEventListener("DOMContentLoaded", function() {
    const surveyForm = document.querySelector("form");

    surveyForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const feeling = document.getElementById("feeling").value;
        const anxiety = document.getElementById("anxiety").value;

        alert(`You feel ${feeling} today, and your anxiety level is ${anxiety}. Thanks for sharing!`);
    });
});
