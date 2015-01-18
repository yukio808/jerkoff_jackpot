<<<<<<< HEAD
function jackpot(str){
    // acceses slot1
    /*var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");
    var status = document.getElementById("status");*/
    var s1 = (
        "annually",
        "daily",
        "firmly",
        "underground",
        "always",
        "before",
        "certain",
        "fast",
        "hard",
        "so");
    var s2 = (
        "large",
        "fresh",
        "bitchin\'",
        "damned",
        "sexy",
        "wee",
        "wonky",
        "bullshit",
        "mothafuckin\'",
        "horny");
    var s3 = (
        "ass",
        "whooping",
        "cap\'n",
        "matey",
        "samurai",
        "douchebagery",
        "fucker",
        "stripper heels",
        "fuck up",
        "ninja",
        "laser beams");
        
    var diceTotal = d1 + d2 + d3;
    slot1.innerHTML = s1;
    slot2.innerHTML = s2;
    slot3.innerHTML = s3;
    status.innerHTML = diceTotal;
=======
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
>>>>>>> 76a92049e702a2d2315709fa8be8a07b093881c0
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
