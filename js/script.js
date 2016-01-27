// JAVASCRIPT CLICK EXAMPLE:

// function sayHello() {
//   alert("hello");
// }

// document.getElementById("someId").onclick = function() {
//   alert("hello!");
// }

// JQUERY CLICK EXAMPLE:

// $("#someId").on("click", function() {
//   alert("clicked");
// });

// // TRIGGER EXAMPLE:

// $("#someId").on("bananas", function() {
//   // change from states to provinces or vice versa
//   alert("slakdfjalksdjaldskfjlkfasdjklfsda");
// });

// // when select field changes
// $("#someId").trigger("bananas");

function GetValue()
{
    var myarray= new Array("item1","item2","item3");
    
    var random = myarray[Math.floor(Math.random() * myarray.length)];

    var myarray2= new Array("itemA","itemB","itemC");
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random + " " + random2;
}

