let $firstButton = document.getElementById('first-button');
let $lastButton = document.getElementById('last-button');
let $emailButton = document.getElementById('email-button');
let $addressButton = document.getElementById('address-button');
let $notesButton = document.getElementById('notes-button');
let $dateButton = document.getElementById('date-button');
let $telButton = document.getElementById('tel-button');
let $searchButton = document.getElementById('search_btn');
let $resetButton = document.getElementById('reset_btn');
let $tBody = document.getElementById('t-body');

let content = '';

let counter = 0;

let currentData = data;


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

function order(property) {
    let sorted = currentData.sort(function (a, b) {
        var x = a[property].toLowerCase();
        var y = b[property].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    
    counter%2==0 ? fillTable(sorted): fillTable(sorted.reverse());

    counter++;
}

$firstButton.addEventListener('click', () => {
    order('first name');
});

$lastButton.addEventListener('click', () => {
    order('last name');
});

$emailButton.addEventListener('click', () => {
    order('email');
});

$addressButton.addEventListener('click', () => {
    order('address');
});

$notesButton.addEventListener('click', () => {
    order('notes');
});

$dateButton.addEventListener('click', () => {
    order('date added');
});

$telButton.addEventListener('click', () => {
    order('telephone');
});

$searchButton.addEventListener('click', () => {
    let $searchVal = document.getElementById('searchVal');
    
    if (!$searchVal.value) {
        return;
    } else {
        let results = data.filter(dat => {
            return Object.keys(dat).reduce((acc, curr)=>{
           return acc || dat[curr].toLowerCase().includes($searchVal.value);
        }, false);
        });

        currentData = results;
        fillTable(results);
    }
});

$resetButton.addEventListener('click', () => {
    currentData = data;
    fillTable(data)
});