const tableInfo = [
    {
        studentName: 'John',
        age: 19,
        phone: '455-983-0903',
        address: '123 Ave, San Francisco, CA, 94011',
    },
    {
        studentName: 'Alex',
        age: 21,
        phone: '455-983-0912',
        address: '456 Rd, San Francisco, CA, 94012',
    },
    {
        studentName: 'Josh',
        age: 22,
        phone: '455-345-0912',
        address: '789 Dr, Newark, CA, 94016',
    },
    {                                                  
        studentName: 'Matt',
        age: 23,
        phone: '321-345-0912',
        address: '233 Dr, Sunnyvale, CA, 94016',
    }
];

let tbody = document.querySelector('tbody');
for (var i = 0; i <tableInfo.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (var k in tableInfo[i]) {
        var td = document.createElement('td');
        td.innerHTML = tableInfo[i][k];
        tr.appendChild(td);
    }
}

const list =['HTML', 'Javascript', 'CSS', 'React', 'Redux', 'Java'];

let orderList = document.querySelector('#orderList');
let unorderList = document.querySelector('#unorderList');

let nodes = list.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

let nodes2 = list.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

orderList.append(...nodes);
unorderList.append(...nodes2);

const dropDownList = [
    { value: 'newark', content: 'Newark'},
    { value: 'santaClara', content: 'Santa Clara'},
    { value: 'unionCity', content: 'Union City'},
    { value: 'albany', content: 'Albany'},
    { value: 'dalyCity', content: 'Daly City'},
    { value: 'sanJose', content: 'San Jose'},
];

let selectCity = document.querySelector('#selectCity');
for (var i = 0; i < dropDownList.length; i++) {
    var option = document.createElement('option');
    option.value = dropDownList[i].value;
    option.textContent = dropDownList[i].content;
    selectCity.appendChild(option);
}
