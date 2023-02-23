let eventHistory = [];
const logHistory = (event, type) => eventHistory.push({ event, type })

const handleAlertClick = e => {
  logHistory(e, 'Alert');
  alert('Consider yourself alerted');
};
const handleAnimationClick = e => {
  console.log('Click event ', e)
  logHistory(e, 'Animation');
  // TODO
  // Do some animation

  // Init animate div
  // Set location, size, etc

  // Grow div (square) from "nowhere"

  // Move it around with some function

  // Make it disappear

  // $("#animation").animate({}, )
};
const handleAsyncClick = e => {
  logHistory(e, 'Async request');
  $("#p_lucky").text("Getting your lucky number...");
  $.get('/async', response => $("#p_lucky").text(response));
};
const handleRotationClick = e => {
  logHistory(e, 'Rotation change');
  // TODO
  console.log('Rotation Click');
  $("#image").attr("animation", "spin-clockwise infinite 20s linear");
};

const greeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12)
    return 'Good morning';
  if (currentHour < 17)
    return 'Good afternoon'
  return 'Good evening';
}

$(document).ready(() => {
  $("#greeting").text(greeting());

  $("#btn_alert").click(handleAlertClick);
  $("#btn_animation").click(handleAnimationClick);
  $("#btn_async").click(handleAsyncClick);

  $("#btn_rotate").click(handleRotationClick);

  $("#icon_history").click(e => {
    $("#history").text(JSON.stringify(eventHistory.map(h => { return { type: h.type, timeStamp: h.event?.timeStamp } })));
  });
});

// TODO:
// 1) Track events - push them to an object
// 2) Buttons to start and stop some animation
// 3) Show a pop up on button press
//    i) Show something slide in & out - This should display the history of actions
//    ii) Have an alert

/*
  INSTRUCTIONS:

To better evaluate skill levels with HTML CSS Javascript and NodeJS, we would like you to put together a small page that can keep track of the click and touch events using JQuery.

The page should have a section with faked buttons inside , when pressed the button starts and stops a small css animation.

Click and touch events X&Y should be saved in a JSON Object.

One of the buttons shows a small popup with a listing of all the click/touch events in a table ( you can use JQXGrid if you feel like it )

Try to make it look nice, add fadein/out or any animation you feel like.

Libraries can be used if you want. Its up to you.
*/
