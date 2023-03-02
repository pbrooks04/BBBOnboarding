let eventHistory = [];
const logHistory = (event, type) => {
  console.log('Adding Event: ', event);
  eventHistory.push({ ...event, type });
  $('#jqxgrid').jqxGrid('updatebounddata');
}

const handleAlertClick = e => {
  logHistory(e, 'Alert');
  alert('Consider yourself alerted');
};
const handleAnimationClick = e => {
  logHistory(e, 'Animation');

  const animationTime = 3000;
  $('#animation').attr('hidden', false);
  $('#p_animation').attr('hidden', false);

  $('#animation').animate({
    height: '210px',
    width: '550px',
    opacity: 0.8,
  }, animationTime);

  // $('#p_animation').fadeIn(6000, () => $(p_animation).text('The Text Has Changed!').fadeIn(6000));

  $('#p_animation').fadeIn(500);
  $('#p_animation').animate({
    fontSize: '40px',
    color: 'white',
  }, animationTime, () => {
    // $(p_animation).text('Goodbye!');
    // $('#p_animation').fadeIn(500);
  });

  $('#p_animation').text('Goodbye!');

  $('#p_animation').fadeOut(500);
  $('#p_animation').animate({
    fontSize: '40px',
    color: 'white',
  }, animationTime);

  $('#animation').animate({
    height: '0px',
    width: '0px',
    opacity: 0,
  }, animationTime);
  $('#p_animation').text('Well hello there');
};
const handleAsyncClick = e => {
  logHistory(e, 'Async request');
  $("#p_lucky").text("Getting your lucky number...");
  $.get('/async', response => $("#p_lucky").text(response));
};
const handleHistoryClick = e => {
  logHistory(e, 'View History');
  $('#history').animate({
    height: 'toggle',
  });
  // TODO: Some fade in anim for the display table
};
const handleSmsClick = e => {
  logHistory(e, 'Send SMS');
}

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
  $('#btn_sms').click(handleSmsClick);

  $("#btn_history").click(handleHistoryClick);

  const source = {
    localdata: eventHistory,
    datatype: 'array',
    datafields: [
      { name: 'type', type: 'string' },
      { name: 'event', type: 'object' },
      { name: 'timeStamp', type: 'number' },
      { name: 'clientX', type: 'number' },
      { name: 'clientY', type: 'number' },
      // { name: 'total', type: 'number' }
    ]
  };

  const dataAdapter = new $.jqx.dataAdapter(source);

  $("#jqxgrid").jqxGrid({
    width: 850,
    source: dataAdapter,
    columnsresize: true,
    columns: [
      { text: 'Type', datafield: 'type', width: 120 },
      { text: 'Time Stamp', datafield: 'timeStamp', width: 120 },
      { text: 'Client X', datafield: 'clientX', width: 120 },
      { text: 'Client Y', datafield: 'clientY', width: 120 },
      // { text: 'Product', datafield: 'productname', width: 180 },
      // { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
      // { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
      // { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ]
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
