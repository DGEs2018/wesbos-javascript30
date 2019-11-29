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
      transform-origin: 100%;
      transform: rotate(90deg);   /* rotates the hand to start at 12 o'clock */
    }

    .hand {
      width: 50%;
      height: 6px;
      background: black;
      position: absolute;
      top: 50%;
    }
```
