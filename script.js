const projects = [

  {
    title: "ZEDITS",

    videos: [
      "0sMisbzZ5Uc"
    ],

    image: "",
    link: ""
  },

  {
    title: "INDIANINLAST24HRS / BHARAT",

     videos: [
      "indianlast1.mp4",
      "indianlast2.mp4"
     ],

    image: "",
    link: ""
  },

  {
    title: "BOMBAY",
 
     videos: [
      "bombay1.mp4",
      "bombay2.mp4",
      "bombay3.mp4",
      "bombay4.mp4",
      "bombay5.mp4",
      "bombay6.mp4",
      "bombay7.mp4",
      "bombay8.mp4",
      "bombay9.mp4"
      ],

    image: "",
    link: ""
  },

  {
    title: "MAHARASHTRA",

     videos: [
      "maharastra1.mp4",
      "maharastra2.mp4",
      "maharastra3.mp4",
      "maharastra4.mp4",
      "maharastra5.mp4",
      "maharastra6.mp4",
      "maharastra7.mp4"
      ],

    image: "",
    link: ""
  },

  {
    title: "MEWAR",

     videos: [
      "mewar1.mp4",
      "mewar2.mp4",
      "mewar3.mp4"
      ],
    
    image: "",
    link: ""
  },

  {
    title: "BOLLYWOOD",

     videos: [
      "bollywood1.mp4",
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

  const project = projects[index];

  const video = document.getElementById("modalVideo");
  const image = document.getElementById("modalImage");

  if (project.videos && project.videos.length > 0) {

    currentVideo = 0;

    image.style.display = "none";
    video.style.display = "block";

    video.src = project.videos[currentVideo];
    video.load();

  } else {

    video.pause();
    video.removeAttribute("src");
    video.load();

    video.style.display = "none";
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

function playBarrelAnimation(direction) {

  const video =
    document.getElementById("modalVideo");

  video.classList.remove("barrel-next", "barrel-prev");

  // Animation ko restart karna
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

  if (!project.videos) return;

  currentVideo =
    (currentVideo + 1) % project.videos.length;

  const video =
    document.getElementById("modalVideo");

  video.src = project.videos[currentVideo];

  video.load();

  playBarrelAnimation("next");
}

/* ===============================
   PREVIOUS VIDEO
================================ */

function previousVideo() {

  const project = projects[currentProject];

  if (!project.videos) return;

  currentVideo =
    (currentVideo - 1 + project.videos.length) %
    project.videos.length;

  const video =
    document.getElementById("modalVideo");

  video.src = project.videos[currentVideo];

  video.load();

  playBarrelAnimation("prev");
}

/* ===============================
   NEXT BUTTON
================================ */

function nextProject() {

  const project = projects[currentProject];

  /*
    If we're inside ZEDITS,
    right arrow changes video.
  */

  if (project.videos && project.videos.length > 0) {

    nextVideo();

    return;
  }


  /*
    For other projects,
    right arrow changes project.
  */

  currentProject =
    (currentProject + 1) % projects.length;

  openProject(currentProject);
}


/* ===============================
   PREVIOUS BUTTON
================================ */

function previousProject() {

  const project = projects[currentProject];

  /*
    If we're inside ZEDITS,
    left arrow changes video.
  */

  if (project.videos && project.videos.length > 0) {

    previousVideo();

    return;
  }


  /*
    For other projects,
    left arrow changes project.
  */

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
   PROJECT MODAL BACKGROUND CLICK
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
