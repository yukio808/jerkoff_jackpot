function jackPot(){
    
    //sets of strings organized within arrays
    var myArray1 = ["annually", "daily", "firmly", "underground", "always", 
    "before", "certain", "fast", "hard", "so"];
    
    var myArray2 = ["large", "fresh", "bitchin\'", "damned", "sexy",
    "wee", "wonky", "bullshit", "mothafuckin\'", "horny"];
    
    var myArray3 = ["ass", "whooping", "cap\'n", "matey", "samurai", 
    "douchebagery", "fucker", "stripper heels", "fuck up", "ninja", "laser beams"];
    
    //sets the variables to the html element id to the javascript element
    var message1 = document.getElementById("message1");
    
    var message2 = document.getElementById("message2");
    
    var message3 = document.getElementById("message3");  

    //Randomized strings within the arrays 
    var mess1 = myArray1[Math.floor(Math.random() * myArray1.length)];
    
    var mess2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    
    var mess3 = myArray3[Math.floor(Math.random() * myArray3.length)];
  
    //prints options to html
    slot1.innerHTML = mess1;
    
    slot2.innerHTML = mess2;
    
    slot3.innerHTML = mess3;
}

