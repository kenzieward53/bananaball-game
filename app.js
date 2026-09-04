// ==================================================
// SECTION 1: MASTER BANANABALL ROSTER
// ==================================================
const players = [
  // ==================== SAVANNAH BANANAS ====================
  { name: "Bill LeRoy", team: "Savannah Bananas", position: "Catcher", jersey: 1, hand: "R", state: "GA" },
  { name: "Reese Alexiades", team: "Savannah Bananas", position: "Outfield", jersey: 2, hand: "R", state: "CA" },
  { name: "Bryce Grizzaffi", team: "Savannah Bananas", position: "Catcher", jersey: 3, hand: "R", state: "LA" },
  { name: "KJ Jackson", team: "Savannah Bananas", position: "Utility", jersey: 4, hand: "R", state: "OH" },
  { name: "DR Meadows", team: "Savannah Bananas", position: "Outfield", jersey: 5, hand: "R", state: "GA" },
  { name: "Ryan Cox", team: "Savannah Bananas", position: "Infield", jersey: 6, hand: "R", state: "PA"},
  { name: "Ty Jackson", team: "Savannah Bananas", position: "Outfield", jersey: 7, hand: "R", state: "FL" },
  { name: "Jackson Olson", team: "Savannah Bananas", position: "Infield", jersey: 8, hand: "R", state: "CT" },
  { name: "Max Jung-Goldberg", team: "Savannah Bananas", position: "Utility", jersey: 9, hand: "R", state: "CA" },
  { name: "Alex Ziegler", team: "Savannah Bananas", position: "Infield", jersey: 10, hand: "L", state: "PA" },
  { name: "Austin Drury", team: "Savannah Bananas", position: "Pitcher", jersey: 11, hand: "L", state: "FL" },
  { name: "Kyle Luigs", team: "Savannah Bananas", position: "Pitcher", jersey: 12, hand: "R", state: "GA" },
  { name: "Dakota Albritton", team: "Savannah Bananas", position: "Utility", jersey: 14, hand: "R", state: "GA" },
  { name: "Robert Anthony Cruz", team: "Savannah Bananas", position: "Outfield", jersey: 15, hand: "L", state: "CA" },
  { name: "Easton Parrish", team: "Savannah Bananas", position: "Catcher", jersey: 17, hand: "R", state: "TX" },
  { name: "Danny Hosley", team: "Savannah Bananas", position: "Utility", jersey: 18, hand: "R", state: "VA" },
  { name: "Dan Oberst", team: "Savannah Bananas", position: "Utility", jersey: 19, hand: "R", state: "FL" },
  { name: "Grant Besser", team: "Savannah Bananas", position: "Pitcher", jersey: 20, hand: "L", state: "IN" },
  { name: "Jacob Bazala", team: "Savannah Bananas", position: "Pitcher", jersey: 21, hand: "R", state: "PA" },
  { name: "JT Sokolove", team: "Savannah Bananas", position: "Utility", jersey: 22, hand: "R", state: "MI" },
  { name: "Derek Klena", team: "Savannah Bananas", position: "Pitcher", jersey: 24, hand: "R", state: "CA" },
  { name: "Connor Harris", team: "Savannah Bananas", position: "Pitcher", jersey: 30, hand: "R", state: "CT" },
  { name: "Trystan Levesque", team: "Savannah Bananas", position: "Pitcher", jersey: 31, hand: "L", state: "CT" },
  { name: "Kelsie Whitmore", team: "Savannah Bananas", position: "Pitcher", jersey: 33, hand: "R", state: "CA" },
  { name: "Allan Saathoff", team: "Savannah Bananas", position: "Pitcher", jersey: 44, hand: "R", state: "MD" },
  { name: "Noah Niznik", team: "Savannah Bananas", position: "Pitcher", jersey: 88, hand: "L", state: "MO" },
  { name: "Frankie Moscatiello", team: "Savannah Bananas", position: "Pitcher", jersey: 99, hand: "R", state: "NY" },
  // ==================== THE PARTY ANIMALS ====================
  { name: "Ashton Lansdell", team: "Party Animals", position: "Infield", jersey: 1, hand: "R", state: "GA" },
  { name: "Jason Swan", team: "Party Animals", position: "Infield", jersey: 2, hand: "R", state: "FL" },
  { name: "TJ Reeves", team: "Party Animals", position: "Outfield", jersey: 3, hand: "R", state: "AL" },
  { name: "Tanner Thomas", team: "Party Animals", position: "Infield", jersey: 4, hand: "R", state: "FL" },
  { name: "Andy Cosgrove", team: "Party Animals", position: "Catcher", jersey: 5, hand: "R", state: "WA" },
  { name: "Reece Hampton", team: "Party Animals", position: "Outfield", jersey: 6, hand: "R", state: "NC" },
  { name: "Bryson Bloomer", team: "Party Animals", position: "Infield", jersey: 8, hand: "R", state: "KY" },
  { name: "Dustin Baber", team: "Party Animals", position: "Infield", jersey: 9, hand: "R", state: "FL" },
  { name: "Bret Helton", team: "Party Animals", position: "Pitcher", jersey: 10, hand: "R", state: "CO" },
  { name: "Chase Achuff", team: "Party Animals", position: "Infield", jersey: 11, hand: "R", state: "FL" },
  { name: "Noah Fisher", team: "Party Animals", position: "Utility", jersey: 12, hand: "R", state: "MI" },
  { name: "Brady Kais", team: "Party Animals", position: "Pitcher", jersey: 13, hand: "L", state: "MI" },
  { name: "Dylan Porter", team: "Party Animals", position: "Pitcher", jersey: 15, hand: "R", state: "CA" },
  { name: "Dalton Ponce", team: "Party Animals", position: "Pitcher", jersey: 17, hand: "R", state: "CA" },
  { name: "Riyan Rodriguez", team: "Party Animals", position: "Pitcher", jersey: 21, hand: "R", state: "CA" },
  { name: "Peter Holden", team: "Party Animals", position: "Pitcher", jersey: 22, hand: "L", state: "FL" },
  { name: "Sean Fluke", team: "Party Animals", position: "Pitcher", jersey: 25, hand: "R", state: "FL" },
  { name: "Nate Tellier", team: "Party Animals", position: "Pitcher", jersey: 26, hand: "R", state: "MA" },
  { name: "Jake Lialios", team: "Party Animals", position: "Pitcher", jersey: 27, hand: "R", state: "AZ" },
  { name: "Drew Gillespie", team: "Party Animals", position: "Pitcher", jersey: 28, hand: "R", state: "NM" },
  { name: "Mark Smith", team: "Party Animals", position: "Utility", jersey: 40, hand: "R", state: "CT" },
  { name: "Bronson Balholm", team: "Party Animals", position: "Catcher", jersey: 41, hand: "R", state: "CA" },
  { name: "Michael Ballard", team: "Party Animals", position: "Infield", jersey: 407, hand: "R", state: "FL" },
  { name: "Garrett Delano", team: "Party Animals", position: "Pitcher", jersey: 777, hand: "R", state: "FL" },
  { name: "John Howard Bobo", team: "Party Animals", position: "Utility", jersey: 999, hand: "R", state: "NV" },
  { name: "Jake Skole", team: "Party Animals", position: "Outfield", jersey: "X", hand: "R", state: "GA" },
  // ==================== THE FIREFIGHTERS ====================
  { name: "Marshall Shill", team: "The Firefighters", position: "Pitcher", jersey: "🔥", hand: "R", state: "AZ" },
  { name: "Lamar Sparks", team: "The Firefighters", position: "Outfield", jersey: 0, hand: "R", state: "TX" },
  { name: "Christian Dearman", team: "The Firefighters", position: "Pitcher", jersey: 1, hand: "R", state: "FL" },
  { name: "Caden Green", team: "The Firefighters", position: "Infield", jersey: 2, hand: "R", state: "OK" },
  { name: "Dalton Cornett", team: "The Firefighters", position: "Catcher", jersey: 3, hand: "R", state: "KY" },
  { name: "Eric Jones Jr", team: "The Firefighters", position: "Utility", jersey: 4, hand: "R", state: "NC" },
  { name: "Austin Temple", team: "The Firefighters", position: "Pitcher", jersey: 6, hand: "R", state: "FL" },
  { name: "Mason Maxwell", team: "The Firefighters", position: "Outfield", jersey: 7, hand: "R", state: "NJ" },
  { name: "South Trimble", team: "The Firefighters", position: "Utility", jersey: 8, hand: "R", state: "VA" },
  { name: "Noah Bridges", team: "The Firefighters", position: "Outfield", jersey: 9, hand: "R", state: "NC" },
  { name: "Darrien McDowell", team: "The Firefighters", position: "Utility", jersey: 10, hand: "L", state: "FL" },
  { name: "Logan Lacey", team: "The Firefighters", position: "Infield", jersey: 11, hand: "R", state: "FL" },
  { name: "Zachary Bridges", team: "The Firefighters", position: "Catcher", jersey: 12, hand: "R", state: "NC" },
  { name: "Liam Spence", team: "The Firefighters", position: "Infield", jersey: 15, hand: "R", state: "AUS" },
  { name: "Ben Dum III", team: "The Firefighters", position: "Pitcher", jersey: 18, hand: "R", state: "PA" },
  { name: "Jared Donalson", team: "The Firefighters", position: "Pitcher", jersey: 21, hand: "R", state: "GA" },
  { name: "Zack Phillips", team: "The Firefighters", position: "Pitcher", jersey: 22, hand: "L", state: "AR" },
  { name: "Ron Franklin Jr", team: "The Firefighters", position: "Outfield", jersey: 23, hand: "R", state: "LA" },
  { name: "Dakota McFadden", team: "The Firefighters", position: "Utility", jersey: 24, hand: "R", state: "NC" },
  { name: "Ga'von Wray", team: "The Firefighters", position: "Pitcher", jersey: 25, hand: "R", state: "GA" },
  { name: "Brian Trepanier", team: "The Firefighters", position: "Pitcher", jersey: 29, hand: "R", state: "GA" },
  { name: "Armando Becerra", team: "The Firefighters", position: "Outfield", jersey: 30, hand: "L", state: "FL" },
  { name: "Blake Morgan", team: "The Firefighters", position: "Pitcher", jersey: 37, hand: "L", state: "TX" },
  { name: "Bradford Webb", team: "The Firefighters", position: "Pitcher", jersey: 42, hand: "R", state: "VA" },
  { name: "Tyner Hughes", team: "The Firefighters", position: "Utility", jersey: 55, hand: "R", state: "TN" },
  { name: "Johnny Hummel", team: "The Firefighters", position: "Pitcher", jersey: 95, hand: "R", state: "NC" },
  // ==================== TEXAS TAILGATERS ====================
  { name: "Jonathan Luders", team: "Texas Tailgaters", position: "Infield", jersey: 1, hand: "R", state: "MA" },
  { name: "Zach Watson", team: "Texas Tailgaters", position: "Utility", jersey: 2, hand: "R", state: "LA" },
  { name: "Jayson Arendt", team: "Texas Tailgaters", position: "Utility", jersey: 3, hand: "R", state: "NC" },
  { name: "Jorden Hussein", team: "Texas Tailgaters", position: "Infield", jersey: 5, hand: "R", state: "TX" },
  { name: "Jordan Barth", team: "Texas Tailgaters", position: "Infield", jersey: 6, hand: "R", state: "MN" },
  { name: "Indiana Stanley", team: "Texas Tailgaters", position: "Utility", jersey: 7, hand: "R", state: "GA" },
  { name: "Jonathan Hughes", team: "Texas Tailgaters", position: "Pitcher", jersey: 8, hand: "R", state: "GA" },
  { name: "Nick Lopez", team: "Texas Tailgaters", position: "Utility", jersey: 9, hand: "R", state: "CA" },
  { name: "Mac Danford", team: "Texas Tailgaters", position: "Infield", jersey: 11, hand: "R", state: "FL" },
  { name: "Christian Davis", team: "Texas Tailgaters", position: "Pitcher", jersey: 12, hand: "L", state: "GA" },
  { name: "Travis Moniot", team: "Texas Tailgaters", position: "Infield", jersey: 16, hand: "R", state: "CA" },
  { name: "Brett Sanchez", team: "Texas Tailgaters", position: "Pitcher", jersey: 17, hand: "R", state: "LA" },
  { name: "Reese Miller", team: "Texas Tailgaters", position: "Pitcher", jersey: 22, hand: "R", state: "TX" },
  { name: "Joe Sperone", team: "Texas Tailgaters", position: "Pitcher", jersey: 23, hand: "R", state: "PA" },
  { name: "Jon Reid", team: "Texas Tailgaters", position: "Pitcher", jersey: 24, hand: "L", state: "CA" },
  { name: "Taj Porter", team: "Texas Tailgaters", position: "Catcher", jersey: 26, hand: "R", state: "LA" },
  { name: "Kyle Martin", team: "Texas Tailgaters", position: "Utility", jersey: 27, hand: "L", state: "SC" },
  { name: "Jose Gonzalez", team: "Texas Tailgaters", position: "Utility", jersey: 28, hand: "L", state: "TX" },
  { name: "Tyler Rigot", team: "Texas Tailgaters", position: "Pitcher", jersey: 29, hand: "L", state: "NC" },
  { name: "Tre Jones", team: "Texas Tailgaters", position: "Utility", jersey: 33, hand: "R", state: "TX" },
  { name: "Megan Wiggins", team: "Texas Tailgaters", position: "Outfield", jersey: 34, hand: "R", state: "GA" },
  { name: "Brett Allen", team: "Texas Tailgaters", position: "Pitcher", jersey: 36, hand: "R", state: "AUS" },
  { name: "Zach Blankenship", team: "Texas Tailgaters", position: "Pitcher", jersey: 37, hand: "L", state: "FL" },
  { name: "Chris Clarke", team: "Texas Tailgaters", position: "Pitcher", jersey: 44, hand: "R", state: "TX" },
  { name: "Taylor Justus", team: "Texas Tailgaters", position: "Catcher", jersey: 85, hand: "R", state: "CA" },
  { name: "Jimmy Lewis", team: "Texas Tailgaters", position: "Pitcher", jersey: 99, hand: "R", state: "FL" },
  // ==================== INDIANAPOLIS CLOWNS ====================
  { name: "Kirkland Banks", team: "Indianapolis Clowns", position: "Utility", jersey: 1, hand: "R", state: "LA" },
  { name: "Jalen Vasquez", team: "Indianapolis Clowns", position: "Infield", jersey: 2, hand: "R", state: "SC" },
  { name: "Joe Gray", team: "Indianapolis Clowns", position: "Outfield", jersey: 3, hand: "R", state: "MS" },
  { name: "Gage Voorhees", team: "Indianapolis Clowns", position: "Pitcher", jersey: 4, hand: "R", state: "OH" },
  { name: "Brian Dansereau", team: "Indianapolis Clowns", position: "Outfield", jersey: 5, hand: "R", state: "GA" },
  { name: "Bobby Lada", team: "Indianapolis Clowns", position: "Infield", jersey: 7, hand: "R", state: "TX" },
  { name: "Brett Maddock", team: "Indianapolis Clowns", position: "Pitcher", jersey: 8, hand: "R", state: "CA" },
  { name: "Chris Burgess", team: "Indianapolis Clowns", position: "Catcher", jersey: 9, hand: "R", state: "GA" },
  { name: "Correlle Prime", team: "Indianapolis Clowns", position: "Utility", jersey: 11, hand: "R", state: "FL" },
  { name: "Niko Hulsizer", team: "Indianapolis Clowns", position: "Outfield", jersey: 12, hand: "R", state: "PA" },
  { name: "Clark Gilmore", team: "Indianapolis Clowns", position: "Pitcher", jersey: 13, hand: "R", state: "CT" },
  { name: "David Griffin", team: "Indianapolis Clowns", position: "Pitcher", jersey: 15, hand: "R", state: "MA" },
  { name: "Eli Paton", team: "Indianapolis Clowns", position: "Infield", jersey: 16, hand: "R", state: "CA" },
  { name: "Jackie Bradley Jr", team: "Indianapolis Clowns", position: "Outfield", jersey: 19, hand: "R", state: "VA" },
  { name: "Vinny Santarsiero", team: "Indianapolis Clowns", position: "Pitcher", jersey: 21, hand: "R", state: "FL" },
  { name: "Joe Lytle", team: "Indianapolis Clowns", position: "Catcher", jersey: 22, hand: "R", state: "OK" },
  { name: "Kobe Robinson", team: "Indianapolis Clowns", position: "Pitcher", jersey: 24, hand: "R", state: "TN" },
  { name: "Dayan Reinoso", team: "Indianapolis Clowns", position: "Pitcher", jersey: 25, hand: "R", state: "PA" },
  { name: "Nick Wilson", team: "Indianapolis Clowns", position: "Pitcher", jersey: 33, hand: "R", state: "TX" },
  { name: "Daniel Foster", team: "Indianapolis Clowns", position: "Pitcher", jersey: 34, hand: "L", state: "FL" },
  { name: "Dale Francis Jr", team: "Indianapolis Clowns", position: "Utility", jersey: 44, hand: "R", state: "FL" },
  { name: "Andrew Irvine", team: "Indianapolis Clowns", position: "Pitcher", jersey: 67, hand: "R", state: "IA" },
  { name: "Mat Wolf", team: "Indianapolis Clowns", position: "Utility", jersey: "!", hand: "R", state: "OK" },
  { name: "Fisher Polydoroff", team: "Indianapolis Clowns", position: "Utility", jersey: "∞", hand: "R", state: "TX" },
  { name: "Malachi Mitchell", team: "Indianapolis Clowns", position: "Utility", jersey: "⚡", hand: "R", state: "FL" },
  // ==================== LOCO BEACH COCONUTS ====================
  { name: "CJ Williams", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 0, hand: "R", state: "FL" },
  { name: "Peyton Chatagnier", team: "Loco Beach Coconuts", position: "Infield", jersey: 1, hand: "R", state: "TX" },
  { name: "Sal Jacobo", team: "Loco Beach Coconuts", position: "Infield", jersey: 2, hand: "R", state: "AR" },
  { name: "Armani Henderson", team: "Loco Beach Coconuts", position: "Utility", jersey: 3, hand: "R", state: "RI" },
  { name: "Brett Carson", team: "Loco Beach Coconuts", position: "Utility", jersey: 4, hand: "L", state: "OH" },
  { name: "Drake Fontenot", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 6, hand: "R", state: "LA" },
  { name: "JD Urso", team: "Loco Beach Coconuts", position: "Utility", jersey: 7, hand: "R", state: "FL" },
  { name: "Kaden Bower", team: "Loco Beach Coconuts", position: "Utility", jersey: 8, hand: "R", state: "UT" },
  { name: "Ben Parker", team: "Loco Beach Coconuts", position: "Outfield", jersey: 9, hand: "R", state: "CA" },
  { name: "Tanner Allen", team: "Loco Beach Coconuts", position: "Outfield", jersey: 10, hand: "R", state: "AL" },
  { name: "Ashby Vining", team: "Loco Beach Coconuts", position: "Catcher", jersey: 11, hand: "R", state: "SC" },
  { name: "Keegan James", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 12, hand: "R", state: "MS" },
  { name: "Dalton Mauldin", team: "Loco Beach Coconuts", position: "Utility", jersey: 13, hand: "R", state: "FL" },
  { name: "Jorden Brewer", team: "Loco Beach Coconuts", position: "Utility", jersey: 15, hand: "R", state: "MI" },
  { name: "Blake Benson", team: "Loco Beach Coconuts", position: "Utility", jersey: 17, hand: "L", state: "AR" },
  { name: "Gideon Antle", team: "Loco Beach Coconuts", position: "Outfield", jersey: 18, hand: "R", state: "MO" },
  { name: "Zach Smith", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 19, hand: "R", state: "TX" },
  { name: "Will Ethridge", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 20, hand: "R", state: "GA" },
  { name: "Erik Ostberg", team: "Loco Beach Coconuts", position: "Catcher", jersey: 21, hand: "R", state: "MA" },
  { name: "Austin Krzeminski", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 22, hand: "R", state: "GA" },
  { name: "Dane Tofteland", team: "Loco Beach Coconuts", position: "Utility", jersey: 23, hand: "R", state: "AB" },
  { name: "Andy Archer", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 24, hand: "R", state: "GA" },
  { name: "Joe Filomeno", team: "Loco Beach Coconuts", position: "Pitcher", jersey: 30, hand: "L", state: "IL" },
  { name: "Grady Morgan", team: "Loco Beach Coconuts", position: "Outfield", jersey: 31, hand: "R", state: "CA" },
  { name: "Kyle Perry", team: "Loco Beach Coconuts", position: "Pitcher", jersey: "1 of 1", hand: "L", state: "NE" },
  { name: "Denae Benites", team: "Loco Beach Coconuts", position: "Catcher", jersey: 222, hand: "R", state: "NV" }
];
// ==================================================
//// ==================================================
// SECTION 2: SEARCH DROPDOWN POPULATOR
// ==================================================
function initializeSearchDropdown() {
    const listContainer = document.getElementById("playerList");
    if (!listContainer) return;
    listContainer.innerHTML = ""; 

    players.forEach(player => {
        const option = document.createElement("option");
        option.value = player.name;
        listContainer.appendChild(option);
    });
}

