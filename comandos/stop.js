const Discord = require('discord.js');
const distube = require('distube')

module.exports = {
    name: "stop",
    alias:[],
    descripcion: "",

    execute(client, message, args){

      const serverQueue = client.distube.getQueue(message)
        
        if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar ese comando unu")

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send("Debes estar en el mismo canal de voz que yo unu")

        if(!serverQueue) return message.channel.send("No hay canciones en la lista")

        client.distube.stop(message)

        message.channel.send("Cancion detenida correctamente")
    }
}