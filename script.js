//Get the radio buttons and the fields
const barRadio = document.getElementById("barRadio");
const bandRadio = document.getElementById("bandRadio");
const barFields = document.getElementById("bar-sign");
const bandFields = document.getElementById("band-sign");

// Add an event listener to the radio buttons
barRadio.addEventListener("change", () => {
    // Show the fields for bar sign up
    barFields.style.visibility = "visible";
    barFields.style.display = "block";
    bandFields.style.display = "none";
});

bandRadio.addEventListener("change", () => {
    // Show the fields for band sign up
    bandFields.style.visibility = "visible";
    bandFields.style.display = "block";
    barFields.style.display = "none";
});