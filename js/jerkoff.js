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
}
