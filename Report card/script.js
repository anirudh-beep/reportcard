const studentsData = {
    '1': { name: 'John Doe', math: 85, science: 90, english: 78 },
    '2': { name: 'Jane Smith', math: 92, science: 88, english: 84 },
    '3': { name: 'Sam Brown', math: 75, science: 80, english: 70 },
};

function generateReport() {
    const rollNumber = document.getElementById('rollNumber').value;
    const student = studentsData[rollNumber];

    if (student) {
        const total = student.math + student.science + student.english;
        const average = total / 3;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Report Card</h2>
            <p>Name: ${student.name}</p>
            <p>Math: ${student.math}</p>
            <p>Science: ${student.science}</p>
            <p>English: ${student.english}</p>
            <p>Total: ${total}</p>
            <p>Average: ${average.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `<p>Student not found.</p>`;
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