// ==================================================
// SECTION 3: THE GUESS MATCH & COLOR ROW CREATOR
// ==================================================
let guessCount = 0;
const maxGuesses = 6;
let allEmojiRows = []; // <--- Single clean declaration

document.getElementById("submitBtn").addEventListener("click", processGuess);

function processGuess() {
    const input = document.getElementById("guessInput");
    const guessName = input.value.trim();
    const guessedPlayer = players.find(p => p.name.toLowerCase() === guessName.toLowerCase());

    if (!guessedPlayer) {
        alert("Player not found! Please select a name from the dropdown list.");
        return;
    }

    input.value = "";
    guessCount++;
    createResultRow(guessedPlayer);

    // 🏆 THIS FORCES THE WIN POPUP ONCE ALL BLOCKS TURN GREEN
    if (guessedPlayer.name.toLowerCase().trim() === secretPlayer.name.toLowerCase().trim()) {
        setTimeout(() => {
            showEndgameModal(true);
            saveGameOutcome(true, guessCount);
        }, 1200); // 1.2 second slight delay so you can watch the boxes flip to green first!
    } else if (guessCount >= maxGuesses) {
        setTimeout(() => {
            saveGameOutcome(false, 0);
            showEndgameModal(false);
        }, 1200);
    }
}

 // <--- This bracket closes the function safely!


