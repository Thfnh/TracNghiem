function loadGradebook() {
    fetch("http://localhost:5000/api/gradebook")
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("gradeTable");
            table.innerHTML = "";

            data.forEach(item => {
                table.innerHTML += `
                    <tr>
                        <td>${item.fullname}</td>
                        <td>${item.student_code}</td>
                        <td>${item.exam}</td>
                        <td>${item.score}</td>
                        <td>${item.total}</td>
                        <td>${item.date}</td>
                    </tr>
                `;
            });
        });
}

window.onload = loadGradebook;

// ===== NAVIGATION =====
function goHome() { location.href = "admin.html"; }
function goClass() { location.href = "class.html"; }
function goManage() { location.href = "manage.html"; }
function goMaterial() { location.href = "material.html"; }
function goSchedule() { location.href = "schedule.html"; }
function goExam() { location.href = "alltested.html"; }
function goPractice() { location.href = "practice.html"; }
function goTest() { location.href = "addtest.html"; }
function goNews() { location.href = "news.html"; }
function goGuide() { location.href = "guide.html"; }
function goGradeScore() { location.href = "gradebook.html"; }
function goLogin() { location.href = "login.html"; }