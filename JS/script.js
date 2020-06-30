/* jshint esversion: 6 */
let ROW_NUMBER = 0;
const listItems = document.getElementsByTagName('li');
const TurnOnButton = document.getElementById('TurnOnButton');
const TurnOffButton = document.getElementById('TurnOffButton');

function makeRowVisible() {
  if (ROW_NUMBER < 7) {
    ROW_NUMBER++;
    const row = document.getElementById(`Row${ROW_NUMBER}`);
    row.style.display = "block";
  } else {
    alert('You reached the maximum number of lightropes!');
  }
}

function hideRow() {
  if (ROW_NUMBER > 0) {
    const row = document.getElementById(`Row${ROW_NUMBER}`);
    row.style.display = "none";
    ROW_NUMBER--;
  } else {
    alert('There are no more lightropes to remove!');
  }
}

TurnOnButton.addEventListener('click', () => {
  // listItems[0].style.animationIterationCount = "infinite";
  // console.log(listItems[0].style.animationIterationCount);
  // listItems.map(li => li.style.animationIterationCount = infinite);
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.animationIterationCount = "infinite";
  }
});

TurnOffButton.addEventListener('click', () => {
  // alert('turn off: ' + listItems[0].style.animationIterationCount);
  // listItems[0].style.animationIterationCount = "0";
  // console.log(listItems[0].style.animationIterationCount);
  // listItems.map(li => li.style.animationIterationCount = 0);
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.animationIterationCount = "0";
  }
});