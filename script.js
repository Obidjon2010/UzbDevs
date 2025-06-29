
const followBtn = document.getElementById('followBtn');
const socialLinks = document.getElementById('socialLinks');
socialLinks.classList.remove('show');
socialLinks.style.display = 'none';
followBtn.addEventListener('click', function() {
    if (socialLinks.classList.contains('show')) {
        socialLinks.classList.remove('show');
        setTimeout(() => { socialLinks.style.display = 'none'; }, 400);
    } else {
        socialLinks.style.display = 'flex';
        setTimeout(() => { socialLinks.classList.add('show'); }, 10);
    }
});