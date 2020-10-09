window.onload = function(){

    function timer(){
    const month = new Array();
    month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";



        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
                        
    let today_date = new Date();
    //Adding 10 days to today's date: Todays Date + (9 days * 24 hours * 60 min * 60 sec * 1000 millisecond)
    let plus_ten_date = new Date(today_date.getTime()+(10*24*60*60*1000));


    document.getElementById("end_day").innerHTML=weekday[plus_ten_date.getDay()];
    document.getElementById("end_date").innerHTML=plus_ten_date.getDate()+" ";
    document.getElementById("end_month").innerHTML=month[plus_ten_date.getMonth()]+" ";
    document.getElementById("end_year").innerHTML=plus_ten_date.getFullYear();



    
    //Remaining Hours for today = 23hrs - today_hrs
    let today_hours = 23 -  today_date.getHours();

    //Countdown always ends at 11:30 am , so we have remaining 11 hrs on the ending day    
    let ending_hours = 11;

     // so total remaining hours would be = today_hrs + ending_day_hrs   
    let total_remaining_hours = today_hours+ending_hours;


    let remaining_days= (plus_ten_date.getDate() - today_date.getDate() ) - 1 ;

    //If we have more than 24 hrs  of total remaining hours, then add it to no.of days. And subtract from 24 hours to get actual hours.
    // FOr eg, today we have 20 hrs (4 AM in the monring ) and end_day we have as usual 11 hrs. SO total remaining hours would be 31 hrs.
    //so add one day and 24 -31=7 hrs remaining   
    if(total_remaining_hours>=24){
        remaining_days += 1;
        total_remaining_hours = Math.abs(24 - total_remaining_hours) ;

    }


    if(remaining_days < 10){

       remaining_days = formatTime(remaining_days);
    }

    if(total_remaining_hours < 10){

        total_remaining_hours  =  formatTime(total_remaining_hours);
    }



    let todays_reamining_min = 59 - today_date.getMinutes();

    let remaining_min = 30 + todays_reamining_min;

    if(remaining_min>=60){
        total_remaining_hours += 1;
        remaining_min = Math.abs(60 - remaining_min) ;

    }

    //To get reverse countdown effect subtract 60 seconds
    let remaining_sec = 60 - today_date.getSeconds();

    if(remaining_min < 10){

        remaining_min =   formatTime(remaining_min);
        }

        if(remaining_sec < 10){

            remaining_sec = formatTime(remaining_sec);
        }

    
    document.getElementById("day").innerHTML=remaining_days;

    document.getElementById("hour").innerHTML=total_remaining_hours;

    document.getElementById("min").innerHTML=remaining_min;

    document.getElementById("sec").innerHTML=remaining_sec;


    setInterval(timer,1000);

    }
    function formatTime(time){

        return "0"+time;

    }

    timer();
    
    }
