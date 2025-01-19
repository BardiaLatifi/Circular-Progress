const progressBar1 = document.getElementById("progress1");
const progressBar2 = document.getElementById("progress2");
const progressBar3 = document.getElementById("progress3");

let progress1 = 35;
let progress2 = 43;
let progress3 = 87;

function enableProgressBar() {
  progressBar1.setAttribute("role", "progressbar");
  progressBar1.setAttribute("aria-valuenow", progress1);
  progressBar1.style.setProperty("--progress", progress1 + "%");
  progressBar1.setAttribute("aria-live", "polite");

  progressBar2.setAttribute("role", "progressbar");
  progressBar2.setAttribute("aria-valuenow", progress2);
  progressBar2.style.setProperty("--progress", progress2 + "%");
  progressBar2.setAttribute("aria-live", "polite");

  progressBar3.setAttribute("role", "progressbar");
  progressBar3.setAttribute("aria-valuenow", progress3);
  progressBar3.style.setProperty("--progress", progress3 + "%");
  progressBar3.setAttribute("aria-live", "polite");
}

enableProgressBar();
