const update = document.querySelector(".btn-update");

update.addEventListener('click', (e) => {

    e.preventDefault();

    const xhttp = new XMLHttpRequest();
    const params = {
        "id": document.getElementById('id').value,
        "activity": document.getElementById('activity').value,
        "startDate": document.getElementById('startDate').value,
        "endDate": document.getElementById('endDate').value,
        "totalDays": document.getElementById('totalDays').value,
        "initiator": document.getElementById('initiator').value,
    };

    xhttp.open("POST", 'assets/php/update.php');
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onload = function() {
        console.log(this.response);
    }

    xhttp.send(JSON.stringify(params));
})