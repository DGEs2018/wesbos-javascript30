# Experimenting with CSS variables

CSS variables can be updated with JavaScript on any element in any selectors inside of that element. This exercise will demonstrate this. 

Names of the three inputs available in the html
```html
     <label for="spacing">Spacing:</label>
        <input id="spacing" type="range" name="spacing" min="10" max="200" value="10"   data-sizing="px">

        <label for="blur">Blur:</label>
        <input id="blur" type="range" name="blur" min="0" max="25" value="10"   data-sizing="px">

        <label for="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600">
```
We will first define them on an element
```css
    :root {       // root is the deepest level containing the entire html
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
}
```
If we then want to use them, as if we would use variables in any other element, that would still be possible

```html
    <img src="./sunshine.jpg" alt="Image from unsplash"> 
```
```css
    img {
    padding: var(--spacing); // --spacing is now plugged in as any CSS value we would use
    background: var(--base); // --base the same as above
    filter: blur(var(--blur)); // --blur the same as above
    }
```

To update the values defined above, we could use JS
    1. Grab all the elements
    2. Define a callback function  ` `
    3. Attach an addEventListner for each of the inputs
    4.

```js
    1. const allInputs = document.querySelectorAll('.controls input'); // grabs all of the inputs

    2. function handleUpdate() {
	        console.log(this.value);
        }
    3. allInputs.forEach(input => input.addEventListener('change', handleUpdate));
    3. allInputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

```

Print out all the data-attributes of elements, an object containing every data-attribute of a specific element

```javascript 
    function handleUpdate() {
        const suffix = this.dataset.sizing  || '';
        console.log(this.name);
        document.documentElement.style.setProperty(`--${this.name}`);
}```