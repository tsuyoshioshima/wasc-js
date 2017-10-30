function clock() {
    let now = new Date();
    
    let timeTokyo: number = now.getTime();

    let timeUTC: number = timeTokyo - 9*60*60*1000;

    let cityElement: any = document.getElementById("city");
    let index: number = cityElement.selectedIndex;
    let timeZone: number = cityElement.options[index].value;

    let timezoneElement: any = document.getElementById("timezone");
    timezoneElement.innerHTML = "TimeZone:" + timeZone;

    let timeCity: number = timeUTC + timeZone*60*60*1000;
    
    now = new Date(timeCity);

    let hour: number = now.getHours();
    let min: number = now.getMinutes();
    let sec: number = now.getSeconds();
    let hour_s: String = hour.toString();
    let min_s: String = min.toString();
    let sec_s: String = sec.toString();

    if ( hour < 10 ) { hour_s = "0" + hour_s; }
    if ( min < 10 ) { min_s = "0" + min_s; }
    if ( sec < 10 ) { sec_s = "0" + sec_s;  }

    let timeElement: any = document.getElementById("time");
    timeElement.innerHTML =  hour_s + ":" + min_s + ":" + sec_s ;
    
    let year: number = now.getFullYear();
    let month: number = now.getMonth() + 1;
    let day: number = now.getDate();
    let month_s: string = month.toString();
    let day_s: string = day.toString();

    if ( month < 10 ) { month_s = "0" + month_s; }
    if ( day < 10 ) { day_s = "0" + day_s; }

    let weekArray: string[] = ["日", "月", "火", "水", "木", "金", "土"];
    let week: string = weekArray[now.getDay()];
    
    let dayElement: any = document.getElementById("date");
    dayElement.innerHTML = year + "/" + month_s + "/" + day_s + "　" + week;
}
