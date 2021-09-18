module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nie ma wyszukiwań na YouTube dla piosenki ${query} !`);
};