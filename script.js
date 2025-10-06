// Edit this invite link to point at your Discord server
const DISCORD_INVITE = "https://discord.gg/YOUR_INVITE_CODE_HERE";

document.addEventListener('DOMContentLoaded', function() {
    // Hook up the main apply buttons
    const applyTop = document.getElementById('applyBtn');
    const applyPrimary = document.getElementById('applyPrimary');
    const discordTop = document.getElementById('discord-top');

    function openInvite() {
        window.open(DISCORD_INVITE, '_blank');
    }

    if (applyTop) applyTop.addEventListener('click', openInvite);
    if (applyPrimary) applyPrimary.addEventListener('click', openInvite);
    if (discordTop) discordTop.addEventListener('click', openInvite);

    // ensure all .links and .logo elements show pointer on hover
    document.querySelectorAll('.links, .logo, .navlinks a').forEach(el => {
        el.style.cursor = 'pointer';
    });
});