const BASE_URL = "https://api.unsplash.com";
// Setting the button that will run the function menuDropdown using the eventlistener.
let menuBtn = document.querySelector(".menuBtn").addEventListener("click", menuDropdown);
let searchBtn = document.querySelector(".searchBtn").addEventListener("click", searchDropdown)

//fetching the api url with the search parameters.
fetch(BASE_URL + '/search/photos/?query=skincare&client_id=xffONO9umdoAOkcfbV47hqsQT6Br98hnnkqytpNLDi4')
      .then(response => response.json())
      //pushing the data received into a json making it easy to read and navigate.
      .then(data => {
        //selects each gallery sections divs image and setting the source into the url fetched. 
          document.querySelectorAll("#gallery_section > div img").forEach((img,i) => {
          img.src = data["results"][i]["urls"]["regular"];
          })
      });
      
function menuDropdown() {
    //toggles the class show into the menudropdown class list when function is run.
  document.getElementById("menuDropdown").classList.toggle("show");
}

function searchDropdown() {
    console.log("Cliclked")
  document.getElementById("searchDropdown").classList.toggle("show");
}