// Simple hover animation log (example feature)
document.querySelectorAll(".social-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        console.log("Hovered:", btn.textContent);
    });
});


const switchBtn = document.getElementById("mode-switch");

switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        switchBtn.textContent = "Switch Tema (Experimental)";
    } else {
        localStorage.setItem("theme", "light");
        switchBtn.textContent = "Switch Tema (Experimental)";
    }
});

// Load preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    switchBtn.textContent = "Tema";
}
