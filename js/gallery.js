let thumbnails = document.querySelectorAll(".thumbnail")
let maindisplay = document.getElementById("main-display")

for(let i=0; i<thumbnails.length; i++) {
    thumbnails[i].addEventListener("click",
        function() {
            maindisplay.src = this.src
        }
    )
}