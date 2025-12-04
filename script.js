// Simple hover animation log (example feature)
document.querySelectorAll(".social-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        console.log("Hovered:", btn.textContent);
    });
});
