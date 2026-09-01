const projects = [

  {
    title: "ZEDITS",
    videos: [
      "iTeCnFXpw8U",
      "q6D-1ZCeyDU",
      "LjWJYKV2WhE"
    ],
    image: "",
    link: ""
  },

  {
    title: "INDIANINLAST24HRS / BHARAT",
    videos: [
      "nwnRtk4kk4s",
      "Kzn7ZyElovs"
    ],
    image: "",
    link: ""
  },

  {
    title: "BOMBAY",
    videos: [
      "Tk2XFzuVNRE",
      "f9HofTGH_W0",
      "q1TqsS6Rhtc",
      "DbBlZeBlm2Q",
      "aU92CGQ2OeE",
      "gdFsk5Pt0zU",
      "rQhFAnaW5xU",
      "SwpW4p8_mKg"
    ],
    image: "",
    link: ""
  },

  {
    title: "MAHARASHTRA",
    videos: [
      "NgnZqIQlpoY",
      "aiLOvI55sSE",
      "xgf6rOnj9l4",
      "h7lPgXdcKGg",
      "zlV_af7npgs",
      "lUbC-RBFueE"
    ],
    image: "",
    link: ""
  },

  {
    title: "MEWAR",
    videos: [
      "nxL-PIUoUhg",
      "aD45vyBHzsE",
      "RS3EEXQLx-k"
    ],
    image: "",
    link: ""
  },

  {
    title: "BOLLYWOOD",
    videos: [
      "s4lzi3WlC5A",
      "bollywood2.mp4",
      "bollywood3.mp4",
      "bollywood4.mp4",
      "bollywood5.mp4"
    ],
    image: "",
    link: ""
  }

];


let currentProject = 0;
let currentVideo = 0;


/* ===============================
   OPEN PROJECT
================================ */

function openProject(index) {

  currentProject = index;
  currentVideo = 0;

  const project = projects[index];

  const video = document.getElementById("modalVideo");
  const image = document.getElementById("modalImage");

  if (project.videos && project.videos.length > 0) {

    image.style.display = "none";
    video.style.display = "block";

    loadYouTubeVideo(project.videos[currentVideo]);

  } else {

    video.style.display = "none";
    video.src = "";

    image.style.display = "block";
    image.src = project.image || "";
  }


  document.getElementById("modalTitle").textContent =
    project.title;

  document.getElementById("modalFile").textContent =
    String(index + 1).padStart(3, "0");

  document.getElementById("modalIndex").textContent =
    `${String(index + 1).padStart(3, "0")} / ${String(projects.length).padStart(3, "0")}`;


  document
    .getElementById("projectModal")
    .classList.add("show");

  document.body.style.overflow = "hidden";
}


/* ===============================
   LOAD YOUTUBE VIDEO
================================ */

function loadYouTubeVideo(videoId) {

  const video =
    document.getElementById("modalVideo");

  video.src =
    `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}


/* ===============================
   CLOSE PROJECT
================================ */

function closeProject() {

  const video =
    document.getElementById("modalVideo");

  if (video) {
    video.src = "";
  }

  document
    .getElementById("projectModal")
    .classList.remove("show");

  document.body.style.overflow = "";
}


/* ===============================
   BARREL ANIMATION
================================ */

function playBarrelAnimation(direction) {

  const video =
    document.getElementById("modalVideo");

  video.classList.remove(
    "barrel-next",
    "barrel-prev"
  );

  void video.offsetWidth;

  if (direction === "next") {
    video.classList.add("barrel-next");
  } else {
    video.classList.add("barrel-prev");
  }
}


/* ===============================
   NEXT VIDEO
================================ */

function nextVideo() {

  const project = projects[currentProject];

  if (!project.videos ||
      project.videos.length === 0) {
    return;
  }

  currentVideo =
    (currentVideo + 1) %
    project.videos.length;

  loadYouTubeVideo(
    project.videos[currentVideo]
  );

  playBarrelAnimation("next");
}


/* ===============================
   PREVIOUS VIDEO
================================ */

function previousVideo() {

  const project = projects[currentProject];

  if (!project.videos ||
      project.videos.length === 0) {
    return;
  }

  currentVideo =
    (currentVideo - 1 +
      project.videos.length) %
    project.videos.length;

  loadYouTubeVideo(
    project.videos[currentVideo]
  );

  playBarrelAnimation("prev");
}


/* ===============================
   NEXT PROJECT
================================ */

function nextProject() {

  const project = projects[currentProject];

  if (
    project.videos &&
    project.videos.length > 0
  ) {
    nextVideo();
    return;
  }

  currentProject =
    (currentProject + 1) % projects.length;

  openProject(currentProject);
}


/* ===============================
   PREVIOUS PROJECT
================================ */

function previousProject() {

  const project = projects[currentProject];

  if (
    project.videos &&
    project.videos.length > 0
  ) {
    previousVideo();
    return;
  }

  currentProject =
    (currentProject - 1 + projects.length) %
    projects.length;

  openProject(currentProject);
}


/* ===============================
   EXPERIENCE CARDS
================================ */

function toggleExperience(card) {

  card.classList.toggle("open");

}


/* ===============================
   PROJECT MODAL BACKGROUND
================================ */

document
  .getElementById("projectModal")
  .addEventListener("click", function(event) {

    if (event.target === this) {
      closeProject();
    }

  });


/* ===============================
   KEYBOARD CONTROLS
================================ */

document.addEventListener("keydown", function(event) {

  const modal =
    document.getElementById("projectModal");

  if (!modal.classList.contains("show")) {
    return;
  }

  if (event.key === "Escape") {
    closeProject();
  }

  if (event.key === "ArrowRight") {
    nextProject();
  }

  if (event.key === "ArrowLeft") {
    previousProject();
  }

});


/* ===============================
   PROFILE MODAL
================================ */

function openProfile() {

  document
    .getElementById("profileModal")
    .classList.add("show");

  document.body.style.overflow = "hidden";
}


function closeProfile() {

  document
    .getElementById("profileModal")
    .classList.remove("show");

  document.body.style.overflow = "";
}


/* ===============================
   PROFILE NAME ANIMATION
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const name =
    document.querySelector(".brand strong");

  if (!name) return;

  const text =
    name.textContent;

  name.innerHTML = "";

  [...text].forEach(function(letter, index) {

    const span =
      document.createElement("span");

    span.className =
      "name-letter";

    span.textContent =
      letter === " "
        ? "\u00A0"
        : letter;

    span.style.animationDelay =
      (index * 0.06) + "s"; 

    name.appendChild(span);

  });

});
