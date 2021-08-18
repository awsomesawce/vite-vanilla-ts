import * as fs from 'fs-extra'
import * as os from 'os'
import { log } from 'console'

console.log

const osthing = {
    one: os.platform(),
    two: os.userInfo()
}

const myInfo = {
    myHome: fs.readdirSync(os.homedir())
}

const logType = (obj: any) => {
    return typeof obj
}

log(typeof osthing.one)


