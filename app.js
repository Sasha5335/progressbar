window.addEventListener("scroll", fillProgressLine);
window.addEventListener("resize", fillProgressLine);

function fillProgressLine() {
  const progressBar = document.querySelector(".progressbar > .progressbar-line");
  let fullHeight = document.body.scrollHeight;
  let innerHeight = window.innerHeight;

  progressBar.style.width = (pageYOffset * 100) / (fullHeight - innerHeight) + "%";
}

fillProgressLine();
