function addnodisplay(value) {
    document.getElementById('display').value += value;
  }
  
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  }
  
function limpadisplay() {
    document.getElementById('display').value = '';
  }