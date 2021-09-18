module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym z botem !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Bot nie puszcza aktualnie żadnej muzyki !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Proszę podaj prawidłowy filtr do włączenia lub wyłączenia !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ten filtr nie istnieje (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - **Dodaję** filtr do muzyki, proszę czekać... Uwaga: im dłuższa jest muzyka, tym dłużej to potrwa.`);
        else message.channel.send(`${client.emotes.music} - **Wyłączam** filtr na muzykę, proszę czekać... Uwaga: im dłużej muzyka jest odtwarzana, tym dłużej to potrwa.`);
    },
};