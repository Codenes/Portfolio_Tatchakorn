window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm(event) {
    const firstname = document.forms["myRegister"]["firstname"].value;
    const lastname = document.forms["myRegister"]["lastname"].value;
    const gender = document.forms["myRegister"]["gender"].value;
    const bday = document.forms["myRegister"]["bday"].value;
    const email = document.forms["myRegister"]["email"].value;
    const username = document.forms["myRegister"]["username"].value;
    const password = document.forms["myRegister"]["password"][0].value;
    const retypePassword = document.forms["myRegister"]["password"][1].value;

    if (!firstname || !lastname || !gender || !bday || !email || !username || !password) {
        document.getElementById("errormsg").innerText = "กรอกข้อมูลให้ครบถ้วน!";
        event.preventDefault();
        return false;
    }

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = "รหัสผ่านไม่ตรงกัน!";
        event.preventDefault();
        return false;
    }

    localStorage.setItem(username, password);

    alert("เข้าสู่ระบบได้แล้ว.");
    return true;
}
