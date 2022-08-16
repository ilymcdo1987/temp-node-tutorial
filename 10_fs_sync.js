const {readFileSync,writeFileSync}=require('fs');
//console.log('start')
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');
//no Flag means overwrite
writeFileSync('./content/result_sync.txt',`Here is the result: ${first}. ${second}\n\n`)
//flag a means attach
writeFileSync('./content/result_sync.txt',`Here is the result: ${first}. ${second}\n\n`,
{flag: 'a'})
//console.log('done with this task')
//console.log('starting the next one')