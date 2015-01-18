function jackPot(){
    
    //sets of strings organized within arrays
    var myArray1 = ["annually", "daily", "firmly", "underground", "always", 
    "before", "certain", "fast", "hard", "so"];
<<<<<<< HEAD
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
=======
    
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
    
>>>>>>> 47fd83144dc619ac572796f47fd5db54fd585ece
    slot3.innerHTML = mess3;
    //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
}
<<<<<<< HEAD
</script>
</head>
<body>
<div id="slot1" class="slot">0</div>
//makes a div for info from slot 1
<div id="slot2" class="slot">0</div>
//makes a div for info from slot 2
<div id="slot3" class="slot">0</div>
//makes a div for info from slot 3
<button onclick="jackPot()">Touch me here</button>
//button function for activating a 
</body>
</html>
=======

>>>>>>> 47fd83144dc619ac572796f47fd5db54fd585ece
