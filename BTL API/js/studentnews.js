const API = "http://localhost:5000";

let newsData = [];

/* LOAD */
function loadNews() {
    fetch(API + "/api/news")
        .then(res => res.json())
        .then(data => {
            newsData = data;
            renderSlider();
            renderList(data);
        });
}

/* SLIDER */
function renderSlider() {

    let slider = document.getElementById("slider");
    let html = "";

    newsData.slice(0, 3).forEach(n => {
        html += `
        <div class="slide" style="background-image:url('${n.image}')">
            <div class="overlay">
                <h2>${n.title}</h2>
            </div>
        </div>`;
    });

    slider.innerHTML = html;
}

/* LIST NGANG */
function renderList(data) {

    let html = "";

    data.forEach(n => {
        html += `
        <div class="news-card" onclick="openNews('${n.title}','${n.content}')">

            <div class="news-img" style="background-image:url('${n.image}')"></div>

            <div class="news-content">
                <h4>${n.title}</h4>
                <p>${n.content.substring(0, 60)}...</p>
                <small>⏱ ${formatTime(n.time)}</small>
            </div>

        </div>
        `;
    });

    document.getElementById("newsList").innerHTML = html;
}

/* FORMAT TIME */
function formatTime(t) {
    let d = new Date(t);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

/* SEARCH */
document.getElementById("search").onkeyup = function () {

    let key = this.value.toLowerCase();

    let filtered = newsData.filter(n =>
        n.title.toLowerCase().includes(key)
    );

    renderList(filtered);
};

/* FILTER */
document.getElementById("filter").onchange = function () {

    let cate = this.value;

    let filtered = newsData.filter(n =>
        cate == "" || n.category == cate
    );

    renderList(filtered);
};

/* MODAL */
function openNews(title, content) {

    let modal = document.createElement("div");
    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-box">
            <h3>${title}</h3>
            <p>${content}</p>
            <button onclick="this.parentElement.parentElement.remove()">Đóng</button>
        </div>
    `;

    document.body.appendChild(modal);
}
// ===== SIDEBAR NAV =====
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
loadNews();