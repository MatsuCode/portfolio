document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    const textToType = 'BRUNO.';
    let currentIndex = 0;

    function typeCharacter() {
        if (currentIndex < textToType.length) {
            typingElement.textContent += textToType[currentIndex];
            currentIndex++;
            setTimeout(typeCharacter, 400);
        }
    }

    typeCharacter();
});

function loadExperience(index) {
    const items = document.querySelectorAll('.experience-item');
    const jobs = document.querySelectorAll('.job');
    
    items.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
    });
    jobs.forEach(job => job.style.display = 'none');
    
    items[index].classList.add('active');
    items[index].setAttribute('aria-pressed', 'true');
    document.getElementById('job-' + index).style.display = 'block';
}
