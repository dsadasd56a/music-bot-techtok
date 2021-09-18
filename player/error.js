module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - YNie jesteś połączony z kanałem głosowym !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nie jestem wstanie połączyć się z kanałem, sprawdź moje uprawnienia !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} Nie jest dostepna w tym kraju ! Pomijam...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Muzyka startuje... poczekaj i sprubój ponownie !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Coś poszło nie tak ... Error : ${error}`);
    };
};
