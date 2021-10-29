const Discord = require('discord.js');
const distube = require('distube')

module.exports = {
    name: "pause",
    alias:[],
    descripcion: "",

    execute(client, message, args){
        
        if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar ese comando unu")

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send("Debes estar en el mismo canal de voz que yo unu")

        const serverQueue = client.distube.getQueue(message)

        if(!serverQueue) return message.channel.send("No hay canciones en la cola")

        if(serverQueue.pause) return message.channel.send("Ya estaba pausada esta cancion unu")

        client.distube.pause(message)

        message.channel.send("Cancion pausada correctamente uwu")
    }
}