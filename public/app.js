//Déclare les variables
//Player 1
const player1 = document.querySelector('.p0');
const global1 = document.querySelector('.g0');
const round1 = document.querySelector('.r0');
//Player 2
const player2 = document.querySelector('.p1');
const global2 = document.querySelector('.g1');
const round2 = document.querySelector('.r1');

let playerScores, activePlayer, gamePlaying;

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

let roundScore = 0;
//Fonction roll : lancement dés
const roll = () => {
	// Ajouter la classe shake aux dés
	document.querySelectorAll('img').forEach((dice) => {
		dice.classList.add('shake');
		//Retirer la classe shake aux dés après 1 seconde
		setTimeout(() => {
			dice.classList.remove('shake');
		}, 1000);
		// Générer un nombre aléatoire entre 1 et 6
		let diceValue = Math.floor(Math.random() * 6) + 1;
		// generer un url pour l'image du dé
		let diceUrl = `./images/dice-0${diceValue}.svg`;

		// Changer l'image du dé
		document.getElementById('face').setAttribute('src', diceUrl);
		document.getElementById('face').setAttribute('alt', `Dé ${diceValue}`);

		// Gestions des scores
		// Récupère score si dé est différent de 1 sinon passe au joueur suivant
		if (diceValue !== 1) {
			roundScore += diceValue;
			document.querySelector('.active .round').textContent = roundScore;
		} else {
			nextPlayer();
		}
	});
};

// Fonction hold : sauvegarde le score du round et passe au joueur suivant
const hold = () => {
	// Ajouter le score du round au score global
	if (gamePlaying) {
		playerScores[activePlayer] += roundScore;
		// Afficher le score global
		document.querySelector(`.g${activePlayer}`).textContent = playerScores[activePlayer];
		// Vérifier si le joueur a gagné
		if (playerScores[activePlayer] >= 100) {
			// Afficher le message de victoire
			document.querySelector(`.p${activePlayer}`).textContent = 'Winner !';
			// Ajouter la classe winner
			document.querySelector(`.p${activePlayer}`).classList.add('winner');
			// Désactiver le jeu
			gamePlaying = false;
		} else {
			// Passer au joueur suivant
			nextPlayer();
		}
	}
};

// Fonction nextPlayer : passe au joueur suivant
const nextPlayer = () => {
	// Remettre le score du round à 0
	roundScore = 0;
	document.querySelector(`.p${activePlayer}`).classList.remove('active');
	document.querySelector(`.r${activePlayer}`).classList.remove('active');
	// Changer de joueur
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	// Changer la classe active
	document.querySelector(`.p${activePlayer}`).classList.add('active');
	document.querySelector(`.r${activePlayer}`).classList.add('active');
	// Afficher le score du round à 0
	document.querySelector(`.active .round`).textContent = roundScore;
};

//Fonction init : inialisation du jeu
const initGame = () => {
	// reinitialiser les scores
	document.querySelectorAll('.global').forEach((globalScore) => {
		globalScore.textContent = 0;
	});
	document.querySelectorAll('.round').forEach((roundScore) => {
		roundScore.textContent = 0;
	});
	playerScores = [0, 0];
	activePlayer = 0;
	gamePlaying = true;
	// rendre actif le joueur 1
	player1.classList.add('active');
	round1.classList.add('active');
	// rendre inactif le joueur 2
	player2.classList.remove('active');
	round2.classList.remove('active');
	//rendre inactive classe winner
	player1.classList.remove('winner');
	player2.classList.remove('winner');
	//remettre les noms des joueurs
	player1.textContent = 'Player 1';
	player2.textContent = 'Player 2';
};

// click lancer les dés
document.getElementById('roll').addEventListener('click', roll);
// click lancer une partie
document.getElementById('beginGame').addEventListener('click', initGame);
// click hold
document.getElementById('hold').addEventListener('click', hold);
