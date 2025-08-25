// Script para manejar los clics en los enlaces del índice
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Remove active class from all links and temas
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('nav label').forEach(l => l.classList.remove('active-tema'));

        // Add active to clicked link
        this.classList.add('active');

        // Add active to parent tema label and check the checkbox to expand
        const temaCheckbox = this.closest('li').querySelector('input[type="checkbox"]');
        if (temaCheckbox) {
            temaCheckbox.checked = true;
            const temaLabel = this.closest('li').querySelector('label');
            if (temaLabel) {
                temaLabel.classList.add('active-tema');
            }
        }
    });
});

// Optional: Highlight on page load for first section of the current page
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    let initialLink;
    if (hash) {
        initialLink = document.querySelector(`nav a[href="#${hash}"]`);
    } else {
        initialLink = document.querySelector('nav a[href^="#"]'); // First link on the page
    }
    if (initialLink) {
        initialLink.classList.add('active');
        const initialTemaCheckbox = initialLink.closest('li').querySelector('input[type="checkbox"]');
        if (initialTemaCheckbox) {
            initialTemaCheckbox.checked = true;
            const initialTemaLabel = initialLink.closest('li').querySelector('label');
            if (initialTemaLabel) {
                initialTemaLabel.classList.add('active-tema');
            }
        }
    }
});