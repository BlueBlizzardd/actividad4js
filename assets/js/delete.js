const del = document.querySelector(".btn-delete");

del.addEventListener('click', (e) => {
    
    e.preventDefault();

    const xhttp = new XMLHttpRequest();
    const params = `id=${document.getElementById("id").value}`;

    xhttp.open("POST", '../php/delete.php');
    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhttp.onload = function() {
        console.log(this.response);
    }

    xhttp.send(params);
})