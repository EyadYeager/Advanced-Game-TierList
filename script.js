// --- 1. GAME DATA SOURCE (Add your games and notes here) ---
const gamePresentations = {
    // Clair Obscur: Expedition 33 (The ID matches the HTML id="Expedition-33")
    'Expedition-33': {
        title: '1-Tier: The Legend of Zelda: Ocarina of Time',
        // Use HTML sections or divs to structure your slides/topics
        slides: `
            <section>
                <h2>🎵 Music & Atmosphere</h2>
                <p>Koji Kondo's score for the Water Temple is a masterclass in mood setting...</p>
                <p>The iconic Ocarina melodies are intrinsically linked to game progression.</p>
            </section>
            <hr>
            <section>
                <h2>⚔️ Boss Fights: Phantom Ganon</h2>
                <p>The spirit battle that requires timing, bouncing energy balls, and portal navigation is iconic.</p>
                <p>This battle set the standard for Zelda's multi-stage dungeon bosses.</p>
            </section>
        `
    },

    // Hades (The ID matches the HTML id="hades")
    'hades': {
        title: '2-Tier: Hades',
        slides: `
            <section>
                <h2>🎨 Art Direction & Voice Acting</h2>
                <p>Every character is beautifully drawn and fully voiced, making every run feel narratively rich.</p>
            </section>
            <hr>
            <section>
                <h2>⚡ Dynamic Combat Flow</h2>
                <p>The combination of fast dashes, different weapons, and stackable Boons offers near-infinite build diversity.</p>
            </section>
        `
    }
    // Add all other game entries here!
};


// --- 2. MODAL FUNCTIONS ---
const modal = document.getElementById('game-modal');
const contentArea = document.getElementById('modal-content');

/**
 * Opens the full-screen presentation modal for a given game.
 * @param {string} gameID - The ID of the game to load (e.g., 'zelda-oot').
 */
function openModal(gameID) {
    const data = gamePresentations[gameID];
    
    // Check if the game data exists
    if (data) {
        // 1. Inject the title and presentation HTML content
        contentArea.innerHTML = `<h1>${data.title}</h1>` + data.slides;
    } else {
        contentArea.innerHTML = '<h1>Content Not Found!</h1><p>Please check the game ID in script.js.</p>';
    }

    // 2. Show the modal by swapping the CSS class
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

/**
 * Closes the full-screen presentation modal.
 */
function closeModal() {
    // Hide the modal by swapping the CSS class
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
}

// Optional: Allow closing the modal by pressing the ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});