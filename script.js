const token = "MTM3MDEzOTM3MzYzODUyMDg1Mw.GpJOUe.Vr0qcKb7Ashrd_n0vZn9sNYhwiZdKHNv_dDLD8"; // NIE udostępniaj tego publicznie!
const guildId = "1368550324348129391";

fetch(`https://discord.com/api/guilds/${guildId}?with_counts=true`, {
    headers: {
        "Authorization": `Bot ${token}`
    }
})
.then(response => response.json())
.then(data => {
    document.getElementById("memberCount").innerText = data.approximate_member_count;
})
.catch(err => {
    console.error(err);
    document.getElementById("memberCount").innerText = "Błąd";
});
