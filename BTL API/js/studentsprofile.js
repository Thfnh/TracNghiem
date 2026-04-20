function loadProfile() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Chưa đăng nhập");
        window.location.href = "login.html";
        return;
    }

    fetch(`http://localhost:5000/api/users/${user.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.getElementById("username").value = data.username;
            document.getElementById("fullname").value = data.fullname;
            document.getElementById("student_code").value = data.student_code;
        })
        .catch(err => console.error(err));
}

function updateProfile() {
    const user = JSON.parse(localStorage.getItem("user"));

    const fullname = document.getElementById("fullname").value;
    const student_code = document.getElementById("student_code").value;
    const password = document.getElementById("password").value;

    fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullname: fullname,
            student_code: student_code,
            password: password
        })
    })
        .then(res => res.json())
        .then(data => {
            alert(data.message || "Cập nhật xong");

            // cập nhật localStorage nếu cần
            user.fullname = fullname;
            localStorage.setItem("user", JSON.stringify(user));
        })
        .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", loadProfile);

/* ===== MENU CHỨC NĂNG ===== */

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