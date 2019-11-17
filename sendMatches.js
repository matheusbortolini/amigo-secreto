const request = require('request')

//const matchArray = require('./matchArrayTeste.json')
const matchArray = require('./matchArrayValendo.json')

async function run(matchArray) {
    await processMatchArray(matchArray)
}

async function processMatchArray(matchArray) {
    for (let match of matchArray) {
        //if (match.fromName == "Lucio") {
            await processMatch(match)
        //}
    }
}

async function processMatch(match) {
    let message = `Valendo agora!
Olá, ${match.fromName}!
    
Seu amigo(a) secreto(a) é *${match.toName}*`

    await sendMessage(match.fromPhone, message).then((response) => {
        console.log("Message sent", match)
    }, (error) => {
        console.log("Error sending message", match, error)
    })
}

function sendMessage(phone, text) {    
    let bodyRequest = {
        phone: phone,
        body: text
    }

    /*let bodyRequest = {
        phone: "554196646823",
        body: text
    }*/
    
    let options = {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
        method: "POST",
        url: `https://eu16.chat-api.com/instance49220/sendMessage?token=hgfhib4vxhnntp0b`
    }
    
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
        if (error) reject(error)
            resolve(body)
        })
    })
}

run(matchArray)