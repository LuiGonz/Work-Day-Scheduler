function myMonday() {
    window.location.href = "index.html";
}

function myTuesday() {
    window.location.href = "tuesday.html";
}

function myWednesday() {
    window.location.href = "wednesday.html";
}

function myThursday() {
    window.location.href = "thursday.html";
}

function myFriday() {
    window.location.href = "friday.html";
}

function mySaturday() {
    window.location.href = "saturday.html";
}

function mySunday() {
    window.location.href = "sunday.html";
}

// Displays current Date and time
setInterval(function () {
    $(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

// $( document ).ready() will only run once the page Document Object Model (DOM) 
// is ready for JavaScript code to execute
$(document).ready(function () {
    // an array of time from 9-5pm
    const times = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", 
                   "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    const timeText = ["12:00 am", "1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", 
                      "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm"];

    for (let i = 0; i < times.length; i++) {
        // loop will create row with 3 columns
        const row = $("<div>");
        row.addClass("row time-block");
        row.attr("data-time", times[i]);
        $(".container").append(row);

        // col-1 hour
        const column1 = $("<div>");
        column1.addClass("col-1 hour");
        column1.text(timeText[i]);
        row.append(column1);

        // col-10 description   
        const textArea = $("<textarea>");
        textArea.addClass("col-10 description");
        textArea.attr("id", times[i]);
        // get item in local storage 
        var value = localStorage.getItem(times[i]);
        if (value != null) {
            textArea.val(value);
        }
        row.append(textArea);

        // col-1 save button 
        const button = $("<button>");
        const icon = $("<i class='fas fa-save fa-lg'></i>")
        button.addClass("col-1 saveBtn");
        button.append(icon);
        row.append(button);
    }
    
    //on click event listener
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var storeTime = $(this).parent().attr("data-time");
        var storeText = $(this).siblings(".description").val();
        localStorage.setItem(storeTime, storeText);    
    });

    // color codes past, present, and future 
    function update () {
        var  currentTime = parseInt(moment().format('HH'));
        console.log(currentTime);
       
        $("textarea").each (function(){
            var thisHour = parseInt($(this).attr("id"));
            console.log(thisHour);
            if(thisHour > currentTime){
                $(this).addClass("future")
            }
            else if(thisHour === currentTime){
                $(this).addClass("present")
            }
            else {
                $(this).addClass("past")
            }
        })
    }
    update();
})