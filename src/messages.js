const gameMessages = {
  "Dark Souls": [
    "You died 100 times, but you got back up 101. That's strength.",
    "Every bonfire you reach is proof you never gave up.",
    "The boss doesn't get stronger — you do.",
    "Praise the sun, and praise yourself for not quitting.",
    "Difficulty is temporary. Victory is permanent.",
    "Even the Chosen Undead had to learn to roll.",
    "Your persistence is your greatest weapon.",
    "The path behind you is littered with defeated enemies. Keep going.",
  ],
  "The Legend of Zelda": [
    "It's dangerous to go alone — but you're braver than you think.",
    "Every dungeon has a solution. Every problem has an answer.",
    "Even Link started with just three hearts.",
    "Courage isn't the absence of fear. It's picking up the sword anyway.",
    "You've already saved the world before. You can handle today.",
    "Break every pot. Leave no stone unturned. Explore everything.",
    "The Triforce of Courage is already inside you.",
    "A true hero keeps moving forward, even without a map.",
  ],
  "Minecraft": [
    "You started with nothing and built an empire. Don't forget that.",
    "Every block you place is progress. Keep building.",
    "Creepers will try to blow up your work. Rebuild anyway.",
    "Diamonds are found at the deepest, darkest levels. Keep digging.",
    "Survival mode is hard, but you're still here.",
    "The only limit is your imagination — and render distance.",
    "You don't need a crafting recipe for determination.",
    "Night is temporary. Keep your torches lit and push through.",
  ],
  "Mario": [
    "You don't need a star to be invincible.",
    "Every level has a flagpole. You will reach it.",
    "Falling into a pit? There's always an extra life waiting.",
    "Even Mario misses a jump sometimes. He tries again.",
    "The princess might be in another castle, but you'll get there.",
    "Power-ups come to those who break the right blocks.",
    "One step at a time — that's how you cross every gap.",
    "You've got more lives in you than you think.",
  ],
  "Pokémon": [
    "Every champion was once a trainer with just one Pokémon.",
    "It doesn't matter how slow you level up, as long as you don't stop.",
    "Wild challenges appeared! You chose to fight. That takes guts.",
    "You don't need to catch them all — just keep moving forward.",
    "Evolution takes time and experience. Be patient with yourself.",
    "A critical hit of effort can change everything.",
    "Professor Oak believed in you before anyone else. Believe in yourself.",
    "Your journey of 1,000 miles started in Pallet Town.",
  ],
  "Skyrim": [
    "You are the Dragonborn. Act like it.",
    "An arrow to the knee doesn't have to end your adventure.",
    "You have a Thu'um inside you. Let the world hear it.",
    "Every quest you complete makes you stronger.",
    "The path is yours to choose. Go where your heart leads.",
    "Even the Dragonborn had to start by escaping Helgen.",
    "Fus Ro Dah your doubts away.",
    "The world is open before you. Explore it without fear.",
  ],
};

export function getGameNames() {
  return Object.keys(gameMessages);
}

export function getRandomMessage(gameName) {
  const messages = gameMessages[gameName];
  if (!messages) return null;
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}
