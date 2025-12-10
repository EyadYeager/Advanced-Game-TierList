// --- 0. MODAL ELEMENTS ---
const modal = document.getElementById('game-modal');
const contentArea = document.getElementById('modal-content');

// --- 1. GAME DATA SOURCE (Now using the 'sections' array) ---
const gamePresentations = {
    // Clair Obscur: Expedition 33 
    'Expedition-33': {
        title: '1-Tier: Clair Obscur: Expedition 33',
        sections: [
            // Section 1: Music & Atmosphere (Removed <div class="modal">)
            `
            <h2>🎵 Music & Atmosphere</h2>
            <p>The soundtrack of this game is probably the best in terms of a whole playlist. Both in terms of the music sounds and also poetically. The references and how much the music reflects the game in every way possible, especially the lyrics.</p>
            <h3>Une vie à t'aimer </h3>
            <p>This is probably my favourite song in the entire game, one of if not the best boss soundtrack that I can think of. It is an 11 minute of pure awe. It is used in the Renior boss fight in Stone Wave Cliffs. The lyrics are absolutely poetic, it is basically an argument between the male and the female singers whom are playing the characters in the game Renoir and Aline. The female singer is as amazing as always, but the surprise of an male singer was a shock and for him to be the one who also sang 'Bury the light' from DMC5, was amazing. As much as I love the Alice the female singer, I absolutely love how the Victor the male singer just sounds so raw and real. It feels like he is just screaming from the bottom of his heart. Absolute Masterpiece of a track </p>
            `,
            // Section 2: Boss Fights
            `
            <h2>⚔️ Boss Fights</h2>
            <h3>Simon </h3>
            <img src="/img/Simon.jpg" class="modal-smallimg">
            <h4>The Buildup </h4>
            <p>Firstly before the fight even begins the drop to reach his arena is a very nice touch, really builds up the atmosphere. Then there is the arena, absolute darkness with only golden swords in the back with one guy sitting showing his back.</p>
            <h4>The Fight </h4>
            <h5>First Phase </h5>
            <p>It initially starts with quite a simple yet cool boss fight where Simon has a few attacks all of which are quite nice and meaty when you are able to parry them. He doesn't have that much HP.</p>
            <h5>Phase Transition  </h5>
            <p>The cutscene into the second phase was very dark souls-like, I especially liked how Clea was the "maiden" who encouraged him into continuing fighting, then his hair turning white was a really cool scene.  
            <h5>Second Phase </h5>
            <p> This part gets crazy with 2 new attacks that are difficult and every single attack from the first phase is double the amount of hits now which throws you super off guard, especially when you have to switch between the first and the second phases. 
            The extra 3rd Phase at around 30% of his health he annihilates your party so you are forced to make a second party that is competent.  </p>
            `,
            // Section 3: Visual Style & World (Removed </div>)
            `
            <h2>✨ Visual Style & World</h2>
            <div class="modal-collage">
            <p>This absolute style and art of this game's world is breathtaking, capturing the essence of exploration and adventuring through something truly new and unfamiliar. Everything looks like it was taken from a painting (Literally).</p>
            <img src="/img/Expedition-area1.jpg" class="modal-smallimg"><img src="/img/Expedition-area3.jpg" class="modal-smallimg">
            <img src="/img/Expedition-area2.jpg" class="modal-smallimg"><img src="/img/Expedition-area4.jpg" class="modal-smallimg">
            <img src="/img/Expedition-area5.jpg" class="modal-smallimg"><img src="/img/Expedition-area6.jpg" class="modal-smallimg">
            </div>
            `
        ]
    },

    // Final Fantasy XVI (Cleaned into multiple, separated sections)
    'FinalFantasyXVI': {
        title: '1-Tier: Final Fantasy XVI',
        sections: [
            // Section 1: Combat & Gameplay
            `
            <h2>🗡️ Combat System & Gameplay</h2>
            <p>Final Fantasy XVI introduces a dynamic new combat system, very DMC-like and I really like it. It feels very smooth and the feeling of the hits are also pretty good. What I especially love the most are the Eikonic Abilites. There are so many of them and I wasn't expecting to get abilites from every single Eikon. I thought some will be missed, but as a reoccuring theme in this game for me it happily proved me wrong. The way you get the abilites are also so satisfying because you usually get them after a really long and hard-fought battle with a usually super cool boss fight. It felt really authentic how you got the abilites, it felt like the story was made first and then the game was thought about right after so from a gameplay standpoint getting the Odin abilites may have been weirdly late into the game but from the story perspective it felt perfectly correct and that is a reoccuring happenstance in this game and to me it really sells this game's story and world even more this way. That doesn't mean the gameplay isn't great, no the gameplay is super fun with the differnt Eikonic abilites you have and I love how you can mix match different ones. It just adds so much more to the gameplay loop and potential for differnt playstyles. I especially love the Ramuh and Shiva's abilites most then Bahamut, Titan and Odin, The other ones are nice but compared to the ones I have mentioned they seem quite simple, but definitly still fun.  </p>
            <img src="/img/ffxvi-eikonwheel.jpg" class="modal-smallimg" >
            `,
            // Section 2: Soundtrack & Musical Score
            `
            <h2>🎵 Soundtrack & Musical Score</h2>
            <p>The soundtrack of Final Fantasy XVI is an absolute masterpiece that elevates the entire gaming experience. Composed by Masayoshi Soken, the music perfectly captures the epic scale and emotional depth of the game's narrative. From the haunting melodies during somber moments to the adrenaline-pumping tracks during intense battles, every piece of music feels meticulously crafted to enhance the atmosphere.</p>
            <h3>Battle Theme "Sixteen bells"</h3>
            <p>The battle theme is a really great battle theme because while it is quite epic, weirdly enough it has a calm and quiet part while it feels weird it somehow fits. I am not really sure, but it I can say for sure that it perfectly feels like a battle theme because it is epic but it has this comfortable part because you listen to it so many times, without being boring.  </p> 
            <h3>Hub Theme "Hide, Hideaway"</h3>
            <p>This is the first song that truly stuck in my mind, simply because it is feels reminiscing even though I had never heard of it before. I absolutely love the vibe of the song it truly feels like a piece from the middle ages very fitting of the theme and the place where it is played. Great piece.</p>
            `,
            // Section 3: Eikon Battles
            `
            <h2>⚔️ Eikon Battles</h2>
            <p>The scale and spectacle of the Eikon vs. Eikon fights are unmatched. I haven't had a game hit me with so many absolutely top tier boss fights in so many different variations all at the same time. (e.g., Titan or Bahamut).</p>
            <h3>Ifrit</h3>
            <p>The Ifrit fight was the first fight that really impressed me and got me hooked. The way the fight is structured with multiple phases and the need to adapt to Ifrit's changing attack patterns was really nice, it felt like a perfect tutorial of a boss, with him slowly adding more moves and getting stronger until you finally also awaken. It was like a jolt of epicness was infused into me </p>
            `,
            // Section 4: Titan
            `
            <h3>Titan</h3>
            <p>The fight was absolutely amazing. I loved how it started off with just clive vs Hugo, but then it slowly escalates the battle both literally and figuratively. With each fight he becomes bigger and stronger into eventually that monstrously large titan in which has such a banger of an ost playing in the background. That guitar riff hits very hard and felt very grundgy. I love it because of hit how it sounded but also because it was unexpected since it was the modern sounding we have ever gotten up until then.
            The running sequence you do to reach the Titan Lost is ingrained in my brain, it is simply so cool. There is no other way of discribing it.</p>
            `,
            // Section 5: Bahamut (Phase 1, 2, 3, Final)
            `
            <h3>Bahamut</h3>
            <p>Bahamut was a major highlight for me in the game. To me so far this is the absolute peak of epicness in a game. I haven't had such a magnitude of an insane boss fight with so many mind-blowing scenes both in-game and in cutscenes. With every single new phase it only kept on getting better.</p>
            <h4>Phase 1 </h4>
            <p>The first phase was already insane with the scale of Bahamut being so large and the initial cutscene getting into the fight was so cool, where clive just stood there and took the full blast of Bahamut and immidiately transforming blocking the attack and saving everyone it was beautifully done.</p>
            <p>Then in comes the battle with Bahamut. First things off I wasn't expecting to fight Bahamut in the game at all since I was thinking that he was going to be a good guy therefore we won't fight him, however I was happily proven wrong. I love this fight. Bahamut has such a cool Eikon design, second only to Odin. The fight immidiately starts off with Clive in Ifrit mode, so it wasn't playing with me at all. It is always nice to be able to fight as Ifrit and here is where he gets another attack as Ifrit. So it was a blast doing this part of the fight, but compared to what comes next this doesn't compare at all. </p>
            <h4>Phase 2 </h4>
            <p>The second phase was even more insane with Bahamut now being even larger and having even more devastating attacks. This was another surprise I didn't expect to play once more as Joshua in Phoenix form. I really was just enjoying the spectacle of Bahamut's attacks and the maneuver of Joshua when he dodges, just all in all really beautiful colours and effects in this fight </p>
            <h4>Phase 3 </h4>
            <p>This is where Clive comes back and you fight as him whilst Joshua starts to help you in the battle. I absolutely loved this part of the fight, it felt like a long-awated moment where the two brothers are fighting together. This is what I really wanted for them to have this great reunion so what better way to do it than make them fight together and there are attacks in this fight that you only use in this battle here like the new Ifrit Eikon ability where he shoots fire from his mouth now Joshua also does the same. Little things like that really sells it for me that, even though they haven't seen eachother in a long time, it still feels like they have been together since forever. It truly makes you feel like that for sure are brothers. Love it. </p>
            <h4>Final Phase </h4>
            <p>The final phase was the absolute peak of epicness with Bahamut now being a god-like entity. This is the apex of the fight, after you thought you had beaten Bahamut with an absolutely magnificent cutscene of both of the brothers cooperating. Bahamut unleashes his true strength and gets even stronger. Clive and Joshua then unexpectedly fuse together to make a somehow even cooler version of Ifrit. The fight is so out of this world that it literally takes place in space and the visual effects of the fight is absolutely glamours in all of the best ways. It is the most anime fight you will get nothing short of pure adrenaline.  The music here is also absolutely insane, one of the best tracks in the entire game for sure. It really fully brings out all of the epicness in the fight to a whole another degree. Absolute best in terms of colossal magnitude of fights.</p>
            `,
            // Section 6: Odin
            `
            <h3>Odin</h3>
            <p>The Odin fight was also another major highlight for me in the game. I absolutely love the design of Odin as an Eikon, he is definitely my favourite Eikon in terms of design, it is so unique and different from all of the other Eikons we have seen so far. The fight itself was also super fun with so many cool mechanics and phases to it. I love how it truly feels like you are alone vs Barnabas, with so many differnt phases. The arena with the atmosphere is also just perfect. </p>
            <h4>Barnabas phase</h4>
            <p>I really like how you fight Barnabas throughout the entire game multiple times and each time he gets stronger and stronger slowly making you more comfortable with him and his moveset, while still adding more complexity to it. So by the time you reach the Odin fight you are super used to his moveset and you can perform really well which makes the fight feel more fluid and fast-paced, like this is how the fight was supposed to feel</p>
            <h4>Odin phase</h4>
            <p>The Odin phase is where the fight really picks up with so many new mechanics and attacks to learn. I love how Odin has so many differnt forms and each form has its own unique attacks and it catches you off guard. It really keeps you on your toes and makes the fight feel fresh and exciting throughout. The final part where he summons the Gungnir and you have to dodge through all of the attacks is absolutely insane, it is such a cool way to end the fight with a bang. Overall the Odin fight is an absolute masterpiece of a boss fight, it has everything you could want in a boss fight and more. Truly unforgettable experience. </p>
            <h4>Final Phase</h4>
            <p> This is the part where he is semi-awakend and it just feels like the most DMC-like fight ever. His attacks and moves are very stylish fast-paced and cool very reminiscent of Vergil from DMC. I am ofcourse quite biased for that, so I naturally loved this phase a lot. Bahamut made you feel like you are fighting with your brother against an overwhelming force of godlike power, but this feels like the perfect 1v1 duel of pure skill and power. Truly amazing. </p>
            `,
            // Section 7: World and Voice Acting
            `
            <h2>🗺️ The wonderful and rich world of Valisthea </h2>
            <p> What I find exceptional in this game is the world. It feels very alive I love how there are things happening in the world whilst you are in a completely different area of the continent and eventually it has a sever impact and outcome on the rest of the story and the world, so much so that almost every single npc has a line about the continent at that exact moment. It is such a rich world that was splendidly made and presented. </p>
            <h2>🎙️ Voice Acting & Character Development </h2>
            <p>The voice acting in Final Fantasy XVI is top-notch. It truly feels authentic with the voice actors and the different accents every character has and how their upbringing and their history is clearly presented with even the way they speak. It really adds so much more depth to the characters and the world they live in. I especially love Clive's voice actor, he truly brings out the character's personality and emotions perfectly. The character development throughout the game is also very well done, with each character having their own unique arc and growth throughout the story. It truly makes you care about the characters and their journey. Clive has such a great voice actor who truly brings out his emotions so perfectly, especially whenever he started griveving, it felt so real and authentic. I really felt him, even though I don't personally relate to him at all. It was simply that good and Torgal is best boy.</p> <img src="/img/TorgalCliveRosfieldGIF_2.gif" class="modal-smallimg" >
            `
        ]
    },

    // Yakuza: Like a Dragon
    'Yakuza: Like a dragon': {
        title: '1-Tier: Yakuza: Like a Dragon',
        sections: [
            // Section 1: Combat (Placeholder content)
            `
            <h2>Combat System</h2>
            <p>I love the old combat beat-em up style in the older Yakuza games, so when I saw that this game had a turn-based system, I was skeptical at first. However, the turn-based combat in this game is really fun with lots of variety and it is quite engaging. I really like the job system. It gives a lot of variety with the freedom to also give any character whichever role you want to.</p>
            `,
            // Section 2: Story and Characters (Placeholder content)
            `
            <h2>Story and Characters</h2>
            <p>This game's story is as extremely complex as it is amazing. The plot twists and the secrets were super exciting and unexpected. I genuinly didn't expect to almost shed a tear at the ending. It was amazingly shot and voice acted. I really enjoyed the twists that came with Ichiban's backstory and how he changes throughout the game, same with the young master</p>
            `,
            // Section 3: Side Quests and Mini-Games (Placeholder content)
            `
            <h2>Side Quests and Mini-Games</h2>
            <p>As always the amount of side quests here are abundant. Many already known ones but also many many new ones. There is the Go-kart, the RAM sleeping minigame and I also really enjoyed the drinking minigame to learn more about the characters. It is a really nice way of learning about the backstories of your party members.</p>
            `
        ]
    },

    // God Of War
    'God of War': {
        title: '2-Tier: God Of War',
        sections: [
            // Section 1: Combat (Removed <div class="modal">)
            `
            <h2>🪓 Combat System & Leviathan Axe</h2>
            <p>Detail what you love about the combat feel, the weight of the Leviathan Axe, and the rune abilities.</p>
            `,
            // Section 2: Relationship (Removed </div>)
            `
            <h2>👨‍👦 Relationship & Worldbuilding</h2>
            <p>Focus on the relationship between Kratos and Atreus, or the stunning visual design of the Norse realms (Midgard, Alfheim, etc.).</p>
            `
        ]
    },

    // Persona 5 Royal
    'Persona5Royal': {
        title: '1-Tier: Persona5Royal',
        sections: [
            // Section 1: Combat (Removed <div class="modal">)
            `
            <img src="img/p5-logo.jpg" class="modal-bigimg">
            <h2>🪓 Combat System & Leviathan Axe</h2>
            <p>Detail what you love about the combat feel, the weight of the Leviathan Axe, and the rune abilities.</p>
            `,
            // Section 2: Relationship (Removed </div>)
            `
            <h2>👨‍👦 Relationship & Worldbuilding</h2>
            <p>Focus on the relationship between Kratos and Atreus, or the stunning visual design of the Norse realms (Midgard, Alfheim, etc.).</p>
            `
        ]
    }
    // Note: You need to add entries for 'Yakuza: Like a dragon' and 'Elden Ring'
};

// --- 2. MODAL FUNCTIONS (Updated to build HTML from the 'sections' array) ---

function openModal(gameID) {
    const data = gamePresentations[gameID];

    if (data && data.sections) {
        // 1. Convert the sections array into a single HTML string:
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