const move = document.getElementById("peppa");

document.body.onpointermove = event => {
  console.log("Peppa moved")
    const { clientX, clientY } = event;
    console.log(clientX, clientY);

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 1000, fill: "forwards"})

}


// Weise den einzelnen Komponenten Namen zu
const btnCounter = document.getElementById('btnCounter');
const counterText = document.getElementById('counter');