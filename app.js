const secondElement = document.querySelector(".sec-hand");

const minuteElement = document.querySelector(".min-hand");

const hourElement = document.querySelector(".hour-hand");

function setData() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  secondElement.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = date.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteElement.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = date.getHours();
  const hourDegree = (hours / 12) * 360 + 90 + (minutes / 60) * 30;
  hourElement.style.transform = `rotate(${hourDegree}deg)`;

  if (seconds == 0) {
    secondElement.style.transitionDuration = "0s";
    minuteElement.style.transitionDuration = "0s";
    hourElement.style.transitionDuration = "0s";
  } else {
    secondElement.style.transitionDuration = "0.05s";
    minuteElement.style.transitionDuration = "0.05s";
    hourElement.style.transitionDuration = "0.05s";
  }
}

setInterval(setData, 1000);
