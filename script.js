const guildId = "1368550324348129391"; // podany przez Ciebie Guild ID

// Pobieranie liczby osób online z Discord Widget API
function fetchMemberCount() {
  fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
    .then(res => {
      if (!res.ok) throw new Error('Błąd sieci');
      return res.json();
    })
    .then(data => {
      document.getElementById("memberCount").innerText = data.presence_count;
    })
    .catch(() => {
      document.getElementById("memberCount").innerText = "offline";
    });
}

// Inicjalizacja
fetchMemberCount();

// Odświeżaj co 60 sekund
setInterval(fetchMemberCount, 60000);

// Obsługa zakładek
const tabs = document.querySelectorAll(".nav-links a");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    const target = tab.getAttribute("data-tab");

    // Aktywuj wybrany link
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Pokaż odpowiednią sekcję, ukryj resztę
    tabContents.forEach(content => {
      content.classList.toggle("active", content.id === target);
    });

    // Jeśli kliknięto rekrutację w sekcji home, przełącz zakładkę też
    if (target === "rekrutacja") {
      // Scroll to top for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Jeśli klikniesz w link z #rekrutacja na stronie, przełącz na tę zakładkę
document.querySelectorAll('a[href="#rekrutacja"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove("active"));
    const recruitTab = document.querySelector('a[data-tab="rekrutacja"]');
    recruitTab.classList.add("active");

    tabContents.forEach(content => {
      content.classList.toggle("active", content.id === "rekrutacja");
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
