function loadResults() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Chưa đăng nhập");
        window.location.href = "login.html";
        return;
    }

    fetch(`http://localhost:5000/api/results/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log("RESULT:", data);

            let html = "";

            data.forEach(r => {
                html += `
                    <tr>
                        <td>${r.exam}</td>
                        <td>${r.score}/${r.total}</td>
                        <td>${r.date}</td>
                    </tr>
                `;
            });

            document.getElementById("resultTable").innerHTML = html;
        })
        .catch(err => console.error(err));
}

window.onload = loadResults;

/* ===== MENU CHỨC NĂNG ===== */
function goHome() {
    window.location.href = "studentmenu.html";
}
function goExam() {
    // CHUYỂN SANG TRANG THI
    window.location.href = "student.html";
}
function goProfile() {
    window.location.href = "studentsprofile.html";
}
function goGrade() {
    window.location.href = "studentsresult.html";
}
function goNews() {
    window.location.href = "studentnews.html";
}
function goGuide() {
    window.location.href = "studentsguide.html";
}