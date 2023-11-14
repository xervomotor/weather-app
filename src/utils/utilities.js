// utils.js

function getMainElement() {
    const main = document.querySelector('main');
    if (!main) {
        console.error('Main element not found');
        return null;
    }
    return main;
}

function getWeekday(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
}

export { getMainElement, getWeekday };