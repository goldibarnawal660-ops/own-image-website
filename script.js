
function searchImages() {
    let input = document
        .getElementById("search")
        .value.toLowerCase().trim();

    let photos = document.querySelectorAll(".photo");
    let heading = document.getElementById("heading");
    let message = document.getElementById("message");
    let count = 0;

    heading.textContent = input
        ? "Results for: " + input
        : "Explore Images";

    photos.forEach(function(photo) {
        let name = photo.dataset.name;

        if (input === "" || name.includes(input)) {
            photo.style.display = "block";
            count++;
        } else {
            photo.style.display = "none";
        }
    });

    if (count === 0) {
        message.textContent =
            "No images found. Try nature, flowers, mountains, ocean, animals or city.";
    } else {
        message.textContent = count + " images found";
    }
}

document.getElementById("search").addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            searchImages();
        }
    }
);
