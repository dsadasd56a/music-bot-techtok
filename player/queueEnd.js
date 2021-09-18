module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka została zatrzymana ponieważ nie ma już więcej utworów na playliście !`);
};