// NOTES NOTES NOTES
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



function GetValue_Feelings()
{
	var myarray3= new Array("27","9","10", "5", "14", "4, Maybe 5");
	var myarray4= new Array("Things","Pictures of Fat Firemen","Gender-Bending Dog Outfits", "Freshmen Truths", "Mugshots of Former Reality Stars", "Flashback pics of 90s Sitcom Stars", "Ghetto Sculptures", "Failed Attempts at the Water Condom Challenge", "Nearly Racist Halloween Costume Fails");
	var myarray5= new Array("That Will Sexually Awaken You","That Will Give You the Courage to Move On","That Will Restore Your Faith in Humanity", "That Will Show You How Good You've Got It", "That Will Prove Human Intelligence is a Myth", "That Will Make You Open the Window and Think About Jumping Out Right Now", "That Will Take Your Breath Away", "That Will Make You Question Your Religion", "That Will Give You Faith in Humanity All Over Again", "That Will Make You Take A Long Look in the Mirror");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
	var random3 = myarray5[Math.floor(Math.random() * myarray5.length)];
    var generated= random + " " + random2 + " " + random3
    
    document.getElementById("messagefeels").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + " --http://goo.gl/kPp3RO" + '&source=webclient';
    $('.messagefeels2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};



function GetValue_Lists()
{
	var myarray3= new Array("27","9","10", "5", "14", "11", "15");
	var myarray4= new Array("Things","Fashion Statements", "Memories", "Uncomfortable Truthes", "Questionable Selfies","90s Slang Words", "Painful Realities", "Fading Trends", "Lizards of New York");
	var myarray5= new Array("Dogs", "Parents", "Babies", "Your Grandparents", "College Bros", "Wine-Os", "Shake Shack Converts", "Your Ex", "Your Eyebrows", "Subway Riders", "People Who Were Born Before 2000");
	var myarray6= new Array("Should Never Apologize For", "Need to be Aware of", "Should Appreciate More", "Will Ultimately Have To Accept", "Need To Know In Order to Be Cool", "Will Remember Everyday Ever");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
	var random3 = myarray5[Math.floor(Math.random() * myarray5.length)];
	var random4 = myarray6[Math.floor(Math.random() * myarray6.length)];
    var generated= random + " " + random2 + " " + random3 + " " + random4
    
    document.getElementById("messagelists").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + " --http://goo.gl/kPp3RO" + '&source=webclient';
    $('.messagelists2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};

function GetValue_Nothing()
{
	var myarray3= new Array("Teachers","Theater Popcorn Makers","Cats", "Therapists", "Taylor Swift", "Your Mom", "Britney Spears", "Bronies", "Old People", "Bus Drivers", "TACOS");
	var myarray4= new Array("See These CVS Receipts","See These Pictures", "See These Trippy Paintings", "Learn What These Scientists Just Found Out", "Hear What Oprah Knows", "Learn What This Dog Just Did", "See This Hidden Video Footage", "See This Marking Found in a Cave");
	var random = myarray3[Math.floor(Math.random() * myarray3.length)];
	var random2 = myarray4[Math.floor(Math.random() * myarray4.length)];
    var generated= "You'll Never See " + random + " The Same After You " + random2
    
    document.getElementById("messagenothing").innerHTML=generated;

    var url = 'https://twitter.com/intent/tweet?text=' + generated + " --http://goo.gl/kPp3RO" + '&source=webclient';
    $('.messagenothing2').html('<a href="' + url + '"><img src="img/twitter-share-button.png">' + '</a>');
};




