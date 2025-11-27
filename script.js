// --- 1. GAME DATA SOURCE (Add your games and notes here) ---
const gamePresentations = {
    // Clair Obscur: Expedition 33 (The ID matches the HTML id="Expedition-33")
    'Expedition-33': {
        title: '1-Tier: Clair Obscur: Expedition 33',
        // Use HTML sections or divs to structure your slides/topics
        slides: `
            <section>
                <h2>🎵 Music & Atmosphere</h2>
                <p>The soundtrack of this game is probably the best in terms of a whole playlist. Both in terms of the music sounds and also poetically. The refrences and how much the music reflects the game in every way possible, especially the lyrics.</p>
                <h3>Une vie à t'aimer </h3>
                <p>This is probably my favourite song in the entire game, one of if not the best boss soundtrack that I can think of. It is an 11 minute of pure awe. It is used in the Renior boss fight in Stone Wave Cliffs. The lyrics are absolutely poetic, it is basically an argument between the male and the female singers whom are playing the chracters in the game Renior and Aline. The female singer is as amazing as always, but the surprise of an male singer was a shock and for him to be the one who also sang 'Bury the light' from DMC5, was amazing. As much as I love the Alice the female singer, I absolutely love how the Victor the male singer just sounds so raw and real. It feels like he is just screaming from the bottom of his heart. Absolute Masterpiece of a track </p>
            </section>
            <hr>
            <section>
                <h2>⚔️ Boss Fights</h2>
                <h3>Simon </h3>
                <h4>The Buildup </h4>
                <p>Firstly before the fight even begins the drop to reach his arena is a very nice touch, really builds up the atmosphere. Then there is the arena, absolute darkness with only golden swords in the back with one guy sitting showing his back.</p>
                <h4>The Fight </h4>
                <h5>First Phase </h5>
                <p>It intially starts with quite a simple yet cool boss fight where Simon has a few attacks all of which are quite nice and meaty when you are able to parry them. He doesn't have that much HP.</p>
            </section>
        `
    },

    'FinalFantasyXVI': {
        title: '1-Tier: Final Fantasy XVI',
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

        'FinalFantasyXVI': {
        title: '1-Tier: Final Fantasy XVI',
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
    'GodOfWar': {
        title: '2-Tier: GodOfWar',
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
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});