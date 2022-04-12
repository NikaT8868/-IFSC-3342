window.onload = function () {
    document.getElementById("PM_section").style.display = "none";
    document.getElementById("Trails_section").style.display = "none";
    document.getElementById("Things to Do_section").style.display = "none";
    
};

function openTab(evt, gallary_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(gallary_name).style.display = "block";
    evt.currentTarget.className += " active";
}

function toTop() {
    window.scrollTo(0,0);
}