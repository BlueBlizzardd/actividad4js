const create = document.querySelector(".btn-create");

create.addEventListener('click', (e) => {

    e.preventDefault();

    const xhttp = new XMLHttpRequest();
    const params = {
        "activity": document.getElementById('activity').value,
        "startDate": document.getElementById('startDate').value,
        "endDate": document.getElementById('endDate').value,
        "totalDays": document.getElementById('totalDays').value,
        "initiator": document.getElementById('initiator').value,
    };

    xhttp.open("POST", '../php/create.php');
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onload = function() {
        console.log(this.response);
    }

    xhttp.send(JSON.stringify(params));
})