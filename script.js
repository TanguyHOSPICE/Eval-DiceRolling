// Déclaration des variables
let playerName = document.getElementsByClassName('player-name');
let roundPlayer = document.getElementsByClassName('round-player');

// Fonction: Ajouter la classe active au joueur qui joue et a son score (round-player)
const addActiveClass = () => {
	for (let i = 0; i < playerName.length; i++) {
		if (playerName[i].classList.contains('active')) {
			playerName[i].classList.remove('active');
			roundPlayer[i].classList.remove('active');
		} else {
			playerName[i].classList.add('active');
			roundPlayer[i].classList.add('active');
		}
	}
};
