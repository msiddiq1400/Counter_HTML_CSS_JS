let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
  //setting seconds
  let mySec = parseInt(seconds.innerText);
  if (mySec <= 10 && mySec > 0) {
    seconds.innerText = `0${parseInt(seconds.innerText) - 1}`;
  } else if (mySec >= 10) {
    seconds.innerText = parseInt(seconds.innerText) - 1;
  } else if (mySec < 1) {
    //setting mins
    let myMin = parseInt(minutes.innerText);
    if (myMin <= 10 && myMin > 0) {
      minutes.innerText = `0${parseInt(minutes.innerText) - 1}`;
    } else if (myMin >= 10) {
      minutes.innerText = parseInt(minutes.innerText) - 1;
    } else if (myMin < 1) {
      //setting hours
      let myHour = parseInt(hours.innerText);
      if (myHour <= 10 && myHour > 0) {
        hours.innerText = `0${parseInt(hours.innerText) - 1}`;
      } else if (myHour >= 10) {
        hours.innerText = parseInt(hours.innerText) - 1;
      } else if (myHour < 1) {
        //you can set days below i will not do it here
        hours.innerText = "24";
      }
      minutes.innerText = "59";
    }
    seconds.innerText = "59";
  }
}, 1000);
