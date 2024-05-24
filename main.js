// Ethan Lawrence
// May 24 2024
// JS Translator Project

function checkLang() {
    let language = document.querySelector("#lang").value.toLowerCase();
console.log(language)
    switch (language) {
        case "french":
            document.querySelector('#translation').innerHTML = "'Bonjour!' means hello in French";
            break;
        case "german":
            document.querySelector('#translation').innerHTML = "'Guten Tag!' means hello in German";
            break;
        case "dutch":
            document.querySelector('#translation').innerHTML = "'Goediegad' means hello in Dutch";
            break;
        default:
        document.querySelector('#translation').innerHTML = "Sorry we do not teach that language at your school!";
    }
} 
// End Of Function
// Clear imput field
document.querySelector('#resetAll').addEventListener('click', () => {
    document.querySelector('#translation').innerHTML = '';
    document.querySelector('#lang').innerHTML = '';
});

//call function on click
document.querySelector('#check').addEventListener('click', checkLang);

let instructions = "Which Language do you want to learn";
let student = "By Ethan Lawrence";
let project = "Switch Statement Translator Project";

document.querySelector("#directions").innerHTML = instructions;
document.querySelector("#student").innerHTML = student;
document.querySelector("#project").innerHTML = project;