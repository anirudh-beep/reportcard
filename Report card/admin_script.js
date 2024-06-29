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
    const subject6 = parseInt(document.getElementById('subject6').value);
    const total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    const average = total / 6;

    studentsData[rollNumber] = { 
        name, 
        class: studentClass, 
        subject1, 
        subject2, 
        subject3, 
        subject4, 
        subject5, 
        subject6, 
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
        row.insertCell(8).innerText = student.subject6;
        row.insertCell(9).innerText = student.total;
        row.insertCell(10).innerText = student.average.toFixed(2);

        const actionsCell = row.insertCell(11);
        
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = () => editData(rollNumber);
        actionsCell.appendChild(editButton);
        
        const publishButton = document.createElement('button');
        publishButton.innerText = 'Publish';
        publishButton.onclick = () => publishReport(rollNumber);
        actionsCell.appendChild(publishButton);
    }

    // Store data in localStorage for persistence
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
}

function editData(rollNumber) {
    const student = studentsData[rollNumber];
    if (student) {
        // Fill the form fields with student data for editing
        document.getElementById('rollNumber').value = rollNumber;
        document.getElementById('name').value = student.name;
        document.getElementById('class').value = student.class;
        document.getElementById('subject1').value = student.subject1;
        document.getElementById('subject2').value = student.subject2;
        document.getElementById('subject3').value = student.subject3;
        document.getElementById('subject4').value = student.subject4;
        document.getElementById('subject5').value = student.subject5;
        document.getElementById('subject6').value = student.subject6;

        // Remove the edited student from the data (optional, depends on your logic)
        // delete studentsData[rollNumber];

        // Update the table after editing
        updateTable();
    }
}

function publishReport(rollNumber) {
    const student = studentsData[rollNumber];
    if (student) {
        alert(`Report card for ${student.name} has been published.`);
        // Logic to actually publish the report card can be added here
    }
}

function logout() {
    window.location.href = 'reportcard.html';
}

window.onload = function() {
    const savedData = localStorage.getItem('studentsData');
    if (savedData) {
        studentsData = JSON.parse(savedData);
        updateTable();
    }
}
function removeAllData() {
    // Clear the table body content
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
}
