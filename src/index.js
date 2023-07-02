// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const startbtn = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");
const resetbtn = document.querySelector(".reset");

let timerid = null;

startbtn.addEventListener("click", (e) => {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) return;

  //start timer
  startTimer();
});

resetbtn.addEventListener("click", (e) => {
  hours.value = "";
  minutes.value = "";
  seconds.value = "";

  clearInterval(timerid);
});

function startTimer() {
  //decrease seconds.value - 1 every 1000ms

  console.log("starting timer");

  timerid = setInterval(() => {
    // Updating the Time - START
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
      hours.value = "";
      minutes.value = "";
      seconds.value = "";
      // stopInterval();
    } else if (seconds.value != 0) {
      seconds.value = `${seconds.value - 1}`;
    } else if (minutes.value != 0 && seconds.value == 0) {
      seconds.value = 59;
      minutes.value = `${minutes.value - 1}`;
    } else if (hours.value != 0 && minutes.value == 0) {
      minutes.value = 60;
      hours.value = `${hours.value - 1}`;
    }
  }, 1000);
}

function stopTimer() {
  clearTimeout(timerid);
}
