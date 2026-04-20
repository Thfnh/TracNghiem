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

function loadDashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:5000/api/dashboard/${user.id}`)
        .then(res => res.json())
        .then(data => {

            // CHƯA LÀM
            let notDoneHTML = "";
            data.not_done.forEach(exam => {
                notDoneHTML += `
                    <div class="card red">
                        <h3>${exam.name}</h3>
                        <button onclick="startExam(${exam.exam_id})">
                            Làm bài
                        </button>
                    </div>
                `;
            });

            document.getElementById("notDone").innerHTML = notDoneHTML;

            // ĐÃ LÀM
            let doneHTML = "";
            data.done.forEach(exam => {
                doneHTML += `
                    <div class="card green">
                        <h3>${exam.name}</h3>
                        <p>Điểm: ${exam.score}/${exam.total}</p>
                        <p>${exam.date}</p>
                    </div>
                `;
            });

            document.getElementById("done").innerHTML = doneHTML;
        });
}

window.onload = loadDashboard;