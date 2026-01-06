function copyEmail() {
    const email = "brunoramon2005@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard: " + email);
    });
}

function SendMail() {
    const email = "brunoramon2005@gmail.com";
    window.location.href = `mailto:${email}`;
}

document.querySelectorAll('.projeto-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const href = this.dataset.href;
        if (href) {
            window.open(href, '_blank');
        }
    });
});

const socialLink = document.querySelector('.social-link');
const dropdown = document.querySelector('.social-dropdown');
let isClickedOpen = false;

socialLink.addEventListener('mouseenter', () => {
    if (!isClickedOpen) {
        dropdown.style.display = 'flex';
    }
});

socialLink.addEventListener('mouseleave', () => {
    if (!isClickedOpen) {
        setTimeout(() => {
            if (!dropdown.matches(':hover')) {
                dropdown.style.display = 'none';
            }
        }, 100);
    }
});

socialLink.addEventListener('click', (e) => {
    e.preventDefault();
    isClickedOpen = !isClickedOpen;
    dropdown.style.display = isClickedOpen ? 'flex' : 'none';
});

dropdown.addEventListener('mouseleave', () => {
    if (!isClickedOpen) {
        dropdown.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!socialLink.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
        isClickedOpen = false;
    }
});