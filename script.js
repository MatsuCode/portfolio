function copyEmail() {
    const email = "brunoramon2005@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard: " + email);
    });
}
