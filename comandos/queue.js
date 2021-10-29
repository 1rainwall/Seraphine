const Discord = require('discord.js');

module.exports = {
    name: "queue",
    alias:['q'],
    descripcion: "",

    execute (client, message, args){
        
          if(!message.member.voice.channel) return message.channel.send("Por favor unete a un canal de voz uwu")

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send("Debes estar en el mismo canal de voz que yo unu")

        const queue = client.distube.getQueue(message);

        return message.channel.send(`Lista de reproducción actual:\n${queue.songs
					.map(
						(song, id) =>
							`**${id ? id : 'Sonando:'}**. ${song.name} - \`${
								song.formattedDuration
							}\``,
					)
					.slice(0, 10)
					.join('\n')}`,)
      
    }
}