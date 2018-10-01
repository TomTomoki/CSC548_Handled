var currentTime = moment().tz("America/Winnipeg"); //get the current time/date of CDT
var startTime = moment("2018-09-29 16:00"); //YYYY-MM-DD HH:mm, the start time when we want to show the specific profiles
var endTime = moment("2018-11-03 18:00"); //the end time when we stop showing the profiles

if(currentTime.isBefore(startTime) || currentTime.isAfter(endTime)){
  alert("Not available");
} else{
  alert("Show");
}
