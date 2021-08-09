let userName = prompt("Adınız nedir?")

function clock() {
    let myName = document.querySelector("#myName")
    myName.innerHTML = `${userName}`

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    mins = checkTime(mins)
    secs = checkTime(secs)

    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${hrs}:${mins}:${secs} ${days[date.getDay()]}`
}
setInterval(clock, 1000);

function checkTime(i){
    if (i < 10){
        i = "0" + i
    };  
    return i;
}

