const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame ()
{
    // game.fillRect(100, 25, 100, 100,);  // (Xi Yi Xf Yf)
    // game.clearRect(0, 0, 0, 0,);

    game.font = '25px Arial';
    game.fillStyle = 'red';
    game.textAlign = 'center';
    game.fillText('Miguel', 50, 50);
}