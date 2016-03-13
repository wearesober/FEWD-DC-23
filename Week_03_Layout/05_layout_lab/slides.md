![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 5

## Layout

---

## Learning Objectives

* Apply floats and clearing techniques to effectively create a two column layout.

---

## Agenda

* Review
* More about sizes
* Lab time!

Note:
Starter/Solution code for this lesson is located in the Week 3 [Assignment directory](../Assignment)

---

## Review

Floats and clears review

Note:
Also do a review of the box model.

---

## Sizes

There are many ways to define sizes in CSS.

---

## PX

Pixels are the dots that make up your computer screen.  Your screen is a grid of pixels.  1 dot = 1 pixel.

* font-size: 24px;
* width: 300px;

---

## Percentage

You can define sizes based on a percentage of their __outer__ container.

* width: 50%;
* margin: 2%;

Note:
Draw an example for this one.  Also, remind them about the box model.

---

## EM

EMs are based on the parent element's font size.  Recommended because they let users resize the element in the browser.

1 em = 16px

* font-size: 1.5em;
* width: 2em;

Note:
Demonstrate difference between zoom and increase text size using Chrome settings.

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Layout lab

Note:
Take a look at the Relaxr assignment; code for this lesson is located in the Week 3 [Assignment directory](../Assignment)

---

## Responsive Development

__Responsive development__ is creating a web site that looks good on all screen sizes.

---

## Media Queries

A __media query__ is a part of your CSS that is only applied when a certain aspect of your web browser is true.  For example:

* My browser is at least 480px wide.
* My browser is no bigger than 600px wide.
* My browser is at least 300px tall.
* My browser is really a print out.

---

## Media Queries

```
@media only screen and (max-width: 600px) {
	/* This CSS will only be used for screens 
	   that are 600px wide or smaller. */

	section {
		float: none;
	}

	p {
		font-size: 1.2em;
	}
}
```

Note:
http://www.w3schools.com/cssref/css3_pr_mediaquery.asp
