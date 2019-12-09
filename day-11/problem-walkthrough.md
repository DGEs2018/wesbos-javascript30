# Problem : create button to play and pause, speed up and slow down, skip off
## Create play and pause button
Steps
- Grab the elements

```javascript
    const player = document.querySelector('.player');

    const video = player.querySelector('.viewer');

    const progress = player.querySelector('.progress');

    const progressBar = player.querySelector('.progress__filled');

    const toggle = player.querySelector('.toggle');

    const range = player.querySelectorAll('.player__slider');

    const skipButton = player.querySelectorAll('[data-skip]');
```

- Create function
```javascript
    const playAndPause = () => {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }
```

- Attach the event listeners for the play/pause button

    - add aevent listener is attached on the grabbed element

    - and then on a certain mouse event, we make sure we pass in a callback function

```javascript
    const handleButton = () => {
        const icon = this.pause ? '►' : '❚ ❚';
        console.log('working');
        toggle.textContent = icon;
        console.log();
    }
    video.addEventListener('click', playAndPause);

    video.addEventListener('play', handleButton);

    video.addEventListener('pause', handleButton);

    toggle.addEventListener('click', playAndPause);

```
- Attach the event listeners for the forward / reward button

```javascript
```



