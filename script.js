const progressBar1 = document.getElementById("progress1");
const progressBar2 = document.getElementById("progress2");
const progressBar3 = document.getElementById("progress3");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const submitButton = document.getElementById("submit-button");

let progress1 = 0;
let progress2 = 0;
let progress3 = 0;

// Function to enable and update the specified progress bar
function enableProgressBar(progressBar, initialValue) {
  progressBar.setAttribute("role", "progressbar");
  progressBar.setAttribute("aria-live", "polite");
  progressBar.setAttribute("aria-valuenow", initialValue);
  progressBar.style.setProperty("--progress", initialValue + "%");
}

// Animate function remains unchanged
function animate(targetValue, updateCallback, progressBar) {
  let current = 0;

  const timer = setInterval(() => {
    if (current < targetValue) {
      current++;
      updateCallback(current, progressBar);
    } else {
      clearInterval(timer);
    }
  }, 0);
}

// Function to update the specified progress bar
function updateProgressBar(value, progressBar) {
  const roundedValue = Math.round(value);
  progressBar.setAttribute("aria-valuenow", roundedValue);
  progressBar.style.setProperty("--progress", (value / 120) * 100 + "%");
  progressBar.querySelector('.progress-text').textContent = roundedValue;
}

// Enable and initialize the progress bars
enableProgressBar(progressBar1, progress1);
enableProgressBar(progressBar2, progress2);
enableProgressBar(progressBar3, progress3);

submitButton.addEventListener("click", () => {
  progress1 = input1.value;
  progress2 = input2.value;
  progress3 = input3.value;

  // Start animating the progress bars
  animate(progress1, updateProgressBar, progressBar1);
  animate(progress2, updateProgressBar, progressBar2);
  animate(progress3, updateProgressBar, progressBar3);
});