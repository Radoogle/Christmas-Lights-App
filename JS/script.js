/* jshint esversion: 6 */
let ROW_NUMBER = 0;

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