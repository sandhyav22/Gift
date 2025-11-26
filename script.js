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



  // Popup open/close
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("customPopup");

openPopup.onclick = () => popup.style.display = "flex";
closePopup.onclick = () => popup.style.display = "none";

window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
};

// Upload icon triggers file input
const uploadIcon = document.getElementById("uploadIcon");
const imageUpload = document.getElementById("imageUpload");
const previewImg = document.getElementById("previewImg");

uploadIcon.onclick = () => imageUpload.click();

// When image selected → preview it
imageUpload.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
        previewImg.src = URL.createObjectURL(file);
        previewImg.style.display = "block";

        // Hide icon & text when preview shows
        uploadIcon.style.display = "none";
    }
};


 const closeSuccess = document.getElementById("closeSuccess");

closeSuccess.onclick = () => {
    successPopup.style.display = "none";
};
  const submitBtn = document.querySelector(".submit-btn");
const successPopup = document.getElementById("successPopup");
const mainPopup = document.getElementById("customPopup");

submitBtn.onclick = () => {
    mainPopup.style.display = "none";   // close form popup
    successPopup.style.display = "flex"; // show success popup
};