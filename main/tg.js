import TelegramBot from 'node-telegram-bot-api'
import Users from '../DB/config.json' assert { type: "json" }

const UserTG = Users ["UserTG"]

const info = {
    token: UserTG ["bottoken"],
    id: UserTG ["telegramid"]
 }
 
const bot = new TelegramBot (info ["token"], { polling: true })

export default bot
