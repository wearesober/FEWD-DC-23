![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 10

## Review (and a bit about functions)

---

## Agenda

* Review
* Functions
* Lab

---

## Let's Review Everything We've Done So Far

![](../../img/unit_1/its_gonna_be_hard.jpg)

---

## What have we learned?

* HTML
* CSS
* Javascript
* jQuery

---

## Javascript vs. jQuery

Javascript __is__ jQuery

Anything you can do in jQuery, you can do in plain old Javascript.. but it's harder.

We are using jQuery to make our code simpler.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## Temperature Converter

---

## How do I do this?

1. Figure out our goal.
2. Write pseudo-code.
3. Write the HTML.
4. Write the Javascript.
5. Write the CSS.

---

## Document Ready

* jQuery function that wraps around all of the rest of your jQuery code
* Makes sure your jQuery does not run until after your webpage has completely loaded

```
$(document).ready(function() {
   // ALL of your jQuery code goes here! 
});
```

---

## event.preventDefault();

* Use in the functions you call in event handlers to prevent the default action.
* Example: For links, __default__ = going to another page

```
$('#clickMe').click(myFunction);

function myFunction() {
    event.preventDefault();
    // Other stuff goes here
}
```

---

## Functions

__Functions__ are chunks of code that accomplish a specific task.

---

## Functions Syntax

![](../../img/unit_2/functions_syntax.png)

---

## Function Calls

![](../../img/unit_2/function_calls.png)

---

## Function Arguments

![](../../img/unit_2/argument_syntax.png)

---

## Function Arguments

![](../../img/unit_2/function_call_argument.png)

---

## Function Returns

```
function addThings(val1, val2) {
    var sum = val1 + val2;
    return sum;
}

var newNumber = addThings(1, 2);  // newNumber = 3
```

---

## Organizing Function 

Where do you put functions?

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Cash Register

---

## Anonymous Functions

Functions with no name.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Anonymous Cash Register

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Temp Converter... part 2
