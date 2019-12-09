# How LocalStorage and Event Delegation work

## LocalStorage
```js
    const addItems = document.querySelector('.add-items');
    const itemList = document.querySelector('.plates');
    const items = [];

    function addItem(e) {
        console.log('check if this is working');
        e.preventDefault(); // prevent the page from reloading
        const text = document.querySelector('[name=item]');
        const text1 = this.querySelector('[name=item]'); // this, in this specific case refers to the actual form
        const item = {
            text: 'Item Name',
            done: false
        }; // what we eventually want to do is, put this item inside the items variable initialized with an empty array []
        this.reset(); // clear the input
        }
    // now we need a second function to generate the html to put the entire 
    function displayList(plate = [], plateList) {
        plates.map((plate, i) => {
            return `
                <li>
                    <label for="">${plate.text}</label>
                </li>
            `;
        }).join('');
    }
     addItems.addEventListener('submit', addItem )      // attach a listener on the button to be clicked, which is submit....
```



## Event Delegation
