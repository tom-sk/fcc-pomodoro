
    var count = 1;
    var countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.value = count;
    }
    function minus(){
      if (count > 0) {
        count--;
        countEl.value = count;
      }  
    }


var interval;

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    interval = setInterval(timer, 1000);
}

var startFunction = function () {
    var fiveMinutes = 60 * count,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
var stopFunction = function () {
    clearInterval(interval);
};
var resumeFunction = function(){
    
};

var countVal = document.querySelector('#count');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var resume = document.querySelector('#resume');

start.addEventListener('click', function(){
    startFunction();
});

stop.addEventListener('click', function(){
    stopFunction();
});

resume.addEventListener('click', function(){
    resumeFunction();
});




