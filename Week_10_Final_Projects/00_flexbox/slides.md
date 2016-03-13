![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 19
## Flexbox

---

## Agenda

* Flexbox
* Lab time
* AMA

---

## Flexbox

* Set of CSS properties 

* Provides a more efficient way to layout and align items in a container.

* Great for when the items' sizes are unknown or could change.

Note:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

## Flexbox

![GeneralAssemb.ly](images/flex-container.svg)

![GeneralAssemb.ly](images/flex-items.svg)

---

## Flexbox

* Give the container the ability to alter the order of its items to automatically fill available space.

* Accommodates all kind of display devices and screen sizes.

* Container expands item sto fill available space or shinks them to prevent overflow.

---

## CSS for Flexbox

To use Flexbox, you need to add CSS styles to both the __containers__ and its __items__.

---

## HTML setup

```
<section class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</section>
```

Note:
Write code live while explaining the CSS properties coming up.

---

## CSS for Flexbox Containers

To use the flexbox layout, the container must have a display of 'flex'

```
.container {
    display: flex;
}
```

---

## Flex Direction

Determines the direction that the items are displayed in

Property for the container.

```
.container {
    display: flex;
    flex-direction: row | row-reverse | column | column-reverse;
}
```

__row__ is the default.

---

## Flex Wrap

Determines whether or not the container will allow items to wrap.

Property for the container.

```
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap | nowrap;
}
```

__nowrap__ is the default.

---

## Justify Content

Aligns the items inside the container

Property for the container.

```
.container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

---

## Flex Basis 

Determines the default size of an item.

Property for the item.

```
.item {
    flex-basis: 20%;  /* can be any length */
}
```

---

## Flex Grow

Sets the size of an item, relative to the other items.

Property for the item.

```
.container {
    display: flex;
}

.item {
    flex-grow: 1;
}

.item.special {
    flex-grow: 2;
}
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Baby Animals

---

## OMG this is our last lecture!

Next Steps?

---

## General Assembly Courses

* Backend Web Development
* Javascript Development

https://generalassemb.ly/browse

---

## Online Resources

* Lynda: http://www.lynda.com/

* Code Academy: https://www.codecademy.com/

* Code School: https://www.codeschool.com/

---

![GeneralAssemb.ly](images/questions.jpg)
