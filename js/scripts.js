var checkbox = document.querySelector("#data-structures");


checkbox.addEventListener("change", function() {
    if (this.checked) {
        data.style.display = "flex";
        data.style.height = "auto";
    } else {
        data.style.display = "none";  
        data.style.height = "0px"; 
    }
});
