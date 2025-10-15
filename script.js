// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formData");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submit

        // Simple validation
        if (username.value.trim() === "" || password.value.trim() === "") {
            alert("Please enter both username and password!");
            return;
        }

        // You can add API call here for real authentication
        // For now, just redirect
        alert(`Welcome, ${username.value}!`);
         const name = username.value;
         const pass = password.value;
         console.log("name :" , name );
     console.log("password :" , pass );
       // window.location.href = "redirect.html"; // Redirect page
      
    });
});
