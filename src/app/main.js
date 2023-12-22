import Bot from "@flowstorm/bot-service";
import { getCookie } from "./cookie.fnc";
import { v4 as uuidv4 } from "uuid";

let deviceId = getCookie("deviceId");
deviceId = "16qt2ccr3uk"; // Bug fix needed, doesn't work when deployed!

console.log(deviceId);

export default function createBot(clientCallback){
    const bot = Bot(
        `https://core.flowstorm.ai`,
        deviceId, // sender
        false, // autostart
        {...clientCallback, getUUID: () => uuidv4(),},
        false, // called from Kotlin
        'mp3' // file type
    );

    return bot;
}

export function getStartAction(){
    return "#intro"
}

export function getAccessToken(){
    return null
}

export function initBot(bot, botKey){
    if (bot){
        bot.init(
            botKey,
            "en",
            true,
            true,
            getStartAction(),
            undefined,
            undefined,
            undefined,
            getAccessToken()
        );
    }
}