// ==========================================
// SECTION 3 & 4: RESULT ROWS & EMOTICONS
// ==========================================
// ==========================================
// SECTION 3 & 4: RESULT ROWS & EMOTICONS
// ==========================================
function createResultRow(guess) {
    const container = document.getElementById("gridContainer");
    const row = document.createElement("div");
    row.className = "grid-row";

    const traits = [
        { name: "name", value: guess.name, status: guess.name === secretPlayer.name ? "correct" : "incorrect" },
        { name: "team", value: guess.team, status: guess.team === secretPlayer.team ? "correct" : "incorrect" },
        { name: "position", value: guess.position, status: guess.position === secretPlayer.position ? "correct" : "incorrect" },
        { 
            name: "jersey", 
            value: guess.jersey, 
            status: String(guess.jersey) === String(secretPlayer.jersey) ? "correct" : 
                    (!isNaN(Number(guess.jersey)) && !isNaN(Number(secretPlayer.jersey)) && Math.abs(Number(guess.jersey) - Number(secretPlayer.jersey)) <= 5 ? "partial" : "incorrect") 
        },
        { name: "hand", value: guess.hand, status: guess.hand === secretPlayer.hand ? "correct" : "incorrect" },
        { name: "state", value: guess.state, status: guess.state === secretPlayer.state ? "correct" : "incorrect" }
    ];

    let currentEmojiRow = "";

    traits.forEach((trait, index) => {
        const box = document.createElement("div");
        box.className = "grid-box " + trait.status;
        box.innerText = trait.value;

        // Wave animation timer effect
        box.style.animationDelay = `${index * 0.2}s`;

        let emoji = "⬛";
        if (trait.status === "correct") emoji = "🟩";
        if (trait.status === "partial") emoji = "🟨";
        currentEmojiRow += emoji;

        if (trait.name === "jersey" && trait.status !== "correct") {
            const guessNum = Number(guess.jersey);
            const secretNum = Number(secretPlayer.jersey);
            if (!isNaN(guessNum) && !isNaN(secretNum)) {
                if (guessNum < secretNum) box.innerText += " ↑";
                else box.innerText += " ↓";
            }
        }
        row.appendChild(box);
    });

    allEmojiRows.push(currentEmojiRow);
    container.appendChild(row);
}

