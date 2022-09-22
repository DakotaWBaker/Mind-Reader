const header = document.getElementById("header");
const next = document.getElementById('next');
const example = document.getElementById('example');
const helper = document.getElementById('helper');
const go = document.getElementById('goButton');
const reset = document.getElementById('resetButton');
const prev = document.getElementById('prev');
let pageNum = 0;


let mainObj = [{
  //page 1
  headerText: "I can read your mind",
  nextButton: '',
  helperText: "",
  exampleText: "",
  goButton: "GO", //this will be changing the icon instead of text
}, {
  //page 2
  headerText: "Pick a number from 01-99",
  nextButton: "NEXT",
  helperText: "when you have your number click next",
  exampleText: "",
  goButton: "RESET", //this will be changing the icon instead of text
}, {
  //page 3
  headerText: "Add both digits together to get a new number",
  nextButton: "NEXT",
  helperText: "Ex: 14 is 1 + 4 = 5",
  exampleText: "click next to proceed",
  goButton: "RESET", //this will be changing the icon instead of text
}, {
  //page 4
  headerText: "Subtract your new number from the original number",
  nextButton: "NEXT",
  helperText: "EX: 14-5 = 9",
  exampleText: "click next to proceed",
  goButton: "RESET", //this will be changing the icon instead of text
}, {
  //page 5
  headerText: "", //list showing number-icon 
  nextButton: "REVEAL",
  helperText: "Find your new number.",
  exampleText: "Note the symbol beside the number",
  goButton: "RESET" //this will be changing the icon instead of text
}, {
  //page 6
  headerText: "", //show symbol 
  nextButton: "",
  helperText: "Your symbol is",
  exampleText: "", //symbol here
  goButton: "RESET", //this will be changing the icon instead of text

}]
console.log(mainObj[1]);

function updatePage() {
header.innerHTML = mainObj[pageNum].headerText;
next.innerHTML = mainObj[pageNum].nextButton;
example.innerHTML = mainObj[pageNum].helperText;
helper.innerHTML = mainObj[pageNum].exampleText;
if (pageNum === 0){
  goButton.style.visibility = 'visible';
  resetButton.style.visibility = 'hidden';
  next.style.visibility = 'hidden';
  prev.style.visibility = 'hidden';
} else {
  goButton.style.visibility = 'hidden';
  resetButton.style.visibility = 'visible';
  next.style.visibility = 'visible';
  prev.style.visibility = 'visible';
}
}
updatePage();



function nextPage(e) {
if (e.target.id === 'next' || e.target.id === 'goButton') {
    pageNum++;
  }
  else if (e.target.id === 'prev') {
    pageNum--;
  } 
  else if (e.target.id === 'resetButton') {
    pageNum = 0;
  }
  updatePage()
 
  }


next.addEventListener('click', nextPage);
goButton.addEventListener('click', nextPage);
resetButton.addEventListener('click', nextPage);
prev.addEventListener('click', nextPage);

