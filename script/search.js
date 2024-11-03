document.addEventListener("DOMContentLoaded", function() {
    // Toggle Search Function
    window.toggleSearch = function() {
        const input = document.querySelector('.input-search');
        input.classList.toggle('active');
        if (input.classList.contains('active')) {
            input.focus();
        }
    };

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const images = document.querySelectorAll('.searchable');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        let hasResults = false;

        images.forEach(image => {
            const altText = image.alt ? image.alt.toLowerCase() : "";
            if (altText.includes(filter)) {
                image.style.display = "";
                hasResults = true;
            } else {
                image.style.display = "none";
            }
        });

        if (!hasResults) {
            console.log("Nincs találat a keresésre!");
        }
    });
});