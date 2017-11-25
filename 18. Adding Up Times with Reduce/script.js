    const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

    const seconds = timeNodes.map(timeNode => timeNode.dataset.time);



    newSeconds = seconds.map(timeCode => {
            const [mins, secs] = timeCode.split(':').map(parseFloat);
            return (mins * 60) + secs;
        });
    newSeconds2 = newSeconds.reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = newSeconds2;

    const hours = Math.floor(secondsLeft / 3600);
    console.log("Hours: " + hours);
    secondsLeft = secondsLeft % 3600;
    
    const minutes = Math.floor(secondsLeft / 60);
    console.log("Minutes: " + minutes);

    secondsLeft = secondsLeft % 60;
    console.log("Seconds: " + secondsLeft);