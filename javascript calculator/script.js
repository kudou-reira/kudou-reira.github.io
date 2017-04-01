var box = document.getElementById('display');

function show(data){
  box.value += data;
  
  if(data === 'C'){
    box.value = '';
  }
} 
  
function equal(){
  data = box.value;
  data = eval(data);
  box.value = data;
}

function redo(){
  var hold = box.value;
  var size = hold.length-1;
  var newLength = hold.substring(0, size);
  box.value = newLength;
}
  
 
