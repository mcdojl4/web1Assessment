const BASE_URL = "https://api.unsplash.com";
let menuBtn = document.querySelector(".menuBtn").addEventListener("click", menuDropdown);
let searchBtn = document.querySelector(".searchBtn").addEventListener("click", searchDropdown)


fetch(BASE_URL + '/search/photos/?query=skincare&client_id=xffONO9umdoAOkcfbV47hqsQT6Br98hnnkqytpNLDi4')
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll("#gallery_section > div img").forEach((img,i) => {
          img.src = data["results"][i]["urls"]["regular"];
          })
      });
      
function menuDropdown() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

function searchDropdown() {
    console.log("Cliclked")
  document.getElementById("searchDropdown").classList.toggle("show");
}