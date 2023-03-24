// Todo-List Manipulation
let btn_today = document.getElementById("btn_today");
let btn_bookmark = document.getElementById("btn_bookmark");
let btn_home = document.getElementById("btn_home");
let btn_calendar = document.getElementById("btn_calendar");

let today = document.getElementById("today");
let bookmark = document.getElementById("bookmark");
let home = document.getElementById("home");
let calendar = document.getElementById("calendar");

// display_none <- to make display as none

btn_today.addEventListener('click', ()=>{
    // .opened <- declare btn as open 
    btn_today.classList.add('opened');
    today.classList.remove('display_none');

    // Resetting other buttons
    btn_bookmark.classList.remove('opened');
    btn_home.classList.remove('opened');
    btn_calendar.classList.remove('opened');

    // Display others as none
    bookmark.classList.add('display_none');
    home.classList.add('display_none');
    calendar.classList.add('display_none');
});

btn_bookmark.addEventListener('click', ()=>{
    // .opened <- declare btn as open 
    btn_bookmark.classList.add('opened');
    bookmark.classList.remove('display_none');

    // Resetting other buttons
    btn_today.classList.remove('opened');
    btn_home.classList.remove('opened');
    btn_calendar.classList.remove('opened');

    // Display others as none
    today.classList.add('display_none');
    home.classList.add('display_none');
    calendar.classList.add('display_none');
});

btn_home.addEventListener('click', ()=>{
    // .opened <- declare btn as open 
    btn_home.classList.add('opened');

    // Resetting other buttons
    btn_today.classList.remove('opened');
    btn_bookmark.classList.remove('opened');
    btn_calendar.classList.remove('opened');
});

btn_calendar.addEventListener('click', ()=>{
    // .opened <- declare btn as open 
    btn_calendar.classList.add('opened');

    // Resetting other buttons
    btn_today.classList.remove('opened')
    btn_bookmark.classList.remove('opened')
    btn_home.classList.remove('opened')
});




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

