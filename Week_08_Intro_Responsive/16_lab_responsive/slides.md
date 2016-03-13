![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 16
## Responsive Development

---

## Agenda

* To Do app, revisited
* REMs vs. EMs
* How to make a website responsive.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## To Do App - revisited

---

## Let's talk about sizes

EMs vs. REMs

---

## What is an EM?

* Sized based on the width of the letter “m” 
* 1em = 100% font-size
* Based on parent

```
.parent { font-size: 16px; }
.child { font-size: 2em; }
/* Child’s font size is 32px */
```

---

## What is a REM?

* Same as em
* Caveat: Based on the font-size of html element

```
html { font-size: 16px; }
.parent { font-size: 20px; }
.child { font-size: 2em; }
/* Child’s font size is 32px */
```

---

## Mobile first vs. desktop first?

---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## To Do App - responsive version

---

## Responsive: Step 1

* Convert widths to percentages
* Size fonts in ems
* Identify columns that can be stacked

---

## Responsive: Step Two

* Determine what content is extra
    * Does that h1 need an h2 under it?
	* Will that one-liner get the visitor to understand my site or is it extra?

* Determine what content needs to be visible
	* Is it necessary to show my entire nav if there are other ways of getting to navigation?

* Identify extra styling
	* Do my columns need a border if they’re stacked?

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Startup Matchmaker
