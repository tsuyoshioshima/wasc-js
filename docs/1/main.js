"use strict";
function clock() {
    var now = new Date();
    var timeTokyo = now.getTime();
    var timeUTC = timeTokyo - 9 * 60 * 60 * 1000;
    var cityElement = document.getElementById("city");
    var index = cityElement.selectedIndex;
    var timeZone = cityElement.options[index].value;
    var timezoneElement = document.getElementById("timezone");
    timezoneElement.innerHTML = "TimeZone:" + timeZone;
    var timeCity = timeUTC + timeZone * 60 * 60 * 1000;
    now = new Date(timeCity);
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var hour_s = hour.toString();
    var min_s = min.toString();
    var sec_s = sec.toString();
    if (hour < 10) {
        hour_s = "0" + hour_s;
    }
    if (min < 10) {
        min_s = "0" + min_s;
    }
    if (sec < 10) {
        sec_s = "0" + sec_s;
    }
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = hour_s + ":" + min_s + ":" + sec_s;
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var month_s = month.toString();
    var day_s = day.toString();
    if (month < 10) {
        month_s = "0" + month_s;
    }
    if (day < 10) {
        day_s = "0" + day_s;
    }
    var weekArray = ["日", "月", "火", "水", "木", "金", "土"];
    var week = weekArray[now.getDay()];
    var dayElement = document.getElementById("date");
    dayElement.innerHTML = year + "/" + month_s + "/" + day_s + "　" + week;
}
