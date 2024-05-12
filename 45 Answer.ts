// ANSWER 1 FOR INSTALLATION

// ANSWER 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
let message:string=("Hellow,Eric");
console.log((message),'would you like to learn some Python today?');

// ANSWER 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personname = ('Syed Muhammad Salman');
console.log(personname.toLowerCase());
console.log(personname.toLocaleUpperCase());
console.log(personname.slice(0));

// ANSWER 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Should I use single or double quotes in Typescript?
// There is no particular standard to use single quotes for characters and double quotes for string but it is suggested to use double quotes for strings and vice versa. From the docs: Just like JavaScript, TypeScript also uses the double quote (") or single quote (') to surround string data.22-Aug-2014
// // Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote:string=("'Life is what happens when you're busy making other plans.'");
let author:string=("Author of this sentance'John Lennon!'");
console.log(quote);
console.log(author);


// ANSWER 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let quote: string = "'A person who never made a mistake never tried anything new.'";
let message: string = `${famous_person} once said: ${quote}`;
console.log(message);

// ANSWER 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// What is trim () in TypeScript?
// The trim() method removes whitespace from both sides of a string.
// \n use for line space
// \t use words space

let personnames:string="\t syed muhammad salman \n";
console.log('Name with whitespace',personnames);

let stripings:string=personnames.trim();
console.log('Name without whitespace',stripings);

// ANSWER 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let additions:number=(5+3);
console.log(additions);

let subtractions:number=(11-3);
console.log(subtractions);

let multiplications:number=(2*4);
console.log(multiplications);

let divisions:number=(64/8);
console.log(divisions);

// ANSWER 8
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log('addition',5+3);
console.log('subtraction',11-3);
console.log('multiplication',4*2);
console.log('division',64/8);

// ANSWER 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let messages:number=(5);
console.log('my favorite number is',messages);

// ANSWER 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// program name is java developer
let firstprogram:string=('i AM A JAVA DEVELOPER');
console.log(firstprogram);
// // number
let number=(123456789);
console.log(number);

// ANSWER 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Define the array of names
let names: string[] = ["salman", "mushtaq", "ayesha", "umar", "hussain"];

// // Print each person's name by accessing each element in the list, one at a time
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// ANSWER 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["salman", "mushtaq", "ayesha", "umar", "hussain"];
let message:string='good morning';
 for (let i = 0; i < names.length; i++) {
    console.log(message+'\t'+names[i]);
}

// ANSWER 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string [] = ['bike','honda car','vigo car'];
 for (let i = 0; i < transportation.length; i++) {
    console.log('i like',transportation[i]);
}

// ANSWER 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_lists: string[] = ['salman', 'umar', 'ayesha'];

for (let i = 0; i < guest_lists.length; i++) {
    console.log('YOU INVITE A DINNER',guest_lists[i]);
}

// ANSWER 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guests:string[] = ["salman", "umar", "hussain"];
guests.forEach(guests => {
    console.log(`hi dear.${guests}'you are invite a dinner`);

});
let not_attend:string=('salman');
let new_invite:string=('eshal');
guests[0]= new_invite;
guests.forEach(guests => {
    console.log(`hi dear.${guests}'you are invite a dinner`);

});
console.log(not_attend,' ' ,'is not attend a dinner');

// ANSWER 16
// // ame of the new person you are inviting.

// // • Print a second set of invitation messages, one for each person who is still in your list.

// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// // • Add one new guest to the beginning of your array.

// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//1) The unshift() method adds new elements to the beginning of an array.
// 2)The splice() method adds and/or removes array elements.
// 3)The push() method adds new items to the end of an array.

// The push() method changes the length of the array.
let guestss:string[] = ["salman", "umar", "hussain"];

The push() method returns the new length.
let not_attends:string=('salman');
let new_invites:string=('eshal');
guestss[0]= new_invites;
guestss.forEach(guests => {
    console.log(`hi dear.${guests}'you are invite a dinner`);

});
console.log(not_attends,' ' ,'is not attend a dinner');
console.log( 'we find big table i invite three new guest' );
guestss.unshift('ayesha');
guestss.splice(2,0,'roshan');
guestss.push('syed');
guestss.forEach(guests => {
    console.log(`hi dear.${guests}'you are invite a dinner`);

});

// ANSWER 17
// // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// // The "جب تک لوپ" (while loop) is often used when we need to perform a specific task a certain number of times, and we don't know how many times that task needs to be performed in advance.
// // 'pop' use remove last element from the a array

let guests:string[] = ["salman", "umar", "hussain"];
let not_attend:string=('salman');
let new_invite:string=('eshal');
guests[0]= new_invite;
guests.unshift('ayesha');
console.log(`\n i have not arrange a big table.`);
while(guests.length>2){
    let remove_guest=guests.pop()
    console.log(`sorry guest ${remove_guest} you are not invited a dinner`);

}
guests.forEach(guest => {
    console.log(`hi dear.${guest}'\nyou are invite a dinner`);

});
guests.splice(0,2);
console.log(guests);

