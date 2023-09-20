
function getCurrentYear() {
    return new Date().getFullYear();
}

function updateFooter() {
    const currentYear = getCurrentYear();
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('last_modified');
    const copyrightElement = document.querySelector('footer p:first-child');

    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }

    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Benjamin Brandford Hayford Junior - WDD 230`;
    }
}

window.addEventListener('load', updateFooter);
