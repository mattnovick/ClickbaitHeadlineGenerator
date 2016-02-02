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
    
    
    var random = myarray[Math.floor(Math.random() * myarray.length)];

    var myarray2= new Array("itemA","itemB","itemC");
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
    //alert(random);

    var generated= random + " " + random2
    document.getElementById("message").innerHTML=generated;
}


function GetValue_Lists()
{
    var myarray= new Array("27","9","10", "5", "14");
    var random = myarray[Math.floor(Math.random() * myarray.length)];

    var myarray2= new Array("Things","Pictures of Fat Guys","Gender-Bending Squirrels", "Freshmen Truths", "Mugshots of Former Reality Stars", "Flashback pics of 90s Sitcom Stars");
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];

    var myarray3= new Array("that will Sexually Awaken You","that will give you the courage to move on","that will restore your faith in humanity", "that will show you how good you've got it", "that will prove human inteligence is a myth", "that will make you open the window and think about jumping out right now");
    var random3 = myarray3[Math.floor(Math.random() * myarray3.length)];

    var generated= random + " " + random2 + " " + random3
    document.getElementById("message").innerHTML=generated;
}






function setPhrase(phrase) {
  var url = 'https://twitter.com/intent/tweet?text=' + "I want to put my generated text here" + '&source=webclient';
  $('#message2').html('<a href="' + url + '">' + "Share!" + '</a>');
}

// + encode(message)

