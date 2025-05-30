function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById("dashboardScreen").classList.add("active");
        const username = email.split("@")[0];
        const name = username.charAt(0).toUpperCase() + username.slice(1);
        document.getElementById("userName").textContent = name;
    } else {
        alert("Por favor ingresa tu correo y contraseña.");
    }
}
function navigateTo(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
function showModal(id) {
    alert("Funcionalidad en desarrollo: " + id);
}