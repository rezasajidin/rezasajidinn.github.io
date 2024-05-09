document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input[type='submit']").addEventListener("click", function() {
        var username = document.querySelector("input[type='text']").value;
        var password = document.querySelectorAll("input[type='text']")[1].value;

        // Cek apakah username dan password sesuai dengan yang diharapkan
        if (username === "reza" && password === "123") {
            alert("Login berhasil!");
        } else {
            alert("Login gagal! Username atau password salah.");
        }
    });
});
