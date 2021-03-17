var thisDay = new Date().getDate();
var thisMonth = new Date().getMonth() + 1;
if(thisMonth<10){
    thisMonth = '0' + thisMonth;
};
var thisYear = new Date().getFullYear();
var thisHour = new Date().getHours();
var thisMinute = new Date().getMinutes();
var presentDate = `${thisDay}-${thisMonth}-${thisYear} ${thisHour}:${thisMinute}`;
window.addEventListener('load', (event) => {
    for(var i=1; i<=18;i++){
        var buttonDates = document.getElementById('option'+i).value;
        if(buttonDates < presentDate){
            document.getElementById('option'+i).setAttribute('disabled','');
        }
    }
});
 