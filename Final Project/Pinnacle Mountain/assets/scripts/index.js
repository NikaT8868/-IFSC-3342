/* **************************************** 
			Open Redirect Function  
***************************************** */
function openRedirect(url) {
    window.location.href = url;
  }
  
  /* **************************************** 
    Modal Box for Contact Info  
  ***************************************** */
  // Get the modal
  var modal = document.getElementById("CntcModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("CntcMdlBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  
  /* **************************************** 
      Map Animated Modal  
  ***************************************** */   
  // Get the modal
  var mamModal = document.getElementById("mamModalId");
  
  // Get the button that opens the modal
  var btn = document.getElementById("mamBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("mamClose")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
  mamModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  mamModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == mamModal) {
    mamModal.style.display = "none";
  }
  }
  
  /* ********************************************** 
    Responsive Topnav with Dropdown	 
  *********************************************** */
  //Get the button:
  mybutton = document.getElementById("topBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function topNavIconClk() {
  var x = document.getElementById("dbTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
  
  /* ********************************************** 
    Lightbox (Modal Image Gallery) 	 
  *********************************************** */
  // Open the Modal
  function openModalLightbox() {
  document.getElementById("theModalLightbox").style.display = "block";
  }
  
  // Close the Modal
  function closeModalLightbox() {
  document.getElementById("theModalLightbox").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlidesLightbox(n) {
  showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlideLightbox(n) {
  showSlides(slideIndex = n);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  