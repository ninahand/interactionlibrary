function ScrollColumn1() {
  if (document.getElementById("column-one").scrollTop < (document.getElementById("column-one").scrollHeight - document.getElementById("column-one").offsetHeight)) {
    +1
    document.getElementById("column-one").scrollTop = document.getElementById("column-one").scrollTop + 1
  }
  else { document.getElementById("column-one").scrollTop = 0; }
}
setInterval(ScrollColumn1, 10)


function ScrollColumn2() {
  if (document.getElementById("column-two").scrollTop < (document.getElementById("column-two").scrollHeight - document.getElementById("column-two").offsetHeight)) {
    +1
    document.getElementById("column-two").scrollTop = document.getElementById("column-two").scrollTop + 1
  }
  else { document.getElementById("column-two").scrollTop = 0; }
}
setInterval(ScrollColumn2, 15)

function ScrollColumn3() {
  if (document.getElementById("column-three").scrollTop < (document.getElementById("column-three").scrollHeight - document.getElementById("column-three").offsetHeight)) {
    +1
    document.getElementById("column-three").scrollTop = document.getElementById("column-three").scrollTop + 1
  }
  else { document.getElementById("column-three").scrollTop = 0; }
}
setInterval(ScrollColumn3, 8)

function ScrollColumn4() {
  if (document.getElementById("column-four").scrollTop < (document.getElementById("column-four").scrollHeight - document.getElementById("column-four").offsetHeight)) {
    +1
    document.getElementById("column-four").scrollTop = document.getElementById("column-four").scrollTop + 1
  }
  else { document.getElementById("column-four").scrollTop = 0; }
}
setInterval(ScrollColumn4, 19)

