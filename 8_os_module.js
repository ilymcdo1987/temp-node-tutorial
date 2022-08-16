const os=require('os')
//info about current users
const user=os.userInfo()
console.log(user)

//method returns the system up time in seconds
console.log(`The system up time is ${os.uptime()} seconds`)

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)