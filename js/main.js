var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');
var message = document.querySelector('.message');

var afficherSymbole = function(cell) {
  if (cell.classList !== 'cross' && cell.classList !== 'circle') {
    if (tourDuJoueur1) {
      cell.classList.add('cross'); // Si true ajouter X
    } else {
      cell.classList.add('circle'); // Sinon ajouter 0
    }
    tourDuJoueur1 = !tourDuJoueur1; // Changer de joueur
  } else {
    return; // Arreter boucle
  }
};
var combinaisonsGagnantes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function() {
  combinaisonsGagnantes.forEach(function(combinaison) {
    if (
      cells[combinaison[0]].classList[1] === cells[combinaison[1]].classList[1] &&
      cells[combinaison[0]].classList[1] === cells[combinaison[2]].classList[1] &&
      (cells[combinaison[0]].classList[1] === 'cross' ||
      cells[combinaison[0]].classList[1] === 'circle')
    ) {
			// console.log('WIN');
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
      message.innerHTML = '<p>Bravo ' + currentPlayer + ' !</p>' + '<button>REJOUER</button>';
			// alert('Bravo ' + currentPlayer + '!');
      var button = document.querySelector('button');
      button.addEventListener('click', function() {
        console.log('button');
        document.location.reload(true);
      });
			partieGagnee = true;
    }
  });
};


cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    // console.log(cell.dataset.cell);
    if (!partieGagnee) {
      afficherSymbole(cell);
      verifierCombinaisons();
    }
  })
});
