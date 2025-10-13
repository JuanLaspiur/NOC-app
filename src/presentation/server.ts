import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    public static start() {

        CronService.createJob({
           cronTime: '* */9 * * * *',
            onTick:()=>{
               new CheckService().execute('http://localhost:3000/users')
            },
            timeZone :'America/Argentina/Buenos_Aires'},

        )
            
    }
}
