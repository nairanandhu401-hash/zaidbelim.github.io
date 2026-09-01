const projects = [

  {
    title: "ZEDITS",
    videos: ["U4TWIMBK8X4"]
  },

  {
    title: "INDIANINLAST24HRS / BHARAT",
    videos: []
  },

  {
    title: "BOMBAY",
    videos: []
  },

  {
    title: "MAHARASHTRA",
    videos: []
  },

  {
    title: "MEWAR",
    videos: []
  },

  {
    title: "BOLLYWOOD",
    videos: []
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

  if (project.videos.length > 0) {

    image.style.display = "none";
    video.style.display = "block";

    loadYouTubeVideo(project.videos[currentVideo]);

  } else {

    video.style.display = "none";
    video.src = "";

    image.style.display = "block";
    image.src = "";
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
   LOAD YOUTUBE
================================ */

function loadYouTubeVideo(videoId) {

  const video =
    document.getElementById("modalVideo");

  video.src =
    "https://www.youtube.com/embed/" +
    videoId +
    "?rel=0&modestbranding=1&playsinline=1";

}


/* ===============================
   CLOSE PROJECT
================================ */

function closeProject() {

  const video =
    document.getElementById("modalVideo");

  video.src = "";

  document
    .getElementById("projectModal")
    .classList.remove("show");

  document.body.style.overflow = "";
}


/* ===============================
   NEXT VIDEO
================================ */

function nextVideo() {

  const project =
    projects[currentProject];

  if (project.videos.length === 0) return;

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

  const project =
    projects[currentProject];

  if (project.videos.length === 0) return;

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

  const project =
    projects[currentProject];

  if (project.videos.length > 0) {

    nextVideo();
    return;

  }

  currentProject =
    (currentProject + 1) %
    projects.length;

  openProject(currentProject);
}


/* ===============================
   PREVIOUS PROJECT
================================ */

function previousProject() {

  const project =
    projects[currentProject];

  if (project.videos.length > 0) {

    previousVideo();
    return;

  }

  currentProject =
    (currentProject - 1 +
      projects.length) %
    projects.length;

  openProject(currentProject);
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
   EXPERIENCE
================================ */

function toggleExperience(card) {

  card.classList.toggle("open");

}


/* ===============================
   PROJECT BACKGROUND CLICK
================================ */

document
  .getElementById("projectModal")
  .addEventListener("click", function(event) {

    if (event.target === this) {

      closeProject();

    }

  });


/* ===============================
   KEYBOARD
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
   PROFILE
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
   NAME ANIMATION
================================ */

document.addEventListener("DOMContentLoaded", function() {

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