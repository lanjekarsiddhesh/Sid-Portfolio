// theme change

var Themeicon = document.getElementById('Themeicon');
        Themeicon.onclick = function(){
            document.body.classList.toggle("light-theme");
            if (document.body.classList.contains("light-theme")){
                Themeicon.src = "asset/img/moon.png";
            }
            else{
                Themeicon.src = "asset/img/sun.png";
            }
        }


// active page name link cahnge color in navbar
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("Navbtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeNav");
    current[0].className = current[0].className.replace("activeNav", "");
    this.className += " activeNav";
    });
}


var Quali = document.getElementById("Qualification");
var Qualibtns = Quali.getElementsByClassName("QualiBtn");
for (var i = 0; i < Qualibtns.length; i++) {
    Qualibtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace("actives", "");
    this.className += " actives";
    });
}




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})






