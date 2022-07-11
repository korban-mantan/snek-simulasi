//disable button
function success() {
    if(document.getElementById("name").value==="") {
        document.getElementById('btn__start').disabled = true;
    } else {
        document.getElementById('btn__start').disabled = false;
    }
}
const getValueInput = () => {

    //close game menu
    let x = document.getElementById('game__menu')
    if(x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none"
    }

    //hide game
    let y = document.getElementById('reload__btn');
    let z = document.getElementById('header');
    if (y.style.display === "block") {
        y.style.display = "none";
    }else{
      y.style.display = "block"
    }
    if (z.style.display === "grid") {
        z.style.display = "none";
    }else{
      z.style.display = "grid"
    }
}

//reload page
function reload() {
    location.reload()
}