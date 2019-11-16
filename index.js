const membersJSON = require('./members.json')

function run(membersJSON) {
    let matchArray = createMatchArray(membersJSON.length)
    console.log("matchArray", matchArray)

    let fromToArray = createFromToArray(matchArray, membersJSON)
    console.log("fromToArray", fromToArray)
}

function createMatchArray(length) {
    let matchArray = []

    for (let i = 0; i < length; i++) {
        while (true) {
            let randomNumber = getRandomInt(0, length)

            if (!matchArray.includes(randomNumber) && randomNumber !== i) {
                matchArray[i] = randomNumber
                break
            }
        }
    }

    return matchArray
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function createFromToArray(matchArray, membersJSON) {
    let fromToArray = []

    for (let i = 0; i < membersJSON.length; i++) {
        let from = membersJSON.find((member) => {
            return member.id === i
        })

        let to = membersJSON.find((member) => {
            return member.id === matchArray[i]
        })

        let fromToElement = {
            fromName: from.name,
            fromPhone: from.phone,
            toName: to.name
        }

        console.log(`${fromToElement.fromName} (${fromToElement.fromPhone}) pegou ${fromToElement.toName}`)

        fromToArray.push(fromToElement)
    }

    return fromToArray
}

run(membersJSON)