const Discord = require('discord.js');
const Distube = require('distube')

module.exports = {
    name: "play",
    alias:['p'],
    descripcion: "",

    execute(client, message, args){
        
        const cancion = args.join (" ")
        if(!cancion) return message.chnanel.send("Debes escribir una cancion para que busque uwu")

        if(!message.member.voice.channel) return message.channel.send("Por favor unete a un canal de voz uwu")

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send("Debes estar en el mismo canal de voz que yo unu")

        client.distube.play(message, cancion)
    }
}