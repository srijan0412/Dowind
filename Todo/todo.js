// Page Navigation - 
let btn_today = document.getElementById("btn_today");
let btn_bookmark = document.getElementById("btn_bookmark");
let btn_home = document.getElementById("btn_home");
let btn_calendar = document.getElementById("btn_calendar");

let today = document.getElementById("today");
let bookmark = document.getElementById("bookmark");
let home = document.getElementById("home");
let calendar = document.getElementById("calendar");

// display_none <- to make display as none

const setToday = ()=>{
    // .opened <- declare btn as open 
    btn_today.classList.add('opened');
    today.classList.replace('display_none', 'today_section');

    // Resetting other buttons
    btn_bookmark.classList.remove('opened');
    btn_home.classList.remove('opened');
    btn_calendar.classList.remove('opened');

    // Display others as none
    bookmark.classList.replace('bookmark_section', 'display_none');
    home.classList.replace('home_section','display_none');
    calendar.classList.replace('calendar_section','display_none');
}
btn_today.addEventListener('click', setToday);
document.addEventListener('keydown', (e)=>{
    if (e.key.toLowerCase()==="1" && e.altKey){
        setToday();
    }
});

const setBookmark = ()=>{
    // .opened <- declare btn as open 
    btn_bookmark.classList.add('opened');
    bookmark.classList.replace('display_none', 'bookmark_section');

    // Resetting other buttons
    btn_today.classList.remove('opened');
    btn_home.classList.remove('opened');
    btn_calendar.classList.remove('opened');

    // Display others as none
    today.classList.replace('today_section','display_none');
    home.classList.replace('home_section','display_none');
    calendar.classList.replace('calendar_section','display_none');
}
btn_bookmark.addEventListener('click', setBookmark);
document.addEventListener('keydown', (e)=>{
    if (e.key.toLowerCase()==="2" && e.altKey){
        setBookmark();
    }
});

const setHome = ()=>{
    // .opened <- declare btn as open 
    btn_home.classList.add('opened');
    home.classList.replace('display_none', 'home_section');


    // Resetting other buttons
    btn_today.classList.remove('opened');
    btn_bookmark.classList.remove('opened');
    btn_calendar.classList.remove('opened');

    // Display others as none
    today.classList.replace('today_section','display_none');
    bookmark.classList.replace('bookmark_section','display_none');
    calendar.classList.replace('calendar_section','display_none');
}
btn_home.addEventListener('click', setHome);
document.addEventListener('keydown', (e)=>{
    if (e.key.toLowerCase()==="3" && e.altKey){
        setHome();
    }
});

const setCalendar = ()=>{
    // .opened <- declare btn as open 
    btn_calendar.classList.add('opened');
    calendar.classList.replace('display_none', 'calendar_section');


    // Resetting other buttons
    btn_today.classList.remove('opened')
    btn_bookmark.classList.remove('opened')
    btn_home.classList.remove('opened')

    // Display others as none
    today.classList.replace('today_section','display_none');
    bookmark.classList.replace('bookmark_section','display_none');
    home.classList.replace('home_section','display_none');
}
btn_calendar.addEventListener('click', setCalendar);
document.addEventListener('keydown', (e)=>{
    if (e.key.toLowerCase()==="4" && e.altKey){
        setCalendar();
    }
});


// Today - Section 
// Adding New Note (keyboard - shortcuts)
let new_box = document.getElementsByClassName("task_manipulator")[0];
let close_btn = document.getElementsByClassName("close_btn")[0];
document.addEventListener('keydown', e=>{
    if (e.key.toLowerCase() === "n" && e.altKey){
        new_box.classList.toggle("task_manipulator_open");
    }
});
close_btn.addEventListener('click', ()=>{
    new_box.classList.toggle("task_manipulator_open");
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

