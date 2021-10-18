var interval = setInterval(function timePrinter() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);