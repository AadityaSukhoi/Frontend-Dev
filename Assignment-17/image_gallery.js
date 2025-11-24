const galleryImages = document.querySelectorAll(".gallery-image");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

galleryImages.forEach((imageElement) => {
  imageElement.addEventListener("click", () => {
    const srcValue = imageElement.getAttribute("src");
    const altValue = imageElement.getAttribute("alt");

    modalImage.setAttribute("src", srcValue);
    modalImage.setAttribute("alt", altValue);

    modalOverlay.classList.add("active");
  });
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});