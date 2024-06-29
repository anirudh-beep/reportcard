const studentsData = {
    '1': { name: 'John Doe', math: 85, science: 90, english: 78 },
    '2': { name: 'Jane Smith', math: 92, science: 88, english: 84 },
    '3': { name: 'Sam Brown', math: 75, science: 80, english: 70 },
};

function generateReport() {
    const rollNumber = document.getElementById('rollNumber').value;
    const studentClass = document.getElementById('class').value;
    const year = document.getElementById('year').value;

    const student = studentsData[rollNumber];
    if (student && student.class === studentClass && student.year === year && student.published) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Report Card</h2>
            <p>Name: ${student.name}</p>
            <p>Class: ${student.class}</p>
            <p>Year: ${student.year}</p>
            <p>Telugu: ${student.subject1}</p>
            <p>Hindi: ${student.subject2}</p>
            <p>English: ${student.subject3}</p>
            <p>Maths: ${student.subject4}</p>
            <p>Science: ${student.subject5}</p>
            <p>Social: ${student.subject6}</p>
            <p>Total: ${student.total}</p>
            <p>Average: ${student.average.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Student not found or class/year mismatch.</p>`;
    }
}


const validUsername = 'admin';
const validPassword = 'admin123';

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        window.location.href = 'admin_dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
function logout()
{   if (onclick){
    window.location.href = 'loginpage.html';
}
}

document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to handle any interactions can be added here
});