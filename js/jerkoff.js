function jackpot(){
    var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");
    var status = document.getElementById("status");
    var s1 = ([]);
    var s2 = ([]);
    var s3 = ([]);
    var diceTotal = d1 + d2 + d3;
    slot1.innerHTML = d1;
    slot2.innerHTML = d2;
    slot3.innerHTML = d3;
    status.innerHTML = "You rolled "+diceTotal+".";
}
