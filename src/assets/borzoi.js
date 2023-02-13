//Card hover using events
document.querySelector(".card").addEventListener("mouseover", function(e){
    document.querySelectorAll(".card").forEach((item) => {
        if(!item.classList.contains("basic")){
             item.classList.add("basic");
             console.log(item);
        }
        else{
          item.classList.remove("basic");
          console.log(item);
        }
      });
    });
      
    //Duplicate Button
    document.querySelector("#duplicate").addEventListener("click", function(e){
      const cloneCard = document.querySelector(".card").cloneNode(true);
      document.body.appendChild(cloneCard);
      console.log(cloneCard);
    });
    
    //Background Button
    document.querySelector("#bg").addEventListener("click", function(e){
      document.querySelectorAll(".card").forEach((item) => {
        if(!item.classList.contains("basic")){
             item.classList.add("basic");
             console.log(item);
        }
        else{
          item.classList.remove("basic");
          console.log(item);
        }
      });
    });
    
    //Heading Button
    document.querySelector("#header").addEventListener("click", function(e){
      if(document.querySelector(".title").innerHTML=="something else"){
          document.querySelector(".title").innerHTML="Baljeet: The IT GOD";
      }
      else{
          document.querySelector(".title").innerHTML="something else";
      }
    });
    
    //Delete Button
    document.querySelector("#delete").addEventListener("click", function(e){
      const card = document.querySelectorAll(".card");
      const last = card[card.length-1];
      last.remove();
      console.log(last);
    });