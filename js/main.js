let $tBody = document.getElementById('t-body');

let content = '';

for (let i = 0; i < data.length; i++) {
    content += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${data[i]['first name']}</td>
    <td>${data[i]['last name']}</td>
    <td>${data[i]['email']}</td>
    <td>${data[i]['address']}</td>
    <td>${data[i]['notes']}</td>
    <td>${data[i]['date added']}</td>
    <td>${data[i]['telephone']}</td>
    </tr>`;
}

$tBody.innerHTML = content;