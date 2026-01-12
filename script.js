// --- 0. MODAL ELEMENTS ---
const modal = document.getElementById('game-modal');
const contentArea = document.getElementById('modal-content');

// --- 1. GAME DATA SOURCE (Now using the 'sections' array) ---
const gamePresentations = {
    // Clair Obscur: Expedition 33 
    'Expedition-33': {
        title: '1-Tier: Clair Obscur: Expedition 33',
        sections: [
            // Section 0: Acts
            `
            <h2> Acts of Clair Obscur: Expedition 33</h2>

            <img src="img/Expedition-Prologue.jpg" class="modal-smallimg">
            <p>The prologue of game sets a great tone for the rest of the game, I imagine a lot of people cried at the ending of the prologue, but unfortunately I didn't since I figured out what was going to happen. However, it was still a very emotional scene and I really liked how it was presented. The music played a very large role in which I noticed and it will be a theme that appears throughtout the game. </p>
            <img src="img/Expedition-Act1.jpg" class="modal-smallimg">
            <p> Looking back through Act 1 this act was the one with the most exploration and worldbuilding but it also had the most amount of light and comedic moments, especially because of the Gestrals. This act still had a lot of dark and emotoinally heavy moments. I think this came from the fact that Gustave was the main character here. At the beginning of the act he was very stressed and would only be thinking abuot Maelle and how to save her. So as soon as he found her the tone of the game lightened up a lot more. That is when I started to absolutely love Gustave and he started to show his funny and brotherly side. </p>\
            <p> The ending of this act was something I never ever expected. It never crossed my mind that Gustave would die at all. This really took me by surprise. I didn't cry yet everytime I thought about it I felt sad, especially because to me I didn't care about Maelle and Sciel at all. I liked Lune but I aboslutely loved Gustave, so I was extremely sad after I realised that he was fully gone, but I was even more infurated when then they replaced him with Verso a ghetto Gustave. </p>
            <img src="img/Expedition-Act2.jpg" class="modal-smallimg">
            <p> Act 2 was quite intense, especially with the death of a party member. The mood of the entire team was super tense. It doesn't help with such a suspicious looking guy appearing and sort of taking over the role of Gustave.</p>
            <p> I super enjoyed the combat here not only because of the new characters they are both quite unique and I enjoyed them a lot. It also added the Gradient counter and attacks which have incredibly satisfying sound effects behind 👍<p>
            <p> Old Lumiére was a really cool area. The mysteries kept on piling up and the end of the area with the cutscene of th manor right before the boss fight also added more to the mystery. This is also when I first heard a small part of "Une vie à t'aimer" which I instantly loved.  The boss fight was really good, he was quite threatening espceially since he can gommage my party.</p>
            <p> Then comes two Axons and one of if not my favourite area in the game "Sirene, She who plays with Wonder" . Firstly the area is gorgeous, The music is beautiful and a little touch I absoltuly love is how the vocals are made so that it sounds like the axon is the one singing it and whenever you turn the camera the vocals switch places in the headphones. Simply amazing. The boss fight itself is also really cool, I really like when she summons her minions you get a short pov shot of them flying down to you. Simple but nice.</p>
            <img src="img/Expedition-Sirene.jpg" class="modal-smallimg">
            <p> As for the other axon Visage I did find it neat that you can weaken him by destroying his masks. However, I didn't really have much to say about it, except for the fact that it is supposed to represent Verso "He who guards truth with lies" which is a perfect representation of him. Although I really liked the cutscene of the mask keeper first appearing really cool entrance.  </p>
            <img src="img/Expedition-Visage.jpg" class="modal-smallimg">
            <p> Finally the monolith, I wasn't expecting to reach it yet since I thought there would be another act and I expected this to happen at the third act. I really like the music and the atomsphere as soon as you enter the monolith area with the giant figure of the paintress just sitting there. Inside of the monolith are a bunch of cool designs where they are redisgns of previous areas, I really enjoyed it. I did feel that the it was very long getting to the top of the monolith just a little. 
            <p> The Renoir fight here was absolutely amazing, one of my favourite boss fights in the entire game. Une vie à t'aimer is the boss fight theme here and it is absolutely stunning. Even just the cutscene leading up to the boss fight is probably one of my favourites. His second phase with a lion appearing out of nowhere is just soo cool. He is truly just Hoarah loux.
            <img src="img/Expedition-Renoir.jpg" class="modal-smallimg"> 
            <p> Finally the paintress fight was pretty good, not much to say except for the second phase where she brings the giant figure in the second fight and she starts to throw some absurd attacks. The only other thing I remember is right after you beat her she starts to heal your party, which I did kind of hit me deep. The cutscene right after is also very emotional, especially when they planted the final flag. 
            <img src="img/Expedition-Paintress.jpg" class="modal-smallimg">
            <p> Now is the biggest twist that I never ever would have expected at all, the following cutscene after beating the paintress is where everyone goes back to Lumiére and they started celebrating. It was a really satisfying and wholesome scene until the gommage happens. It was such a shock to me, I didn't expect it at all. 
            <img src="img/Expedition-Act3.jpg" class="modal-smallimg">
            <p> The final act 

            `,
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
            <img src="img/Simon.jpg" class="modal-smallimg">
            <h4>The Buildup </h4>
            <p>Firstly before the fight even begins the drop to reach his arena is a very nice touch, really builds up the atmosphere. Then there is the arena, absolute darkness with only golden swords in the back with one guy sitting showing his back.</p>
            <h4>The Fight </h4>
            <h5>First Phase </h5>
            <p>It initially starts with quite a simple yet cool boss fight where Simon has a few attacks all of which are quite nice and meaty when you are able to parry them. He doesn't have that much HP.</p>
            <h5 >Phase Transition </h5>
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
            <img src="img/Expedition-area1.jpg" class="modal-smallimg"><img src="img/Expedition-area3.jpg" class="modal-smallimg">
            <img src="img/Expedition-area2.jpg" class="modal-smallimg"><img src="img/Expedition-area4.jpg" class="modal-smallimg">
            <img src="img/Expedition-area5.jpg" class="modal-smallimg"><img src="img/Expedition-area6.jpg" class="modal-smallimg">
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
            <img src="img/FFXVI-EikonWheel.jpg" class="modal-smallimg" >
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
            <p>The voice acting in Final Fantasy XVI is top-notch. It truly feels authentic with the voice actors and the different accents every character has and how their upbringing and their history is clearly presented with even the way they speak. It really adds so much more depth to the characters and the world they live in. I especially love Clive's voice actor, he truly brings out the character's personality and emotions perfectly. The character development throughout the game is also very well done, with each character having their own unique arc and growth throughout the story. It truly makes you care about the characters and their journey. Clive has such a great voice actor who truly brings out his emotions so perfectly, especially whenever he started griveving, it felt so real and authentic. I really felt him, even though I don't personally relate to him at all. It was simply that good and Torgal is best boy.</p> 
            <img src="img/TorgalCliveRosfieldGIF_2.gif" class="modal-smallimg" >
            `
        ]
    },

    // Yakuza: Like a Dragon
    'Yakuza: Like a dragon': {
        title: '1-Tier: Yakuza: Like a Dragon',
        sections: [
            // Section 1: Combat (Placeholder content)
            `
            <p> This game is just purely fun there isn't much for me to say besides that it is a pure fun time, whilst having some equally extremely deep emotional as goofy stupid hilarious moments in the best ways possible. </p>
            <h2>Combat System</h2>
            <p>I love the old combat beat-em up style in the older Yakuza games, so when I saw that this game had a turn-based system, I was skeptical at first. However, the turn-based combat in this game is really fun with lots of variety and it is quite engaging. I really like the job system. It gives a lot of variety with the freedom to also give any character whichever role you want to. This type of turn-based combat is quite unique where the location of your and other characters matter a   </p>
            `,
            // Section 2: Story and Characters (Placeholder content)
            `
            <h2>Story and Characters</h2>
            <p>This game's story is as extremely complex as it is amazing. The plot twists and the secrets were super exciting and unexpected. I genuinly didn't expect to almost shed a tear at the ending. It was amazingly shot and voice acted. I really enjoyed the twists that came with Ichiban's backstory and how he changes throughout the game, same with the young master</p>
            `,
            // Section 3: Side Quests and Mini-Games (Placeholder content)
            `
            <h2>Side Quests and Mini-Games</h2>
            <p>As always with Yakuza games the amount of side quests here are abundant. Many already known ones but also many many new ones. There is the Go-kart, the RAM sleeping minigame and I also really enjoyed the drinking minigame to learn more about the characters. It is a really nice way of learning about the backstories of your party members.</p>
            `,
            // Section 4: Characters(Placeholder content)
            `
            <h2>Characters</h2>
            <h3>Ichiban Kasuga</h3>
            <img src="img/Y7Ichiban.jpg" alt="Ichiban Kasuga" class="modal-smallimg">
            <p>Ichiban is such a lovable character, he is so pure and kind-hearted it is impossible not to like him. He is super down-to-earth yet dumb it it makes him all the better. He doesn't replace Kiryu, however he fils a different role as a main character and I am all for it.</p>
            <h3>Zhao</h3>
            <img src="img/Y7Zhao.jpg" alt="Zhao" class="modal-smallimg">
            <p> Half of the party I really like, espcially Zhao. He is one of my most favourite characters in the entire franchise so far. He is just so cool whilst still being cocky and having a sense of humour all at the same time. He is just such a great character. I wasn't happier than when I realised that he can join the party. I never got him out of my main party ever. He also just has my favourite unique job "Gangster". He also just has the absolute best outfit in the entire game. </p>
            <h3>Joon-Gi Han</h3>
            <img src="img/Y7JoonGi.jpg" alt="Joon-Gi Han" class="modal-smallimg">
            <p> I think if Zhao if didn't exist then Joon-Gi would have been my favourite character. He is such a great character with a really interesting backstory with an interesting perspective on certain things. He was such a surprise, especially because of his looks and how he has the same name and looks as the anatgonist in Yakuza 6. So I was equally as surprised to see him alive as I was when he joined the party, just like Zhao. </p>
            <h3>Saeko Mukoda</h3>
            <img src="img/Y7Saeko.jpg" alt="Saeko Mukoda" class="modal-smallimg">
            <p>With Saeko I wasn't sure at first, since I feel it is hard to write a female character that I personally really like. However, Saeko really grew on me throughout the game and by the end I really liked her. I really like her dynamic with Ichiban it is really nice to see. </p>
            <h3>Other Party Members</h3>
            <p> The rest of the gang are cool. I didn't have any negative remarks on them. I was simply not as interested in them as the ones I have mentioned above.</p>
            `,
            // Section 5: Highlights (Placeholder content)
            `
            <h2>Highlights</h2>
            <p>There are so many memorable moments in this game, from the hilarious side quests to the emotional story beats. One of my favorite moments is when Ichiban and his party fight Kiryu. Something I never expected to ever happen. This after fighting Majima and Saejima made me feel so giddy and I am glad that they were super difficult fights. It made it feel a lot more realistic for the characters. Definitely a highlight for me.</p>
            <img src="img/Y7IchibanVsKiryu.jpg" alt="Ichiban vs Kiryu" class="modal-smallimg"><img src="img/Y7IchibanVsMajima.jpg" alt="Ichiban vs Majima" class="modal-smallimg">
            <p> One true highlight for me was one of the last cutscenes where Ichiban is crying and begging the Young Master to just stop. It really hit me, the voice actor the facial animation and the music all came just perfectly together to the point where I shed a tear. It was a beautifully done scene and also a tragic end. </p>
            <img src="img/Y7IchibanCrying.jpg" alt="Ichiban Crying" class="modal-smallimg">
            `

        ]
    },

    //Elden Ring
    'Elden Ring': {
        title: '1-Tier: Elden Ring',
        sections: [
            // Section 1: Open World Design
            `
            <h2>🌍 Open World Design</h2>
            <p>This games map is larger than I had ever expected, but at the same time looking back at it, it feels like it isn't that large. It is large yet comprehendible </p>
            <img src="img/EldenRingMap.jpg" class="modal-smallimg">
            <p> There are so many areas with hidden secrets and places to explore, it truly feels like a miracle happened for such a game to be possibly made. The amount of detail and secrets that they have implemented in this game is beyond anything I have ever seen before. </p>

            `,
            // Section 2: Combat Mechanics
            `
            <h2>⚔️ Combat Mechanics</h2>
            <p>The combat system in this game is quite interesting how committed heavy this game is. Having so many enemies dealing so much damage and punishing you for even a small mistake whether it be overcommitting, not dodging or thinking you can tank the hit and still have your attack land after. This game is both frustrating and satisfying.</p>
            <p> I am extremely impressed with the amount of different builds and playstyles you can have in this game. There are so many different weapons, spells and abilities that you can use to create your own unique playstyle. After 3 playthroughs of this game I still feel like I haven't scratched the surface, yet I always seem to find the same weapons so that doesn't help.  </p>
            `,
            // Section 3: Boss Fights
            `
            <h2>⚔️ Boss Fights</h2>
            <p>The boss fights in this game are truly epic and memorable. 
            <h3>Starscourge Radahn</h3>
            <p> Radahn is probably my favourite character in the entire game. His backstory is really cool, from the armor he is wearing to honor Godfrey. His humility and honor in fights is really cool to see. The story with his horse is also so wholsome. The entire story with the Malenia fight to the aftermath. The fight itself is also really fun, his second phase transation, although I knew about it from before, was still one of the coolest things I had seen up until that point. His weapons are also some of my favourite, from the way they look, how they feel when you use them, to the ash of war they have. Truly a GigaChad of a boss fight. </p>
            <img src="img/EldenRingRadahn.jpg" class="modal-smallimg">


            <h3>Malenia, Blade of Miquella</h3>
            <p> Malenia is probably the easily the hardest boss in the base game. Her moveset is so fast and relentless that it is impossible to not respect her. The way she heals on every hit is absolutely infurating but it also just adds even more of a true challenge. The fight itself is also really fun, her second phase transformation is one of the coolest things I have seen in a boss fight. The music and atmosphere during the fight is also really well done, it truly feels like a two fighters at their peak having a dance. Truly a memorable boss fight. </p>
            <img src="img/EldenRingMalenia.jpg" class="modal-smallimg">


            `,
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
    //Like a dragon: The man who erased his name
    'LAD Gaiden': {
        title: '2-Tier: Like a dragon Gaiden: The Man Who Erased His Name',
        sections: [
            // Section 1: Story & Characters (Removed <div class="modal">)
            `
            <h2>📖 Story & Characters</h2>
            <p>.</p>
            `,
            `

            `
            // Section 2: Gameplay Mechanics (Removed </div>)

        ]
    },
    //Like a dragon: Ishin
    'Ishin': {
        title: '2-Tier: Like a dragon Ishin',
        sections: [
            // Section 1: Story & Characters (Removed <div class="modal">)
            `
            <h2>Chapter 1</h2>
            <p>The beginning of this game wasn't super interesting, quite a slow start but the final cutscene of the first chapter really left a strong impression on me. The oath that was made then set the tone for the rest of the game. </p>
            <img src="img/IshinChapter1.jpg" class="modal-smallimg">
            `,

            `
            <h2>Chapter 9</h2>
            <p> 9th chapter was great all around for the banter with Ryuji and Akiyama. It was a great mix of a serious and dark start of the chapter which turned into a more lighthearted of a bunch of guys from completely opposite sides coming together to simply have fun. It tells a great story of forgetting, forgiving and moving on from the past.</p> 
            <img src="img/IshinChapter9.jpg" class="modal-smallimg">
            `,
            `
            <h2>Pre-Final battle Cutscene</h2>
            <p>Final fight cutscene into the fight was a very interesting cutscene with the whole people having the same name and that one of them only one of them Will change history and that there could have been too people with the same name, changing history in different ways.Side note the mid fight cutscenes were very cool and and the concept of the enemy , having the same fighting style as me was another layer of meaning to the whole two ryomas thing.</p>
            <h2>Final Cutscene</h2>
            <p>The final cutscene has one of the most epic monologue and home/countr,y and an amazing end line from the man himself, Kuroda. What a great way to end the game by both addressing people who do end up changing the county over the history and in a way breaking the 4th wall by talking indirectly to the player, amazing.</p>
            <img src="img/IshinFinal.jpg" class="modal-smallimg">
            `,
            `
            <div class="modal-collage">
            <img src="img/Ishin (1).jpg" class="modal-smallimg"><img src="img/Ishin (2).jpg" class="modal-smallimg">
            <img src="img/Ishin (3).jpg" class="modal-smallimg"><img src="img/Ishin (4).jpg" class="modal-smallimg">
            </div


            `,
            // Section 2: Gameplay Mechanics (Removed </div>)

        ]
    },
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
};