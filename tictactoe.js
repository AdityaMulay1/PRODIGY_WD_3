// tictactoe.js
document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (gameActive && !gameBoard[index]) {
                cell.textContent = currentPlayer;
                gameBoard[index] = currentPlayer;

                if (checkWin()) {
                    alert(`${currentPlayer} wins!`);
                    gameActive = false;
                } else if (gameBoard.every((cell) => cell !== '')) {
                    alert('It\'s a tie!');
                    gameActive = false;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    function checkWin() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winConditions.some((condition) => {
            const [a, b, c] = condition;
            return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }
});
