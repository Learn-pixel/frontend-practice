//let clock = document.querySelector(".Clock");
// let ShowColon = true; these are for a blinking colon like those in digital clocks
let Hr=document.getElementById("hr"); // this was done to have blinking colons so each element was seperated but if we don't nee blinking ones we can use the clock element and make the code smaller
let Min=document.getElementById("min");
let Sec=document.getElementById("sec");
let AP=document.getElementById("ap");

function UpdateClock(){
    let now = new Date();

    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ap;
    // let colon = ShowColon?":":"  ";
    // ShowColon = !ShowColon;

    if(hr<12){
        hr = hr<10?"0"+hr:hr;
        min = min<10?"0"+min:min;
        sec = sec<10?"0"+sec:sec;
        ap="AM";

    }
    else{
        hr = Number(hr)-12;
        hr = hr<10?"0"+hr:hr;
        min = min<10?"0"+min:min;
        sec = sec<10?"0"+sec:sec;
        ap="PM";  

    }
    Hr.textContent=`${hr}`;
    Min.textContent=`${min}`;
    Sec.textContent=`${sec}`;
    AP.textContent=`${ap}`;

    //clock.textContent=`${hr}:${min}:${sec} ${ap}`;

   // setTimeout(UpdateClock,1000); this recursively calls the function at an interval of 1sec
}
UpdateClock();
setInterval(UpdateClock,1000) //another function like settimeout but this keeps calling the program at an interval of 1sec...without the function being recursive 


