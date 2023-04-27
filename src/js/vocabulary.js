const exploreButton = document.querySelector('button.explore');
const explorePanel = document.querySelector('.explore-panel');

// explorePanel.classList.add('hide');

exploreButton.addEventListener('click', (event) => {
    explorePanel.classList.toggle('expand');
    // explorePanel.classList.toggle('hide');
});


const menuButton = document.querySelector('button.expand-menu');
const menuPanel = document.querySelector('.primary-menu');

menuButton.addEventListener('click', (event) => {
    menuPanel.classList.toggle('expand');
    // explorePanel.classList.toggle('hide');
});