// ==========================================
// SECTION 5: DAILY TEAM-ROTATION LOGIC ENGINE
// ==========================================
function getDailySecretPlayer() {
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() ) * 100 + today.getDate();
    const scramble = Math.sin(dateSeed) * 10000;
    const finalScramble = scramble - Math.floor(scramble);
    return players[Math.floor(finalScramble * players.length)];
}

const secretPlayer = getDailySecretPlayer();
console.log(`Mystery Player Team: ${secretPlayer.team} | Pool Size: ${players.length}`);
initializeSearchDropdown();
// ==================================================
// SECTION 4: WIN/LOSS MODAL POPUP ENGINE
// ==================================================
function showEndgameModal(isWin) {
    const modal = document.getElementById("endgameModal");
    const title = document.getElementById("modalTitle");
    const msg = document.getElementById("modalMessage");
    const stats = document.getElementById("modalGuesses");
    const emojiDisplay = document.getElementById("emojiResultDisplay");

    title.innerText = isWin ? "🎉 STRIKE 3, YOU WIN!" : "💀 STRIKE OUT!";
    msg.innerText = isWin ? "Sensational guess! You tracked down the mystery player." : `Better luck next game! Today's player was: ${secretPlayer.name}`;
    stats.innerText = `Guesses Used: ${guessCount} / ${maxGuesses}`;
    
    // Join your emoji tracking rows together with line breaks
    if (typeof allEmojiRows !== 'undefined') {
        emojiDisplay.innerText = allEmojiRows.join("\n");
    }
    
    modal.classList.remove("hidden");
}

