const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
	'Beck, Glenn',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Beethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsen, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Billings, Josh',
	'Biondo, Frank',
	'Birrell, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William'
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let invOf1500s = inventors.filter(function(inventor) {
	if (inventors.year >= 1500 && inventors.year < 1600) {
		return true; // keep it
	}
});

// refactor that in on-line  conditional statement as below.....
// let invOf1500s = inventors.filter((inventor) => inventor.year >= 1500 && inventor < 1600);

console.log(invOf1500s);

console.table(invOf1500s);

// Array.prototype.map()

// 2. Give un an array of the inventory first and last names

const inventorsFullName = inventors.map((inventor) => `${inventors.first} ${inventors.last}`);
console.log(inventorsFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsSeniorToJunior = inventors.sort(function(a, b) {
	if (a.year > b.year) {
		return 1;
	} else {
		return -1;
	}
});

// refactored
// const inventorsSeniorToJunior = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(inventorsSeniorToJunior);

// Array.prototype.reduce()

// 4. How many years did all the inventors live ?

// const sumOfYearsLived = inventors.reduce((sum, inventorage) => sum + inventorage);

const sumOfYearsLived = inventors.reduce((sum, inventorage) => {
	// return sum + (inventors.passed - inventor.year);
	return sum + inventorage;
});

// for (let i = 0; i < length) {
//     totalYearsLived = inventors[i].year
// }
console.log(sumOfYearsLived);

// 5. sort the inventors by years lived

const orderInventorsByAge = inventors.sort((a, b) => {
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;
	if (lastGuy > nextGuy) {
		return -1;
	} else {
		return 1;
	}
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// from the link https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = document.querySelector('.mw-category'); // get the class name by inspecting at each of the boulevards under the developer's tool

// const linkOfBoulevards = Array.from(boulevards.querySelectorAll('a')); // filter out all the links, saying basically pull out anchor element inside the // without array.from, error, is not a function cropped up

const linkOfBoulevards = [ ...boulevards.querySelectorAll('a') ];

const linksWithDe = linkOfBoulevards.map((link) => link.textContent).filter((name) => name.includes('de'));

// 7. sort exercise
// sort the people alphabetically by last time

const orderedByLastname = people.sort(function(last, next) {
	console.log(last);
	// console.log(next);
	// const nameSplitted = last.split(',');
});

const people2 = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// .every method tests whether all elements in the array pass the test implemented by the provided function, whereas
// .some method checks whether at least one of the elements passes the test
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAbove19 = people2.some(function(person) {
	// asssigns a variable called isAbove19, for those older than 19
	const currentYear = new Date().getFullYear();
	if (currentYear - person.year >= 19) {
		return true;
	}
});

console.log(isAbove19);
// Array.prototype.every() // is everyone 19 or older? below is refactored, watch out I'm using the same name

const isAbove19 = people2.some((person) => {
	// asssigns a variable called isAbove19, for those older than 19
	// const currentYear = (new Date()).getFullYear();

	return new Date().getFullYear() - person.year >= 19; // another way to put it, instead of having to define currentYear and put it inside a variable first ;
	// return currentYear - person.year >= 19;
});

// .every method tests whether all elements in the array pass the test implemented by the provided function, whereas
// .some method checks whether at least one of the elements passes the test

const allAdults = people2.every(function(person) {
	return new Date().getFullYear() - person.year >= 19;
	console.log(allAdults);
});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
