window.onload = loginLoad;

function loginLoad() {
    const form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.forms["myLogin"]["password"].value;
    const storedPassword = localStorage.getItem(username);

    if (!storedPassword || storedPassword !== password) {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
        return false; 
    }

    alert("เข้าสู่ระบบสำเร็จ!"); 
    return true; 
}
