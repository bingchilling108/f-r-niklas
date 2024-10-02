const donut = document.getElementById("donut");

setInterval(function() {
  // code to be executed repeatedly
    console.log(`intervall`);

    function getRandomInt(min, max) {
        console.log(`getrandomint`)
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log(min,max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let leftvalue = getRandomInt(0,100);
    let topvalue = getRandomInt(0,100);

    let topToSet = `${topvalue}%`;
    let leftToSet = `${leftvalue}%`;

    console.log(leftvalue,topvalue);
    console.log(topToSet, leftToSet);

    //donut.animate({
    //    left: topToSet,
    //    top: leftToSet
//
    //}, {duration: 1000, fill: "forwards"});

    donut.style.left = leftToSet;
    donut.style.top = topToSet;
}, 3000)