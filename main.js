const parrent = document.getElementById("div1");
const score = document.getElementById("points");
const titleNumber = document.getElementById("number");
let pageCouner = 0;
let tNumber = 0;
//promenljiva deklarisana unutar funkcije ili nekog bloka zove se lokalna
//i ne mozemo joj pristupiti van tog bloka ili funkcije
//pageCounter je globalna promenljiva i dostupna je svuda
function onNextPage() {
  pageCouner++;
  tNumber++;
  titleNumber.innerHTML = tNumber;
  managePage();
}

function onPreviousPage() {
  pageCouner--;
  managePage();
}

function managePage() {
  console.log("pageCounetr:", pageCouner);
  for (let i = pageCouner * 10; i < pageCouner * 10 + 10; i++) {
    if (pageCouner > 0) {
      parrent.removeChild(document.getElementById("tmpdiv"));
    }
    const tmpdiv = document.createElement("div");
    tmpdiv.setAttribute("id", "tmpdiv");
    const child_question = document.createElement("p");
    child_question.innerHTML = questions[i].id + "." + questions[i].question;
    child_question.style.fontWeight = "bold";
    tmpdiv.appendChild(child_question);

    for (let j = 0; j < questions[i].answers.length; j++) {
      const child_answer = document.createElement("p");

      const checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "answers");
      checkbox.setAttribute("id", questions[i].answers[j].id);
      checkbox.onclick = isCorrectAnswer;
      checkbox.correctAnswer = questions[i].correctAnswer;

      child_answer.innerHTML =
        questions[i].answers[j].id + "." + questions[i].answers[j].answer;
      // child_question.innerHTML = questions[i].id;
      tmpdiv.appendChild(child_answer);
      tmpdiv.appendChild(checkbox);
      parrent.appendChild(tmpdiv);
    }
  }
}

managePage();

// for (let i = 0; i < 10; i++) {

//   const child_question = document.createElement("p");
//   child_question.innerHTML = questions[i].question;
//   child_question.style.fontWeight = "bold";
//   parrent.appendChild(child_question);

//   for (let j = 0; j < questions[i].answers.length; j++) {
//     const child_answer = document.createElement("p");

//     const checkbox = document.createElement("INPUT");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.setAttribute("name", "answers");
//     checkbox.setAttribute("id", questions[i].answers[j].id);
//     checkbox.onclick = isCorrectAnswer;
//     checkbox.correctAnswer = questions[i].correctAnswer;
//     child_answer.innerHTML =
//       questions[i].answers[j].id + "." + questions[i].answers[j].answer;
//     parrent.appendChild(child_answer);
//     parrent.appendChild(checkbox);
//   }
// }
let points = 0;

const checkboxes = document.getElementsByName("answers");

function isCorrectAnswer() {
  console.log(this.correctAnswer);
  if (this.checked && this.id == this.correctAnswer) {
    // text.style.display = "block";
    points++;
    score.innerHTML = points;

    console.log(points);
  } else {
    //points = points - 1;
  }
}

console.log(checkboxes[0].checked);
//Postoje primitivni tipovi podataka kao sto su brojevi i logicke vrednosti
// i  postoje slozeni tipovi podataka kao sto je npr checkbox i kod njih kompajler ne moze unapred
// rezervisati mem.prostor kao sto je slucaj sa primitivnim tipovima podataka
// for (let i = 0; i < 3; i++) {
//   if (checkboxes[i].checked && checkboxes[i].id === "1") {
//     text.style.display = "block";
//   }
// }
// console.log(checkboxes);
//&& - logicki operator i (and) - svi uslovi povezani ovim operatorom moraju da budu ispunjeni
//sve iteracije unutrasnje petlje su jedna iteracija spoljasnje petlje;

//Da bi pristupio prvrom elementu niza qustions potrebna je sl.naredba: questions[0],da bi
//pristupio drugom el.niza potrebna je naredba:qustions[1]
//da bi pristupio svim elementima niza potrena je naredba :qustions[i] , pri cemu i uzima
//vrednosti od 0 do duzine niza.
