import { CronService } from "./cron/cron-service";

export class Server {
    public static start() {

        CronService.createJob({
           cronTime: '*/5 * * * * *',
            onTick:()=>{
                let date = new Date()
                console.log('5 seconds '+date)
            },
            timeZone :'America/Argentina/Buenos_Aires'},

        )
            
    }
}
