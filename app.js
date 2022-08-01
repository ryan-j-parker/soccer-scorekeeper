import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const teamOneInput = document.getElementById('team-one-input');
const teamTwoInput = document.getElementById('team-two-input');

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;
let pastGames = [];

nameFormButton.addEventListener('click', () => {

    const teamOneName = teamOneInput.value;
    const teamTwoName = teamTwoInput.value;

    teamOneLabel.textContent = teamOneName;
    teamTwoLabel.textContent = teamTwoName;

    name1 = teamOneInput.value;
    name2 = teamTwoInput.value;

    const theGame = renderGame(name1, name2, score1, score2);
    currentGameEl.append(theGame);

    teamOneInput.value = '';
    teamTwoInput.value = '';

    refreshCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score1++;

    refreshCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score2++;

    refreshCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score1--;

    refreshCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score2--;

    refreshCurrentGameEl();

});

finishGameButton.addEventListener('click', () => {
    
    const currentGameData = {
        name1: `${name1}`,
        name2: `${name2}`,
        score1: `${score1}`,
        score2: `${score2}`
    };

    pastGames.push(currentGameData);

    pastGamesEl.textContent = '';

    displayAllGames();

    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;

    currentGameEl.textContent = '';

    refreshCurrentGameEl();

});

function refreshCurrentGameEl() {

    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    const gameEl = renderGame(name1, name2, score1, score2);
    
    gameEl.classList.add('current');

    currentGameEl.append(gameEl);

}


function displayAllGames() {

    pastGamesEl.textContent = '';
    
    for (let game of pastGames) {
        const gameEl = renderGame(game.name1, game.name2, game.score1, game.score2);
        pastGamesEl.append(gameEl);
    }
    
}
