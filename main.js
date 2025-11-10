let fontSize = 16;

document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 1;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if (fontSize > 10) fontSize -= 1;
    document.body.style.fontSize = fontSize + 'px';
});

document.getElementById('light-mode').addEventListener('click', () => {
    document.body.classList.add('light-mode');
});

document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.remove('light-mode');
});