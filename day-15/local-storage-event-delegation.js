// grab all the form elements
const addItems = document.querySelector('.add-items');

// grab the parent of the list
const itemsList = document.querySelector('.plates');

//
const items = JSON.parse(localStorage.getItem('items')) || []; // when you put an item into the local storage, on page reload we check local storage
// and fall back on an empty array is there's no object

function addItem(e) {
	e.preventDefault();
	console.log('Event triggered ?');

	const text = document.querySelector('[name=item]').value;

	// console.log(this);
	// const text2 = e.target.value;
	// console.log(text2);
	console.log(text);
	const item = {
		text: text,
		done: false
	};

	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
	console.log(this);
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((plate, i) => {
			return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" checked/>
                <label for="">${plate.text}</label>
            </li>
            `;
		})
		.join(''); // map is going to return an array, with join we will make it then one big string
}
function toggleDone() {}

addItems.addEventListener('submit', addItem);

const checkBoxes = document.querySelectorAll('.input');
checkBoxes.forEach((input) => input.addEventListener('click', () => alert('checking the trigger')));

populateList(items, itemsList);

populateList;
