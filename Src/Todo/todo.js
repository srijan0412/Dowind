// Live Timer
let months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let live_time = document.getElementById("live_time");
setInterval(() => {
    // Getting Time
    let date_time = new Date();
    let live_year = date_time.getFullYear();
    let live_months = date_time.getMonth();
    let live_date = date_time.getDate();
    let live_hrs = date_time.getHours();
    let live_mnt = date_time.getMinutes();
    
    // convert 24hrs to 12 hrs 
    let d;
    if (live_hrs>12) {
        live_hrs-=12;
        d = "pm";
    }
    else {
        d = "am";
    }

    // Add zero before single digit number 
    live_hrs = (live_hrs<10) ? "0"+live_hrs : live_hrs;
    live_mnt = (live_mnt<10) ? "0"+live_mnt : live_mnt;

    // Setting Live Time 
    live_time.innerHTML = live_date + " " + months[live_months] + " " + live_year + ", " + live_hrs + ":" + live_mnt + " "+d;
}, 1000);

