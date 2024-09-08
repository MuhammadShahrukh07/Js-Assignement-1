           //   Assignment 1 (3) 

//1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to our website");

//2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy Coding!");
//4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding!\n Prevent this page from creating additional dialogs.");

//5. Generate the following message through browser’s developer console:
console.log("Hello... I can run JS through my web browser's console");

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)
//Ans) It works in the same way in all parts


                    //   Assignment 2 (3) 
//1. Declare a variable called username.
var userName;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Muhammad Shahrukh";

//3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.

var message;
message = "Hello World";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var fullName = "Jhone Doe";
var age = "15 years old";
var skill = "Certified Mobile Application Development";
alert(fullName);
alert(age);
alert(skill);

//5. Write a script to display the following alert using one JS variable:
var name = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email = "muhammadshahrukh268@gmail.com";
alert("My email address is"+ " "+ email);

//7.Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript.";
alert("I am trying to learn from the Book"+ " " +book);

//8. Write a script to display this in browser through JS
document.write("<p>Yah! I can write HTML content through JavaScript</p>");


                  // Assignment 3(3)
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 27;
alert("I am "+" "+age + " "+ "years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitor = 0;
alert("You have visited this site 14 times");

//3.Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1995;
document.write("My birthday year is"+" " +birthYear +"");
document.write("<p>Data type of my declared variable is number</p>");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name = "John Doe";
var product = "T-shirt(s)";
var quantity = 5;
document.write("<p>" + name + " " + ordered + " " + product + " on XYZ Clothing store.</p>");