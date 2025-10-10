import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    public static start() {

        CronService.createJob({
           cronTime: '*/5 * * * * *',
            onTick:()=>{
               new CheckService().execute('https://google.com')
            },
            timeZone :'America/Argentina/Buenos_Aires'},

        )
            
    }
}
