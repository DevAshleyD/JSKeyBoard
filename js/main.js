"use strict";

/* Play note
============================ */
function playSingleNote(note) {
  var elString = "#" + note.attr('id') + "-key";
  if (elString.indexOf("sharp") >= 0){
    $(elString).addClass("black-pressed");
  } else {
    $(elString).addClass("white-pressed");
  }
  note.get(0).play();
}
/* stop note
============================ */
function stopSingleNote(note) {
  var elString = "#" + note.attr('id') + "-key";

  if (elString.indexOf("sharp") >= 0){
    $(elString).removeClass("black-pressed");
  } else {
    $(elString).removeClass("white-pressed");
  }
    note.get(0).pause();
    note.get(0).currentTime = 0;
}


/* Keyboard Triggers
============================ */

function toggleNote(note, stop) {
  switch (note) {
    case "a":
      if (stop) {
        stopSingleNote($("#c2"));
      } else {
        playSingleNote($("#c2"));
      }
      break;
    case "w":
      if (stop) {
        stopSingleNote($("#c-sharp2"));
      } else {
        playSingleNote($("#c-sharp2"));
      }
      break;
    case "s":
      if (stop) {
        stopSingleNote($("#d2"));
      } else {
        playSingleNote($("#d2"));
      }
      break;
    case "e":
      if (stop) {
        stopSingleNote($("#d-sharp2"));
      } else {
        playSingleNote($("#d-sharp2"));
      }
      break;
    case "d":
      if (stop) {
        stopSingleNote($("#e2"));
      } else {
        playSingleNote($("#e2"));
      }
      break;
    case "f":
      if (stop) {
        stopSingleNote($("#f2"));
      } else {
        playSingleNote($("#f2"));
      }
      break;
    case "t":
      if (stop) {
        stopSingleNote($("#f-sharp2"));
      } else {
        playSingleNote($("#f-sharp2"));
      }
      break;
    case "g":
      if (stop) {
        stopSingleNote($("#g2"));
      } else {
      playSingleNote($("#g2"));
      }
      break;
    case "y":
      if (stop) {
        stopSingleNote($("#g-sharp2"));
      } else {
        playSingleNote($("#g-sharp2"));
      }
      break;
    case "h":
      if (stop) {
        stopSingleNote($("#a2"));
      } else {
        playSingleNote($("#a2"));
      }
      break;
    case "u":
      if (stop) {
        stopSingleNote($("#a-sharp2"));
      } else {
        playSingleNote($("#a-sharp2"));
      }
      break;
    case "j":
      if (stop) {
        stopSingleNote($("#b2"));
      } else {
        playSingleNote($("#b2"));
      }
      break;
    case "k":
      if (stop) {
        stopSingleNote($("#c3"));
      } else {
        playSingleNote($("#c3"));
      }
      break;
    case "o":
      if (stop) {
        stopSingleNote($("#c-sharp3"));
      } else {
        playSingleNote($("#c-sharp3"));
      }
      break;
    case "l":
      if (stop) {
        stopSingleNote($("#d3"));
      } else {
        playSingleNote($("#d3"));
      }
      break;
    case "p":
      if (stop) {
        stopSingleNote($("#d-sharp3"));
      } else {
        playSingleNote($("#d-sharp3"));
      }
      break;
    case ";":
      if (stop) {
        stopSingleNote($("#e3"));
      } else {
        playSingleNote($("#e3"));
      }
      break;
    case "'":
      if (stop) {
        stopSingleNote($("#f3"));
      } else {
        playSingleNote($("#f3"));
      }
      break;
  }
}

$("#key-input").keydown(function( event ) {
  toggleNote(event.key.toLowerCase());
});

$("#key-input").keyup(function( event ) {
  toggleNote(event.key.toLowerCase(), true)
});

/* Mouse Events
============================ */

$(".keyboard").mousedown(function(event){
  var note = "#" + event.target.id.slice(0, -4);
  playSingleNote($(note));
});

$('.keyboard').on({ 'touchstart' : function(event){
  var note = "#" + event.target.id.slice(0, -4);
  playSingleNote($(note));
} });

$(".keyboard").mouseup(function(event){
  var note = "#" + event.target.id.slice(0, -4);
  stopSingleNote($(note));
});

$('.keyboard').on({ 'touchend' : function(event){
  var note = "#" + event.target.id.slice(0, -4);
  stopSingleNote($(note));
} });

$(".keyboard div").mouseleave(function(){
  $(this).removeClass("white-pressed");
  $(this).removeClass("black-pressed");
});
