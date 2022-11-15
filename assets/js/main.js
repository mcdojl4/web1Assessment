let api_key = "xffONO9umdoAOkcfbV47hqsQT6Br98hnnkqytpNLDi4"
let BASE_URL = "https://api.unsplash.com/search/photos/?query=skincare&client_id={CLIENT_ID}";

fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        console.log(response)
        // date = data["values"][2]["time"].slice(0,10);
        // highTime = data["values"][2]["time"].slice(11,19);
        // lowTime = data["values"][3]["time"].slice(11,19);
        // highTide = data["values"][2]["value"] + " metres";
        // lowTide = data["values"][3]["value"] + " metres";
      });