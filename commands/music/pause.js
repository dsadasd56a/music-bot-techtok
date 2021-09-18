module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym z botem !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nie ma aktualnie żadnej muzyki w playliście !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzyka jest aktualnie zatrzymana !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Piosenka ${client.player.getQueue(message).playing.title} została zatrzymana !`);
    },
};