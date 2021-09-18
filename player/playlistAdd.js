module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} została dodana do playlisty (**${playlist.tracks.length}** ) !`);
};