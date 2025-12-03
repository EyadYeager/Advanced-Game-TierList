// --- 0. MODAL ELEMENTS ---
const modal = document.getElementById('game-modal');
const contentArea = document.getElementById('modal-content');

// --- 1. GAME DATA SOURCE (Now using the 'sections' array) ---
const gamePresentations = {
    // Clair Obscur: Expedition 33 
    'Expedition-33': {
        title: '1-Tier: Clair Obscur: Expedition 33',
        sections: [
            // Section 1: Music & Atmosphere
            `
            <div class="modal">
            <h2>🎵 Music & Atmosphere</h2>
            <p>The soundtrack of this game is probably the best in terms of a whole playlist. Both in terms of the music sounds and also poetically. The references and how much the music reflects the game in every way possible, especially the lyrics.</p>
            <h3>Une vie à t'aimer </h3>
            <p>This is probably my favourite song in the entire game, one of if not the best boss soundtrack that I can think of. It is an 11 minute of pure awe. It is used in the Renior boss fight in Stone Wave Cliffs. The lyrics are absolutely poetic, it is basically an argument between the male and the female singers whom are playing the characters in the game Renior and Aline. The female singer is as amazing as always, but the surprise of an male singer was a shock and for him to be the one who also sang 'Bury the light' from DMC5, was amazing. As much as I love the Alice the female singer, I absolutely love how the Victor the male singer just sounds so raw and real. It feels like he is just screaming from the bottom of his heart. Absolute Masterpiece of a track </p>
            `,
            // Section 2: Boss Fights
            `
            <h2>⚔️ Boss Fights</h2>
            <h3>Simon </h3>
            <img src="/img/Simon.jpg" class="modal-smallimg" content-warning="spoiler">
            <h4>The Buildup </h4>
            <p>Firstly before the fight even begins the drop to reach his arena is a very nice touch, really builds up the atmosphere. Then there is the arena, absolute darkness with only golden swords in the back with one guy sitting showing his back.</p>
            <h4>The Fight </h4>
            <h5>First Phase </h5>
            <p>It initially starts with quite a simple yet cool boss fight where Simon has a few attacks all of which are quite nice and meaty when you are able to parry them. He doesn't have that much HP.</p>
            <h5>Phase Transition  </h5>
            <p>The cutscene into the second phase was very dark souls-like, I especially liked how Clea was the "maiden" who encouraged him into continuing fighting, then his hair turning white was a really cool scene.  
            <h5>Second Phase </h5>
            <p> This part gets crazy with 2 new attacks that are difficult and every single attack from the first phase is double the amount of hits now which throws you super off guard, especially when you have to switch between the first and the second phases. 
            The extra 3rd Phase at around 30% of his health he annihilates your party so you are forced to make a second party that is competent.  </p>
            `,
            // Section 3: Placeholder (Easy to add new content here!)
            `
            <h2>✨ Visual Style & World</h2>
            <div class="modal-collage">
            <img src="/img/Expedition-area1.jpg" class="modal-smallimg"><img src="/img/Expedition-area3.jpg" class="modal-smallimg">
            <img src="/img/Expedition-area2.jpg" class="modal-smallimg"><img src="/img/Expedition-area4.jpg" class="modal-smallimg">
            <img src="/img/Expedition-area5.jpg" class="modal-smallimg"><img src="/img/Expedition-area6.jpg" class="modal-smallimg">
            </div>
            <p>This is a new section created for easy expansion!</p>
            </div>
            `
        ]
    },

    // Final Fantasy XVI
    'FinalFantasyXVI': {
        title: '1-Tier: Final Fantasy XVI',
        sections: [
            `
            <div class="modal">
            <h2>⚔️ Eikon Battles</h2>
            <p>The scale and spectacle of the Eikon vs. Eikon fights are unmatched in the series. Focus your notes here on your favorite encounter (e.g., Titan or Bahamut).</p>
            `,
            `
            <h2>🎭 Narrative & Character Depth</h2>
            <p>Discuss Clive's journey, the political landscape of Valisthea, or the voice acting that impressed you most.</p>
            </div>
            `
        ]
    },

    // God Of War
    'GodOfWar': {
        title: '2-Tier: GodOfWar',
        sections: [
            `
            <div class="modal">
            <h2>🪓 Combat System & Leviathan Axe</h2>
            <p>Detail what you love about the combat feel, the weight of the Leviathan Axe, and the rune abilities.</p>
            `,
            `
            <h2>👨‍👦 Relationship & Worldbuilding</h2>
            <p>Focus on the relationship between Kratos and Atreus, or the stunning visual design of the Norse realms (Midgard, Alfheim, etc.).</p>
            </div>
            `
        ]
    },

    // Persona 5 Royal
    'Persona5Royal': {
        title: '1-Tier: Persona5Royal',
        sections: [
            `
            <div class="modal">
            <img src="img/p5-logo.jpg" class="modal-bigimg">
            <h2>🪓 Combat System & Leviathan Axe</h2>
            <p>Detail what you love about the combat feel, the weight of the Leviathan Axe, and the rune abilities.</p>
            `,
            `
            <h2>👨‍👦 Relationship & Worldbuilding</h2>
            <p>Focus on the relationship between Kratos and Atreus, or the stunning visual design of the Norse realms (Midgard, Alfheim, etc.).</p>
            </div>
            `
        ]
    }
};

// --- 2. MODAL FUNCTIONS (Updated to build HTML from the 'sections' array) ---

function openModal(gameID) {
    const data = gamePresentations[gameID];

    if (data && data.sections) {
        // 1. Convert the sections array into a single HTML string:
        //    - Add <section> tags around each entry.
        //    - Join the entries using an <hr> tag as a separator.
        const slidesHTML = data.sections.map(section =>
            `<section>${section}</section>`
        ).join('<hr>');

        // 2. Inject the final HTML content
        contentArea.innerHTML = `<h1>${data.title}</h1>` + slidesHTML;
    } else {
        contentArea.innerHTML = '<h1>Content Not Found!</h1><p>Please check the game ID or content in script.js.</p>';
    }

    // 3. Show the modal
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
}

function closeModal() {
    // Hide the modal immediately
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
}

// Optional: Allow closing the modal by pressing the ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});