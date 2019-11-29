# Problem set
In this exercise the aim is to update the second, minute and hour hands from the digital clocks taken from JS.


## How we go about solving the probleme ?
On the given file, we see three of the time hands are stack on top of each other. Inspecting we could see `transform: rotate(certain degrees);` on one of the hands enables rotation.

By the default though this is gonna revolve around itself `transform-origin: 100%;` helps you drag the center to the center of the clock-face.
```css
    .clock-face {
      position: relative;
      width: 100%;
      height: 100%;
      transform: translateY(-3px); /* account for the height of the clock hands */
    }

    .hand {
      width: 50%;
      height: 6px;
      background: black;
      position: absolute;
      top: 50%;
      transform-origin: 100%;
      transform: rotate(90deg);   /* rotates the hand to start at 12 o'clock */
      transition: all 0.05s;
      transition-timing-function: cubic bezier(0.5, 2.8, 0.55, 0.8); /* adds the snapping effect the second-hand timer is rotation for instatnce */
    }
```
## JS part
The first thing to go about this is create a function to get the current date. function `setDate()`

```javascript
        const secondsTimer = document.querySelector('.second-hand'); // grabs the second counter
        const minutesTimer = document.querySelector('.min-hand');  // grabs the minute counter
        const hoursTimer = document.querySelector('.hour-hand');  // grabs the hour counter

        function setDate() {
            console.log("Let's see if this fires") ; // checks out to test what the function is printing out
            const now = new Date(); // assigns a new Date (JS instance) object a number that represents milliseconds since 1 January 1970 UTC, and stores it in a variable called now
            const seconds = now.getSeconds();
            const secondsInDegrees = ((second/60)*360)+ 90; // turn the seconds we have in terms of degrees, as we have the rotation in degrees
            secondsTimer.style.transform = `rotate${secondsInDegrees}deg`; // the so called template literal, intruduced since ES6
                // addition of the 90 above rotates it to start up top, by default it lies horizontally, left to right.

            const minutes = now.getMinutes();
            const minutesInDegrees = ((minutes/60)*360) + 90;
            minutesTimer.style.transform = `rotate${minutesInDegrees}deg`;

            const hours = now.getMinutes();
            const hoursInDegrees = ((minutes/12) * 360) + 90;
            hoursTimer.style.transform = `rotate${hourInDegrees}deg`;        
        }

        setInterval(setDate, 500); // built in function that would run every half a second (the right most value is always given in milliseconds)
```
## DOM use in JS

1. Grab the three time counters (i.e second, minute, hour) from the html file

2. Run the `setInterval(setDate, 500)`, with a callback function setDate, set at any interval, that means the console will be triggered after the milliseconds given
3. However we need to define the callback function setDate.

4. Inside first define the `new Date` object and store it inside a variable called `now`
     - define a variable called seconds and derive it from the `.getSeconds()`
     - define a variable called minutes and derive it from the method `.getMinutes()`
     - define a variable called hours and derive it from the method `.getHours()`

     - convert three of them into degrees, and add 90 to shift, so they can start from 12 O'clock on

     - attach the chained method `.style.transform` to the variables where the `secondsTimer`, `minutesTimer`, and `hoursTimer` and assign this to template literals  with the variables turned to degrees above

     