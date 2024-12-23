const butt = document.getElementById("butt");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const session = document.getElementById("session");

function timer(){
    function changer(xx, num){
        if (xx.textContent != num){
            xx.style.backgroundColor = "white";
            setTimeout(() => {
                xx.textContent = num;
                xx.style.backgroundColor = "transparent";
            }, 100);
        }
    }

    function updateTime(){
        let currTime = new Date();
        let hours = currTime.getHours();
        if (hours > 11){
            hours = hours - 12;
            if (session.textContent != "PM"){
                // session.textContent = "PM";
                changer(session, "PM");
            }
        } else {
            if (session.textContent != "AM"){
                // session.textContent = "AM";
                changer(session, "AM");
            }
        }
        // console.log(currTime);


        let hh = [...String(hours).padStart(2, "0")];
        let mm = [...String(currTime.getMinutes()).padStart(2, "0")];
        let ss = [...String(currTime.getSeconds()).padStart(2, "0")];

        changer(h1, hh[0]);
        changer(h2, hh[1]);
        changer(m1, mm[0]);
        changer(m2, mm[1]);
        changer(s1, ss[0]);
        changer(s2, ss[1]);

        // if (Number(h1.textContent)){

        // }

        // let x = Number(h1.textContent) + 1;
        // h1.style.backgroundColor = "white";
        
        // setTimeout(() => {
        //     h1.textContent = x;
        //     h1.style.backgroundColor = "transparent";
        // }, 100);
        
    }

    return {updateTime};
}

setInterval(timer().updateTime, 1000);
    

