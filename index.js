document.addEventListener("DOMContentLoaded", function() {
    const facebookLink = document.querySelector("footer a[href*='facebook.com']");
    facebookLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("กำลังเข้าสู่ Facebook");
        window.location.href = facebookLink.href; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const instagramLink = document.querySelector("footer a[href*='instagram.com']"); 
    
    if (instagramLink) { 
        instagramLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            alert("กำลังเข้าสู่ Instagram"); 
            window.location.href = instagramLink.href; 
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const projectLink = document.querySelector("a.button");

    projectLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("กำลังไปหน้า project");
        window.location.href = projectLink.href; 
    });
});

