import bot from './main/tg.js'
import vk from './main/vk.js'
import ID from './DB/config.json' assert { type: "json" }

const { updates } = vk

updates.startPolling ().catch(console.error)

updates.on ("message_new", async (logs) => {
	
	const [info] = vk.api.users ["get"] ({ user_ids: logs ["senderId"] })
	
	const names = {
		f: info ["first_name"],
		l: info ["last_name"]
	}
	
	bot.sendMessage (ID ["UserTG"].telegramid, `⛓️ Новое сообщение!`)
})