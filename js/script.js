let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function clock () {
    let time = new Date();
    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hours.innerText = hour
    minutes.innerText = minut

    if(minut < 10){
           minutes.innerText = '0' + minut
    }else{
        minutes.innerText = minut
    }

    if(hour < 10){
        hours.innerText = '0' + hour
    }else{
        hours.innerText = hour
    }
    
    
    s.style.transform =`rotate(${sec * 6}deg)`
    m.style.transform =`rotate(${minut * 6}deg)`    
    h.style.transform =`rotate(${hour * 30}deg)` 

    setTimeout(() => { 
        clock()
    }, 1000);


}
clock();
// Sekundomer

let stopwatchhours = document.querySelector('.stopwatch__hours');
let stopwatchminutes = document.querySelector('.stopwatch__minutes')
let stopwatchsecunds = document.querySelector('.stopwatch__seconds')
let stopwatchbtn = document.querySelector('.stopwatch__btn')
let span = document.querySelector('.tabsLink__span')

let stop;

function WatchTemir(){

    

  stop =  setTimeout(() => {
        stopwatchsecunds.innerHTML++
        WatchTemir()
       if (stopwatchsecunds.innerHTML == 59) {
        stopwatchsecunds.innerHTML = 0
        stopwatchminutes.innerHTML++;

        if (stopwatchminutes.innerHTML == 59) {
            stopwatchminutes.innerHTML = 0
              stopwatchhours.innerHTML++;
        }
       }
       
    }, 10);
}


stopwatchbtn.addEventListener('click', () => {
    if (stopwatchbtn.innerHTML == 'start') {
        stopwatchbtn.innerHTML = 'stop'
        WatchTemir();
        span.classList.add('active')
    }else if(stopwatchbtn.innerHTML == 'stop'){
        stopwatchbtn.innerHTML = 'clear'
        clearInterval(stop)
        span.classList.add('active_clear')

    }else if (stopwatchbtn.innerHTML == 'clear') {
          stopwatchbtn.innerHTML = 'start'
          stopwatchsecunds.innerHTML = 0;
          stopwatchminutes.innerHTML = 0;
          stopwatchhours.innerHTML = 0;
          clearInterval(stop)
          span.classList.remove('active')
          span.classList.remove('active_clear')
    }
})

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for(let i = 0; tabsItem.length; i++){
    tabsItem[i].addEventListener('click', () => {
        for(let k = 0; k < tabsItem.length; k++){
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
     })
}
 







