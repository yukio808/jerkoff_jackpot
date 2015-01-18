<!DOCTYPE html>
<html>
<head>
<style type="text/css">
div.slot{
  float:left;
  width:32px;
  background:#F5F5F5;
  border:#999 1px solid;
  padding:10px;
  font-size:24px;
  text-align:center;
  margin:5px;
}
</style>
<script>
  

function jackPot(){
    var myArray1 = ["Yes", "no", "maybe?"];
    var myArray2 = ["Bum", "Slum", "dumb"];
    var myArray3 = ["Silence", "Quiet", "Shut up!"];
  
    var message1 = document.getElementById("message1");
    var message2 = document.getElementById("message2");
    var message3 = document.getElementById("message3");  

    var mess1 = myArray1[Math.floor(Math.random() * myArray1.length)];
    var mess2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    var mess3 = myArray3[Math.floor(Math.random() * myArray3.length)];
  

    slot1.innerHTML = mess1;
    slot2.innerHTML = mess2;
    slot3.innerHTML = mess3;
}
</script>
</head>
<body>
<div id="slot1" class="slot">0</div>
<div id="slot2" class="slot">0</div>
<div id="slot3" class="slot">0</div>
<button onclick="jackPot()">Touch me here</button>

</body>
</html>
