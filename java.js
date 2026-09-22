document.addEventListener( "DOMContentLoaded",() => {
   const butonnet = document.querySelectorAll(".rating");
   const button = document.querySelector(".submit");

   const cachiii = document.querySelector(".rating-card");
   const blase = document.querySelector(".thank-card");

   const mots = document.querySelector(".selected-rating");

   let vasie = null;



   butonnet.forEach( butonneti => {
        butonneti.addEventListener("click", () =>  {

           vasie = butonneti.dataset.roo;

        
           butonnet.forEach( but => {
               but.classList.remove("selected");
           });


           butonneti.classList.add("selected");
       });
   });



    button.addEventListener("click", () => {

      /* if (vasie === null) {
        
        return;
      }*/

    
      mots.textContent = "You selected " + vasie + " out of 5";


      cachiii.style.display = "none";

   
      blase.style.display = "flex";
   });
});

   






