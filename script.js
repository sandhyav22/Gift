    function toggleMenu() {
      document.getElementById('menu').classList.toggle('show');
    }

    // Replace value on focus
    document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('searchInput');
      input.addEventListener('focus', function() {
        input.value = 'Personification Gifts';
      });
    });



 
const gridImages = document.querySelectorAll(".three-image-grid img");

gridImages.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("img-enlarged");
    });
});




    document.querySelectorAll(".heart-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");

        let icon = this.querySelector("i");

        if (this.classList.contains("active")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });
});


