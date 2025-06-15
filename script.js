const guildId = "1368550324348129391"; // Twój Discord Server ID

fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("memberCount").innerText = data.presence_count;
  })
  .catch(() => {
    document.getElementById("memberCount").innerText = "Błąd";
  });