// Attach listeners for your buttons so they can close and share
if (document.getElementById("closeModalBtn")) {
    document.getElementById("closeModalBtn").addEventListener("click", () => {
        document.getElementById("endgameModal").classList.add("hidden");
    });
}

if (document.getElementById("shareBtn")) {
    document.getElementById("shareBtn").addEventListener("click", () => {
        const textToCopy = `🍌 Bananaball Guessing Game\nGuesses: ${guessCount}/${maxGuesses}\n\n${allEmojiRows.join("\n")}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("📊 Results copied to clipboard! Share them with your friends.");
        }).catch(err => {
            alert("Could not copy automatically, highlight text manually to share.");
        });
    });
}
// Initialize local data object structure if nothing exists in browser memory
let gameStats = JSON.parse(localStorage.getItem('bananaballStats')) || {
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0,
    distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
};

// Main scoring engine function to process outcome conditions
function saveGameOutcome(isWin, attemptsUsed) {
    gameStats.played++;
    if (isWin) {
        gameStats.won++;
        gameStats.currentStreak++;
        gameStats.distribution[attemptsUsed]++;
        if (gameStats.currentStreak > gameStats.maxStreak) {
            gameStats.maxStreak = gameStats.currentStreak;
        }
    } else {
        gameStats.currentStreak = 0;
    }
    // Commit adjustments directly to the local storage engine
    localStorage.setItem('bananaballStats', JSON.stringify(gameStats));
    renderVisualStats(attemptsUsed);
}

// Dynamically scale graph components and print text nodes
function renderVisualStats(winningAttempt) {
    document.getElementById('stat-played').innerText = gameStats.played;
    const winPercentage = gameStats.played ? Math.round((gameStats.won / gameStats.played) * 100) : 0;
    document.getElementById('stat-winpct').innerText = winPercentage;
    document.getElementById('stat-current').innerText = gameStats.currentStreak;
    document.getElementById('stat-max').innerText = gameStats.maxStreak;

    // Dynamically calculate individual row widths based on the maximum frequency value
    const maxDistributionValue = Math.max(...Object.values(gameStats.distribution), 1);

    for (let i = 1; i <= 6; i++) {
        const barElement = document.getElementById(`bar-${i}`);
        const countValue = gameStats.distribution[i];
        barElement.innerText = countValue;
        
        // Scale percentage layout width mathematically
        const scaledPercentage = (countValue / maxDistributionValue) * 100;
        barElement.style.width = countValue > 0 ? `${scaledPercentage}%` : '20px';
        
        // Highlight active winning row container explicitly
        if (i === winningAttempt) {
            barElement.classList.add('winner');
        } else {
            barElement.classList.remove('winner');
        }
    }
    // Set style display status active
    document.getElementById('statsModal').style.display = 'flex';
}

// Modal closing event listeners
document.getElementById('closeStatsBtn').addEventListener('click', () => {
    document.getElementById('statsModal').style.display = 'none';
});
