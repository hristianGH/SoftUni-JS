function attachEventsListeners() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const daysBtn = document.getElementById("daysBtn");
  const hoursBtn = document.getElementById("hoursBtn");
  const minutesBtn = document.getElementById("minutesBtn");
  const secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", function (e) {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  });
  hoursBtn.addEventListener("click", function (e) {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  });
  minutesBtn.addEventListener("click", function (e) {
    hours.value = minutes.value /60;
    days.value = hours.value/ 24;
    seconds.value = minutes.value * 60;
  });
  secondsBtn.addEventListener("click", function (e) {
      minutes.value = seconds.value / 60;
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
  });
}
