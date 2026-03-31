// snow.js (теперь это "leaf effect")

const toggleBtn = document.getElementById('snow-toggle');

let interval;
let isActive = false;

// разные листья
const leafs = ['🍃','🌺','🌼'];

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('snowflake');

    // случайный лист
    leaf.innerHTML = leafs[Math.floor(Math.random() * leafs.length)];

    // позиция по горизонтали
    leaf.style.left = Math.random() * window.innerWidth + 'px';

    // размер
    const size = 14 + Math.random() * 20;
    leaf.style.fontSize = size + 'px';

    // длительность падения + волны
    const fallDuration = 6 + Math.random() * 6;
    const swayDuration = 3 + Math.random() * 3;

    leaf.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;

    // задержка (чтобы не все сразу)
    leaf.style.animationDelay = `0s, ${Math.random() * 2}s`;

    // ширина "волны"
    leaf.style.setProperty('--sway', (20 + Math.random() * 60) + 'px');

    document.body.appendChild(leaf);

    // удаление после падения
    setTimeout(() => {
        leaf.remove();
    }, fallDuration * 1000);
}

function startSnow() {
    if (interval) return;

    interval = setInterval(createLeaf, 200);
}

function stopSnow() {
    clearInterval(interval);
    interval = null;
}

toggleBtn.addEventListener('click', () => {
    isActive = !isActive;
    toggleBtn.classList.toggle('active');

    if (isActive) {
        startSnow();
    } else {
        stopSnow();
    }
});
