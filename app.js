let pass=false;
function toggle() {
    if (pass) {
        document.getElementById("password").setAttribute("type" , "password");
        pass=false;
        document.getElementById("eye").style.color='black'
    } else {
        document.getElementById("password").setAttribute("type" , "text");
        pass=true;   
        document.getElementById("eye").style.color='blue'
    }
}