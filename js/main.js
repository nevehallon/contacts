let $firstButton = document.getElementById('first-button');
let $lastButton = document.getElementById('last-button');
let $emailButton = document.getElementById('email-button');
let $addressButton = document.getElementById('address-button');
let $notesButton = document.getElementById('notes-button');
let $dateButton = document.getElementById('date-button');
let $telButton = document.getElementById('tel-button');

let $tBody = document.getElementById('t-body');

let content = '';

let counter = 0;



function fillTable(obj) {
    content = '';
    $tBody.innerHTML = '';

    for (let i = 0; i < obj.length; i++) {
        content += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${obj[i]['first name']}</td>
        <td>${obj[i]['last name']}</td>
        <td>${obj[i]['email']}</td>
        <td>${obj[i]['address']}</td>
        <td>${obj[i]['notes']}</td>
        <td>${obj[i]['date added']}</td>
        <td>${obj[i]['telephone']}</td>
        </tr>`;
    }

    $tBody.innerHTML = content;
}

fillTable(data);

$firstButton.addEventListener('click', () => {
    let firstNameSorted = data.sort(function (a, b) {
        var x = a['first name'].toLowerCase();
        var y = b['first name'].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    
    counter%2==0 ? fillTable(firstNameSorted): fillTable(firstNameSorted.reverse());

    counter++;
});

$lastButton.addEventListener('click', () => {
    let lastNameSorted = data.sort(function (a, b) {
        var x = a['last name'].toLowerCase();
        var y = b['last name'].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    counter%2==0 ? fillTable(lastNameSorted): fillTable(lastNameSorted.reverse());

    counter++;
});

$emailButton.addEventListener('click', () => {
    let emailSorted = data.sort(function (a, b) {
        var x = a.email.toLowerCase();
        var y = b.email.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    counter%2==0 ? fillTable(emailSorted): fillTable(emailSorted.reverse());

    counter++;
});

$addressButton.addEventListener('click', () => {
    let addressSorted = data.sort(function (a, b) {
        var x = a.address.toLowerCase();
        var y = b.address.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    counter%2==0 ? fillTable(addressSorted): fillTable(addressSorted.reverse());

    counter++;
});

$notesButton.addEventListener('click', () => {
    let notesSorted = data.sort(function (a, b) {
        var x = a.notes.toLowerCase();
        var y = b.notes.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    counter%2==0 ? fillTable(notesSorted): fillTable(notesSorted.reverse());

    counter++;
});

$dateButton.addEventListener('click', () => {
    let dateSorted = data.sort(function (a, b) {
        var x = a["date added"].toLowerCase();
        var y = b["date added"].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    counter%2==0 ? fillTable(dateSorted): fillTable(dateSorted.reverse());

    counter++;
});

$telButton.addEventListener('click', () => {
    let telSorted = data.sort(function (a, b) {
        var x = a.telephone.toLowerCase();
        var y = b.telephone.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    
    counter%2==0 ? fillTable(telSorted): fillTable(telSorted.reverse());

    counter++;
});


