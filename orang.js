// cat boot
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// sidebar
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

//dapat data orang

function getdata() {
  fetch("https://randomuser.me/api/?results=")
    .then((res) => res.json())
    .then((data) => {
      let orang = data.results;
      let namaorang = orang[0].name.first + " " + orang[0].name.last;
      console.log(orang);
      document.getElementById("gambarorang").style.visibility = "visible";
      document.getElementById("gambarorang").src = `${orang[0].picture.large}`;
      document.getElementById("idnamaorang").innerHTML = `${namaorang}`;
    });
}
