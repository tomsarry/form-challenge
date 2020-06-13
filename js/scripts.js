var checkbox = document.querySelector("#data-structures");


checkbox.addEventListener("change", function() {
    if (this.checked) {
        dropdown.style.display = "flex";
        // dropdown.style.opacity = "1";
        dropdown.style.height = "auto";
    } else {
        dropdown.style.display = "none";
        // dropdown.style.opacity = "0";    
        dropdown.style.height = "0px"; 
    }
});
