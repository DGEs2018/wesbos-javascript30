// grab all the form elements
const addItems = document.querySelector('.add-items');

// grab the parent of the list
const itemsList = document.querySelector('.plates');

//
const items = JSON.parse(localStorage.getItem('items')) || [];

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
}
addItems.addEventListener('submit', addItem);
