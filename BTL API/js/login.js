function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Sai tài khoản hoặc server lỗi");
            }
            return res.json();
        })
        .then(data => {
            console.log("DATA LOGIN:", data); // debug

            if (data.error) {
                alert(data.error);
                return;
            }

            // lưu user
            localStorage.setItem("user", JSON.stringify(data));

            // chuyển trang
            if (data.role === "admin") {
                window.location.href = "/admin.html";
            } else {
                window.location.href = "studentmenu.html";
            }
        })
        .catch(err => {
            console.error("LOGIN ERROR:", err);
            alert("Không kết nối được server!");
        });
}