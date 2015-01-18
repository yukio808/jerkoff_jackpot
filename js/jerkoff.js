function jackPot(){
    
    //sets of strings organized within arrays
    var myArray1 = ["annually", "daily", "firmly", "underground", "always", 
    "before", "certain", "fast", "hard", "so"];
    // array for adverb words
    var myArray2 = ["large", "fresh", "bitchin\'", "damned", "sexy",
    "wee", "wonky", "bullshit", "mothafuckin\'", "horny"];
    // array fro adj words
    var myArray3 = ["ass", "whooping", "cap\'n", "matey", "samurai", 
    "douchebagery", "fucker", "stripper heels", "fuck up", "ninja", "laser beams"];
    // array for nouns
    var message1 = document.getElementById("message1");
    // gets elements by id
    var message2 = document.getElementById("message2");
    // gets elements by id
    var message3 = document.getElementById("message3");  
    // gets elements by id
    var mess1 = myArray1[Math.floor(Math.random() * myArray1.length)];
    //takes a object in the array tht has been randomly selected from the myArray1
    var mess2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    //takes a object in the array tht has been randomly selected from the myArray2
    var mess3 = myArray3[Math.floor(Math.random() * myArray3.length)];
    //takes a object in the array tht has been randomly selected from the myArray1

    slot1.innerHTML = mess1;
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    slot2.innerHTML = mess2;
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    slot3.innerHTML = mess3;
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
}
