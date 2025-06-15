// Smooth scroll active link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Discord API - pobranie liczby użytkowników online
const guildId = '1368550324348129391';
const memberCountSpan = document.getElementById('memberCount');

async function fetchDiscordMemberCount() {
  try {
    // Używamy publicznego API discord.bots.gg - nie wymaga tokena
    const response = await fetch(`https://discord.bots.gg/api/v1/servers/${guildId}`);
    if (!response.ok) throw new Error('Błąd pobierania danych');
    const data = await response.json();
    memberCountSpan.textContent = data.stats?.presenceCount || 'Brak danych';
  } catch (error) {
    memberCountSpan.textContent = 'Brak danych';
  }
}

fetchDiscordMemberCount();
