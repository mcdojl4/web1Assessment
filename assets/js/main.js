const BASE_URL = "https://api.unsplash.com";
let btn = document.querySelector(".dropBtn").addEventListener("click", myFunction);


fetch(BASE_URL + '/search/photos/?query=skincare&client_id=xffONO9umdoAOkcfbV47hqsQT6Br98hnnkqytpNLDi4')
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll("#gallery_section > div img").forEach((img,i) => {
          img.src = data["results"][i]["urls"]["regular"];
          })
      });
      
function myFunction() {
    console.log("Cliclked")
  document.getElementById("menuDropdown").classList.toggle("show");
}

