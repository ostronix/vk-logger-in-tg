import { VK } from 'vk-io'
import Users from '../DB/config.json' assert { type: "json" }

const UserVK = Users ["UserVK"]

const info = {
    token: UserVK ["token"],
    id: UserVK ["id"]
 }
 
const vk = new VK (
{
	token: info ["token"],
	apiMode: "parallel",
	apiVersion: "5.135"
})

export default vk
