// Déclaration des variables
const player1 = document.querySelector('.p1');
const global1 = document.querySelector('.g1');
const round1 = document.querySelector('.r1');

const player2 = document.querySelector('.p2');
const global2 = document.querySelector('.g2');
const round2 = document.querySelector('.r2');

let playerName = document.getElementsByClassName('player-name');
let roundPlayer = document.getElementsByClassName('round-player');

let images = [
	'dice-01.svg',
	'dice-02.svg',
	'dice-03.svg',
	'dice-04.svg',
	'dice-05.svg',
	'dice-06.svg',
];

//Fonction roll :
function roll() {
	// Ajouter la classe shake aux dés
	document.querySelectorAll('img').forEach((dice) => {
		dice.classList.add('shake');
		//Retirer la classe shake aux dés après 1 seconde
		setTimeout(() => {
			dice.classList.remove('shake');
			// Générer un nombre aléatoire entre 0 et 5
			let diceOneValue = Math.floor(Math.random() * 6);
			// generer un url pour l'image du dé
			let diceOneUrl = `/images/${images[diceOneValue]}`;
			// Changer l'image du dé
			document.getElementById('face').setAttribute('src', diceOneUrl);
		}, 1000);
	});
}

// Fonction: Ajouter la classe active au joueur qui joue et a son score (round-player)
/* const addActiveClass = () => {
	
}; */

// click lancer une partie
document.getElementById('beginGame').addEventListener('click', () => {
	// reinitialiser les scores
	document.querySelectorAll('.global').forEach((element) => {
		element.textContent = 0;
	});
	document.querySelectorAll('.round').forEach((element) => {
		element.textContent = 0;
	});
	// rendre actif le joueur 1
	player1.classList.add('active');
	round1.classList.add('active');
});

// click lancer le dé
document.getElementById('roll').addEventListener('click', () => {
	roll();
});

// click hold
document.getElementById('hold').addEventListener('click', () => {
	/* // ajouter le score du global au round
	document.querySelector('.active .global span').textContent =
		document.querySelector('.active .round span').textContent; */
	// changer le joueur actif
	player1.classList.toggle('active');
	player2.classList.toggle('active');
	round1.classList.toggle('active');
	round2.classList.toggle('active');
});
