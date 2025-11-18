const GOAL = 10000;

const stepsInput = document.getElementById('steps');
const goBtn = document.getElementById('goBtn');
const stepsDisplay = document.getElementById('stepsDisplay');
const messageText = document.getElementById('messageText');
const percentText = document.getElementById('percentText');
const goalLabel = document.getElementById('goalLabel');

goalLabel.innerText = GOAL.toLocaleString();

const ring = document.querySelector('.ring');
const R = 60; 
const CIRC = 2 * Math.PI * R;
ring.style.strokeDasharray = `${CIRC}`;
ring.style.strokeDashoffset = `${CIRC}`;

function updateUI(steps) {

    console.log("=== Step Tracker Update Started ===");
    console.log("Raw steps entered:", steps);

    const pct = Math.min(Math.max(steps / GOAL, 0), 2); 
    const percent = Math.round(Math.min((steps / GOAL) * 100, 100));

    console.log("Progress percentage:", percent + "%");

    const msg = steps >= GOAL ? "Goal Achieved" : "Keep Going";
    messageText.innerText = msg;
    console.log("Message:", msg);

    stepsDisplay.innerText = steps.toLocaleString();
    percentText.innerText = `${percent}%`;

    const progress = Math.min(steps / GOAL, 1);
    const offset = CIRC * (1 - progress);
    ring.style.strokeDashoffset = offset;

    console.log("Circle stroke offset:", offset);

    const styles = getComputedStyle(document.documentElement);

    let color = steps >= GOAL
        ? styles.getPropertyValue('--ok').trim() 
        : steps >= GOAL * 0.9
            ? styles.getPropertyValue('--warn').trim()
            : styles.getPropertyValue('--accent').trim();

    console.log("Applied ring color:", color);

    ring.style.stroke = color;

    console.log("=== Step Tracker Update Finished ===\n");
}

updateUI(0);

goBtn.addEventListener('click', () => {
    const raw = parseInt(stepsInput.value, 10);
    const steps = Number.isFinite(raw) && raw >= 0 ? raw : 0;

    console.log("Button clicked — valid steps:", steps);
    updateUI(steps);
});

stepsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') goBtn.click();
});