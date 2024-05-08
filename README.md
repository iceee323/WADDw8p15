# Practical 15 (week 8, practical 1): Working with Data

The aim of this practical is to familiarize yourself with JavaScript objects and classes. This practical contains three exercises, which draw quite heavily on your existing programming knowledge from prior modules and your knowledge of JavaScript from Week 7. If you haven't completed the Week 7 practicals yet, finish those activities before attempting these exercises.

## Exercise 1: Changing Themes
Web applications sometimes allow users to change themes, where a theme is a preferred colour scheme, fonts etc. For this exercise, you will write some JavaScript to enable a user to select from a collection of pre-defined themes. Watch the video illustrating the behaviour before beginning. The video is in the video-output folder in this repo.

Create a simple webpage that has some filler text e.g. a heading and a few paragraphs of [lorem ipsum](https://loremipsum.io/generator/).

Create a JavaScript file and link it to your HTML file by adding a `<script>` element at the end of the `<body>` element.

Using either object literals or an object constructor function, create objects that store properties for 3-5 different themes. At a minimum, each theme should have properties storing a background colour, a text colour, and a font family. 

Add radio buttons that allow the user to switch between your themes. When a new theme is selected, use JavaScript to select the appropriate element or elements and apply the styles from the theme.

**Object literal or object constructor function?**
Either option works. Here are some points to think about:
- Object constructor functions save you from repeating code. If all your themes store information about the same properties, an object constructor function is the better choice.
- If each object will have completely different properties, then an object literal would be appropriate as using a constructor function won't provide any efficiency.
- If your themes share some properties but also have some differences, an object constructor function may still be the best choice. Remember that JS allows you to add properties to individual objects after they are created.

## Exercise 2: Maths Tutor 
Run maths-tutor/index.html using Live Preview. Then, watch the video of the completed application that was included in the materials you downloaded for this practical. 

The purpose of this webpage is to help school pupils to practice their addition, subtraction, multiplication, and division. At the moment, you're seeing placeholder text and behaviour but, if you take a look at main.js, you'll see that a lot of the JS has already been written. The only thing that's missing is a `Question` object (or class) that contains information and behaviour for a randomly generated maths question. 

**At the top of main.js, create a new object called `Question`** using any of the approaches shown in lecture: an object literal, an object constructor function, or a class. You will need to generate lots of `Questions`, so an object literal is not the recommended approach (although it can work). I used a class in my solution.

Each `Question` should randomly generate a basic maths question with the format:

```
firstNumber operator secondNumber
```

…where `firstNumber` and `secondNumber` are randomly generated integers between 1 and 10 (inclusive), and `operator` is a randomly selected arithmetic operator—one of +, -, *, or /.

**You can decide what properties your Question object will need, but every Question must have the following methods,** which are called from the existing code:

- `getText()` – This method has no parameters. It returns a string with the format, "What is firstNumber operator secondNumber?" `firstNumber`, `operator`, and `secondNumber` should be replaced with the values randomly generated for the `Question`.
- `checkAnswer(answer)` – This method checks if the user's answer is correct. The method should return true if the answer is correct, and false otherwise. The existing code handles getting the answer from the input box and passing it to the method when the user presses "Check Answer". Implementing this functionality is trickier than it first appears!
- `getFeedbackForAnswer(answer)` – This method returns a randomly selected feedback string. You should have four possible feedback strings for correct answers, and another four for incorrect answers.

The JavaScript syntax needed for this exercise is quite simple, but you will need to apply your coding knowledge from previous modules to get this to work!

### Suggested steps

1.	Create a basic object constructor function or class called `Question`. Don't worry about properties for now. Add the required methods and make sure they return *something* of the right type. The returned values don't have to be correct yet e.g. `getText()` can just return any string, rather than a random question. Check that the live preview shows the question text returned by `getText()` and that clicking "Check Answer" causes the string returned by `getFeedbackForAnswer()` to display. 

2.	Figure out how to randomly generate integers. JavaScript doesn't provide a built-in function to do this. You will find [this resource from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) helpful.

3.	Use your solution to step 2 to generate two random integers between 1 and 10 (inclusive) in your `Question` object—one number will be the first number in the question text, the other will be the second number in the question text. You may want to store these integers as properties in your `Question` object.

4.	Figure out how to randomly choose an operator (+, -, *, or /). One approach is to put the operators into an array as strings, then use your solution to step 2 to randomly choose an index in the array. You may want to store the chosen operator as a property in your `Question` object.

5.	You should now be able to update `getText()` so that it returns the randomly generated question text in the format, "What is firstNumber operator secondNumber?"

6.	Using the values randomly generated in steps 3 and 4, add some code that will work out the correct answer to the question. You will need to use a conditional (if statement or switch statement) to figure out the correct answer based on the chosen operator. You may want to store the correct answer as a property in your  `Question` object.

7.	Next, update `checkAnswer(answer)` so that it returns true if and only if `answer` is equal to the correct answer calculated in step 6. There are two key issues to tackle here: (1) `answer` is a string but the correct answer will be a number; and (2) comparing floats can be tricky (this comes into play when answering a division question). To address issue 1, you can convert a string to a number using [`parseFloat(stringToConvert)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat). To address issue 2, you can try rounding each number to 2 decimal places (Google this!) or you can try checking if the difference between the two numbers is within a certain tolerance e.g. 0.01 (Google this too!).

8.	Finally, update `getFeedbackForAnswer(answer)` so that it returns randomly selected appropriate feedback depending on the value returned by `checkAnswer(answer)`. Consider using two arrays of feedback messages—one for correct answers and one for incorrect answers—and using your solution to step 2 to pick a random index in the appropriate array.

## Exercise 3: Deck of Cards

When working with collections of objects in front end development, it is common to perform operations like sorting and filtering based on object properties. For example, when shopping online, you can often sort a category of products by price, or filter by product characteristics such as size or brand. For this exercise, you will write custom sorting and filter functions to organise an array of custom objects (playing cards) by certain properties (value and suit). There is a video showing a completed application in the materials downloaded for this practical.

Create a basic HTML file (follow the usual template but don't add any elements to the `<body>` yet), an empty CSS file, and an empty JS file. Connect the CSS and JS files to your HTML as usual.

In the materials for this practical, there is a folder called images, which contains images of all the playing cards in a standard deck. Move this folder into the same folder as the HTML, CSS, and JS files you just created.

In your JavaScript file, create an object that represents a single playing card. It should have three properties—the value (the number on the card, or equivalent value in the case of "face" cards); the suit (clubs, diamonds, hearts, or spades); and the path to the associated image file. You can use any approach to creating the object. I chose to use a class because I wanted to keep the properties private. The card image files follow a naming convention, so your object can automatically set the value of its image property using its value and suit properties. 

Next, create an array of card objects that represents a standard 52-card deck. Try to do this as simply as possible i.e., use a for loop, don't create each card manually. 

Check that your deck has been created correctly by using JavaScript to iterate through the array and display them in the HTML. A CSS grid approach to the layout is recommended so you can see the full deck at once. It is recommended that you put this code into a function as you will need to display the deck repeatedly in the finished application.

Somewhere on the page, add three buttons that will eventually allow you to shuffle the deck, sort by value, and sort by suit. Also add a `<select>` element that will allow you to filter the deck by suit.

Create a shuffle function that is called when the Shuffle button is clicked. This function should shuffle the array that represents the deck, then display the updated deck. JavaScript doesn't provide built-in array shuffling, but there is a simple algorithm you can implement—the Fisher-Yates algorithm. Try Googling "JavaScript array shuffle" and use the resources you find to implement your shuffle function.

Create two sorting functions that are called when the relevant button is clicked, and display the sorted deck. JavaScript does provide an array sorting method, [`arr.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), but it won't work for custom objects unless you pass it a custom function that explains how to sort the objects. Custom sorting functions always take two parameters and return:

- -1 if the first parameter is less than the second; 
- 0 if the two parameters are the equal;
- 1 if the first parameter is "greater than the second.

Here's an example. Imagine you want to sort an array, called `arr`, by a particular property, `customProperty`, of the objects it contains. Your sorting function might look like this:

```
function sortByCustomProperty(a, b) {
    if (a.customProperty < b.customProperty) {
        return -1;
    } else if (a.customProperty > b.customProperty) {
        return 1;
    }
    else {
        return 0;
    }
}
```

You can then sort the array by passing your custom sort function to the array sort method:

```
arr.sort(sortByCustomProperty);
```

Notice that no parameters have been passed to `sortByCustomProperty`—the sort method will handle this for you.

Use the above example to help you create custom sort functions for your deck.

Finally, create a function to filter the deck by suit (include an option to show all cards) when the selected option in the `<select>` changes. You can use a for loop to implement this, or you can explore using the [array `filter` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) (recommended).