// ANSWER 18
// // Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.

// // • Print your array in its original order.

// // • Print your array in alphabetical order without modifying the actual list.

// // • Show that your array is still in its original order by printing it.

// // • Print your array in reverse alphabetical order without changing the order of the original list.

// // • Show that your array is still in its original order by printing it again.

// // • Reverse the order of your list. Print the array to show that its order has changed.

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let bests_place:string[]=['karachi','lahore','multan'];
console.log(bests_place);

console.log([...bests_place].sort());

console.log(bests_place);


console.log([...bests_place].sort().reverse());

console.log(bests_place);

console.log(bests_place.reverse());

// ANSWER 19
// // Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let dinnerGuests: string[] = ["salman", "umer", "max"]; // List of dinner guests

// Print the number of people invited to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);

// ANSWER 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Creating an array of programming languages
let programmingLanguages: string[] = ["JavaScript", "Python", "Java", "C++", "C#", "TypeScript", "Ruby", "Swift", "Go", "PHP"];

// Printing the array
console.log("List of programming languages:");
programmingLanguages.forEach(language => {
    console.log(language);
});

// ANSWER 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let countries = [
    {
        name: "USA",
        capital: "Washington, D.C.",
        population: 331000000,
        language: "English"
    }]
console.log(countries);

// ANSWER 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let error:string[]=['salman,umar,kanwal'];
console.log(error[4]);
console.log(error);

// ANSWER 23

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Test 1
let number = 5;
console.log("Is number == 5? I predict True.");
console.log(number == 5);

// Test 2
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

// Test 3
let x = 10;
let y = 5;
console.log("Is x > y? I predict True.");
console.log(x > y);

// Test 4
let language = 'JavaScript';
console.log("Is language !== 'Python'? I predict True.");
console.log(language !== 'Python');

// Test 5
let isSunny = true;
console.log("Is it sunny? I predict True.");
console.log(isSunny);

// Test 6
let month = 'April';
console.log("Is month == 'March'? I predict False.");
console.log(month == 'March');

// Test 7
let temperature = 25;
console.log("Is temperature < 20? I predict False.");
console.log(temperature < 20);

// Test 8
let isRaining = false;
console.log("Is it raining? I predict False.");
console.log(isRaining);

// Test 9
let animal = 'cat';
console.log("Is animal == 'dog'? I predict False.");
console.log(animal == 'dog');

// Test 10
let isEvening = false;
console.log("Is it evening? I predict False.");
console.log(isEvening);

// ANSWER 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Tests for equality and inequality with strings
let city1 = 'New York';
let city2 = 'Los Angeles';
console.log("Is city1 equal to city2? I predict False.");
console.log(city1 == city2);

let country1 = 'USA';
let country2 = 'USA';
console.log("Is country1 not equal to country2? I predict False.");
console.log(country1 != country2);

// Tests using the lowercase function
let word1 = 'HELLO';
let word2 = 'hello';
console.log("Are word1 and word2 equal when converted to lowercase? I predict True.");
console.log(word1.toLowerCase() == word2.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less
// than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let isMorning = true;
let isWeekend = false;
console.log("Is it morning and not weekend? I predict false.");
console.log(isMorning && isWeekend);

let today_rain = true;
let tommorow_rain=  false;
console.log('today rain predic =true');
console.log(today_rain || tommorow_rain);

// Test whether an item is in an array
let numbers=[1,2,3,4,5];
let string=(true);
console.log(numbers,);
console.log('3 is also include in this array?i predic true',(string))

console.log('6 is also include in this array?i predic false',(!string))

// ANSWER 25

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
let alien_colour: string = 'red';

if (alien_colour === 'green') {
    console.log("Player just earned 5 points.");
}

// ANSWER 26

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    console.log("Player just earned 10 points.");
}

if (alien_color === "red") {
    console.log("You just earned 5 points for shooting the green alien.");
} else {
    console.log("Player just earned 10 points.");
}

// ANSWER 27

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// // • If the alien is green, print a message that the player earned 5 points.

// // • If the alien is yellow, print a message that the player earned 10 points.

// // • If the alien is red, print a message that the player earned 15 points.

// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let aliensColor: string = "green";

if (aliensColor === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} else if (aliensColor === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
} else if (aliensColor === "red") {
    console.log("You just earned 15 points for shooting the red alien.");
}

const alienColors: string = "yellow";

if (alienColors === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} else if (alienColors === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
} else if (alienColors === "red") {
    console.log("You just earned 15 points for shooting the red alien.");
}
const alienColor: string = "red";

if (alienColor === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
} else if (alienColor === "red") {
    console.log("You just earned 15 points for shooting the red alien.");
}

// ANSWER 28

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// // • If the person is less than 2 years old, print a message that the person is a baby.

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// // • If the person is age 65 or older, print a message that the person is an elder.

let age: number = 2; // You can set the age here

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// ANSWER 29

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.

// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruits:String[]=['apple','orange','banana','mango','nashpati'];
if(fruits){
    console.log('my favorite is apple')
};
if(fruits){
    console.log('my favorite is orange')
};
if(fruits){
    console.log('my favorite is banana')
};
if(fruits){
    console.log('my favorite is mango')
};
if(fruits){
    console.log('my favorite is nashpati')
};
if(fruits){
    console.log('my favorite is strawberry')
};

// ANSWER 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames: string[] = ['admin', 'eric', 'john', 'jane', 'alice'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//  ANSWER 31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed.

// // Creating an array of users
let users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Printing the array
    console.log("List of users:");
    users.forEach(user => {
        console.log(user);
    });

    // Remove all usernames from the array
    users = [];
    console.log("After removing all usernames:");
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
}

// ANSWER 32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let current_users: string[] = ['john', 'mary', 'jane', 'alex', 'sarah'];
let new_users: string[] = ['John', 'emma', 'peter', 'Alex', 'sarah'];
new_users.forEach((new_users) =>{
    if(
        current_users.some(
            (current_users=>current_users===new_users)
        )
    ){console.log(`${new_users} will need to enter new user`);
}
else{
    console.log(`${new_users} is available`)
}
});

// ANSWER 33

// // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// // • Store the numbers 1 through 9 in a array.

// // • Loop through the array.

// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// // Array containing numbers 1 through 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let num of numbers) {
    let ordinal: string;
    
    // Use an if-else chain to determine the proper ordinal ending
    if (num === 1) {
        ordinal = "st";
    } else if (num === 2) {
        ordinal = "nd";
    } else if (num === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    // Print the result
    console.log(`${num}${ordinal}`);
}

// ANSWER 34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// // Array of favorite pizzas
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print each pizza name
for (let pizza of favoritePizzas) {
    console.log(`i like ${pizza} pizza`);
};
console.log( `I really love pizza!`);

ANSWER 35

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print out the name of each animal
console.log("Names of the animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be a loving companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is an adorable and playful pet.");
            break;
        default:
            console.log("This animal is not recognized.");
            break;
    }
}

// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");


 ANSWER 36

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, text: string){
    console.log(`Creating a ${size} shirt with the message: "${text}"`);
}

// Example usage
make_shirt("medium", "Hello, World!");

//  ANSWER 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size: string, text: string){
    console.log(`Creating a ${size} shirt with the message: "${text}"`);
};
make_shirts(`large`,`i love typescript`);
make_shirts(`medium`,`i love PYTHON`);
make_shirts(`small`,`i love C++`);

// ANSWER 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = "Unknown"){
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo");

//  ANSWER 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// // "Lahore, Pakistan"

// // Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: string, country: string){
    return (`${city}, ${country}`);
}

// Calling the function with three different city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));

//  ANSWER 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function makeAlbum(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    return album;
}

let album1 = makeAlbum("Atif Aslam", "Hum Kis Gali Ja Rahe Hain");
let album2 = makeAlbum("Ali Zafar", "Laila O Laila", 12);
let album3 = makeAlbum("Junaid Jamshed", "Dil Dil Pakistan");

console.log(album1);
console.log(album2);
console.log(album3);

// ANSWER 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];
function showMagicians(magicians: string[]){
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
showMagicians(magicians);

// ANSWER 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// // Define a Magician type

// // Define a Magician type

// // Define an array of magicians
let magicians:string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette'];

// Function to make magicians great
function makeGreats(magicians: string[]){
    magicians.forEach((magician) => {
        `the Great ${magician}`;
    });
}

// Function to display magicians
function showMagician(magicians: string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call makeGreat function to modify the array
makeGreats(magicians);

// Call showMagicians function to display modified array
showMagician(magicians);

// ANSWER 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// // Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = magicians.map(name => "the Great " + name);
    return greatMagicians;
}

// Function to display magicians' names
function showMagicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// Original array of magician names
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

// Copy the original array
let originalMagicians: string[] = magicians.slice();

// Call makeGreat() with a copy of the array
let greatMagicians: string[] = makeGreat(magicians.slice());

// Display original magicians
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Display magicians with "the Great"
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

//  ANSWER 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]){
        console.log("Making sandwich with the following items:");
        items.forEach(item => console.log("- " + item));
        console.log("Sandwich is ready!\n");
    }
    
    // Call the function three times with different numbers of arguments
    makeSandwich("Ham", "Cheese", "Lettuce");
    makeSandwich("Turkey", "Swiss cheese", "Tomato", "Mustard");
    makeSandwich("Tuna", "Mayonnaise");

    // ANSWER 45
    
    // Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName,...options) {
    let car = {manufacturer: manufacturer,modelName: modelName};
  // Assign additional options to the car object
  for (let i = 0; i < options.length; i += 2) {
    let key = options[i];
    let value = options[i + 1];
    car[key] = value;
}

return car;
}
// Call the function with required information and additional options
let myCar = createCar("Toyota", "Corolla", "color", "blue", "year", 2022);

// Print the object returned by the function
console.log(myCar);



















