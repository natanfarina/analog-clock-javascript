 let digitalElement= document.querySelector('.digital');
 let dataElement= document.querySelector('.data');
 let sElement = document.querySelector('.p_s');
 let mElement = document.querySelector('.p_m');
 let hElement = document.querySelector('.p_h');


function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
   
    let sDeg = ((360 / 60) * second) - 90; // usa-se o -90 para alinhar o ponto inicial 
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    }


    function fixZero(time){ // funcao para corrigir a formatacao da hora;    
        return time < 10 ? `0${time}` : time;                                  
    }
    

 setInterval(updateClock, 1000);
 updateClock();


    function uptadeDate(){
 let now = new Date();
 let day = now.getDate();
 let month = now.getMonth();
 let year = now.getFullYear()
 dataElement.innerHTML = `${fixZero(day)}/${fixZero(month)}/${fixZero(year)}`;
        }
        uptadeDate();










 // outra maneira de fazer a funcao de corrigir a formatacao da hora:
 // if(time < 10 ){
 //     return '0'+time;
// } else{
// return time;}
                                    