function ScrollColumn1() {
  if (document.getElementById("column_1").scrollTop < (document.getElementById("column_1").scrollHeight - document.getElementById("column_1").offsetHeight)) {
    +1
    document.getElementById("column_1").scrollTop = document.getElementById("column_1").scrollTop + 1
  }
  else { document.getElementById("column_1").scrollTop = 0; }
}
setInterval(ScrollColumn1, 10)

function ScrollColumn2() {
    if (document.getElementById("column_2").scrollTop < (document.getElementById("column_2").scrollHeight - document.getElementById("column_2").offsetHeight)) {
      +1
      document.getElementById("column_2").scrollTop = document.getElementById("column_2").scrollTop + 1
    }
    else { document.getElementById("column_2").scrollTop = 0; }
  }
  setInterval(ScrollColumn2, 7)

  function ScrollColumn3() {
    if (document.getElementById("column_3").scrollTop < (document.getElementById("column_3").scrollHeight - document.getElementById("column_3").offsetHeight)) {
      +1
      document.getElementById("column_3").scrollTop = document.getElementById("column_3").scrollTop + 1
    }
    else { document.getElementById("column_3").scrollTop = 0; }
  }
  setInterval(ScrollColumn3, 5)

  function ScrollColumn4() {
    if (document.getElementById("column_4").scrollTop < (document.getElementById("column_4").scrollHeight - document.getElementById("column_4").offsetHeight)) {
      +1
      document.getElementById("column_4").scrollTop = document.getElementById("column_4").scrollTop + 1
    }
    else { document.getElementById("column_4").scrollTop = 0; }
  }
  setInterval(ScrollColumn4, 3)

  function ScrollColumn5() {
    if (document.getElementById("column_5").scrollTop < (document.getElementById("column_5").scrollHeight - document.getElementById("column_5").offsetHeight)) {
      +1
      document.getElementById("column_5").scrollTop = document.getElementById("column_5").scrollTop + 1
    }
    else { document.getElementById("column_5").scrollTop = 0; }
  }
  setInterval(ScrollColumn5, 6)
