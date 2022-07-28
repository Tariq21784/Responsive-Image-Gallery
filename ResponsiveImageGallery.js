const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        let searchValue = search.value;
        image.forEach(image =>{
            if(value === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    image.forEach(image =>{
        image.style.display = "none";
    })
})