module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka została zatrzymana ponieważ zostałem rozłączony z kanałem !`);
};