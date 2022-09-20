const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function startGame ()
{
    game.font = elementsSize + 'px Arial';
    game.textAlign = 'end';

    const map = maps[0];
    const mapRows = maps[0].trim().split('\n');
    const mapColumn = mapRows.map(row => row.trim().split(''));

    
    for (let row=1; row<=10; row++)
    {
        for (let column=1; column<=10; column++)
        {
            game.fillText(emojis['X'], elementsSize * column, elementsSize * row);
        }
    }
    
    // game.fillRect(100, 25, 100, 100,);  // (Xi Yi Xf Yf)
    // game.clearRect(0, 0, 0, 0,);

    // game.font = '25px Arial';
    // game.fillStyle = 'red';
    // game.textAlign = 'center';
    // game.fillText('Miguel', 50, 50);
}

function setCanvasSize()
{
    if (window.innerHeight > window.innerWidth)
    {
        canvasSize = window.innerWidth * 0.8;
    }
    else
    {
        canvasSize = window.innerHeight * 0.8;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    startGame();
}