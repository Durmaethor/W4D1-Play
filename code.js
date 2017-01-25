function sayHi() {
    alert("Hi");
}

setInterval(sayHi, 3000);


/* ------------------------------------
        Callback functions
------------------------------------- */



function forEach(myList, myCallback) {  //defining the function
    for (var i = 0; i < myList.length; i++) { //looping through the array
        myCallback(myList[i]);  //adding the looped numbers to the callback function to write to the console
    }
}

function ([1,2,3,4,5], function(el) { //calling the function, passing in as arguments the array and another function
    document.writeln(el);
})



//Example 

function alertSomething(callback) {
    alert(callback());
}

alertSomething(function()) {
    return 'Hello';
}

