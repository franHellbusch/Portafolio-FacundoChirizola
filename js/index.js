const checkbox = document.querySelector("#check");
const navLinks = document.getElementById("navLinks");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});

let cuartoLinks = document.querySelectorAll(".cuartoLinks");

cuartoLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        setTimeout(function () {
            window.location.href = link.getAttribute("href");
        }, 1000);
    });
});
