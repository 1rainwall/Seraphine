## ✨ || Instalacion

Para instalar el paquete zJuqn necesitas:

- Necesitas instalar [**Node.js**](https://nodejs.org/en/download/).

- Necesitas instalar [**discord.js**](https://npmjs.com/package/discord.js).

Luego puede abrir el terminal de su app y escribir:

```
$ npm install zjuqn
```

## 📜 || Tabla de contenidos

### Funciones:


-  [`Passwords()`](https://www.npmjs.com/package/zjuqn#passwordsGen) - Funcion para crear contraseñas con la cantidad de caracteres que elijas

-  [`WelcomeImage()`](https://npmjs.com/package/zjuqn#welcomeImage) - Funcion para crear una imagen con canvas

- [`youtubeChannelInfo()`](https://npmjs.com/package/zjuqn#youtubechannelinfo) - Mira las estadisticas de cualquier canal de YT

-  [`Wikipedia()`](https://npmjs.com/package/zjuqn#wikipedia) - Funcion para buscar preguntas en wikipedia

-  [`npmData()`](https://npmjs.com/package/zjuqn#npmdata) - Funcion para obtener datos de un npm

-  [`boostCard()`](https://npmjs.com/package/zjuqn#boostcard) - Funcion crear una boostCard

-  [`minecraftLogro()`](https://npmjs.com/package/zjuqn#minecraftlogro) - Simula un logro de Minecraft



# || Funciones:

## passwordsGen

Genera una contraseña aleatoria con los caracteres que tu elijas.

**Ejemplo:**

```js
// Definimos el package
const  zjuqn = require('zjuqn')

// Obtiene la funcion de el package
const  passGen = zjuqn.Passwords

// passGen(5) osea genera una contraseña de 5 caracteres
console.log(passGen(5)) 
```

## WelcomeImage

Esta funcion se usa para crear una imagen de bienvenida usando el package [canvas](https://npmjs.com/package/canvas), puedes customizar el color, el subtitulo y el background


La función devuelve un Promise(\<Attachment\>) para almacenar en búfer la imagen y convertirla en un [Attachment](https://discord.js.org/#/docs/main/stable/class/MessageAttachment), así que la funcion debe estar acompañada de un await.

Esta funcion requiere de un token. Puedes obtenerlo dentro del servidor de soporte del NPM. Haciendo [Click Aqui](https://discord.gg/fCbkwngUHz)


```js
await  WelcomeImage()
```

**Parametros requeridos:**
- token
- background
- avatar
- titulo
- color

**Ejemplo de los parametros:**

```js
await  WelcomeImage({
            token: "tu token",
            background: "tu background",
            avatar: "tu avatar",
            title: "El titulo que quieras",
            color: "El color pero sin el #"
})
```

**Ejemplo:**

```js

//Definimos el package
const { WelcomeImage } = require('zjuqn')

//Definimos el background
const bg = "https://cdn.discordapp.com/attachments/881694247747731518/883073688541483038/circulo-brillante-iluminacion-purpura-aislado-sobre-fondo-oscuro_1441-2396.png"

//Definimos el avatar
const av = message.author.displayAvatarURL({ format: 'png'})

//Definimos el subtitulo
const titleWel = "Bienvenido"

//Definimos el color
const colorWel = "ffff"

const data = await new WelcomeImage({
            token: "tu token",
            background: bg,
            avatar: av,
            title: titleWel,
            color: colorWel,
})

//Obtenemos el attachment
const imagen = await data.obtener()

//Enviamos la imagen
message.channel.send({ files : [imagen]})
```

## youtubeChannelInfo

Con esta funcion podemos mirar la estadisticas de cualquier canal de YouTube

```js
//Definimos el package
const { youtubeChannelInfo } = require('zjuqn')
//Definimos discord.js
const Discord = require('discord.js')

/**
 * @param {Discord.Message} message hacemos un parametro de message
 * @param {String[]} args hacemos un parametro de args
 */

//Definimos los argumentos y si no coloca argumentos retornamos
        let canalName = args.join(" ")
        if(!canalName) {
            return message.reply(':x: | Porfavor ingresa el nombre del canal a buscar')
        }

        //Creamos una nueva funcion de youtubeChannelInfo
        const res = new youtubeChannelInfo({
            message: message,//Definimos el message
            color: "BLUE",//Definimos el color del embed
            channelName: canalName//Definimos el canal que buscara
        })

        res.send()//Ejecutamos la funcion send con la constante res que es donde guardamos los datos a buscar
```

## Wikipedia

Con esta funcion podemos buscar cosas en wikipedia en ESPAÑOL LATINOAMERICA

```js
//Definimos el package
const { Wikipedia } = require('zjuqn')

//Definimos los argumentos y si no coloca argumentos retornamos
        let pregunta = args.join(" ")
        if(!pregunta) {
            return message.reply(':x: | Porfavor ingrese lo que quiere buscar. Uso de el comando: **wikipedia <pregunta>**')
        }

        //Creamos una nueva funcion de Wikipedia
        const res = new Wikipedia({
            message: message,//Definimos el message
            color: "RED",//Definimos el color del embed
            query: pregunta//Definimos lo que buscara
        })

        res.fetch()//Ejecutamos la funcion fetch que es la que nos enviara el embed con la informacion
```

## npmData

Con esta funcion puedes buscar datos de un npm

```js
//Definimos el package
const { npmData } = require('zjuqn')
const Discord = require('discord.js')

/**
 * @param {Discord.Message} message//Hacemos el parametro message que es el parametro que nosotros ingresaremos en la constante res
 */ 

//Definimos los argumentos y si no coloca argumentos retornamos
        let npmname = args.join(" ")
        if(!npmname) {
            return message.reply(':x: | Porfavor ingrese el nombre del npm a buscar!')
        }

        //Ingresamos los datos
        const res = new npmData({
            message: message,//Definimos el message
            color: "BLUE",//Definimos el color del embed
            npm: npmname//Definimos lo que buscara
        })

        res.fetch()//Ejecutamos la funcion fetch que es la que nos enviara el embed con la informacion del npm
```

## boostCard

```js
//Definimos el package
const  zjuqn  = require('zjuqn')

//Hacemos la funcion
const card = zjuqn.boostCard

//Definimos una constante con el avatar
const av = message.author.avatarURL({ format: 'png'})


//Genera la imagen
const boostCa = await card(av)

//Envia la imagen

//Definimos discord.js
const { MessageEmbed } = require('discord.js')

//Hacemos un nuevo embed

const embedCard = new MessageEmbed()
.setTitle("BoostCard")
.setImage(boostCa)//Colocamos la boostCard en la imagen
.setFooter("Gracias por el boost")

message.channel.send({embeds: [embedCard]})//Enviamos el embed

```

## minecraftLogro

La función devuelve un Promise(\<Attachment\>) para almacenar en búfer la imagen y convertirla en un [Attachment](https://discord.js.org/#/docs/main/stable/class/MessageAttachment), así que la funcion debe estar acompañada de un await.

```js
const zjuqn = require("zjuqn")

await zjuqn.minecraftLogro(logro)
```

**Parametro:**

- logro

**Ejemplo:**

```js
/**
 * @param {String[]} args
 */ 

//Definimos el package
const zjuqn = require('zjuqn')

//Definimos los argumentos
const logroName = args.join(" ")
if(!logroName) {
    message.reply("Debes ingresar el nombre del logro")
    return;
    //Si no coloca argumentos retornas
}
if(logroName.length > 20) {
    message.reply("El nombre del logro debe tener menos de 20 caracteres")
    return;
    //Hacemos esta condicional para evitar problemas en la consola de parte del npm
}

//Realizamos la funcion
const minecraft = await zjuqn.minecraftLogro(logroName)

//Enviamos el attachment
message.channel.send({ files: [minecraft]})
```

## Img

Hola, esta es una funcion en desarrollo aun, pero ya esta lista, si tienes algun tipo de problema lo puedes decir en el [Discord](https://discord.gg/fCbkwngUHz) de soporte.

La funcion es una class con funciones dentro.

### Ejemplo 1:
```js
const zjuqn = require('zjuqn')//Definimos el package

const img = new zjuqn.Img("Tu token")//Cargamos las funciones, donde dice tu token necesitas un token de la api. Se consigue totalmente gratis en el servidor de soporte
```

### Funciones

- triggered | Esta es una funcion GIF
- gay
- nostonks
- stonks
- lisa
- anuncio

### Ejemplo de la funcion triggered
```js
const zjuqn = require('zjuqn')//Definimos el package

const img = new zjuqn.Img("Tu token")//Cargamos las funciones, donde dice tu token necesitas un token de la api. Se consigue totalmente gratis en el servidor de soporte

const triggered = img.triggered("link de tu avatar")

<message>.channel.send({
    files: [{
        attachment: triggered,
        name: "zjuqn_npm_triggered.gif"
    }]
})
```

### Ejemplo de una funcion normal
```js
const zjuqn = require('zjuqn')//Definimos el package

const img = new zjuqn.Img("Tu token")//Cargamos las funciones, donde dice tu token necesitas un token de la api. Se consigue totalmente gratis en el servidor de soporte

const data = img.<funcion>("link de tu avatar")

<message>.channel.send({
    files: [data]
})
```

### Ejemplo de la funcion lisa
```js
const zjuqn = require('zjuqn')//Definimos el package

const img = new zjuqn.Img("Tu token")//Cargamos las funciones, donde dice tu token necesitas un token de la api. Se consigue totalmente gratis en el servidor de soporte

const data = img.lisa("tu texto")

<message>.channel.send({
    files: [data]
})
```

**Para obtener un token puedes ingresar al Discord de Soporte, es totalmente gratis**

- Es muy importante que en el apartado de client pongas el client de tu bot o como tu lo tengas definido, es necesario para llevar acabo la funcion, si el client es invalido la funcion te dara error

## Links

<a href="https://discord.gg/fCbkwngUHz"><img src="https://discord.com/api/guilds/872190574852210738/widget.png?style=banner2"></img></a>

- [Documentacion](https://github.com/zJuqn/zJuqnNPM-Docs.git)(En desarrollo)

- Obten tu token [click aqui](https://discord.gg/fCbkwngUHz)
