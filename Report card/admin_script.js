let studentsData = {};

function uploadData() {
    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);
    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const average = total / 5;

    studentsData[rollNumber] = { 
        name, 
        class: studentClass, 
        subject1, 
        subject2, 
        subject3, 
        subject4, 
        subject5, 
        total, 
        average 
    };

    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    for (const rollNumber in studentsData) {
        const student = studentsData[rollNumber];
        const row = tableBody.insertRow();

        row.insertCell(0).innerText = rollNumber;
        row.insertCell(1).innerText = student.name;
        row.insertCell(2).innerText = student.class;
        row.insertCell(3).innerText = student.subject1;
        row.insertCell(4).innerText = student.subject2;
        row.insertCell(5).innerText = student.subject3;
        row.insertCell(6).innerText = student.subject4;
        row.insertCell(7).innerText = student.subject5;
        row.insertCell(8).innerText = student.total;
        row.insertCell(9).innerText = student.average.toFixed(2);
    }

    // Store data in localStorage for persistence
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
}

// Load data from localStorage on page load
window.onload = function() {
    const savedData = localStorage.getItem('studentsData');
    if (savedData) {
        studentsData = JSON.parse(savedData);
        updateTable();
    }
}
