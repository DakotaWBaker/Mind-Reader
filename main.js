//declare all variables
const header = document.getElementById("header");
const next = document.getElementById('next');
const example = document.getElementById('example');
const helper = document.getElementById('helper');
const go = document.getElementById('goButton');
const reset = document.getElementById('resetButton');
const prev = document.getElementById('prev');
let pageNum = 0;
let arraySym = ['!', '@', '#', '$', '%', '^', '&', '*', '~'];

//create array of objects for each page view
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

//function to randomize the array of symbols
function generateNumbers() {
  let numNum = '';    //empty string to place concat string in                                    
  nineSym = arraySym[Math.floor(Math.random() * 9)];  //every 9th symbol. take array and randomize from 0-9. math floor rounds down
  for (let i = 0; i < 100; i++) {   //for loop start i at 0, loop through as long as i is less than 100 incrementing by 1
       if (i % 9 === 0) {           //Modulus operator to check if i is a multiple of 9. if remainder of 0 then it is
      numNum += i + ': ' + nineSym + '<br>';    //concat i to variable and nine variable. br is line break after each number/symbol pair
    } else {
      let nineSym = arraySym[Math.floor(Math.random() * 9)];  //if i is not a multiple of 9 randomizes rest of symbols and returns them with line below
      numNum += i + ' :' + nineSym + '<br>';
    }
  }
  header.innerHTML = numNum;         //replaced header text with randomized array string
}

//function that dictates what is on each page view based on pageNum variable
function updatePage() {
  if (pageNum === 4) {        //if page is 4 call generateNumbers function
    generateNumbers()         
  } else if (pageNum === 5) {     //if page is 5 replace header with symbol thats multiple of 9
    header.innerHTML = nineSym;
  }
  else {
  header.innerHTML = mainObj[pageNum].headerText;       //any page except 4 or 5. replace header with headertext dependent on which state 
  }
  //places each key value pair based on which state 
  next.innerHTML = mainObj[pageNum].nextButton;             
  example.innerHTML = mainObj[pageNum].helperText;
  helper.innerHTML = mainObj[pageNum].exampleText;
  //if pageNum is 0 changes visibility of buttons on page   
  if (pageNum === 0) {                                   
    goButton.style.visibility = 'visible';
    reset.style.visibility = 'hidden';
    next.style.visibility = 'hidden';
    prev.style.visibility = 'hidden';
    //if pageNum is 5 changes visibility of buttons on page
  } else if (pageNum === 5 ) {          
    goButton.style.visibility = 'hidden';
    reset.style.visibility = 'visible';
    next.style.visibility = 'hidden';
    prev.style.visibility = 'visible';
  }
  //changes visibility of buttons on all other pages
  else {                               
    goButton.style.visibility = 'hidden';
    reset.style.visibility = 'visible';
    next.style.visibility = 'visible'
    prev.style.visibility = 'visible';
  }
}

updatePage(); //initial render of page view

//function that change pageNum variable based on button eventlisteners
function nextPage(e) {
  //checks if next button or go button is clicked. if so increments pageNum by one
  if (e.target.id === 'next' || e.target.id === 'goButton') {
    pageNum++;
  }
  //check if previous button is clicked. if so decrements pageNum by one
  else if (e.target.id === 'prev') {
    pageNum--;
  }
  //checks if reset button is clicked. if so resets pageNum to zero
  else if (e.target.id === 'resetButton') {
    pageNum = 0;
  }
  updatePage()    //rerenders pagev

}

//all button event listeners
next.addEventListener('click', nextPage);
goButton.addEventListener('click', nextPage);
resetButton.addEventListener('click', nextPage);
prev.addEventListener('click', nextPage);

