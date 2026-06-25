alert("Attendance Management System Loaded");
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

function markAttendance() {

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;

    if(name === "" || roll === ""){
        alert("Enter all fields");
        return;
    }

    attendance.push({
        name:name,
        roll:roll,
        status:"Present"
    });

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendance)
    );

    displayAttendance();

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
}

function displayAttendance(){

    const records =
    document.getElementById("records");

    records.innerHTML="";

    attendance.forEach(student => {

        records.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.status}</td>
        </tr>`;
    });
}

displayAttendance();
