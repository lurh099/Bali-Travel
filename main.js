// Navigation Active Funktion

// Funktion, um die aktive Klasse zu setzen und in beiden Navigationsleisten zu synchronisieren
function setActiveLink(link) {
    // Entferne die aktive Klasse von allen Links in beiden Navigationsleisten
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    
    // Füge die aktive Klasse nur zu den Links hinzu, die auf dasselbe Ziel verweisen
    document.querySelectorAll(`.nav-link[href="${link.getAttribute('href')}"]`).forEach(el => el.classList.add('active'));
}

// Standardmäßig "Home" beim Laden der Seite aktivieren
document.addEventListener('DOMContentLoaded', () => {
    const defaultLink = document.querySelector('.nav-link[href="#home"]');
    if (defaultLink) setActiveLink(defaultLink);
});

// Event-Listener für alle Links hinzufügen
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        setActiveLink(this);
    });
});

// Homebutton Funktion (ein und ausblenden)

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    const tourSection = document.getElementById('tour');
    const homeLinks = document.querySelectorAll('.nav-link[href="#home"]');
    const kontaktLinks = document.querySelectorAll('.nav-link[href="#kontakt"]');

    // Funktion zum Setzen der 'active'-Klasse auf einen bestimmten Link in beiden Navigationsleisten
    function setActiveLink(links) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        links.forEach(link => link.classList.add('active'));
    }

    // Scroll-Event-Listener
    window.addEventListener('scroll', function() {
        const tourPositionTop = tourSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Button nur anzeigen, wenn der Benutzer sich zwischen Tour und Seitenende befindet
        if (tourPositionTop < viewportHeight) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }

        // Oben angekommen: Home-Link aktivieren
        if (window.scrollY === 0) {
            setActiveLink(homeLinks);
        }

        // Unten angekommen: Kontakt-Link aktivieren
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setActiveLink(kontaktLinks);
        }
    });

    // Beim Klick auf den Pfeil-Button den Home-Link aktivieren und sanft nach oben scrollen
    scrollTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        setActiveLink(homeLinks);
    });
});





