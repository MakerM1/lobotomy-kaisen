import { qouotes } from "./data.js";

function generateRandomLobotomy() {
    let randomNumber = Math.floor(Math.random() * 15)

    return qouotes[randomNumber]
}

qouotes.forEach(() => {
    console.log(generateRandomLobotomy())
})