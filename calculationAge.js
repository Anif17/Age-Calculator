function age() {
    var dateUser = document.getElementById("date").value;
    var monthUser = document.getElementById("month").value;
    var yearUser = document.getElementById("year").value;
    var date = new Date();
    var dateNow = date.getDate();
    var monthNow = 1 + date.getMonth();
    var yearNow = date.getFullYear();
    var m = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(dateUser > dateNow) {
        dateNow = dateNow + m[monthNow-1];
        monthNow = monthNow - 1;
    }
    if(monthUser > monthNow) {
        monthNow = monthNow + 12;
        yearNow = yearNow - 1;
    }

    var date = dateNow - dateUser;
    var month = monthNow - monthUser;
    var year = yearNow - yearUser

    document.getElementById('age').innerHTML = 'Your Age is ' + year + ' Years ' + month + ' Months ' + date + ' Days';
}