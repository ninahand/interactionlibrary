function ScrollColumn1() {
  var columnOne = document.getElementById("column_1");
  if (columnOne.scrollTop < (columnOne.scrollHeight - columnOne.offsetHeight)) {
      columnOne.scrollTop += 1;
  } else {
      var clone = columnOne.cloneNode(true); 
      columnOne.appendChild(clone);
  }
}
setInterval(ScrollColumn1, 10);


function ScrollColumn2() {
  var columnOne = document.getElementById("column_2");
  if (columnOne.scrollTop < (columnOne.scrollHeight - columnOne.offsetHeight)) {
      columnOne.scrollTop += 1;
  } else {
      var clone = columnOne.cloneNode(true); 
      columnOne.appendChild(clone);
  }
}
setInterval(ScrollColumn2, 8);

function ScrollColumn3() {
  var columnOne = document.getElementById("column_3");
  if (columnOne.scrollTop < (columnOne.scrollHeight - columnOne.offsetHeight)) {
      columnOne.scrollTop += 1;
  } else {
      var clone = columnOne.cloneNode(true); 
      columnOne.appendChild(clone);
  }
}
setInterval(ScrollColumn3, 12);


function ScrollColumn4() {
  var columnOne = document.getElementById("column_4");
  if (columnOne.scrollTop < (columnOne.scrollHeight - columnOne.offsetHeight)) {
      columnOne.scrollTop += 1;
  } else {
      var clone = columnOne.cloneNode(true); 
      columnOne.appendChild(clone);
  }
}
setInterval(ScrollColumn4, 10);

function ScrollColumn5() {
  var columnOne = document.getElementById("column_5");
  if (columnOne.scrollTop < (columnOne.scrollHeight - columnOne.offsetHeight)) {
      columnOne.scrollTop += 1;
  } else {
      var clone = columnOne.cloneNode(true); 
      columnOne.appendChild(clone);
  }
}
setInterval(ScrollColumn5, 8);
