// Active Navbar
let links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});


// TEAMS
const teams = [
    { name: "Mumbai Indians", captain: "Hardik Pandya", city: "Mumbai" },
    { name: "Chennai Super Kings", captain: "MS Dhoni", city: "Chennai" },
    { name: "RCB", captain: "Faf du Plessis", city: "Bangalore" },
    { name: "KKR", captain: "Shreyas Iyer", city: "Kolkata" }
];

function displayTeams(data) {
    const container = document.getElementById("teamContainer");
    if (!container) return;
    container.innerHTML = "";
    data.forEach(team => {
        container.innerHTML += `
            <div class="card">
                <h3>${team.name}</h3>
                <p>Captain: ${team.captain}</p>
                <p>City: ${team.city}</p>
            </div>
        `;
    });
}

function searchTeam() {
    let input = document.getElementById("teamSearch").value.toLowerCase();
    let filtered = teams.filter(t => t.name.toLowerCase().includes(input));
    displayTeams(filtered);
}

if (document.getElementById("teamContainer")) {
    displayTeams(teams);
}

// PLAYERS
const players = [
    { name: "Virat Kohli", team: "RCB", role: "Batsman" },
    { name: "Jadeja", team: "CSK", role: "All-Rounder" },
    { name: "Bumrah", team: "MI", role: "Bowler" },
    { name: "Russell", team: "KKR", role: "All-Rounder" }
];

function displayPlayers(data) {
    const container = document.getElementById("playerContainer");
    if (!container) return;
    container.innerHTML = "";
    data.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Team: ${p.team}</p>
                <p>Role: ${p.role}</p>
            </div>
        `;
    });
}

function filterPlayers() {
    let search = document.getElementById("playerSearch").value.toLowerCase();
    let role = document.getElementById("roleFilter").value;
    let filtered = players.filter(p =>
        p.name.toLowerCase().includes(search) &&
        (role === "All" || p.role === role)
    );
    displayPlayers(filtered);
}

if (document.getElementById("playerContainer")) {
    displayPlayers(players);
}

// MATCHES
const matches = [
    { teams: "MI vs CSK", venue: "Mumbai", status: "Upcoming" },
    { teams: "RCB vs KKR", venue: "Bangalore", status: "Completed" }
];
function displayMatches() {
    const container = document.getElementById("matchContainer");
    if (!container) return;
    container.innerHTML = "";
    matches.forEach(m => {
        container.innerHTML += `
            <div class="card ${m.status === "Upcoming" ? "upcoming" : "completed"}">
                <h3>${m.teams}</h3>
                <p>Venue: ${m.venue}</p>
                <p>Status: ${m.status}</p>
            </div>
        `;
    });
}
if (document.getElementById("matchContainer")) {
    displayMatches();
}

// POINTS TABLE
let points = [
    { team: "MI", played: 10, wins: 7, losses: 3, pts: 14 },
    { team: "CSK", played: 10, wins: 6, losses: 4, pts: 12 },
    { team: "RCB", played: 10, wins: 5, losses: 5, pts: 10 },
    { team: "KKR", played: 10, wins: 4, losses: 6, pts: 8 }
];

function displayPoints() {
    const table = document.getElementById("pointsBody");
    if (!table) return;
    table.innerHTML = "";
    points.forEach((p, index) => {
        table.innerHTML += `
            <tr class="${index < 4 ? "top-team" : ""}">
                <td>${p.team}</td>
                <td>${p.played}</td>
                <td>${p.wins}</td>
                <td>${p.losses}</td>
                <td>${p.pts}</td>
            </tr>
        `;
    });
}

function sortPoints() {
    points.sort((a, b) => b.pts - a.pts);
    displayPoints();
}

if (document.getElementById("pointsBody")) {
    displayPoints();
}

// CONTACTS
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter valid email!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}