var canvas = document.getElementById("canvas");
ci = canvas.getContext("2d");
for (var a = 4; a < 300; a += 4) {
  fnc(a, ci);
}
function fnc(x, ci) {
  ci.strokeStyle = "black";
  ci.moveTo(0, x);
  ci.lineTo(100, x);
  ci.lineWidth = 2;
  ci.stroke();
}
