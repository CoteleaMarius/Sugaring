var thisDay = new Date().getDate();
var thisMonth = new Date().getMonth() + 1;
if(thisMonth<10){
    thisMonth = '0' + thisMonth;
};
var thisYear = new Date().getFullYear();
var presentDate = `${thisYear}-${thisMonth}-${thisDay}`;
window.addEventListener('load', (event) => {
    for(var i=1; i<=18;i++){
        var buttonDates = document.getElementById('option'+i).value;
        if(buttonDates < presentDate){
            document.getElementById('option'+i).setAttribute('disabled','');
        };
    };
});

if(document.getElementById("option18").checked()){
    document.getElementById('buton-final').removeAttribute('disabled');
    console.log('Success');
};