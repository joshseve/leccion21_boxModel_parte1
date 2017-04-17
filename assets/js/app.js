var imgs=document.getElementsByClassName(“image”);

for(i = 0; i < imgs.length; i++){
 imgs[i].addEventListener(“click”, abrir);
}

function abrir(){

 document.getElementById(“myModal”).style.display=“block”;
 document.getElementById(“imageZoom”).src = this.src
}

var span = document.getElementsByClassName(“close”)[0];
 span.onclick = function() {
 document.getElementById(“myModal”).style.display = “none”;
}
