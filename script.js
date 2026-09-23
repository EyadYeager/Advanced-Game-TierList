// --- 0. MODAL ELEMENTS ---
const modal = document.getElementById('game-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal');

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        const fileName = card.getAttribute('data-file');
        openModalWithMarkdown(fileName);
    });
});
async function openModalWithMarkdown(fileName) {
    modalContent.innerHTML = `<p>Loading content for ${fileName}...</p>`;
    modal.classList.remove('modal-hidden');

    try {
        // Try the Games folder first
        let response = await fetch(`Games/${fileName}.md`);
        
        // If Games fails, try the Anime folder
        if (!response.ok) {
            response = await fetch(`Anime/${fileName}.md`);
        }

        // If both fail, throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch markdown content from both folders');
        }

        const markdownContent = await response.text();
        modalContent.innerHTML = marked.parse(markdownContent);
        
    } catch (error) {
        console.error('Error fetching markdown content:', error);
        modalContent.innerHTML = `<p>Error loading content for ${fileName}.</p>`;
    }
}


// --- 1. MODAL FUNCTIONS (Updated to build HTML from the 'sections' array) ---

function openModal(gameID) {
    const data = gamePresentations[gameID];

    if (data && data.sections) {
        // 1. Convert the sections array into a single HTML string:
        const slidesHTML = data.sections.map(section =>
            `<section>${section}</section>`
        ).join('<hr>');

        // 2. Inject the final HTML content
        modalContent.innerHTML = `<h1>${data.title}</h1>` + slidesHTML;
    } else {
        modalContent.innerHTML = '<h1>Content Not Found!</h1><p>Please check the game ID or content in script.js.</p>';
    }

    // 2. Show the modal
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}


closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
}
// Optional: Allow closing the modal by pressing the ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }


})
// Close modal when clicking on the dark background overlay
modal.addEventListener('click', function (event) {
    // This checks if the user clicked the dark overlay itself 
    // rather than the content box inside it.
    if (event.target === modal) {
        closeModal();
    }
})

// --- 3. BACK TO TOP LOGIC ---
const modalInner = document.querySelector('.modal-inner');
const backToTopBtn = document.getElementById('back-to-top');

// Show/Hide button based on scroll position
modalInner.addEventListener('scroll', () => {
    if (modalInner.scrollTop > 400) {
        backToTopBtn.classList.replace('top-btn-hidden', 'top-btn-visible');
    } else {
        backToTopBtn.classList.replace('top-btn-visible', 'top-btn-hidden');
    }
});

// Scroll back to top when button is clicked
backToTopBtn.addEventListener('click', () => {
    modalInner.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Important: Reset scroll and hide button when modal closes
function closeModal() {
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');

    // Reset the scroll position to the top for the next time it opens
    modalInner.scrollTop = 0;
    backToTopBtn.classList.replace('top-btn-visible', 'top-btn-hidden');
}