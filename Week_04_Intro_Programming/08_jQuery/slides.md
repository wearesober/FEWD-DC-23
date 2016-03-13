![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 8

## Introduction to jQuery

---

## Agenda

*	Intro To Programming Review
*	jQuery Basics
*	Adding Interactivity

Note:
Learning Objectives

Differentiate between jQuery and JavaScript, describe benefits of using them.

Recognize jQuery syntax

Use selectors and jQuery functions to effectively manipulate the DOM.

---

## Intro To Programming Review

Note:
Syntax can always be looked up.

Programming is about solving problems.

---

## What is jQuery

jQuery __is__ Javascript

---

## What is jQuery

jQuery is a __cross-browser__ JavaScript library designed to simplify the client-side scripting of HTML.

*  "Cross browser" - works the same in all browsers. 

---

## What is jQuery

*	jquery.com

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

Note:
https://jquery.com/

---

## jQuery Script Tags

* Adding the file.
    * &lt;script src="js/jquery-1.8.3.min.js"&gt;&lt;/script&gt;

* CDN
    * &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"&gt;&lt;/script>


---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## jQuery Traffic Light

---

## Syntax

__Syntax:__ Spelling and grammar rules of a programming language. 


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.

---

## Javascript Syntax - Punctuation

*	Semicolon
*	Brackets
*	Parentheses
*	Quotation Marks

---

##JavaScript Syntax - Comments

	//Single Line Comments

	/* Multi line comments /*

---


##jQuery Syntax

$

The Dollar Sign

---

## jQuery Syntax - Selectors

Selectors are just like CSS

	$(".class").click();

---

##jQuery Syntax - Example

```
document.getElementById('thingy').onclick = doSomething;

function doSomething() {
	// make something happen here
}
```

In jQuery, this might look more like:

```
$('selector').click(doSomething);

function doSomething() {
	// make something happen here
}
```	
   	
Note: 
We will certainly be discussing this in more detail, but in general jQuery let’s us grab some element from the page ($('selector')), and do something with it ($('selector').click(doSomething);). In this case, we grabbed an element with the id thingy and used .click() to make a function run when the user clicks on #thingy.

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Syntax Drill  

Note:
http://codepen.io/anon/pen/Govdrx

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Interactivity - FAQ

Note:
http://codepen.io/anon/pen/MKvGEY?editors=101
