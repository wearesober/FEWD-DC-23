![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 15

## App Development, part 2
## Responsive Development

---

## Agenda

* Back to the To Do app
* Responsive Layouts
* REM/EM
* Media Queries

---

## To Do

Feature Requirements

* List items
* Check off done items
* Delete items
* Edit items
* Count items

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## To Do, part 2

---

## Responsive Layouts

Let's bring HTML/CSS back into the equation.

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Boxes

---

##Responsive Layout

What does "responsive" mean?

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Mobile Boxes

---

## Fixed vs Responsive

Checkout these __Fixed__ sites

* [DanNavarro.com](http://www.dannavarro.com/)

* [EddieFromOhio.com](http://www.eddiefromohio.com/)


Checkout these __Responsive__ Sites

* [Boston.com](http://www.boston.com)

* [Etsy.com](https://www.etsy.com/)

---

## Fixed Layout

* Used up to this point
* Relies on a container of fixed width
* Usually 960px or 1024px (but not always)

---

## Responsive Layout

* Different styles for different screen widths
* Uses an elastic/fluid layout
* Fluid
* Sized in percentages
* Sized in ems

---

## What is an em?

* Sized based on the width of the letter “m” 
* 1em = 100% font-size
* Based on parent

```
.parent { font-size: 16px; }
.child { font-size: 2em; }
/* Child’s font size is 32px */
```

---

## Media Queries

What is a media query?

---

## Media Queries 

```
@media only screen and
```

* (max-width: xPx)
* (min-width: xPx)
* (max-device-width:xPx)
* (min-device-width:xPx)

Separate multiple clauses with “and”

---

## Media Queries for tablets

```
@media only screen and
```

* (orientation: portrait)
* (orientation: landscape)

---

## Media Querie examples

```
@media only screen and (max-width: 640px) and (orientation: portrait)
```

Or

```
@media only screen and (min-width: 640px)
```

---

## Mobile Display

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Why is this necessary?

Note:
Optional: user-scalable=none

---

## Standard media queries sizes

* Small: up to 768px
* Medium: 768-991px
* Large: 992px+

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Responsive Boxes

---

## Upcoming due dates!

* Next Monday
    * Homework #8

* Next Tuesday
    * Next final project milestone - JS rough draft!
