    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    console.log(players, team);
    team[3] = 'Lux';

    const team2 = players.slice();

    const team3 = [].concat(players);

    const team4 = [...players];
    team4[3] = 'YEAHSADA';
    console.log(team4);

    const team4 = Array.from(players);


    const person = {
        name: 'Wes Bos',
        age: 80
    };

    const captain = person;
    captain.number = 90;

    // copy object

    const cap2 = Object.assign({}, person, { number: 99});

    const wes = {
        name: 'wes',
        age: 100
        social: {
            twitter: '@wesbos',
            facebook: 'wesbos.developer';
        }
    } 