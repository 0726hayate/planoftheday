window.onload = function(){
  colorCode();
  eight();
  nine();
  ten();
  eleven();
  twelve();
  thirteen();
  fourteen();
  fifteen();
  sixteen();
 }

var currentDay = moment().format("LL");
$("#currentDay").append(currentDay);

var Timenow = moment().format("HH:MM:ss");
$("#Timenow").append(Timenow);

var currentdaytime = new Date().getHours();

function colorCode() {
  if (currentdaytime > 8) {
    $("#plan8").addClass("past");
  } else if (currentdaytime >= 8 && currentdaytime < 9) {
    $("#plan8").addClass("present");
  } else if (currentdaytime < 8) {
    $("#plan8").addClass("future");
  }
  
  if (currentdaytime > 9) {
    $("#plan9").addClass("past");
  } else if (currentdaytime >= 9 && currentdaytime < 10) {
    $("#plan9").addClass("present");
  } else if (currentdaytime < 9) {
    $("#plan9").addClass("future");
  }
  if (currentdaytime > 10) {
    $("#plan10").addClass("past");
  } else if (currentdaytime >= 10 && currentdaytime < 10) {
    $("#plan10").addClass("present");
  } else if (currentdaytime < 10) {
    $("#plan10").addClass("future");
  }
  if (currentdaytime > 11) {
    $("#plan11").addClass("past");
  } else if (currentdaytime >= 11 && currentdaytime < 12) {
    $("#plan11").addClass("present");
  } else if (currentdaytime < 11) {
    $("#plan11").addClass("future");
  }
  if (currentdaytime > 12) {
    $("#plan12").addClass("past");
  } else if (currentdaytime >= 12 && currentdaytime < 13) {
    $("#plan12").addClass("present");
  } else if (currentdaytime < 12) {
    $("#plan12").addClass("future");
  }
  if (currentdaytime > 13) {
    $("#plan13").addClass("past");
  } else if (currentdaytime >= 13 && currentdaytime < 14) {
    $("#plan13").addClass("present");
  } else if (currentdaytime < 13) {
    $("#plan13").addClass("future");
  }
  if (currentdaytime > 14) {
    $("#plan14").addClass("past");
  } else if (currentdaytime >= 14 && currentdaytime < 15) {
    $("#plan14").addClass("present");
  } else if (currentdaytime < 14) {
    $("#plan14").addClass("future");
  }
  if (currentdaytime > 15) {
    $("#plan15").addClass("past");
  } else if (currentdaytime >= 15 && currentdaytime < 16) {
    $("#plan15").addClass("present");
  } else if (currentdaytime < 15) {
    $("#plan15").addClass("future");
  }
  if (currentdaytime > 16) {
    $("#plan16").addClass("past");
  } else if (currentdaytime >= 16 && currentdaytime < 17) {
    $("#plan16").addClass("present");
  } else if (currentdaytime < 16) {
    $("#plan16").addClass("future");
  }

  if (currentdaytime > 17) {
    $("#plan17").addClass("past");
  } else if (currentdaytime >= 17 && currentdaytime < 18) {
    $("#plan17").addClass("present");
  } else if (currentdaytime < 17) {
    $("#plan17").addClass("future");
  }
}

function eight() {
  var txtcon = document.querySelector("#plan8");
  var output = document.querySelector("#plan8");
  var save = document.querySelector("#btn8");

  save.addEventListener("click", update);

  output.txtinfo = localStorage.getItem("Item");
  txtcon.value = localStorage.getItem("Item");

  function update() {
    localStorage.setItem("Item", txtcon.value);

    output.txtinfo = txtcon.value;
  }
}

function nine() {
  var txtcon1 = document.querySelector("#plan9");
  var output1 = document.querySelector("#plan9");
  var save1 = document.querySelector("#btn9");

  save1.addEventListener("click", update2);

  output1.txtinfo = localStorage.getItem("Item2");
  txtcon1.value = localStorage.getItem("Item2");

  function update2() {
    localStorage.setItem("Item2", txtcon1.value);

    output1.txtinfo = txtcon1.value;
  }
}

function ten() {
  var txtcon2 = document.querySelector("#plan10");
  var output2 = document.querySelector("#plan10");
  var save2 = document.querySelector("#btn10");

  save2.addEventListener("click", update3);

  output2.txtinfo = localStorage.getItem("Item3");
  txtcon2.value = localStorage.getItem("Item3");

  function update3() {
    localStorage.setItem("Item3", txtcon2.value);

    output2.txtinfo = txtcon2.value;
  }
}

function eleven() {
  var txtcon3 = document.querySelector("#plan11");
  var output3 = document.querySelector("#plan11");
  var save3 = document.querySelector("#btn11");

  save3.addEventListener("click", update4);

  output3.txtinfo = localStorage.getItem("Item4");
  txtcon3.value = localStorage.getItem("Item4");

  function update4() {
    localStorage.setItem("Item4", txtcon3.value);

    output3.txtinfo = txtcon3.value;
  }
}

function twelve() {
  var txtcon4 = document.querySelector("#plan12");
  var output4 = document.querySelector("#plan12");
  var save4 = document.querySelector("#btn12");

  save4.addEventListener("click", update5);

  output4.txtinfo = localStorage.getItem("Item5");
  txtcon4.value = localStorage.getItem("Item5");

  function update5() {
    localStorage.setItem("Item5", txtcon4.value);

    output4.txtinfo = txtcon4.value;
  }
}


function thirteen() {
  var txtcon5 = document.querySelector("#plan13");
  var output5 = document.querySelector("#plan13");
  var save5 = document.querySelector("#btn13");

  save5.addEventListener("click", update6);

  output5.txtinfo = localStorage.getItem("Item6");
  txtcon5.value = localStorage.getItem("Item6");

  function update6() {
    localStorage.setItem("Item6", txtcon5.value);

    output5.txtinfo = txtcon5.value;
  }
}

function fourteen() {
  var txtcon6 = document.querySelector("#plan14");
  var output6 = document.querySelector("#plan14");
  var save6 = document.querySelector("#btn14");

  save6.addEventListener("click", update7);

  output6.txtinfo = localStorage.getItem("Item7");
  txtcon6.value = localStorage.getItem("Item7");

  function update7() {
    localStorage.setItem("Item7", txtcon6.value);

    output6.txtinfo = txtcon6.value;
  }
}


function fifteen() {
  var txtcon7 = document.querySelector("#plan15");
  var output7 = document.querySelector("#plan15");
  var save7 = document.querySelector("#btn15");

  save7.addEventListener("click", update8);

  output7.txtinfo = localStorage.getItem("Item8");
  txtcon7.value = localStorage.getItem("Item8");

  function update8() {
    localStorage.setItem("Item8", txtcon7.value);

    output7.txtinfo = txtcon7.value;
  }
}


function sixteen() {
  var txtcon8 = document.querySelector("#plan16");
  var output8 = document.querySelector("#plan16");
  var save8 = document.querySelector("#btn16");

  save8.addEventListener("click", update9);

  output8.txtinfo = localStorage.getItem("Item9");
  txtcon8.value = localStorage.getItem("Item9");

  function update9() {
    localStorage.setItem("Item9", txtcon8.value);

    output8.txtinfo = txtcon8.value;
  }

}

