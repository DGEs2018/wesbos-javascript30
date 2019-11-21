const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint);
// console.log(prom), fetch will return a promise, then is going to return a blob of data
fetch(endpoint).then((res) => res.json()).then((data) => cities.push(...data));

// everytime we have an argument to push, .push will put that as its own in the array
// the way to change this array into individual arguments, the spread operator ... is used
function findMatches(wordToMatch, cities) {
	return cities.filter((place) => {
		// here  we need to figure out if the city or state matches what was searched....

		const regex = new RegExp(wordToMatch, 'gi'); // global, case insensitive
		return place.city.match(regex) || place.state.match(regex); // put a variable into a regular expression, regex is thus defined
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	console.log(matchArray);
	const html = matchArray
		.map((place) => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regex, `<span class='h1'>${this.value}<span>`);
			const stateName = place.state.replace(regex, `<span class='h1'>${this.value}<span>`);
			return ` 
        <li>
            <span class="name">${cityName},  ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
		})
		.join(''); // we want to join all into a string
	suggestions.innerHTML = html; // this is called allocation, is something else from declaration
	console.log(this.value);
}

const searchInput = document.querySelector('.search');
console.log(searchInput);
const suggestions = document.querySelector('.suggestions');
console.log(suggestions);

// attach add eventlistener to display the matches, whenever typed key goes up or any change is detected
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
