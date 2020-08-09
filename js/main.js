function about(){
    document.getElementById("picandslogan").classList.add("notvisible");
    document.getElementById("experience").classList.add("notvisible");
    document.getElementById("contact").classList.add("notvisible");
    setTimeout(function(){
        document.getElementById("picandslogan").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("about").classList.remove("notvisible");
        document.getElementById("about").classList.add("visible");
        document.getElementById("about").style.display = "flex";
    },501)
}
function home(){
    document.getElementById("about").classList.add("notvisible");
    document.getElementById("experience").classList.add("notvisible");
    document.getElementById("contact").classList.add("notvisible");
    setTimeout(function(){
        document.getElementById("about").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("picandslogan").classList.remove("notvisible");
        document.getElementById("picandslogan").classList.add("visible");
        document.getElementById("picandslogan").style.display = "flex";
    },501)
}
function experience(){
    document.getElementById("picandslogan").classList.add("notvisible");
    document.getElementById("about").classList.add("notvisible");
    document.getElementById("contact").classList.add("notvisible");
    setTimeout(function(){
        document.getElementById("about").style.display = "none";
        document.getElementById("picandslogan").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("experience").classList.remove("notvisible");
        document.getElementById("experience").classList.add("visible");
        document.getElementById("experience").style.display = "flex";
    },501)
}
function contact(){
    document.getElementById("picandslogan").classList.add("notvisible");
    document.getElementById("about").classList.add("notvisible");
    document.getElementById("experience").classList.add("notvisible");
    setTimeout(function(){
        document.getElementById("about").style.display = "none";
        document.getElementById("picandslogan").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("contact").classList.remove("notvisible");
        document.getElementById("contact").classList.add("visible");
        document.getElementById("contact").style.display = "flex";
    },501)
}


var aboutbtn = document.getElementById("aboutbtn");
aboutbtn.addEventListener("click", about);

var homebtn = document.getElementById("homebtn");
homebtn.addEventListener("click", home);

var experiencebtn = document.getElementById("experiencebtn");
experiencebtn.addEventListener("click", experience);

var contactbtn = document.getElementById("contactbtn");
contactbtn.addEventListener("click", contact);