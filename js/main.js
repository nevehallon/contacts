let $firstButton = document.getElementById('first-button');
let $lastButton = document.getElementById('last-button');
let $emailButton = document.getElementById('email-button');
let $addressButton = document.getElementById('address-button');
let $notesButton = document.getElementById('notes-button');
let $dateButton = document.getElementById('date-button');
let $telButton = document.getElementById('tel-button');
let $searchButton = document.getElementById('search_btn');
let $resetButton = document.getElementById('reset_btn');
let $addButton = document.getElementById('add_btn');

let $modalBody = document.getElementById('modalBody');
let $tBody = document.getElementById('t-body');

let content = '';

let counter = 0;
let currentData;

if (localStorage.getItem('temp') !== null) {
    currentData = localStorage.getItem('temp');
    currentData = JSON.parse(currentData);
    console.log(currentData);
    
} else {
    currentData = data;
}


let strData = JSON.stringify(currentData);

localStorage.setItem('temp', strData);

function fillTable(obj) {
    content = '';
    $tBody.innerHTML = '';

    for (let i = 0; i < obj.length; i++) {
        content += `<tr onclick="displayMe(this)" data-toggle="modal" data-target="#modalCenter">
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

fillTable(currentData); //initial fill of data to page

// for disabling form submissions if there are invalid fields
function validate() {
    'use strict';
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

function addContact() {
    $modalBody.innerHTML = `
    <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomEmail">Email</label>
      <div class="input-group">
        <input type="email" class="form-control" id="validationCustomEmail" placeholder="Email" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please enter valid email.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Address</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Address" required>
      <div class="invalid-feedback">
        Please provide a valid address.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">Tel number</label>
      <input type="tel" class="form-control" id="validationCustom04" placeholder="Tel number" required>
      <div class="invalid-feedback">
        Please provide a valid telephone number.
      </div>
    </div>
    <div class="form-group">
        <label for="textarea1">Notes</label>
        <textarea class="form-control" id="textarea1" rows="3" required></textarea>
    </div>
  </div>
  <button id="addContactSubmit" class="btn btn-primary" type="submit">Submit form</button>
</form>
    `;

    validate();

    let $addContactSubmit = document.getElementById('addContactSubmit');

    $addContactSubmit.addEventListener('click', (e) => {
        let $firstName = document.getElementById('validationCustom01');
        let $lastName = document.getElementById('validationCustom02');
        let $email = document.getElementById('validationCustomEmail');
        let $address = document.getElementById('validationCustom03');
        let $tel = document.getElementById('validationCustom04');
        let $notes = document.getElementById('textarea1');

        let $closeButton = document.querySelector('button[data-dismiss="modal"]')

        if ($firstName.value !== '' &&
            $lastName.value !== '' &&
            $email.value !== '' &&
            $address.value !== '' &&
            $tel.value !== '') {

            e.preventDefault();

            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            let hour = d.getHours() + 1;
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();


            currentData[currentData.length] = {
                "first name": `${$firstName.value}`,
                "last name": `${$lastName.value}`,
                "email": `${$email.value}`,
                "address": `${$address.value}`,
                "notes": `${$notes.value}`,
                "date added": `${year}-${month}-${day} ${hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`,
                "telephone": `${$tel.value}`
            };
            $closeButton.click();

            fillTable(currentData);

            localStorage.setItem('temp', JSON.stringify(currentData));
        }
    });

}

function displayMe(that) {
    $modalBody.innerHTML = `
    <div class="table-responsive">
    <table class="table">
    ${that.innerHTML}
    </table>
    </div>`;
}

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

    counter % 2 == 0 ? fillTable(sorted) : fillTable(sorted.reverse());

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

$searchButton.addEventListener('click', () => { // search function
    let $searchVal = document.getElementById('searchVal');

    if (!$searchVal.value) {
        return;
    } else {
        let results = currentData.filter(dat => {
            return Object.keys(dat).reduce((acc, curr) => {
                return acc || dat[curr].toLowerCase().includes($searchVal.value);
            }, false);
        });

        let tempData = results;
        fillTable(tempData);
    }
});

$resetButton.addEventListener('click', () => { //reset function
    fillTable(currentData);// fix for local storage
});

$addButton.addEventListener('click', () => {
    addContact();
});

// TODO: 
// delete contact function
// store state in local storage
//