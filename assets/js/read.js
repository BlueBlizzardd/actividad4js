const read = document.querySelector(".btn-fetch");

read.addEventListener('click', () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", '/json/data.json');
    xhttp.responseType = "json";
    xhttp.send();

    xhttp.onload = function () {
        document.querySelector(".response").innerHTML = `<table id="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Actividad</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Cierre</th>
                    <th>Dias</th>
                    <th>Iniciador</th>
                </tr>
            </thead>`;
        for(obj of this.response) {
            document.getElementById("table").innerHTML += `<tr id="${obj.id}">
                <td>${obj.id}</td>
                <td>${obj.activity}</td>
                <td>${obj.startDate}</td>
                <td>${obj.endDate}</td>
                <td>${obj.totalDays}</td>
                <td>${obj.initiator}</td>
            </tr>`;
        }
        document.querySelector(".response").innerHTML += `</table>`;
    };
})