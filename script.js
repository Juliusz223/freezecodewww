// Animacja konsolowa na start

const loader = document.getElementById('loader');
const consoleOutput = document.getElementById('consoleOutput');
const navbar = document.getElementById('navbar');

const lines = [
  'Initializing FreezeCode build environment...',
  'Checking dependencies...',
  'Compiling plugins...',
  'Build successful!',
  'Starting server...',
  'Server running on port 25565',
  'Welcome to FreezeCode!'
];

let currentLine = 0;

function typeLine(line, index = 0) {
  if (index < line.length) {
    consoleOutput.textContent += line.charAt(index);
    setTimeout(() => typeLine(line, index + 1), 40);
  } else {
    consoleOutput.textContent += '\n';
    currentLine++;
    if (currentLine < lines.length) {
      setTimeout(() => typeLine(lines[currentLine]), 500);
    } else {
      setTimeout(() => {
        loader.style.display = 'none';
        navbar.classList.remove('hidden');
      }, 700);
    }
  }
}

typeLine(lines[currentLine]);

// Smooth scroll na kliknięcia w navbarze

document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70, // uwzględnia wysokość navbar
      behavior: 'smooth'
    });

    // Zmieniamy aktywną klasę na linku
    document.querySelectorAll('nav a.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});

// Pobieranie liczby online z Discord (proste publiczne API)

const guildId = '1368550324348129391';
const memberCountSpan = document.getElementById('memberCount');

async function fetchDiscordMemberCount() {
  try {
    const res = await fetch(`https://discord.bots.gg/api/v1/servers/${guildId}`);
    if (!res.ok) throw new Error('Błąd pobierania danych Discord');
    const data = await res.json();
    memberCountSpan.textContent = data.stats?.presenceCount || 'Brak danych';
  } catch (e) {
    memberCountSpan.textContent = 'Brak danych';
  }
}

fetchDiscordMemberCount();
