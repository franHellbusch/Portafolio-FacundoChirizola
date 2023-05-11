const checkbox = document.querySelector("#check");
const navLinks = document.getElementById("navLinks");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});
