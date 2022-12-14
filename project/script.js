//draw lines with margin of 1 px
var margin = 1;
var line = new Path.Line({
  from: [margin, margin],
  to: [view.size.width - margin, view.size.height - margin],
  strokeColor: "black",
});
