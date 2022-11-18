const BASE_URL = "https://api.unsplash.com";

// let quote1H1 = document.querySelectorAll(".quote1 h1");
// let quote1H2 = document.querySelectorAll(".quote1 h2");
// let quote2H1 = document.querySelectorAll(".quote2 h1");
// let quote2H2 = document.querySelectorAll(".quote2 h2");
// let quote3H1 = document.querySelectorAll(".quote3 h1");
// let quote3H2 = document.querySelectorAll(".quote3 h2");
// let h5 = document.querySelectorAll("h5");
// let quoteButton1 = document.querySelector("#button1");
// let quoteButton2 = document.querySelector("#button2");


fetch(BASE_URL + '/search/photos/?query=skincare&client_id=xffONO9umdoAOkcfbV47hqsQT6Br98hnnkqytpNLDi4')
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll("#gallery_section > div img").forEach((img,i) => {
          img.src = data["results"][i]["urls"]["regular"];
          })
      });

  //     quoteButton1.addEventListener("click", e => {
  //       console.log("I was clicked! N1");     
  //       h5.innerHTML = "penis";
        
  //       quote1H1.innerHTML = "It’s wonderful that the production of this soap supports the local community and that the ingredients are native to NZ.";
  //       quote1H2.innerHTML = "- Fiona Morouco";
  //       quote2H1.innerHTML = "I love discovering businesses founded by passionate individuals who are dedicated to minimising harm, respecting people and the planet and creating with care. Aotea embodies all of those attributes and entwines them with a sense of community and culture.";
  //       quote2H2.innerHTML = "- Niccii Kugler";
  //       quote3H1.innerHTML = "A wonderful example of a company embracing it’s cultural and local community, spreading awareness, goodwill and social responsibility. Love the concept of tikanga māori and educating the consumer about the Maori ways.";
  //       quote3H2.innerHTML = "- Sigourney Cantelo";
  //       quoteButton1.innerHTML = <i class="fa-solid fa-circle"></i>;
  //       quoteButton2.innerHTML = <i class="fa-regular fa-circle"></i>;


  //   });

  //   quoteButton2.addEventListener("click", e => {
  //       console.log("I was clicked!"); 

  //       quote1H1.innerHTML = "I love discovering businesses founded by passionate individuals who are dedicated to minimising harm, respecting people and the planet and creating with care. Aotea embodies all of those attributes and entwines them with a sense of community and culture.";
  //       quote1H2.innerHTML = "- Niccii Kugler";
  //       quote2H1.innerHTML = "A wonderful example of a company embracing it’s cultural and local community, spreading awareness, goodwill and social responsibility. Love the concept of tikanga māori and educating the consumer about the Maori ways.";
  //       quote2H2.innerHTML = "- Sigourney Cantelo";
  //       quote3H1.innerHTML = "I buy the Aotea range because of their commitment to sustainability. Their facilities on Aotea are powered by a solar farm and I'm excited to see how they turn their business into a complete circular economy.";
  //       quote3H2.innerHTML = "- K. Hansen (New Zealand)";    

  //       quoteButton1.innerHTML = <i class="fa-solid fa-circle"></i>;
  //       quoteButton2.innerHTML = <i class="fa-regular fa-circle"></i>;

  // });

