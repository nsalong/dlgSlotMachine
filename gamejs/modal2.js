// Get the modal
var modal_2 = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption_2");
img.onclick = function(){
    modal_2.style.display = "block";
    modalImg.src = "img/scheme.png";
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal_2.style.display = "none";
}