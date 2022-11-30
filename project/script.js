const message = "More information can be found by clicking on the letters.";
alert(message);

const showSlideTree = () => {
  let actionSlidePaper = document.querySelector(".slidePaper");
  actionSlidePaper.style.display = "none";

  let actionSlideTree = document.querySelector(".slideTree");
  actionSlideTree.style.display = "flex";
};

const showSlidePaper = () => {
  let actionSlideTree = document.querySelector(".slideTree");
  actionSlideTree.style.display = "none";

  let actionSlidePaper = document.querySelector(".slidePaper");
  actionSlidePaper.style.display = "flex";
};
