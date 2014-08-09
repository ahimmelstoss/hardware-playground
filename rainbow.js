var j5 = require("johnny-five");
var board = new j5.Board();
var BTNPIN = 7;
 
board.on("ready", function(){
  var rgb, rainbow, index;
  var btn = new j5.Button(BTNPIN);

  rgb = new j5.Led.RGB([3,5,6]);
  rainbow = ["FF000", "FF7F00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  index = 0;

  btn.on("hit", function(){
    setInterval(function(){
      if (index + 1 === rainbow.length) {
        index = 0;
      }
      rgb.color(rainbow[index++]);
    }, 500);
  });
});
