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




// BASE FORMULA
// function GetValue()
// {
    
//     var myarray= new Array("item1","item2","item3");
//     var random = myarray[Math.floor(Math.random() * myarray.length)];

//     var myarray2= new Array("itemA","itemB","itemC");
//     var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
//     //alert(random);

//     var generated= random + " " + random2
//     document.getElementById("message").innerHTML=generated;
// }









function GetValue_Lists()
{
	var myarray3= new Array("27","9","10", "5", "14");
	var myarray4= new Array("Things","Pictures of Fat Guys","Gender-Bending Squirrels", "Freshmen Truths", "Mugshots of Former Reality Stars", "Flashback pics of 90s Sitcom Stars");
	var myarray5= new Array("That Will Sexually Awaken You","That Will Give You the Courage to Move On","That Will Restore Your Faith in Humanity", "That Will Show You How Good You've Got It", "That Will Prove Human Inteligence is a Myth", "That Will Make You Open the Window and Think About Jumping Out Right Now");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
	var random3 = myarray5[Math.floor(Math.random() * myarray5.length)];
    var generated= random + " " + random2 + " " + random3
    
    document.getElementById("messagelists").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + '&source=webclient';
    $('.messagelists2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};



function GetValue_Feels()
{
	var myarray3= new Array("27","9","10", "5", "14");
	var myarray4= new Array("Things","Fashion Statements", "Memories");
	var myarray5= new Array("Dogs", "Parents", "Babies");
	var myarray6= new Array("Should Never Apologize For", "Need to be Aware of", "Should Appreciate More");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
	var random3 = myarray5[Math.floor(Math.random() * myarray5.length)];
	var random4 = myarray6[Math.floor(Math.random() * myarray6.length)];
    var generated= random + " " + random2 + " " + random3 + " " + random4
    
    document.getElementById("messagefeels").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + '&source=webclient';
    $('.messagefeels2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};

function GetValue_Nothing()
{
	var myarray3= new Array("Teachers","Movie Theater Popcorn Makers","Cats", "Therapists", "Taylor Swift", "Your Mom");
	var myarray4= new Array("See These CVS Receipts","See These Pictures", "See These Trippy Paintings", "Read the Constitution", "Hear What Oprah Knows");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
    var generated= "You'll Never See " + random + " The Same After You " + random2
    
    document.getElementById("messagenothing").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + '&source=webclient';
    $('.messagenothing2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};




