# Reference vs Copy
This topic so much attention, as it turns out that many of the bugs normally result due to the misunderstanding here. 

```js
    let age = 100;

    let age2 = age;

    console.log(age, age2); // 100, 100

    let name = 'Dawit';

    let name2 = name;

    console.log(name, name2);

    // let's say we have an array

    const gamers = [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ];

    const team = gamers;

    console.log(gamers, team);

    team[3] = 'Robert'; // team is only the reference to the original array, called gamers

    console.log(team); //

    console.log(gamers); // this  will log the same items as in console.log(team)

    team2 = gamers.slice(); // slice will just change entire copy

    // with objects

    const person = {
        name: 'Dawit Ghebremedhin',
        age: 35
    };

    // how do take a copy instead ?

    const cap2 = Object.assign({}, person, { number: 99, age: 12 });

    console.log(cap2);

    const cap3 = { ...person };

    const dawit = {
        name: 'David',
        age: 90,
        contact: {
            gmail: 'dgeo209',
            github: 'DGEs2018'
        }
    };

    console.clear();

    console.log(dawit);

    const devTrainee = Object.assign({}, dawit);

    const devTrainee2 = JSON.parse(JSON.stringify(dawit));

    const devTrainee2.contact.github = 'aspired traineeboy'
    
    JSON.stringify(dawit); // when stringify takes an object in a, turns it to a string

    JSON.parse(JSON.stringify(dawit)); //
```