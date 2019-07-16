/*function activateGallery(){
  alert("Hello from the gallery file!");
}*/
// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  /* Method chaining to select all thumbnail images (i.e. all img tags that are 
  inside a div containing the CSS id gallery-thumbs). */
  /*let thumbnails = document.querySelector("#gallery-thumbs").
                   querySelectorAll("img");*/
  // Exercise 11.2.1 #2 Replace method chaining with angle bracket nesting
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");           
  // Current main image
  let mainImage = document.querySelector("#gallery-photo img");

  /* Iterate through thumbnais and put an event listener on each. */
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Code to set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Code to set clicked image alt as main alt
      let newImageAlt = thumbnail.alt;
      mainImage.setAttribute("alt", newImageAlt);

      // Code to change which image is current.
      // document.querySelector(".current").classList.remove("current");
      let current = document.querySelector(".current");
      let currentClass = "current";

      current.classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Code to update image info
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML        = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}