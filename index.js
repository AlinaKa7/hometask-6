currentYear = 2023;
yearOfBirth = +prompt('What is your year of birth?');
userAge = currentYear - yearOfBirth;

cityName = prompt('Which city do you live in?');

if (!yearOfBirth) {
    alert('It\'s a pity that you didn\'t enter your year of birth(')
} else if (!cityName) {
    alert('It\'s a pity that you didn\'t enter city name in which you live(')
} else if (cityName === 'Kyiv' || cityName === ('Kyiv').toLowerCase()) {
    alert(`You\'re ${userAge}. You live in the capital of Ukraine!`);
} else if (cityName === 'Washington' || cityName === ('Washington').toLowerCase()) {
    alert(`You\'re ${userAge}. You live in the capital of the USA!`);
} else if (cityName === 'London' || cityName === ('London').toLowerCase()) {
    alert(`You\'re ${userAge}. You live in the capital of England and the UK!`);
} else {
    alert(`You\'re ${userAge}. You live in ${cityName[0].toUpperCase()}${cityName.slice(1,cityName.length)} city!`);
}

sport = prompt('What is your favourite sport?');

if (!sport) {
    alert('It\'s a pity that you didn\'t enter your favourite sport(')
} else if (sport === 'Football' || sport === ('Football').toLowerCase()) {
    alert('Cool! Do you want to become the next Cristiano Ronaldo?');
} else if (sport === 'Tennis' || sport === ('Tennis').toLowerCase()) {
    alert('Cool! Do you want to become the next Roger Federer?');
} else if (sport === 'Boxing' || sport === ('Boxing').toLowerCase()) {
    alert('Cool! Do you want to become the next Wladimir Klitschko!');
} else {
    alert('Cool! Good luck in your achievements!');
}