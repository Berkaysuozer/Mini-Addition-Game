let random1;
let random2;
let result;
function randommandom() {
	random1 = Math.floor(Math.random() * 99);
	random2 = Math.floor(Math.random() * 99);
	result = random1 + random2;
}
randommandom();
let Score = 0;
let highscore = 0;
document.querySelector('.btn').addEventListener('click', function () {
	document.querySelector('.message').textContent = 'Sum Two Number!❔';
	document.querySelector('body').style.backgroundColor = '#2c3e50';
	Score = 0;
	let highscore = 0;
	document.querySelector('.score').textContent = Score;
	document.querySelector('.number').textContent = random1;
	document.querySelector('.number2').textContent = random2;
	console.log(random1 + random2);
});

document.querySelector('.checkbtn').addEventListener('click', function () {
	let answer = document.querySelector('.answer').value;
	console.log(answer);

	if (!answer) {
		document.querySelector('.message').textContent = '🚫VALUE CANNOT BE EMPTY!';
	} else if (answer == result) {
		console.log('doğru');
		Score++;
		document.querySelector('.score').textContent = Score;
		document.querySelector('.answer').value = '';
		randommandom();
		document.querySelector('.number').textContent = random1;
		document.querySelector('.number2').textContent = random2;
	} else {
		document.querySelector('.message').textContent = `💥GAME OVER !  THE ANSWER WAS ${result}`;
		document.querySelector('body').style.backgroundColor = 'red';
		randommandom();
		document.querySelector('.number').textContent = '?';
		document.querySelector('.number2').textContent = '?';
		document.querySelector('.answer').value = '';
		if (Score > highscore) {
			document.querySelector('.highscore').textContent = Score;
		}
	}
});
