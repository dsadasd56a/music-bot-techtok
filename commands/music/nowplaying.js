module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym z botem !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nie ma aktualnie żadnej muzyki w playliście !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Bot by Toster#1699' },
                fields: [
                    { name: 'Kanał', value: track.author, inline: true },
                    { name: 'Pusczone przez', value: track.requestedBy.username, inline: true },
                    { name: 'Z playlisty', value: track.fromPlaylist ? 'Tak' : 'Nie', inline: true },

                    { name: 'Wyświetlenia', value: track.views, inline: true },
                    { name: 'Czas', value: track.duration, inline: true },
                    { name: 'Filtry', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Głośność', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Powtarzanie', value: client.player.getQueue(message).repeatMode ? 'Tak' : 'Nie', inline: true },
                    { name: 'Wstrzymanie', value: client.player.getQueue(message).paused ? 'Tak' : 'Nie', inline: true },

                    { name: 'Pasek postępu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};