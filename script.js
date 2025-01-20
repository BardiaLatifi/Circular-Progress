const progressBar1 = document.getElementById("progress1");
const progressBar2 = document.getElementById("progress2");
const progressBar3 = document.getElementById("progress3");

let progress1 = 35;
let progress2 = 43;
let progress3 = 87;

// Function to enable and update the specified progress bar
function enableProgressBar(progressBar, initialValue) {
  progressBar.setAttribute("role", "progressbar");
  progressBar.setAttribute("aria-live", "polite");
  progressBar.setAttribute("aria-valuenow", initialValue);
  progressBar.style.setProperty("--progress", initialValue + "%");
}

// Animate function remains unchanged
const animate = function (targetValue, interval, updateCallback, progressBar) {
  let current = 0;

  const timer = setInterval(() => {

    const increment = (targetValue - current) / (interval / 5);
    if (current < targetValue) {
      current += increment;
      updateCallback(current, progressBar); // Pass the current value and the specific progress bar
    } else {
      clearInterval(timer);
    }
  }, interval);
};

// Function to update the specified progress bar
function updateProgressBar(value, progressBar) {
  const roundedValue = Math.round(value);
  progressBar.setAttribute("aria-valuenow", roundedValue);
  progressBar.style.setProperty("--progress", value + "%");
}

// Enable and initialize the progress bars
enableProgressBar(progressBar1, progress1);
enableProgressBar(progressBar2, progress2);
enableProgressBar(progressBar3, progress3);

// Start animating the progress bars
animate(progress1, 100, updateProgressBar, progressBar1);
animate(progress2, 100, updateProgressBar, progressBar2);
animate(progress3, 100, updateProgressBar, progressBar3);
