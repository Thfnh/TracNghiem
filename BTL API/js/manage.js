const API = "http://localhost:5000";

/* LOAD EXAMS */
function loadExams() {
    fetch(API + "/api/exams")
        .then(res => res.json())
        .then(data => {

            let html = "";

            data.forEach(e => {
                html += `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>
                        <span class="tag ${e.type}">
                            ${e.type || "-"}
                        </span>
                    </td>
                    <td>
                        <button class="btn-delete" onclick="deleteExam(${e.id})">
                            ❌ Xóa
                        </button>
                    </td>
                </tr>
            `;
            });

            document.getElementById("examTable").innerHTML = html;
        });
}

/* XÓA EXAM */
function deleteExam(id) {

    if (!confirm("Bạn có chắc muốn xóa kỳ thi này?")) return;

    fetch(API + "/api/exams/" + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            alert(data.message || "Đã xóa");
            loadExams(); // 🔥 reload lại bảng
        })
        .catch(err => {
            console.error(err);
            alert("Lỗi khi xóa");
        });
}

/* INIT */
loadExams();
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
