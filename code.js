function sayHi() {
    alert("Hi");
}

setInterval(sayHi, 3000);





var myList = [1,2,3,4,5];

function forEach(list, callback) {

}

function (myList, function(el) {
    alert(el);
})



//Example 

function alertSomething(callback) {
    alert(callback());
}

alertSomething(function()) {
    return 'Hello';
}

